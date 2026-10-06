export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-0 md:pt-40">
      <div className="gradient-hero grain pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="pb-20 md:pb-32">
          <p className="mb-6 inline-flex rounded-full bg-card/70 px-4 py-2 text-xs tracking-[0.24em] text-muted-foreground uppercase backdrop-blur">
            Fundadora de Thyria
          </p>
          <h1 className="text-[clamp(2.6rem,6.2vw,4.6rem)] leading-[1.02] text-foreground">
            Creadora audiovisual
            <span className="block text-primary">y diseñadora de marca</span>
          </h1>
          <p className="mx-auto mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
            “Transformo ideas en marcas y contenido que conectan.”
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#contacto"
              className="rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
            >
              Trabajemos juntos
            </a>
            <a
              href="#portafolio"
              className="rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              Ver portafolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}