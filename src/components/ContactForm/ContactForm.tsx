"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button/Button";

const inputClasses =
  "w-full border border-ink/20 bg-transparent px-4 py-3 text-sm font-light text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none";

interface ContactFormProps {
  email: string;
}

export function ContactForm({ email }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-ink/20 px-6 py-10 text-center">
        <p className="font-serif text-2xl font-light text-ink">Thank you</p>
        <p className="mt-3 text-sm font-light leading-relaxed text-ink/60">
          Your message has been sent. We aim to reply within two working days — or sooner if it is
          urgent. In the meantime, you can always reach {email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-[10px] font-light uppercase tracking-[0.18em] text-ink/50">
            Name
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-[10px] font-light uppercase tracking-[0.18em] text-ink/50">
            Email
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className={inputClasses} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-company" className="mb-2 block text-[10px] font-light uppercase tracking-[0.18em] text-ink/50">
            Company
          </label>
          <input id="contact-company" name="company" type="text" autoComplete="organization" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="contact-subject" className="mb-2 block text-[10px] font-light uppercase tracking-[0.18em] text-ink/50">
            Subject
          </label>
          <input id="contact-subject" name="subject" type="text" required className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-[10px] font-light uppercase tracking-[0.18em] text-ink/50">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          className={`${inputClasses} resize-y`}
        />
      </div>

      <div>
        <Button type="submit" variant="primary">
          Send Message
        </Button>
      </div>
    </form>
  );
}
