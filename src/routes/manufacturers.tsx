import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
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
import bgProduct from "@/assets/bg/product.jpg";
import heroLamp from "@/assets/manufacturers/lamp.png.asset.json";
import heroWardrobe from "@/assets/manufacturers/wardrobe.png.asset.json";
import heroKitchenScene from "@/assets/manufacturers/kitchen-scene.png.asset.json";
import portfolioSofa from "@/assets/manufacturers/portfolio/sofa-2.png.asset.json";
import portfolioLamp from "@/assets/manufacturers/portfolio/lamp-3.png.asset.json";
import portfolioWardrobe from "@/assets/manufacturers/portfolio/wardrobe-4.png.asset.json";
import portfolioStoneLight from "@/assets/manufacturers/portfolio/stone-light-5.png.asset.json";
import portfolioBedroom from "@/assets/manufacturers/portfolio/bedroom-6.png.asset.json";
import portfolioStoneDark from "@/assets/manufacturers/portfolio/stone-dark-8.png.asset.json";
import portfolioKitchenRustic from "@/assets/manufacturers/portfolio/kitchen-rustic-9.png.asset.json";
import portfolioVanityClassic from "@/assets/manufacturers/portfolio/vanity-classic-10.png.asset.json";
import portfolioKitchenGallery from "@/assets/manufacturers/portfolio/kitchen-gallery-11.png.asset.json";
import portfolioBathroomSpa from "@/assets/manufacturers/portfolio/bathroom-spa-12.png.asset.json";
import portfolioLivingClassic from "@/assets/manufacturers/portfolio/living-classic-13.png.asset.json";
import portfolioOttomanCloseup from "@/assets/manufacturers/portfolio/ottoman-closeup-14.png.asset.json";
import portfolioKitchenWoodStone from "@/assets/manufacturers/portfolio/kitchen-wood-stone-17.png.asset.json";
import portfolioBedroomDark from "@/assets/manufacturers/portfolio/bedroom-dark-18.png.asset.json";
import portfolioLivingFireplace from "@/assets/manufacturers/portfolio/living-fireplace-19.png.asset.json";
import portfolioNew1 from "@/assets/manufacturers/portfolio/new-interior-1.png.asset.json";
import portfolioNew2 from "@/assets/manufacturers/portfolio/new-interior-2.png.asset.json";
import portfolioNew3 from "@/assets/manufacturers/portfolio/new-interior-3.png.asset.json";
import portfolioNew4 from "@/assets/manufacturers/portfolio/new-interior-4.png.asset.json";
import portfolioNew5 from "@/assets/manufacturers/portfolio/new-interior-5.png.asset.json";
import portfolioNew6 from "@/assets/manufacturers/portfolio/new-interior-6.png.asset.json";
import portfolioNew7 from "@/assets/manufacturers/portfolio/new-interior-7.png.asset.json";
import portfolioNew8 from "@/assets/manufacturers/portfolio/new-interior-8.png.asset.json";

const HERO_SLIDES = [
  { src: bgProduct, alt: "Дверь — предметная визуализация" },
  { src: heroLamp.url, alt: "Лампа в интерьере" },
  { src: heroWardrobe.url, alt: "Гардеробная система" },
  { src: heroKitchenScene.url, alt: "Кухонная сцена" },
];

