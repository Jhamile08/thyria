import aboutAsset from "@/assets/leidys-about.jpg";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <div className="grid gap-14 md:grid-cols-2 md:items-center">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Sobre mí</p>
          <h2 className="mt-6 text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.08]">
            Hola, soy <span className="text-primary">Leidys</span>
          </h2>
          <p className="mt-6 text-xl leading-snug text-foreground/80">
            Diseñadora gráfica, creadora audiovisual y fundadora de THYRIA.
          </p>
          <div className="mt-7 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Llevo 3 años trabajando en diseño gráfico, creando identidades y piezas visuales para
              marcas que quieren verse profesionales sin perder su esencia.
            </p>
            <p>
              Y eso es justamente lo que vas a encontrar conmigo: una mirada cercana, creativa y muy
              pendiente de que tu marca se sienta realmente tuya.
            </p>
            <p>
              Porque para mí, diseñar no es solo hacer algo bonito. Es encontrar la forma de conectar
              lo que eres con lo que quieres mostrar.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120} className="relative">
          <div className="gradient-soft absolute -inset-6 -z-10 rounded-[3rem] blur-2xl" />
          <img
            src={aboutAsset}
            alt="Leidys trabajando en su estudio de diseño"
            loading="lazy"
            width={786}
            height={883}
            className="w-full rounded-[2.5rem] object-cover shadow-lift"
          />
        </Reveal>
      </div>
    </section>
  );
}