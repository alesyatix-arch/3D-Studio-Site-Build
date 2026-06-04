import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { CTAButton, Eyebrow } from "@/components/site/primitives";
import { InlineCTA } from "@/components/site/InlineCTA";
import { ContactBar } from "@/components/site/ContactBar";
import { Reveal } from "@/components/site/Reveal";
import { useInView } from "@/hooks/use-in-view";
import { useCountUp } from "@/hooks/use-count-up";
import projectArchitecture from "@/assets/projects/realized/project-1-cover.png.asset.json";
import portfolioManufacturers from "@/assets/about/bathroom-tiles.png.asset.json";
import portfolioInteriors from "@/assets/designers/portfolio/portfolio-warm-living.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О студии — 3D-KULAGIN" },
      { name: "description", content: "Команда 3D-визуализаторов, моделлеров и менеджеров. Работаем с 2013 года." },
    ],
  }),
  component: AboutPage,
});

function StatNumber({ value, suffix = "+", label }: { value: number; suffix?: string; label: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const n = useCountUp(value, inView);
  return (
    <div ref={ref} className="bg-background p-10 relative accent-bar group">
      <div className="font-display font-semibold text-6xl md:text-7xl tracking-tighter tabular-nums">
        {n}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function AboutPage() {
  const mosaic = [
    { src: projectArchitecture.url, alt: "Архитектурная визуализация — ЖК" },
    { src: portfolioInteriors.url, alt: "Интерьерная визуализация — гостиная" },
    { src: portfolioManufacturers.url, alt: "Визуализация для производителей — ванная комната" },
  ];
  return (
    <SiteLayout>
      <section className="relative border-b hairline overflow-hidden">
        <img src={projectArchitecture.url} alt="" loading="eager" decoding="async" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="relative container-site pt-16 md:pt-24 pb-16">
          <Eyebrow>About</Eyebrow>
          <h1 className="display-2 mt-6 max-w-3xl headline-mark">
            <span>Команда, которой можно доверить B2B-задачу</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Студия 3D-визуализации с 2013 года. Работаем с девелоперами,
            производителями и дизайнерами. Ведём проекты по этапам,
            фиксируем сроки и стоимость до старта.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid md:grid-cols-3 gap-px bg-hairline border hairline">
          <StatNumber value={12} label="лет на рынке" />
          <StatNumber value={5000} label="выполненных проектов" />
          <StatNumber value={500} label="клиентов в B2B" />
        </div>

        <div className="container-site mt-16 grid grid-cols-2 md:grid-cols-3 gap-3">
          {mosaic.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="relative overflow-hidden border hairline group aspect-[4/3]">
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="container-site mt-16">
          <CTAButton to="/contacts">Обсудить проект</CTAButton>
        </div>
      </section>

      <InlineCTA
        variant="warm"
        title="Хотите посмотреть подборку под вашу задачу?"
        subtitle="Пришлём кейсы, которые ближе всего к вашему типу проекта."
        buttonLabel="Получить подборку"
      />

      <ContactBar />

    </SiteLayout>
  );
}