const PORTFOLIO_SHOWCASE = [
  { src: portfolioNew1.url, alt: "Интерьер — пример визуализации" },
  { src: portfolioSofa.url, alt: "Интерьер гостиной с диваном и люстрами" },
  { src: portfolioLamp.url, alt: "Настольная лампа в вечернем интерьере" },
  { src: portfolioWardrobe.url, alt: "Гардеробная система в спальне" },
  { src: portfolioStoneLight.url, alt: "Светлая каменная плитка" },
  { src: portfolioBedroom.url, alt: "Светлая спальня с мягкой кроватью" },
  { src: portfolioNew2.url, alt: "Интерьер — пример визуализации" },
  { src: portfolioStoneDark.url, alt: "Тёмная каменная плитка в гостиной" },
  { src: portfolioKitchenRustic.url, alt: "Классическая кухня с древесными фасадами" },
  { src: portfolioVanityClassic.url, alt: "Классический туалетный столик" },
  { src: portfolioKitchenGallery.url, alt: "Светлая кухня с витринными шкафами" },
  { src: portfolioBathroomSpa.url, alt: "Ванная комната с каменной отделкой" },
  { src: portfolioLivingClassic.url, alt: "Классическая гостиная" },
  { src: portfolioOttomanCloseup.url, alt: "Мягкий пуф крупным планом" },
  { src: portfolioNew3.url, alt: "Интерьер — пример визуализации" },
  { src: portfolioNew4.url, alt: "Интерьер — пример визуализации" },
  { src: portfolioKitchenWoodStone.url, alt: "Современная кухня дерево и камень" },
  { src: portfolioBedroomDark.url, alt: "Тёмная спальня с мягким изголовьем" },
  { src: portfolioLivingFireplace.url, alt: "Гостиная с каменным камином" },
  { src: portfolioNew5.url, alt: "Интерьер — пример визуализации" },
  { src: portfolioNew6.url, alt: "Интерьер — пример визуализации" },
  { src: portfolioNew7.url, alt: "Интерьер — пример визуализации" },
  { src: portfolioNew8.url, alt: "Интерьер — пример визуализации" },
];

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden border hairline bg-surface">
      {HERO_SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[3000ms] ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          loading={i === 0 ? "eager" : "lazy"} decoding="async"
        />
      ))}
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
      <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-3">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group relative aspect-[4/5] overflow-hidden bg-background/5 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Открыть изображение: ${item.alt}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy" decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
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


export const Route = createFileRoute("/manufacturers")({
  head: () => ({
    meta: [
      { title: "3D-визуализация для производителей мебели и материалов — 3D-KULAGIN" },
      {
        name: "description",
        content:
          "Предметные рендеры, интерьерные сцены и серии изображений для каталогов, маркетплейсов и сайтов производителей мебели, плитки, сантехники и отделки.",
      },
      { property: "og:title", content: "3D-визуализация для производителей и ритейла" },
      {
        property: "og:description",
        content: "Замена дорогой фотосъёмки. Серийный визуальный контент для коллекций и каталогов.",
      },
      { property: "og:url", content: siteUrl("/manufacturers") },
    ],
    links: [
      { rel: "canonical", href: siteUrl("/manufacturers") },
    ],
  }),
  component: ManufacturersPage,
});

const WHY3D = [
  ["Не нужно везти образцы на съёмку", "Модель можно создать по чертежам, фото и размерам."],
  ["Одна сцена — много вариантов", "Цвета, материалы, ракурсы, комплектации и коллекции обновляются быстрее."],
  ["Контент до производства линейки", "Важно для запуска коллекций, предзаказов, сайтов и дилерских материалов."],
  ["Единый визуальный стиль", "Все товары выглядят как часть одного бренда, а не разрозненные фотографии."],
];

const FORMATS = [
  { title: "На белом фоне", text: "Для сайта, карточек товара, маркетплейсов и каталогов." },
  { title: "В интерьерной сцене", text: "Чтобы покупатель увидел товар в реальном пространстве." },
  { title: "Крупный план текстуры", text: "Для плитки, дерева, ткани, камня, металла, сантехники и декоративных материалов." },
  { title: "Цветовые варианты", text: "Один товар во всех артикулах, фактурах и цветах коллекции." },
  { title: "Серии изображений", text: "Десятки и сотни SKU в едином визуальном стиле." },
  { title: "Композиции и комплекты", text: "Готовые сцены для презентации линейки, набора, коллекции." },
];

