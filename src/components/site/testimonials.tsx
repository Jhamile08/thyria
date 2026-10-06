import { Star } from "lucide-react";
import { Reveal } from "./reveal";

const quotes = [
  { q: "Mi marca cambió completamente.", a: "Valentina R." },
  { q: "Ahora mis videos se ven profesionales.", a: "Andrés M." },
  { q: "Excelente acompañamiento.", a: "Carolina P." },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-6 md:grid-cols-3">
        {quotes.map((t, i) => (
          <Reveal key={t.a} delay={i * 100}>
            <figure className="h-full rounded-[2rem] bg-card p-8 shadow-soft">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-2xl leading-snug">“{t.q}”</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">{t.a}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}