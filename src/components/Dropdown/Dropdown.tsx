"use client";

import { motion } from "framer-motion";
import { DropdownItem } from "@/components/DropdownItem/DropdownItem";
import type { NavigationItem } from "@/types";

interface DropdownProps {
  id: string;
  items?: NavigationItem[];
  onNavigate: () => void;
}

export function Dropdown({ id, items = [], onNavigate }: DropdownProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute left-0 top-full z-10 min-w-[220px] border border-[#ececec] bg-white py-2.5"
    >
      <ul>
        {items.map((item) => (
          <li key={item.href ?? item.label}>
            <DropdownItem item={item} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
