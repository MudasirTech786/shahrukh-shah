import { Children, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MasonryProps {
  children: ReactNode;
  className?: string;
  columnsClassName?: string;
}

export const DEFAULT_COLUMNS =
  "columns-1 gap-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5";

export function Masonry({ children, className, columnsClassName = DEFAULT_COLUMNS }: MasonryProps) {
  return (
    <div className={cn("w-full px-2.5 sm:px-5 xl:px-6", className)}>
      <div className={cn("w-full", columnsClassName)}>
        {Children.map(children, (child, index) => (
          <div key={index} className="mb-2 break-inside-avoid">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
