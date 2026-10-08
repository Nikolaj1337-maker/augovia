import Link from "next/link";
import { hasLinkedIn, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-shadow px-6 py-14 text-ivory md:px-10">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-[15px] font-medium tracking-[0.12em]"
            >
              AUGOVIA
            </Link>
            <p className="mt-2 max-w-xs text-[14px] text-ivory/60">
              Strategic advisory for Pharma, Biotech &amp; Healthcare.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-ivory/70">
            {hasLinkedIn && (
              <li>
                <a href={site.linkedinUrl} className="hover:text-ivory">
                  LinkedIn
                </a>
              </li>
            )}
            <li>
              <Link href="/#contact" className="hover:text-ivory">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/imprint" className="hover:text-ivory">
                Imprint
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-ivory">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-[13px] text-ivory/40">
          © {year} Augovia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
