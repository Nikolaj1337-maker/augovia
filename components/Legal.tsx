import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-ivory">
      <Navbar />
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-content">
          <h1 className="font-serif text-[2.75rem] italic leading-[1.05] text-ink md:text-6xl">
            {title}
          </h1>
          <div className="mt-12 max-w-2xl space-y-10 text-[16px] leading-relaxed text-ink/75">
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-[20px] font-medium text-ink">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Lines({ lines }: { lines: string[] }) {
  return (
    <p>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}

export function EmailText({ email }: { email: string }) {
  if (email.includes("@") && !email.startsWith("[")) {
    return (
      <a href={`mailto:${email}`} className="text-stone underline underline-offset-4">
        {email}
      </a>
    );
  }
  return <>{email}</>;
}
