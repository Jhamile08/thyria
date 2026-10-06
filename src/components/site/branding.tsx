import { Check } from "lucide-react";
import brandingImg from "@/assets/branding.jpg";
import { Reveal } from "./reveal";

const packs = [
  {
    name: "Malva",
    price: "$450.000",
    note: "Logo básico · 15 días hábiles",
    items: [
      "Brief y videollamada inicial",
      "Diseño de logo (1 propuesta)",
      "1 variación del logo",
      "Logo vectorizado — AI, PDF, JPG y PNG",
      "Color principal y negativos",
    ],
  },
  {
    name: "Lavanda",
    price: "$780.000",
    note: "Logo + manual · 18 días hábiles",
    featured: true,
    items: [
      "Brief y videollamada inicial",
      "Diseño de logo (2 propuestas)",
      "1 variación del logo",
      "Logo vectorizado — AI, PDF, JPG y PNG",
      "3 mockups genéricos",
      "Manual de logo básico",
    ],
  },
  {
    name: "Amatista",
    price: "$1.150.000",
    note: "Identidad visual · 22 días hábiles",
    items: [
      "Brief y videollamada inicial",
      "Diseño de logo (3 propuestas)",
      "2 variaciones del logo",
      "Paleta de color y tipografías",
      "Brandboard e íconos de marca",
      "5 mockups personalizados",
    ],
  },
  {
    name: "Orquídea",
    price: "$1.650.000",
    note: "Marca completa · 30 días hábiles",
    items: [
      "Todo lo del paquete Amatista",
      "Manual de marca completo",
      "Papelería y plantillas para redes",
      "Aplicaciones y mockups premium",
      "Acompañamiento post entrega",
    ],
  },
];

export function Branding() {
  return (
    <section id="branding" className="relative overflow-hidden py-24 md:py-32">
      <div className="gradient-soft pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-2/3 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Branding</p>
          <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.1]">Identidad de marca</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            No diseñamos solo un logo. Creamos una identidad que represente la esencia de tu marca.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <img
            src={brandingImg}
            alt="Piezas de identidad de marca diseñadas por Thyria"
            loading="lazy"
            width={1408}
            height={1008}
            className="h-[clamp(18rem,42vw,32rem)] w-full rounded-[2.5rem] object-cover shadow-lift"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packs.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article
                className={
                  p.featured
                    ? "flex h-full flex-col rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-lift"
                    : "flex h-full flex-col rounded-[2rem] bg-card p-8 shadow-soft"
                }
              >
                <h3
                  className={
                    p.featured ? "text-2xl text-primary-foreground" : "text-2xl text-foreground"
                  }
                >
                  {p.name}
                </h3>
                <p className="mt-3 font-display text-3xl">{p.price}</p>
                <p
                  className={
                    p.featured
                      ? "mt-2 text-xs text-primary-foreground/70"
                      : "mt-2 text-xs text-muted-foreground"
                  }
                >
                  {p.note}
                </p>
                <ul className="mt-7 flex-1 space-y-3 text-sm">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <Check
                        className={
                          p.featured
                            ? "mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/80"
                            : "mt-0.5 h-4 w-4 shrink-0 text-primary"
                        }
                      />
                      <span
                        className={p.featured ? "text-primary-foreground/90" : "text-muted-foreground"}
                      >
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={
                    p.featured
                      ? "mt-8 rounded-full bg-primary-foreground px-6 py-3 text-center text-sm text-primary transition-transform duration-300 hover:-translate-y-0.5"
                      : "mt-8 rounded-full border border-border px-6 py-3 text-center text-sm text-foreground transition-colors hover:bg-accent"
                  }
                >
                  Elegir
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}