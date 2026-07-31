import { Plus } from "lucide-react";
import type { FAQItem } from "@/types";

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <div className="border-t border-mist">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-mist">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="font-serif text-lg font-light text-ink">{item.question}</span>
            <Plus
              size={18}
              strokeWidth={1.25}
              className="shrink-0 text-ink/50 transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-2xl pb-6 text-sm font-light leading-relaxed text-ink/60">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
