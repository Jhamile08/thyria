import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

const services = [
  {
    title: "Branding",
    items: ["Logos", "Manual de marca", "Brandboard", "Mockups"],
    cta: "Ver paquetes",
    href: "#branding",
  },
  {
    title: "Contenido audiovisual",
    items: ["Reels", "Grabación", "Edición", "Estrategia"],
    cta: "Ver paquetes",
    href: "#audiovisual",
  },
  {
    title: "Aprende CapCut",
    items: ["Curso", "Presencial", "Personalizado"],
    cta: "Ver curso",
    href: "#capcut",
  },
];

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <h2 className="max-w-xl text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.1]">
          ¿Cómo puedo <span className="text-primary">ayudarte?</span>
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 110}>
            <a
              href={s.href}
              className="group flex h-full flex-col justify-between rounded-[2rem] bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div>
                <h3 className="text-2xl leading-tight text-foreground">{s.title}</h3>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
              <span className="mt-10 inline-flex items-center gap-2 text-sm text-primary">
                {s.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}