import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { InlineCTA } from "@/components/site/InlineCTA";
import { ContactBar } from "@/components/site/ContactBar";

// Архитектура — со страницы /developers
import project1Cover from "@/assets/projects/realized/project-1-cover.png.asset.json";
import project1Entry from "@/assets/projects/realized/project-1-entry.png.asset.json";
import project1Yard from "@/assets/projects/realized/project-1-yard.png.asset.json";
import project1View from "@/assets/projects/realized/project-1-view.png.asset.json";
import project2Cover from "@/assets/projects/realized/project-2-cover.png.asset.json";
import project2Entry from "@/assets/projects/realized/project-2-entry.png.asset.json";
import project2Exterior from "@/assets/projects/realized/project-2-exterior.png.asset.json";
import project2Aerial from "@/assets/projects/realized/project-2-aerial.png.asset.json";
import project2View from "@/assets/projects/realized/project-2-view.png.asset.json";
import project3Cover from "@/assets/projects/realized/project-3-cover.png.asset.json";
import project3Yard from "@/assets/projects/realized/project-3-yard.png.asset.json";
import project3Exterior from "@/assets/projects/realized/project-3-exterior.png.asset.json";
import project3View from "@/assets/projects/realized/project-3-view.png.asset.json";
import project3Entry from "@/assets/projects/realized/project-3-entry.png.asset.json";
import project3Street from "@/assets/projects/realized/project-3-street.png.asset.json";
import project4Cover from "@/assets/projects/realized/project-4-cover.png.asset.json";
import project4Street from "@/assets/projects/realized/project-4-street.png.asset.json";
import project4Aerial from "@/assets/projects/realized/project-4-aerial.png.asset.json";
import project4Yard from "@/assets/projects/realized/project-4-yard.png.asset.json";
import project4Evening from "@/assets/projects/realized/project-4-evening.png.asset.json";

// Производители — со страницы /manufacturers
import mDoor from "@/assets/manufacturers/portfolio/door-1.png.asset.json";
import mSofa from "@/assets/manufacturers/portfolio/sofa-2.png.asset.json";
import mLamp from "@/assets/manufacturers/portfolio/lamp-3.png.asset.json";
import mWardrobe from "@/assets/manufacturers/portfolio/wardrobe-4.png.asset.json";
import mStoneLight from "@/assets/manufacturers/portfolio/stone-light-5.png.asset.json";
import mBedroom from "@/assets/manufacturers/portfolio/bedroom-6.png.asset.json";
import mDoorMinimal from "@/assets/manufacturers/portfolio/door-minimal-7.png.asset.json";
import mStoneDark from "@/assets/manufacturers/portfolio/stone-dark-8.png.asset.json";
import mKitchenRustic from "@/assets/manufacturers/portfolio/kitchen-rustic-9.png.asset.json";
import mVanityClassic from "@/assets/manufacturers/portfolio/vanity-classic-10.png.asset.json";
import mKitchenGallery from "@/assets/manufacturers/portfolio/kitchen-gallery-11.png.asset.json";
import mBathroomSpa from "@/assets/manufacturers/portfolio/bathroom-spa-12.png.asset.json";
import mLivingClassic from "@/assets/manufacturers/portfolio/living-classic-13.png.asset.json";
import mOttoman from "@/assets/manufacturers/portfolio/ottoman-closeup-14.png.asset.json";
import mDoorGray from "@/assets/manufacturers/portfolio/door-gray-15.png.asset.json";
import mDoorOak from "@/assets/manufacturers/portfolio/door-oak-16.png.asset.json";
import mKitchenWoodStone from "@/assets/manufacturers/portfolio/kitchen-wood-stone-17.png.asset.json";
import mBedroomDark from "@/assets/manufacturers/portfolio/bedroom-dark-18.png.asset.json";
import mLivingFireplace from "@/assets/manufacturers/portfolio/living-fireplace-19.png.asset.json";

// Интерьеры — со страницы /designers
import dBar from "@/assets/designers/portfolio/portfolio-bar.png.asset.json";
import dDining from "@/assets/designers/portfolio/portfolio-dining.png.asset.json";
import dLivingGreen from "@/assets/designers/portfolio/portfolio-living-green.png.asset.json";
import dOffice from "@/assets/designers/portfolio/portfolio-office.png.asset.json";
import dClassicHall from "@/assets/designers/portfolio/portfolio-classic-hall.png.asset.json";
import dWarmLiving from "@/assets/designers/portfolio/portfolio-warm-living.png.asset.json";
import dLoft from "@/assets/designers/portfolio/portfolio-loft.png.asset.json";
import dKidsRoom from "@/assets/designers/portfolio/portfolio-kids-room.png.asset.json";
import dSculpturalLiving from "@/assets/designers/portfolio/portfolio-sculptural-living.png.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Портфолио — 3D-KULAGIN" },
      { name: "description", content: "Примеры проектов студии 3D-KULAGIN: архитектурная визуализация, визуализация для производителей и интерьерная визуализация." },
      { property: "og:title", content: "Портфолио — 3D-KULAGIN" },
      { property: "og:description", content: "Архитектура, интерьеры, предметная визуализация. Реализованные проекты студии." },
      { property: "og:url", content: "https://viz-studio-build.lovable.app/portfolio" },
    ],
    links: [
      { rel: "canonical", href: "https://viz-studio-build.lovable.app/portfolio" },
    ],
  }),
  component: PortfolioPage,
});

