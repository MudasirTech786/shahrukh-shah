"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Button/Button";
import type { Print } from "@/types";

interface PrintCardProps {
  print: Print;
}

export function PrintCard({ print }: PrintCardProps) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <article className="flex flex-col">
      <div className="relative overflow-hidden bg-mist/50">
        <Image
          src={print.image}
          alt={print.alt}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
          placeholder="blur"
          className="h-auto w-full"
        />
      </div>

      <h2 className="mt-4 font-serif text-xl font-light leading-tight text-ink">{print.title}</h2>
      <p className="mt-1 text-[10px] font-light uppercase tracking-[0.18em] text-ink/50">
        {print.size} · {print.price}
      </p>
      <p className="mt-3 text-sm font-light leading-relaxed text-ink/60">{print.description}</p>

      <Button onClick={handleAdd} variant="primary" className="mt-6 w-full self-start sm:w-auto">
        {added ? "Added to cart" : "Add to Cart"}
      </Button>
    </article>
  );
}
