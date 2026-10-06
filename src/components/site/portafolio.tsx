import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

const drive = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

const works = [
  { video: drive("11b8lClzH08d4Cf5fP5uUo7kUskAnLVhf"), alt: "Video de proyecto de branding", cat: "Branding", tall: true },
  { video: drive("1aeh5b9Um32kGLb88Hmf9ZLpbEj3xs9Yd"), alt: "Video de identidad de marca", cat: "Branding", tall: true },

  { video: drive("1zgHcw1kE8nDpuznXZN-l_KHhGvzKFBeC"), alt: "Reel 1", cat: "Reels", tall: true },
  { video: drive("1hEWW3SLlh_6uzRbB9dsJBFjL4dReciur"), alt: "Reel 2", cat: "Reels", tall: true },
  { video: drive("15Qzw5IWgXQb5gxtAu8vSsGRJQybhQ_nS"), alt: "Reel 3", cat: "Reels", tall: true },
  { video: drive("1qH8jGRVrmAybjsv6xhy5rSj0fupshcS0"), alt: "Reel 4", cat: "Reels", tall: true },
  { video: drive("1r1Es6Mzn0ZQ3guPbwNVani5gFej-k9p0"), alt: "Reel 5", cat: "Reels", tall: true },
  { video: drive("1kpoV2PWtC_ZhvOidG0sH_dvgPOe7RcqI"), alt: "Reel 6", cat: "Reels", tall: true },
];

const filters = ["Todo", "Branding", "Reels"];


export function Portfolio() {
  const [active, setActive] = useState("Todo");
  const visible = active === "Todo" ? works : works.filter((w) => w.cat === active);

  return (
    <section id="portafolio" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <h2 className="text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.1]">Portafolio</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm transition-colors",
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid auto-rows-[16rem] gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((w, i) => (
          <Reveal key={w.alt} delay={i * 70} className={w.tall ? "row-span-2 h-full" : "h-full"}>
            <figure className="group h-full overflow-hidden rounded-[1.75rem] bg-card shadow-soft">
              <iframe
                src={w.video}
                title={w.alt}
                allow="autoplay; encrypted-media"
                allowFullScreen
                loading="lazy"
                className="h-full w-full border-0"
              />
            </figure>

          </Reveal>
        ))}
      </div>
    </section>
  );
}