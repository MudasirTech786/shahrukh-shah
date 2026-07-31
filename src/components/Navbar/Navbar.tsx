"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavItem } from "@/components/NavItem/NavItem";
import { MobileMenu } from "@/components/MobileMenu/MobileMenu";
import { navigation } from "@/data/navigation";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ececec] bg-white">
      <div className="flex h-[90px] items-center justify-between pl-5 pr-5 sm:pl-8 sm:pr-8 lg:pl-12 lg:pr-12 xl:pl-20 xl:pr-20">
        <Link href="/" className="block" onClick={() => setMenuOpen(false)}>
          <span className="block font-brand text-[28px] leading-none text-[#333333] sm:text-[32px] lg:text-[34px] xl:text-[38px]">
            Shahrukh Shah
          </span>
          <span className="mt-[3px] block text-[11px] font-medium uppercase tracking-[0.18em] text-[#666666]">
            Producer + cinematographer
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center text-[#444444] transition-colors duration-200 hover:text-[#111111] lg:hidden"
        >
          {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
