import { Check } from "lucide-react";
import audiovisualImg from "@/assets/audiovisual.jpg";
import { Reveal } from "./reveal";

const includes = [
  "Planeación del contenido",
  "Jornada de producción",
  "Grabación",
  "Dirección durante la grabación",
  "Edición profesional",
  "Corrección de color",
  "Diseño sonoro y musicalización",
  "Subtítulos",
  "Exportación optimizada para redes sociales",
];

const packs = [
  {
    name: "Lila",
    detail: "6 piezas audiovisuales",
    price: "$590.000",
    description:
      "Ideal para marcas que están dando sus primeros pasos o quieren empezar a comunicar de una forma más profesional y constante. Es el punto de partida para construir una presencia sólida en redes sociales sin perder autenticidad.",
    items: includes,
  },
  {
    name: "Índigo",
    detail: "9 piezas audiovisuales",
    price: "$850.000",
    featured: true,
    description:
      "Pensado para marcas que ya entienden el valor del contenido y buscan mantener una comunicación más frecuente con su audiencia. Un paquete diseñado para generar mayor presencia, cercanía y recordación.",
    items: includes,
  },
  {
    name: "Thyria",
    detail: "9 piezas audiovisuales",
    price: "$1.100.000",
    description:
      "Nuestro paquete más completo. Creado para marcas que buscan una producción audiovisual constante y una imagen fuerte en redes sociales. Ideal para empresas que quieren delegar su contenido y mantener una comunicación profesional durante todo el mes.",
    items: includes,
  },
];

export function Audiovisual() {
  return (
    <section id="audiovisual" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] shadow-lift">
          <img
            src={audiovisualImg}
            alt="Equipo de producción audiovisual"
            loading="lazy"
            width={1600}
            height={912}
            className="h-[clamp(22rem,52vw,34rem)] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-14">
            <h2 className="max-w-lg text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] text-primary-foreground">
              Contenido que vende.
            </h2>
            <p className="mt-3 max-w-md text-lg text-primary-foreground/80">
              Desde la idea hasta la edición final.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packs.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article
                className={
                  p.featured
                    ? "flex h-full flex-col rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-lift transition-transform duration-500 hover:-translate-y-1.5"
                    : "flex h-full flex-col rounded-[2rem] bg-card p-8 shadow-soft transition-transform duration-500 hover:-translate-y-1.5"
                }
              >
                <p
                  className={
                    p.featured
                      ? "text-xs tracking-[0.28em] text-primary-foreground/70 uppercase"
                      : "text-xs tracking-[0.28em] text-muted-foreground uppercase"
                  }
                >
                  Paquete
                </p>
                <h3 className="mt-2 text-2xl">{p.name}</h3>
                <p
                  className={
                    p.featured
                      ? "mt-1 text-sm text-primary-foreground/80"
                      : "mt-1 text-sm text-primary"
                  }
                >
                  {p.detail}
                </p>
                <p
                  className={
                    p.featured
                      ? "mt-4 text-sm leading-relaxed text-primary-foreground/85"
                      : "mt-4 text-sm leading-relaxed text-muted-foreground"
                  }
                >
                  {p.description}
                </p>
                <p
                  className={
                    p.featured
                      ? "mt-7 text-xs tracking-[0.28em] text-primary-foreground/70 uppercase"
                      : "mt-7 text-xs tracking-[0.28em] text-muted-foreground uppercase"
                  }
                >
                  Incluye
                </p>
                <ul className="mt-4 flex-1 space-y-2.5 text-sm">
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
                        className={
                          p.featured ? "text-primary-foreground/90" : "text-muted-foreground"
                        }
                      >
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 font-display text-3xl">
                  <span
                    className={
                      p.featured ? "text-primary-foreground" : "text-primary"
                    }
                  >
                    {p.price}
                  </span>
                </p>
                <a
                  href="#contacto"
                  className={
                    p.featured
                      ? "mt-6 rounded-full bg-primary-foreground px-6 py-3 text-center text-sm text-primary transition-transform duration-300 hover:-translate-y-0.5"
                      : "mt-6 rounded-full border border-border px-6 py-3 text-center text-sm text-foreground transition-colors hover:bg-accent"
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