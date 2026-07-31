"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { navigation } from "@/data/navigation";
import type { NavigationItem } from "@/types";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.nav
          id="mobile-menu"
          aria-label="Mobile"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden border-t border-[#ececec] bg-white lg:hidden"
        >
          <ul className="px-5 py-2">
            {navigation.map((item) => (
              <li key={item.label}>
                <MobileRow item={item} onClose={onClose} />
              </li>
            ))}
          </ul>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}

function MobileRow({ item, onClose }: { item: NavigationItem; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = (item.children?.length ?? 0) > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href ?? "#"}
        onClick={onClose}
        className="block py-3 text-sm font-semibold uppercase tracking-[0.107em] text-[#444444] transition-colors duration-200 hover:text-[#111111]"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={`mobile-${item.label.toLowerCase()}`}
        onClick={() => setExpanded((value) => !value)}
        className="flex w-full items-center justify-between py-3 text-sm font-semibold uppercase tracking-[0.107em] text-[#444444] transition-colors duration-200 hover:text-[#111111]"
      >
        {item.label}
        <ChevronDown
          size={14}
          strokeWidth={2}
          className={cn("transition-transform duration-200", expanded && "rotate-180")}
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.ul
            id={`mobile-${item.label.toLowerCase()}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            {item.children?.map((child) => (
              <li key={child.href ?? child.label}>
                <Link
                  href={child.href ?? "#"}
                  onClick={onClose}
                  className="block py-2.5 pl-4 text-sm font-medium text-[#444444] transition-colors duration-200 hover:text-[#111111]"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </>
  );
}
