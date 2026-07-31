import type { Metadata } from "next";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Hero } from "@/components/Hero/Hero";
import { PrintCard } from "@/components/PrintCard/PrintCard";
import { prints } from "@/data/prints";

export const metadata: Metadata = {
  title: "Prints",
  description:
    "Fine-art photographic prints by Shahrukh Shah — hand-signed, numbered editions on cotton rag, shipped worldwide.",
};

export default function PrintsPage() {
  return (
    <Container>
      <Section>
        <Hero
          eyebrow="Prints"
          title="Prints"
          intro="Selected photographs as fine-art pigment prints — hand-signed and numbered, printed on 310gsm cotton rag, mounted and ready to hang."
          className="px-2.5 sm:px-5 xl:px-6"
        />

        <div className="mt-14 grid gap-x-6 gap-y-14 px-2.5 sm:mt-16 sm:grid-cols-2 sm:px-5 lg:grid-cols-3 xl:px-6">
          {prints.map((print) => (
            <PrintCard key={print.id} print={print} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
