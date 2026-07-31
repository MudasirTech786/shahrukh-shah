"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/site";

function isActivePath(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-mist bg-paper/95 backdrop-blur">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="relative flex h-16 items-center justify-between md:h-24 md:flex-col md:justify-center md:gap-5">
          <Link
            href="/"
            className="font-serif text-[22px] font-medium leading-none tracking-wide text-ink transition-opacity hover:opacity-60 md:text-[26px]"
            onClick={() => setMenuOpen(false)}
          >
            {siteConfig.name}
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-9">
              {siteConfig.nav.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "text-[11px] font-light uppercase tracking-[0.18em] transition-opacity duration-200 hover:opacity-50",
                        active ? "opacity-100" : "opacity-60",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center text-ink transition-opacity hover:opacity-60 md:hidden"
          >
            {menuOpen ? <X size={18} strokeWidth={1.25} /> : <Menu size={18} strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-mist md:hidden"
          >
            <ul className="mx-auto w-full max-w-[1600px] px-5 py-4 sm:px-8">
              {siteConfig.nav.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "block py-3 text-xs font-light uppercase tracking-[0.18em] transition-opacity hover:opacity-60",
                        active ? "opacity-100" : "opacity-70",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
