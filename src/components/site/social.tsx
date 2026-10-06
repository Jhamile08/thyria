import { Check, X } from "lucide-react";
import { Reveal } from "./reveal";

const includes = [
  "Gestión de Instagram, Facebook y TikTok",
  "Programación y publicación del contenido",
  "Parrilla estratégica mensual",
  "Adaptación de copys para cada plataforma",
  "Optimización de títulos, hashtags y descripciones",
  "Organización del calendario de publicaciones",
  "Seguimiento básico al rendimiento del contenido",
  "Respuesta de mensajes",
  "Atención al cliente",
  "Gestión de comentarios",
];

const excludes = [
  "Campañas publicitarias",
  "Diseño gráfico adicional",
  "Creación de contenido adicional al contratado",
];

export function Social() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="gradient-soft grain relative overflow-hidden rounded-[2.5rem] p-8 md:p-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Redes sociales
            </p>
            <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.08]">
              Gestión estratégica de contenido
            </h2>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Instagram", "Facebook", "TikTok"].map((n) => (
                <span
                  key={n}
                  className="rounded-full bg-card/80 px-4 py-2 text-xs tracking-wide text-muted-foreground backdrop-blur"
                >
                  {n}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Gestión integral de tus redes para mantener una comunicación
              profesional y constante con tu audiencia.
            </p>
          </div>

          <div className="rounded-[2rem] bg-card p-8 shadow-soft">
            <p className="text-xs tracking-[0.28em] text-primary uppercase">
              Incluye
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {includes.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {it}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs tracking-[0.28em] text-muted-foreground uppercase">
              No incluye
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {excludes.map((it) => (
                <li
                  key={it}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <X className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                  {it}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
                  Inversión
                </p>
                <p className="mt-1 font-display text-4xl text-primary">
                  $250.000
                </p>
              </div>
              <a
                href="#contacto"
                className="inline-flex rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Solicitar información
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
