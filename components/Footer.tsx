export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-ivory px-6 py-14 md:px-10">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[15px] font-medium tracking-[0.12em] text-ink">
              AUGOVIA
            </p>
            <p className="mt-2 max-w-xs text-[14px] text-ink/60">
              Strategic advisory for Pharma, Biotech &amp; Healthcare.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-ink/70">
            <li>
              <a href="[LINKEDIN URL]" className="hover:text-ink">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-ink">
                Contact
              </a>
            </li>
            <li>
              <a href="/imprint" className="hover:text-ink">
                Imprint
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-ink">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-[13px] text-ink/40">
          © {year} Augovia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
