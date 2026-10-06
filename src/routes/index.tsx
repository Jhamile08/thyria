import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Branding } from "@/components/site/branding";
import { Audiovisual } from "@/components/site/audiovisual";
import { Social } from "@/components/site/social";
import { CapCut } from "@/components/site/capcut";
import { Process } from "@/components/site/process";
import { Portfolio } from "@/components/site/portafolio";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";

const title = "THYRIA — Leidys | Diseño de marca y contenido audiovisual";
const description =
  "Diseño de identidad de marca, producción audiovisual, gestión de redes y curso de CapCut. Transformo ideas en marcas y contenido que conectan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Branding />
      <Audiovisual />
      <Social />
      <CapCut />
      <Process />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
