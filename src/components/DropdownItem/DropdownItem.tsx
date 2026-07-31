"use client";

import Link from "next/link";
import type { NavigationItem } from "@/types";

interface DropdownItemProps {
  item: NavigationItem;
  onNavigate: () => void;
}

export function DropdownItem({ item, onNavigate }: DropdownItemProps) {
  return (
    <Link
      href={item.href ?? "#"}
      onClick={onNavigate}
      className="block px-5 py-3 text-sm font-medium text-[#444444] transition-colors duration-200 hover:bg-[#f7f7f7] hover:text-[#111111]"
    >
      {item.label}
    </Link>
  );
}
