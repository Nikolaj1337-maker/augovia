"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed right-5 top-5 z-50 transition-opacity duration-300 md:right-8 md:top-8 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <a
        href="#contact"
        className="rounded-pill bg-ink px-6 py-3 text-[15px] text-ivory shadow-lg shadow-ink/10 transition-colors hover:bg-shadow"
      >
        Let&rsquo;s talk
      </a>
    </div>
  );
}
