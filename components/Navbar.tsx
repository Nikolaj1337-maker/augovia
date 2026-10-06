export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="text-lg font-medium tracking-[0.14em] text-ink"
        >
          AUGOVIA
        </a>

        <a
          href="#contact"
          className="rounded-pill bg-ink px-5 py-2.5 text-[15px] text-ivory transition-colors hover:bg-shadow"
        >
          Let&rsquo;s talk
        </a>
      </div>
    </header>
  );
}
