import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import { S as SiteLayout } from "./Layout-D62JmS4y.js";
import { E as Eyebrow, C as CTAButton, S as SectionHeader, P as PricingTable, a as ProcessTimeline } from "./primitives-CJd8Of5e.js";
import { I as InlineCTA, C as ContactBar } from "./ContactBar-DkRAkjfe.js";
import { p as portfolioSofa, a as portfolioLamp, b as portfolioStoneLight, c as portfolioBedroom, d as portfolioStoneDark, e as portfolioKitchenRustic, f as portfolioVanityClassic, g as portfolioBathroomSpa, h as portfolioLivingClassic, i as portfolioOttomanCloseup, j as portfolioKitchenWoodStone, k as portfolioBedroomDark, l as portfolioLivingFireplace } from "./living-fireplace-19.png.asset-DyRWmQfa.js";
import { p as pfFurniture, a as pfKitchen } from "./kitchen-gallery-11.png.asset-Bia_xAdd.js";
import "@tanstack/react-router";
import "lucide-react";
const bgProduct = "/assets/product-D9Qg55XJ.jpg";
const url$a = "/__l5e/assets-v1/e780dcea-91cf-41c3-bd92-be4b83f921aa/lamp.png";
const heroLamp = {
  url: url$a
};
const url$9 = "/__l5e/assets-v1/b198335a-ba35-478e-ac25-0e06b4711f22/wardrobe.png";
const heroWardrobe = {
  url: url$9
};
const url$8 = "/__l5e/assets-v1/55f48888-4d08-4c98-a600-5cfe66f47d10/kitchen-scene.png";
const heroKitchenScene = {
  url: url$8
};
const url$7 = "/__l5e/assets-v1/70530c14-d964-4e0e-b275-c86d96597cee/new-interior-1.png";
const portfolioNew1 = {
  url: url$7
};
const url$6 = "/__l5e/assets-v1/22d4ee61-4b0b-4c88-baba-7c27cccee2dd/new-interior-2.png";
const portfolioNew2 = {
  url: url$6
};
const url$5 = "/__l5e/assets-v1/ba887050-4449-48e1-a581-86ee8539a57a/new-interior-3.png";
const portfolioNew3 = {
  url: url$5
};
const url$4 = "/__l5e/assets-v1/94ee630a-8727-4dce-a197-b827b76d317b/new-interior-4.png";
const portfolioNew4 = {
  url: url$4
};
const url$3 = "/__l5e/assets-v1/c6afba58-c91f-4435-bd72-0454ca6dfc4e/new-interior-5.png";
const portfolioNew5 = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/546e77a8-1f11-4386-948a-c8f3168ed61a/new-interior-6.png";
const portfolioNew6 = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/dbd0efe1-7969-4f17-9660-f447f28aaa98/new-interior-7.png";
const portfolioNew7 = {
  url: url$1
};
const url = "/__l5e/assets-v1/7b0ebb41-e3ac-4209-bba6-47453f44c659/new-interior-8.png";
const portfolioNew8 = {
  url
};
const HERO_SLIDES = [{
  src: bgProduct,
  alt: "Дверь — предметная визуализация"
}, {
  src: heroLamp.url,
  alt: "Лампа в интерьере"
}, {
  src: heroWardrobe.url,
  alt: "Гардеробная система"
}, {
  src: heroKitchenScene.url,
  alt: "Кухонная сцена"
}];
const PORTFOLIO_SHOWCASE = [{
  src: portfolioNew1.url,
  alt: "Интерьер — пример визуализации"
}, {
  src: portfolioSofa.url,
  alt: "Интерьер гостиной с диваном и люстрами"
}, {
  src: portfolioLamp.url,
  alt: "Настольная лампа в вечернем интерьере"
}, {
  src: pfFurniture.url,
  alt: "Гардеробная система в спальне"
}, {
  src: portfolioStoneLight.url,
  alt: "Светлая каменная плитка"
}, {
  src: portfolioBedroom.url,
  alt: "Светлая спальня с мягкой кроватью"
}, {
  src: portfolioNew2.url,
  alt: "Интерьер — пример визуализации"
}, {
  src: portfolioStoneDark.url,
  alt: "Тёмная каменная плитка в гостиной"
}, {
  src: portfolioKitchenRustic.url,
  alt: "Классическая кухня с древесными фасадами"
}, {
  src: portfolioVanityClassic.url,
  alt: "Классический туалетный столик"
}, {
  src: pfKitchen.url,
  alt: "Светлая кухня с витринными шкафами"
}, {
  src: portfolioBathroomSpa.url,
  alt: "Ванная комната с каменной отделкой"
}, {
  src: portfolioLivingClassic.url,
  alt: "Классическая гостиная"
}, {
  src: portfolioOttomanCloseup.url,
  alt: "Мягкий пуф крупным планом"
}, {
  src: portfolioNew3.url,
  alt: "Интерьер — пример визуализации"
}, {
  src: portfolioNew4.url,
  alt: "Интерьер — пример визуализации"
}, {
  src: portfolioKitchenWoodStone.url,
  alt: "Современная кухня дерево и камень"
}, {
  src: portfolioBedroomDark.url,
  alt: "Тёмная спальня с мягким изголовьем"
}, {
  src: portfolioLivingFireplace.url,
  alt: "Гостиная с каменным камином"
}, {
  src: portfolioNew5.url,
  alt: "Интерьер — пример визуализации"
}, {
  src: portfolioNew6.url,
  alt: "Интерьер — пример визуализации"
}, {
  src: portfolioNew7.url,
  alt: "Интерьер — пример визуализации"
}, {
  src: portfolioNew8.url,
  alt: "Интерьер — пример визуализации"
}];
function HeroCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 3e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "relative w-full aspect-[4/5] overflow-hidden border hairline bg-surface", children: HERO_SLIDES.map((slide, i) => /* @__PURE__ */ jsx("img", { src: slide.src, alt: slide.alt, className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-[3000ms] ease-in-out", style: {
    opacity: i === index ? 1 : 0
  }, loading: i === 0 ? "eager" : "lazy", decoding: "async" }, slide.src)) });
}
function PortfolioGallery({
  items
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const close = useCallback(() => setOpenIndex(null), []);
  const show = useCallback((delta) => setOpenIndex((i) => i === null ? i : (i + delta + items.length) % items.length), [items.length]);
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-3", children: items.map((item, index) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setOpenIndex(index), className: "group relative aspect-[4/5] overflow-hidden bg-background/5 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent", "aria-label": `Открыть изображение: ${item.alt}`, children: /* @__PURE__ */ jsx("img", { src: item.src, alt: item.alt, loading: "lazy", decoding: "async", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" }) }, item.src)) }),
    openIndex !== null && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8", onClick: close, role: "dialog", "aria-modal": "true", children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: (e) => {
        e.stopPropagation();
        close();
      }, className: "absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white text-2xl leading-none w-10 h-10 flex items-center justify-center", "aria-label": "Закрыть", children: "✕" }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: (e) => {
        e.stopPropagation();
        show(-1);
      }, className: "absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl w-12 h-12 flex items-center justify-center", "aria-label": "Предыдущее", children: "‹" }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: (e) => {
        e.stopPropagation();
        show(1);
      }, className: "absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl w-12 h-12 flex items-center justify-center", "aria-label": "Следующее", children: "›" }),
      /* @__PURE__ */ jsx("img", { src: items[openIndex].src, alt: items[openIndex].alt, onClick: (e) => e.stopPropagation(), className: "max-w-full max-h-full object-contain shadow-2xl" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.24em] text-white/60", children: [
        String(openIndex + 1).padStart(2, "0"),
        " / ",
        String(items.length).padStart(2, "0")
      ] })
    ] })
  ] });
}
const WHY3D = [["Не нужно везти образцы на съёмку", "Модель можно создать по чертежам, фото и размерам."], ["Одна сцена — много вариантов", "Цвета, материалы, ракурсы, комплектации и коллекции обновляются быстрее."], ["Контент до производства линейки", "Важно для запуска коллекций, предзаказов, сайтов и дилерских материалов."], ["Единый визуальный стиль", "Все товары выглядят как часть одного бренда, а не разрозненные фотографии."]];
const FORMATS = [{
  title: "На белом фоне",
  text: "Для сайта, карточек товара, маркетплейсов и каталогов."
}, {
  title: "В интерьерной сцене",
  text: "Чтобы покупатель увидел товар в реальном пространстве."
}, {
  title: "Крупный план текстуры",
  text: "Для плитки, дерева, ткани, камня, металла, сантехники и декоративных материалов."
}, {
  title: "Цветовые варианты",
  text: "Один товар во всех артикулах, фактурах и цветах коллекции."
}, {
  title: "Серии изображений",
  text: "Десятки и сотни SKU в едином визуальном стиле."
}, {
  title: "Композиции и комплекты",
  text: "Готовые сцены для презентации линейки, набора, коллекции."
}];
const PROCESS = [{
  title: "Получаем чертежи и образцы",
  text: "CAD, фото, размеры, спецификация материалов, образцы фактур."
}, {
  title: "Согласуем стиль сцены",
  text: "Под визуальный язык бренда, каталога или маркетплейса."
}, {
  title: "Готовим пилотный ракурс",
  text: "Чтобы согласовать свет, материалы, подачу до запуска тиража."
}, {
  title: "Делаем серию",
  text: "Все SKU и варианты в едином стиле."
}, {
  title: "Передаём файлы",
  text: "В нужных форматах, разрешениях и нэйминге для каталога."
}, {
  title: "Храним сцену",
  text: "Новые цвета, артикулы и сезоны — без работы с нуля."
}];
function ManufacturersPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx("section", { className: "border-b hairline", children: /* @__PURE__ */ jsxs("div", { className: "container-site grid items-end gap-10 pt-16 pb-16 md:pt-24 md:pb-24 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Для производителей и ритейла" }),
        /* @__PURE__ */ jsx("h1", { className: "display-2 mt-6 max-w-3xl headline-mark", children: /* @__PURE__ */ jsx("span", { children: "3D-визуализация мебели и материалов для каталогов" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground", children: "Создаём предметные рендеры, интерьерные сцены и серии изображений для производителей и ритейлеров — быстрее и гибче, чем классическая фотосъёмка." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-8 grid max-w-2xl gap-x-8 gap-y-3 text-sm text-foreground/80 sm:grid-cols-2", children: ["Замена дорогой предметной съёмки", "Изображения для больших каталогов и коллекций", "Быстрая смена цветов, фактур и материалов", "Единый визуальный стиль бренда", "Сцены хранятся для будущих обновлений"].map((b) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 bg-accent" }),
          b
        ] }, b)) }),
        /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(CTAButton, { to: "/contacts", children: "Рассчитать стоимость тиража" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsx(HeroCarousel, {}) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Why 3D", title: "Почему 3D выгоднее фотосъёмки" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-px border hairline bg-hairline md:grid-cols-2", children: WHY3D.map(([t, d]) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "display-3", children: t }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-muted-foreground", children: d })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad border-y hairline bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Formats", title: "Какие форматы делаем" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-px border hairline bg-hairline md:grid-cols-2 lg:grid-cols-3", children: FORMATS.map((f, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-7", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] tracking-widest text-accent", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-lg font-semibold", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: f.text })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad bg-foreground text-background", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-background/50", children: "Portfolio" }),
        /* @__PURE__ */ jsx("h2", { className: "display-2 mt-4 text-background", children: "Реализованные проекты" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm leading-relaxed text-background/60 md:text-base", children: "Подборка визуализаций для дверей, мебели, освещения и интерьерных материалов в единой, аккуратной подаче." })
      ] }),
      /* @__PURE__ */ jsx(PortfolioGallery, { items: PORTFOLIO_SHOWCASE })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad border-y hairline bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Pricing", title: "Прозрачная стоимость для тиражей и коллекций", subtitle: "Чем больше объём, тем выгоднее цена за единицу." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx(PricingTable, { cols: ["Услуга", "Цена от"], rows: [["Предметная визуализация", "от 5 000 ₽ / предмет"], ["Интерьерная сцена для товара", "от 12 000 ₽"], ["Серия (10+ позиций)", "Скидка за объём"], ["Дополнительный ракурс", "от 2 000 ₽"], ["Цветовая вариация", "от 1 500 ₽"], ["Передача готовой сцены", "Индивидуально"]] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(CTAButton, { to: "/contacts", children: "Рассчитать тираж" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Process", title: "Как мы работаем с производителями" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx(ProcessTimeline, { steps: PROCESS }) })
    ] }) }),
    /* @__PURE__ */ jsx(InlineCTA, { variant: "dark", title: "Готовы посчитать стоимость по вашей коллекции?", subtitle: "Пришлите SKU и образцы — подготовим расчёт за рабочий день.", buttonLabel: "Получить расчёт проекта" }),
    /* @__PURE__ */ jsx(ContactBar, {})
  ] });
}
export {
  ManufacturersPage as component
};