const PROCESS = [
  { title: "Получаем чертежи и образцы", text: "CAD, фото, размеры, спецификация материалов, образцы фактур." },
  { title: "Согласуем стиль сцены", text: "Под визуальный язык бренда, каталога или маркетплейса." },
  { title: "Готовим пилотный ракурс", text: "Чтобы согласовать свет, материалы, подачу до запуска тиража." },
  { title: "Делаем серию", text: "Все SKU и варианты в едином стиле." },
  { title: "Передаём файлы", text: "В нужных форматах, разрешениях и нэйминге для каталога." },
  { title: "Храним сцену", text: "Новые цвета, артикулы и сезоны — без работы с нуля." },
];

function ManufacturersPage() {
  return (
    <SiteLayout>
      <section className="border-b hairline">
        <div className="container-site grid items-end gap-10 pt-16 pb-16 md:pt-24 md:pb-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Для производителей и ритейла</Eyebrow>
            <h1 className="display-2 mt-6 max-w-3xl headline-mark">
              <span>3D-визуализация мебели и материалов для каталогов</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Создаём предметные рендеры, интерьерные сцены и серии изображений
              для производителей и ритейлеров — быстрее и гибче, чем классическая
              фотосъёмка.
            </p>
            <ul className="mt-8 grid max-w-2xl gap-x-8 gap-y-3 text-sm text-foreground/80 sm:grid-cols-2">
              {[
                "Замена дорогой предметной съёмки",
                "Изображения для больших каталогов и коллекций",
                "Быстрая смена цветов, фактур и материалов",
                "Единый визуальный стиль бренда",
                "Сцены хранятся для будущих обновлений",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTAButton to="/contacts">Рассчитать стоимость тиража</CTAButton>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroCarousel />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeader eyebrow="Why 3D" title="Почему 3D выгоднее фотосъёмки" />
          <div className="mt-12 grid gap-px border hairline bg-hairline md:grid-cols-2">
            {WHY3D.map(([t, d]) => (
              <div key={t} className="bg-background p-8">
                <h3 className="display-3">{t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y hairline bg-surface">
        <div className="container-site">
          <SectionHeader eyebrow="Formats" title="Какие форматы делаем" />
          <div className="mt-12 grid gap-px border hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {FORMATS.map((f, i) => (
              <div key={f.title} className="bg-background p-7">
                <div className="font-mono text-[10px] tracking-widest text-accent">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-foreground text-background">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="eyebrow text-background/50">Portfolio</div>
            <h2 className="display-2 mt-4 text-background">Реализованные проекты</h2>
            <p className="mt-5 text-sm leading-relaxed text-background/60 md:text-base">
              Подборка визуализаций для дверей, мебели, освещения и интерьерных материалов
              в единой, аккуратной подаче.
            </p>
          </div>

          <PortfolioGallery items={PORTFOLIO_SHOWCASE} />
        </div>
      </section>

      <section className="section-pad border-y hairline bg-surface">
        <div className="container-site">
          <SectionHeader
            eyebrow="Pricing"
            title="Прозрачная стоимость для тиражей и коллекций"
            subtitle="Чем больше объём, тем выгоднее цена за единицу."
          />
          <div className="mt-12">
            <PricingTable
              cols={["Услуга", "Цена от"]}
              rows={[
                ["Предметная визуализация", "от 5 000 ₽ / предмет"],
                ["Интерьерная сцена для товара", "от 12 000 ₽"],
                ["Серия (10+ позиций)", "Скидка за объём"],
                ["Дополнительный ракурс", "от 2 000 ₽"],
                ["Цветовая вариация", "от 1 500 ₽"],
                ["Передача готовой сцены", "Индивидуально"],
              ]}
            />
          </div>
          <div className="mt-10">
            <CTAButton to="/contacts">Рассчитать тираж</CTAButton>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeader eyebrow="Process" title="Как мы работаем с производителями" />
          <div className="mt-12">
            <ProcessTimeline steps={PROCESS} />
          </div>
        </div>
      </section>

      <InlineCTA
        variant="dark"
        title="Готовы посчитать стоимость по вашей коллекции?"
        subtitle="Пришлите SKU и образцы — подготовим расчёт за рабочий день."
        buttonLabel="Получить расчёт проекта"
      />

      <ContactBar />

    </SiteLayout>
  );
}
