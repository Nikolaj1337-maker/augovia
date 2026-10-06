import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | Augovia",
};

// NOTE TO EDITOR: this is placeholder privacy copy. It must be reviewed
// against applicable data protection law (e.g. GDPR) before launch.
export default function PrivacyPage() {
  return (
    <main className="bg-ivory">
      <Navbar />
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-content">
          <h1 className="font-serif text-[2.75rem] italic leading-[1.05] text-ink md:text-6xl">
            Privacy
          </h1>

          <div className="mt-10 max-w-xl space-y-6 text-[15px] leading-relaxed text-ink/70">
            <p>
              This page describes, in outline, how Augovia handles
              information submitted through this website. It is provided as
              a placeholder and must be reviewed by qualified counsel before
              publication.
            </p>
            <p>
              <strong className="text-ink">Contact form.</strong> Information
              submitted through the contact form (name, company, email
              address, topic and message) is used solely to respond to your
              inquiry and is not shared with third parties beyond the email
              provider used to deliver the message.
            </p>
            <p>
              <strong className="text-ink">Data controller.</strong>{" "}
              [LEGAL COMPANY NAME], [ADDRESS].
            </p>
            <p>
              <strong className="text-ink">Contact.</strong> For questions
              about this policy or your data, contact{" "}
              <a
                href="mailto:[EMAIL]"
                className="text-stone underline underline-offset-4"
              >
                [EMAIL]
              </a>
              .
            </p>
            <p className="text-[13px] text-ink/40">
              This page contains placeholder content and must be reviewed
              and completed by qualified counsel before the site is
              published.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
