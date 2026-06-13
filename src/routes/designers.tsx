import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { siteUrl } from "@/lib/site-url";
import {
  CTAButton,
  Eyebrow,
  
  PricingTable,
  ProcessTimeline,
  SectionHeader,
} from "@/components/site/primitives";
import { InlineCTA } from "@/components/site/InlineCTA";
import { ContactBar } from "@/components/site/ContactBar";
import heroClassic from "@/assets/designers/hero/hero-classic.png.asset.json";
import heroKids from "@/assets/designers/hero/hero-kids.png.asset.json";
import heroBar from "@/assets/designers/hero/hero-bar.png.asset.json";
import portfolioBar from "@/assets/designers/portfolio/portfolio-bar.png.asset.json";
import portfolioDining from "@/assets/designers/portfolio/portfolio-dining.png.asset.json";
import portfolioLivingGreen from "@/assets/designers/portfolio/portfolio-living-green.png.asset.json";
import portfolioOffice from "@/assets/designers/portfolio/portfolio-office.png.asset.json";
import portfolioClassicHall from "@/assets/designers/portfolio/portfolio-classic-hall.png.asset.json";
import portfolioWarmLiving from "@/assets/designers/portfolio/portfolio-warm-living.png.asset.json";
import portfolioLoft from "@/assets/designers/portfolio/portfolio-loft.png.asset.json";
import portfolioKidsRoom from "@/assets/designers/portfolio/portfolio-kids-room.png.asset.json";
import portfolioSculpturalLiving from "@/assets/designers/portfolio/portfolio-sculptural-living.png.asset.json";

const HERO_SLIDES = [
  { src: heroClassic.url, alt: "Парадная гостиная с панорамными окнами" },
  { src: heroKids.url, alt: "Детская комната в природных тонах" },
  { src: heroBar.url, alt: "Барная зона с латунными акцентами" },
];

const PORTFOLIO_SHOWCASE = [
  { src: portfolioDining.url, alt: "Светлая столовая зона с арочным окном и терракотовыми креслами" },
  { src: portfolioBar.url, alt: "Барная зона со светлым камнем и латунными подвесами" },
  { src: portfolioKidsRoom.url, alt: "Детская комната в мягкой бежево-оливковой гамме" },
  { src: portfolioWarmLiving.url, alt: "Тёплая гостиная с деревянной библиотекой" },
  { src: portfolioLivingGreen.url, alt: "Гостиная-столовая с панорамными окнами и видом на зелень" },
  { src: portfolioClassicHall.url, alt: "Классический интерьер холла с декоративной лепниной" },
  { src: portfolioLoft.url, alt: "Лофт-гостиная с кирпичными стенами и тёмной библиотекой" },
  { src: portfolioOffice.url, alt: "Современный переговорный зал с панорамным видом на город" },
  { src: portfolioSculpturalLiving.url, alt: "Скульптурная гостиная в светлой каменной палитре" },
];

function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % HERO_SLIDES.length), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative aspect-[4/5] bg-surface border hairline overflow-hidden">
      {HERO_SLIDES.map((s, idx) => (
        <img
          key={idx}
          src={s.src}
          alt={s.alt}
          loading={idx === 0 ? "eager" : "lazy"} decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out"
          style={{ opacity: i === idx ? 1 : 0 }}
        />
      ))}
      <div className="absolute top-4 right-4 w-2 h-2 bg-accent" />
    </div>
  );
}

