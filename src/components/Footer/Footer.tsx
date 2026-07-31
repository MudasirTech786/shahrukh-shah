import { Container } from "@/components/Container/Container";
import { siteConfig } from "@/data/site";
import { currentYear } from "@/lib/format";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-mist">
      <Container className="flex flex-col items-center gap-5 py-10 sm:flex-row sm:justify-between sm:gap-6 sm:py-12">
        <p className="text-center text-[11px] font-light uppercase tracking-[0.18em] text-ink/45 sm:text-left">
          ©{currentYear()} {siteConfig.name} · {siteConfig.tagline}
        </p>
        <ul className="flex items-center gap-7">
          {siteConfig.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-[11px] font-light uppercase tracking-[0.18em] text-ink/45 transition-opacity hover:text-ink"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