type Item = { src: string; alt: string };

const ARCHITECTURE: Item[] = [
  { src: project1Cover.url, alt: "Жилой комплекс — мастер-кадр" },
  { src: project1Entry.url, alt: "Входная группа ЖК" },
  { src: project1Yard.url, alt: "Двор ЖК" },
  { src: project1View.url, alt: "Видовой кадр ЖК" },
  { src: project2Cover.url, alt: "Жилой проект — обложка" },
  { src: project2Aerial.url, alt: "ЖК с высоты птичьего полёта" },
  { src: project2Exterior.url, alt: "Экстерьер жилого комплекса" },
  { src: project2Entry.url, alt: "Входная группа" },
  { src: project2View.url, alt: "Окружение и видовой кадр" },
  { src: project3Cover.url, alt: "Проект 3 — обложка" },
  { src: project3Exterior.url, alt: "Экстерьер проекта" },
  { src: project3Street.url, alt: "Уличный фронт" },
  { src: project3Yard.url, alt: "Внутренний двор" },
  { src: project3Entry.url, alt: "Входная группа" },
  { src: project3View.url, alt: "Видовой кадр" },
  { src: project4Cover.url, alt: "Проект 4 — обложка" },
  { src: project4Aerial.url, alt: "Аэросъёмка комплекса" },
  { src: project4Street.url, alt: "Уличная перспектива" },
  { src: project4Yard.url, alt: "Двор и благоустройство" },
  { src: project4Evening.url, alt: "Вечерний кадр" },
];

const MANUFACTURERS: Item[] = [
  { src: mDoor.url, alt: "Светлая межкомнатная дверь" },
  { src: mSofa.url, alt: "Диван в интерьере" },
  { src: mLamp.url, alt: "Настольная лампа" },
  { src: mWardrobe.url, alt: "Гардеробная система" },
  { src: mStoneLight.url, alt: "Светлая каменная плитка" },
  { src: mBedroom.url, alt: "Светлая спальня" },
  { src: mDoorMinimal.url, alt: "Минималистичная белая дверь" },
  { src: mStoneDark.url, alt: "Тёмная каменная плитка" },
  { src: mKitchenRustic.url, alt: "Классическая кухня" },
  { src: mVanityClassic.url, alt: "Классический туалетный столик" },
  { src: mKitchenGallery.url, alt: "Светлая кухня с витринами" },
  { src: mBathroomSpa.url, alt: "Ванная комната с каменной отделкой" },
  { src: mLivingClassic.url, alt: "Классическая гостиная" },
  { src: mOttoman.url, alt: "Мягкий пуф крупным планом" },
  { src: mDoorGray.url, alt: "Серая межкомнатная дверь" },
  { src: mDoorOak.url, alt: "Деревянная дверь" },
  { src: mKitchenWoodStone.url, alt: "Кухня дерево и камень" },
  { src: mBedroomDark.url, alt: "Тёмная спальня" },
  { src: mLivingFireplace.url, alt: "Гостиная с камином" },
];

const INTERIORS: Item[] = [
  { src: dDining.url, alt: "Светлая столовая зона" },
  { src: dBar.url, alt: "Барная зона с латунными подвесами" },
  { src: dKidsRoom.url, alt: "Детская комната" },
  { src: dWarmLiving.url, alt: "Тёплая гостиная с библиотекой" },
  { src: dLivingGreen.url, alt: "Гостиная-столовая с видом на зелень" },
  { src: dClassicHall.url, alt: "Классический холл" },
  { src: dLoft.url, alt: "Лофт-гостиная" },
  { src: dOffice.url, alt: "Современный переговорный зал" },
  { src: dSculpturalLiving.url, alt: "Скульптурная гостиная" },
];

const CATEGORIES = [
  { key: "architecture" as const, label: "Архитектурная визуализация", items: ARCHITECTURE },
  { key: "manufacturers" as const, label: "Визуализация для производителей", items: MANUFACTURERS },
  { key: "interiors" as const, label: "Интерьерная визуализация", items: INTERIORS },
];

type CategoryKey = (typeof CATEGORIES)[number]["key"];

function PortfolioPage() {
  const [active, setActive] = useState<CategoryKey>("architecture");
  const items = CATEGORIES.find((c) => c.key === active)!.items;

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
    <SiteLayout>
      <section className="section-pad bg-foreground text-background">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow text-background/50">Portfolio</div>
            <h1 className="display-2 mt-4 text-background">Примеры проектов нашей студии</h1>
            <p className="mt-5 text-sm md:text-base leading-relaxed text-background/65">
              Выберите направление, чтобы посмотреть подборку работ.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((c) => {
              const isActive = c.key === active;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => {
                    setActive(c.key);
                    setOpenIndex(null);
                  }}
                  className={`px-5 py-3 text-xs sm:text-sm font-medium uppercase tracking-[0.16em] border transition-colors ${
                    isActive
                      ? "bg-background text-foreground border-background"
                      : "bg-transparent text-background/70 border-background/25 hover:text-background hover:border-background/60"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-px bg-background/10">
            {items.map((item, index) => (
              <button
                key={`${active}-${item.src}`}
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
      </section>

      <ContactBar />

      <InlineCTA
        variant="warm"
        title="Хотите получить подборку кейсов под вашу задачу?"
        subtitle="Пришлём релевантные работы и обсудим формат."
        buttonLabel="Получить расчёт проекта"
      />
    </SiteLayout>
  );
}
