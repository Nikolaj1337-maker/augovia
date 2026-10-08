"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      topic: (form.elements.namedItem("topic") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
          <div>
            <h2 className="font-serif text-[2.75rem] italic leading-[1.05] text-ink md:text-6xl">
              Let&rsquo;s talk.
            </h2>
            <p className="mt-6 max-w-sm text-[18px] leading-relaxed text-ink/70 md:text-[20px]">
              If you are facing a strategic challenge in Pharma or
              Biotech, let&rsquo;s talk.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" required />
              <Field id="company" label="Company" />
            </div>
            <Field id="email" label="Email" type="email" required />
            <Field id="topic" label="What can we help with?" />
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[14px] text-ink/70"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-2xl border border-ink/20 bg-transparent px-4 py-3 text-[15px] text-ink placeholder:text-ink/30 focus:border-ink/50"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-pill bg-ink px-7 py-3.5 text-[15px] text-ivory transition-colors hover:bg-shadow disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Start a conversation"}
            </button>

            {status === "sent" && (
              <p className="text-[14px] text-stone">
                Thank you. We will be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-[14px] text-foliage">
                Something went wrong. Please try again in a moment.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[14px] text-ink/70">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-pill border border-ink/20 bg-transparent px-4 py-3 text-[15px] text-ink placeholder:text-ink/30 focus:border-ink/50"
      />
    </div>
  );
}
