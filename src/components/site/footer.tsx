import { Instagram, Mail, Phone } from "lucide-react";
import { Reveal } from "./reveal";

export function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden">
      <div className="gradient-soft grain pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="font-display text-[clamp(3rem,10vw,7rem)] leading-none tracking-[0.14em] text-primary">
            THYRIA
          </p>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            ¿Listos para que tu marca se vea como se siente? Escríbeme y empezamos.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-[1.5rem] bg-card/80 p-6 text-sm shadow-soft backdrop-blur transition-transform duration-300 hover:-translate-y-1"
          >
            <Instagram className="h-5 w-5 shrink-0 text-primary" />
            <span className="min-w-0 truncate">Instagram</span>
          </a>
          <a
            href="https://wa.me/573245216527"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-[1.5rem] bg-card/80 p-6 text-sm shadow-soft backdrop-blur transition-transform duration-300 hover:-translate-y-1"
          >
            <Phone className="h-5 w-5 shrink-0 text-primary" />
            <span className="min-w-0 truncate">324 521 6527</span>
          </a>
          <a
            href="mailto:thyriacreative@gmail.com"
            className="flex items-center gap-3 rounded-[1.5rem] bg-card/80 p-6 text-sm shadow-soft backdrop-blur transition-transform duration-300 hover:-translate-y-1"
          >
            <Mail className="h-5 w-5 shrink-0 text-primary" />
            <span className="min-w-0 truncate">thyriacreative@gmail.com</span>
          </a>
        </div>

        <p className="mt-16 text-xs text-muted-foreground">©2026 THYRIA · Leidys</p>
      </div>
    </footer>
  );
}