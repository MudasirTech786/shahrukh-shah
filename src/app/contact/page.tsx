import type { Metadata } from "next";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Hero } from "@/components/Hero/Hero";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { FAQ } from "@/components/FAQ/FAQ";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shahrukh Shah for features, campaigns and select personal work — based in New York, available worldwide.",
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contactInfo.mapQuery)}&output=embed`;

const details: { label: string; value: string; href?: string }[] = [
  { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/[^+\d]/g, "")}` },
  { label: "Instagram", value: "@shahrukhshah", href: contactInfo.instagramUrl },
  { label: "Location", value: contactInfo.location },
  { label: "Representation", value: contactInfo.representation },
];

export default function ContactPage() {
  return (
    <>
      <Container>
        <Section className="pb-4">
          <Hero
            eyebrow="Contact"
            title="Let's Work Together"
            intro="Whether it is a feature in prep, a campaign in three weeks, or a roll of film that has been waiting too long — say the word and we will find the light."
            className="px-2.5 sm:px-5 xl:px-6"
          />

          <div className="mt-14 grid gap-14 px-2.5 sm:px-5 lg:grid-cols-2 lg:gap-20 xl:px-6">
            <div>
              <h2 className="text-[11px] font-light uppercase tracking-[0.27em] text-ink/60">
                Direct
              </h2>
              <dl className="mt-6 space-y-6">
                {details.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[10px] font-light uppercase tracking-[0.18em] text-ink/45">
                      {item.label}
                    </dt>
                    <dd className="mt-1">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("mailto:") || item.href.startsWith("tel:") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className="text-base font-light text-ink transition-opacity hover:text-ink/70"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-base font-light text-ink">{item.value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <h2 className="mt-14 text-[11px] font-light uppercase tracking-[0.27em] text-ink/60">
                Studio
              </h2>
              <div className="mt-6 border border-ink/20">
                <iframe
                  src={mapSrc}
                  title="Studio location"
                  loading="lazy"
                  className="h-[280px] w-full border-0 grayscale"
                />
              </div>
            </div>

            <div>
              <h2 className="text-[11px] font-light uppercase tracking-[0.27em] text-ink/60">
                Send a Message
              </h2>
              <div className="mt-6">
                <ContactForm email={contactInfo.email} />
              </div>
            </div>
          </div>
        </Section>
      </Container>

      <Section>
        <Container className="px-2.5 sm:px-5 xl:px-6">
          <h2 className="text-[11px] font-light uppercase tracking-[0.27em] text-ink/60">
            FAQ
          </h2>
          <div className="mt-6 max-w-3xl">
            <FAQ items={contactInfo.faqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
