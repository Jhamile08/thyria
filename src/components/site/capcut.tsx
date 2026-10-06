import capcutImg from "@/assets/capcut.png";
import { Reveal } from "./reveal";

const modules = [
  {
    n: "Módulo 1",
    t: "Conociendo CapCut",
    d: "Aprenderás a familiarizarte con la aplicación desde cero.",
  },
  {
    n: "Módulo 2",
    t: "Cortes y ritmo del video",
    d: "Descubrirás cómo hacer que un video se sienta dinámico y profesional.",
  },
  {
    n: "Módulo 3",
    t: "Texto, subtítulos y música",
    d: "Aquí el contenido empieza a cobrar vida.",
  },
  {
    n: "Módulo 4",
    t: "Color, exportación y proyecto final",
    d: "Terminaremos editando un video real de principio a fin.",
  },
];

const COURSE_PDF_URL =
  "https://drive.google.com/file/d/1bkjZJfEhNbxZ9rvGdqY9vGezuSAKm8Q2/view?usp=sharing";

export function CapCut() {
  return (
    <section id="capcut" className="relative overflow-hidden py-24 md:py-32">
      <div className="gradient-hero pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Curso</p>
          <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.06]">
            Aprende CapCut <span className="text-primary">desde cero.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            No necesitas experiencia. Solo un celular y ganas de aprender.
          </p>
          <a
            href={COURSE_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
          >
            Conocer el curso
          </a>
        </Reveal>
        <Reveal delay={120} className="relative">
          <img
            src={capcutImg}
            alt="Celular mostrando la edición de un video en CapCut"
            loading="lazy"
            width={1008}
            height={1200}
            className="float-slow mx-auto w-full max-w-sm drop-shadow-2xl"
          />
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((m, i) => (
          <Reveal key={m.n} delay={i * 90}>
            <div className="flex h-full min-h-[15rem] flex-col rounded-[1.75rem] bg-card p-7 shadow-soft">
              <p className="text-xs tracking-[0.2em] text-primary uppercase">{m.n}</p>
              <p className="mt-3 font-display text-xl leading-snug">{m.t}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}