function PortfolioGallery({ items }: { items: { src: string; alt: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const close = useCallback(() => setOpenIndex(null), []);
  const show = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(1);
      if (e.key === "ArrowLeft") show(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex, close, show]);

  return (
    <>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-px bg-background/10">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden bg-background/5 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Открыть изображение: ${item.alt}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy" decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white text-2xl leading-none w-10 h-10 flex items-center justify-center"
            aria-label="Закрыть"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); show(-1); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl w-12 h-12 flex items-center justify-center"
            aria-label="Предыдущее"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); show(1); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl w-12 h-12 flex items-center justify-center"
            aria-label="Следующее"
          >
            ›
          </button>
          <img
            src={items[openIndex].src}
            alt={items[openIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain shadow-2xl"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.24em] text-white/60">
            {String(openIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </>
  );
}

export const Route = createFileRoute("/designers")({
  head: () => ({
    meta: [
      { title: "Интерьерная 3D-визуализация для дизайнеров — 3D-KULAGIN" },
      { name: "description", content: "Фотореалистичная визуализация интерьеров по дизайн-проекту для быстрого согласования концепции с клиентом." },
      { property: "og:title", content: "3D-визуализация интерьеров для дизайнеров и студий" },
      { property: "og:description", content: "Согласуйте дизайн-проект быстрее. Реалистичные рендеры по вашему проекту." },
      { property: "og:url", content: siteUrl("/designers") },
    ],
    links: [
      { rel: "canonical", href: siteUrl("/designers") },
    ],
  }),
  component: DesignersPage,
});

const VALUE = [
  ["Согласование быстрее", "Клиент видит будущий интерьер до ремонта и принимает решение увереннее."],
  ["Качество подачи", "Свет, материалы, ракурсы и постобработка уровня премиум-студии."],
  ["Чёткие сроки", "Понятные этапы и предсказуемое время на правки."],
  ["Сохраняем сцены", "Меняем материалы, мебель, свет — без работы с нуля."],
];

const FORMATS = [
  { title: "Жилые интерьеры", text: "Квартиры, дома, апартаменты — для согласования концепции с клиентом." },
  { title: "Коммерческие интерьеры", text: "Офисы, шоурумы, рестораны, отели, ритейл." },
  { title: "Отдельные зоны", text: "Кухня, ванная, гостиная, прихожая — когда нужны акцентные ракурсы." },
  { title: "Дневной и вечерний свет", text: "Два сценария освещения одной сцены." },
];

const PROCESS = [
  { title: "Получаем дизайн-проект", text: "Планировки, развёртки, спецификации, референсы." },
  { title: "Согласуем ракурсы", text: "Какие зоны и углы важны для презентации клиенту." },
  { title: "Готовим пилотный кадр", text: "Базовая геометрия, материалы, свет." },
  { title: "Работаем с правками", text: "По согласованным комментариям." },
  { title: "Финальная подача", text: "Постобработка, цветокор, нужные форматы." },
  { title: "Передаём сцену", text: "По запросу — для будущих изменений." },
];

function DesignersPage() {
  return (
    <SiteLayout>
      <section className="border-b hairline">
        <div className="container-site pt-16 md:pt-24 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Для дизайнеров и студий</Eyebrow>
            <h1 className="display-2 mt-6 max-w-3xl headline-mark">
              <span>Интерьерная визуализация по дизайн-проекту</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Создаём фотореалистичные рендеры интерьеров, чтобы быстрее
              согласовывать концепции с клиентами и показывать будущий интерьер
              до реализации.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-foreground/80 max-w-2xl">
              {[
                "Жилые и коммерческие интерьеры",
                "Дневной и вечерний свет",
                "Подача в едином стиле студии",
                "Правки в согласованных рамках",
                "Сохранение сцен для обновлений",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-accent shrink-0" />{b}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTAButton to="/contacts">Рассчитать интерьер</CTAButton>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroCarousel />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeader eyebrow="Value" title="Что вы получаете" />
          <div className="mt-12 grid md:grid-cols-2 gap-px bg-hairline border hairline">
            {VALUE.map(([t, d]) => (
              <div key={t} className="bg-background p-8">
                <h3 className="display-3">{t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface border-y hairline">
        <div className="container-site">
          <SectionHeader eyebrow="Formats" title="Какие интерьеры визуализируем" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border hairline">
            {FORMATS.map((f, i) => (
              <div key={f.title} className="bg-background p-7">
                <div className="font-mono text-[10px] text-accent tracking-widest">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display font-semibold mt-3">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-foreground text-background">
        <div className="container-site">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="eyebrow text-background/50">Portfolio</div>
              <h2 className="display-2 mt-4 text-background">Реализованные проекты</h2>
              <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-background/65">
                Подборка актуальных работ: жилые сцены, private-зоны и коммерческие интерьеры в спокойной,
                премиальной подаче без лишних подписей поверх изображения.
              </p>
            </div>
            <div className="text-[10px] font-mono tracking-[0.28em] text-background/40 uppercase">
              09 selected scenes
            </div>
          </div>
          <PortfolioGallery items={PORTFOLIO_SHOWCASE} />
        </div>
      </section>

      <section className="section-pad bg-surface border-y hairline">
        <div className="container-site">
          <SectionHeader
            eyebrow="Pricing"
            title="Стоимость интерьерной визуализации"
            subtitle="Цена за м² зависит от сложности интерьера, материалов и количества ракурсов."
          />
          <div className="mt-12">
            <PricingTable
              cols={["Услуга", "Цена от"]}
              rows={[
                ["Интерьерная визуализация", "от 900 ₽ / м²"],
                ["Дополнительный ракурс", "от 2 000 ₽"],
                ["Вечернее освещение", "+30%"],
                ["Сложная сцена / нестандарт", "Индивидуально"],
                ["Передача готовой сцены", "Индивидуально"],
              ]}
            />
          </div>
          <div className="mt-10">
            <CTAButton to="/contacts">Получить расчёт по проекту</CTAButton>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeader eyebrow="Process" title="Как мы работаем с дизайнерами" />
          <div className="mt-12">
            <ProcessTimeline steps={PROCESS} />
          </div>
        </div>
      </section>
      <InlineCTA
        variant="dark"
        title="Нужна интерьерная визуализация под дизайн-проект?"
        subtitle="Пришлите планировки и развёртки — посчитаем по м²."
        buttonLabel="Получить расчёт проекта"
      />

      <ContactBar />

    </SiteLayout>
  );
}
