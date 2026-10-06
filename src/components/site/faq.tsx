import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Reveal } from "./reveal";

const faqs = [
  {
    q: "¿Cuánto tarda el proceso?",
    a: "Depende del paquete: el logo básico se entrega en 15 días hábiles, logo + manual en 18 días y los paquetes de identidad completa entre 22 y 30 días hábiles.",
  },
  {
    q: "¿Cómo se realiza el pago?",
    a: "Se aparta el cupo con el 50% al iniciar y el 50% restante antes de la entrega final de los archivos.",
  },
  {
    q: "¿Cuántos cambios incluye?",
    a: "Cada paquete incluye dos rondas de ajustes sobre la propuesta elegida. Cambios adicionales se cotizan aparte.",
  },
  {
    q: "¿Trabajas online?",
    a: "Sí. Todo el proceso se puede hacer por videollamada y WhatsApp. El curso de CapCut también tiene modalidad presencial.",
  },
  {
    q: "¿Qué incluye la entrega?",
    a: "Archivos vectorizados en AI y PDF, versiones en JPG y PNG, logo en color principal y sus negativos, más los mockups o manual según el paquete.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <Reveal>
        <h2 className="text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.1]">Preguntas frecuentes</h2>
      </Reveal>
      <Reveal delay={100} className="mt-10">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`i${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}