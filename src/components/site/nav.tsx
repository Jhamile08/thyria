import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-5 py-3 transition-all duration-500 md:px-7",
          scrolled
            ? "bg-card/80 shadow-soft backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <a href="#inicio" className="min-w-0 truncate font-display text-xl tracking-[0.28em] text-primary">
          THYRIA
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-card/95 p-4 shadow-soft backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}