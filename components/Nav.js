import { useState } from "react";
import { scrollToSection } from "@/hooks/useLenis";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Skills", "skills"],
  ["Portfolio", "work"],
  ["Clients", "clients"],
  ["Certification", "certifications"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header className="fixed left-1/2 top-4 z-[70] w-[calc(100%-2rem)] max-w-[1320px] -translate-x-1/2">
        <div className="main-nav flex h-16 items-center justify-between px-4 pl-5 shadow-[0_18px_55px_rgba(20,20,20,.10)] sm:px-5">
          <button
            onClick={() => go("home")}
            className="flex items-center gap-3 text-left"
            aria-label="Go home"
          >
            <span className="nav-mark">N</span>
            <span className="hidden text-[11px] font-black uppercase tracking-[.18em] sm:block">
              Nibir Setu
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map(([label, id]) => (
              <button key={id} onClick={() => go(id)} className="nav-link">
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go("contact")}
              className="nav-cta hidden sm:inline-flex"
            >
              Hire me <FiArrowUpRight />
            </button>
            <button
              className="nav-menu-btn lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu fixed inset-0 z-[90] bg-ink text-cream lg:hidden ${open ? "is-open" : ""}`}
      >
        <div className="flex items-center justify-between px-5 pt-5">
          <span className="text-xs font-black uppercase tracking-[.18em]">
            Nibir Setu
          </span>
          <button
            onClick={() => setOpen(false)}
            className="nav-menu-btn dark-menu"
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col px-6 pt-16">
          {links.map(([label, id], i) => (
            <button key={id} onClick={() => go(id)} className="mobile-link">
              <span>{String(i + 1).padStart(2, "0")}</span>
              {label}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            className="mt-8 inline-flex w-fit items-center gap-2 bg-signal px-5 py-4 text-xs font-black uppercase tracking-[.13em] text-ink"
          >
            Start a project <FiArrowUpRight />
          </button>
        </nav>
      </div>
    </>
  );
}
