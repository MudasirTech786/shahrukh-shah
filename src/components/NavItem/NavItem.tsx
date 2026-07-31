"use client";

import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import { cn } from "@/lib/cn";
import type { NavigationItem } from "@/types";

interface NavItemProps {
  item: NavigationItem;
}

function isActivePath(pathname: string, href?: string): boolean {
  if (!href) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function NavItem({ item }: NavItemProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const hasChildren = (item.children?.length ?? 0) > 0;
  const active =
    isActivePath(pathname, item.href) || item.children?.some((child) => isActivePath(pathname, child.href));

  const linkClasses = cn(
    "text-sm font-semibold uppercase tracking-[0.107em] transition-colors duration-200",
    active ? "text-[#111111]" : "text-[#444444] hover:text-[#111111]",
  );

  if (!hasChildren) {
    return (
      <li>
        <Link href={item.href ?? "#"} className={linkClasses}>
          {item.label}
        </Link>
      </li>
    );
  }

  const close = () => setOpen(false);

  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === "Escape") close();
  };

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) close();
      }}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={`nav-${item.label.toLowerCase()}`}
        onClick={() => setOpen((value) => !value)}
        className={cn(linkClasses, "flex items-center gap-1.5")}
      >
        {item.label}
        <ChevronDown
          size={12}
          strokeWidth={2}
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <Dropdown id={`nav-${item.label.toLowerCase()}`} items={item.children} onNavigate={close} />
        ) : null}
      </AnimatePresence>
    </li>
  );
}
