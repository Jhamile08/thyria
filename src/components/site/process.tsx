import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import { Reveal } from "./reveal";

const steps = [
  { title: "Descubrimos", img: w1 },
  { title: "Planeamos", img: w2 },
  { title: "Diseñamos", img: w3 },
  { title: "Revisamos", img: w4 },
  { title: "Entregamos", img: w5 },
];

export function Process() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <h2 className="text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.1]">Proceso de trabajo</h2>
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 90} className="h-full">
            <div className="group relative h-full min-h-[19rem] overflow-hidden rounded-[1.75rem] border border-border shadow-soft">
              <img
                src={s.img}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/25 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="font-display text-3xl text-background/70">0{i + 1}</span>
                <p className="mt-2 text-base text-background">{s.title}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}