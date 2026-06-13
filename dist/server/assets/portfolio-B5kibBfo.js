import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { S as SiteLayout } from "./Layout-D62JmS4y.js";
import { C as ContactBar, I as InlineCTA } from "./ContactBar-DkRAkjfe.js";
import { p as pfArchitecture } from "./project-1-cover.png.asset-C7QWtttt.js";
import { p as project1Entry, a as project1Yard, b as project1View, c as project2Cover, d as project2Exterior, e as project2Entry, f as project2View, g as project4Cover, h as project4Aerial, i as project4Street, j as project4Yard, k as project4Evening } from "./project-4-evening.png.asset-Cw9cRGIT.js";
import { p as pfAerial } from "./project-2-aerial.png.asset-CDYXQHYE.js";
import { p as portfolioSofa, a as portfolioLamp, b as portfolioStoneLight, c as portfolioBedroom, d as portfolioStoneDark, e as portfolioKitchenRustic, f as portfolioVanityClassic, g as portfolioBathroomSpa, h as portfolioLivingClassic, i as portfolioOttomanCloseup, j as portfolioKitchenWoodStone, k as portfolioBedroomDark, l as portfolioLivingFireplace } from "./living-fireplace-19.png.asset-DyRWmQfa.js";
import { p as pfFurniture, a as pfKitchen } from "./kitchen-gallery-11.png.asset-Bia_xAdd.js";
import { p as portfolioDining, a as portfolioBar, b as portfolioKidsRoom, c as portfolioLivingGreen, d as portfolioClassicHall, e as portfolioLoft, f as portfolioOffice } from "./portfolio-kids-room.png.asset-BsG1lzyl.js";
import { p as pfInteriorWarm } from "./portfolio-warm-living.png.asset-DsXnQSZI.js";
import { p as pfInteriorLiving } from "./portfolio-sculptural-living.png.asset-BlSmcWBL.js";
import "@tanstack/react-router";
import "lucide-react";
const url$9 = "/__l5e/assets-v1/574b021b-deda-4d74-ba55-b57128ecf23f/project-3-cover.png";
const project3Cover = {
  url: url$9
};
const url$8 = "/__l5e/assets-v1/3827e2e1-45c9-48f8-be15-268c4594b5f6/project-3-yard.png";
const project3Yard = {
  url: url$8
};
const url$7 = "/__l5e/assets-v1/d020825b-b89f-4cf3-a314-7ad747aa77d7/project-3-exterior.png";
const project3Exterior = {
  url: url$7
};
const url$6 = "/__l5e/assets-v1/ca583143-9e3c-49c0-a676-c55d4ab4c387/project-3-view.png";
const project3View = {
  url: url$6
};
const url$5 = "/__l5e/assets-v1/cce51a12-d4b5-41f3-b1c7-965cafa2a8d3/project-3-entry.png";
const project3Entry = {
  url: url$5
};
const url$4 = "/__l5e/assets-v1/62994823-90f2-4a6e-98d8-62ebc8b71db9/project-3-street.png";
const project3Street = {
  url: url$4
};
const url$3 = "/__l5e/assets-v1/394bc03d-348d-4cd4-9212-84e8a6bd2d23/manufacturers-portfolio-1-door.png";
const mDoor = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/79c47c33-638f-4d3e-b113-5cf2016888ae/manufacturers-portfolio-7-door-minimal.png";
const mDoorMinimal = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/bbc7131e-9fff-40fe-9ff1-2d73ef7917b4/manufacturers-portfolio-15-door-gray.png";
const mDoorGray = {
  url: url$1
};
const url = "/__l5e/assets-v1/8225080a-f7f7-4402-84bb-e1ec8ca8daed/manufacturers-portfolio-16-door-oak.png";
const mDoorOak = {
  url
};
const ARCHITECTURE = [{
  src: pfArchitecture.url,
  alt: "Жилой комплекс — мастер-кадр"
}, {
  src: project1Entry.url,
  alt: "Входная группа ЖК"
}, {
  src: project1Yard.url,
  alt: "Двор ЖК"
}, {
  src: project1View.url,
  alt: "Видовой кадр ЖК"
}, {
  src: project2Cover.url,
  alt: "Жилой проект — обложка"
}, {
  src: pfAerial.url,
  alt: "ЖК с высоты птичьего полёта"
}, {
  src: project2Exterior.url,
  alt: "Экстерьер жилого комплекса"
}, {
  src: project2Entry.url,
  alt: "Входная группа"
}, {
  src: project2View.url,
  alt: "Окружение и видовой кадр"
}, {
  src: project3Cover.url,
  alt: "Проект 3 — обложка"
}, {
  src: project3Exterior.url,
  alt: "Экстерьер проекта"
}, {
  src: project3Street.url,
  alt: "Уличный фронт"
}, {
  src: project3Yard.url,
  alt: "Внутренний двор"
}, {
  src: project3Entry.url,
  alt: "Входная группа"
}, {
  src: project3View.url,
  alt: "Видовой кадр"
}, {
  src: project4Cover.url,
  alt: "Проект 4 — обложка"
}, {
  src: project4Aerial.url,
  alt: "Аэросъёмка комплекса"
}, {
  src: project4Street.url,
  alt: "Уличная перспектива"
}, {
  src: project4Yard.url,
  alt: "Двор и благоустройство"
}, {
  src: project4Evening.url,
  alt: "Вечерний кадр"
}];
const MANUFACTURERS = [{
  src: mDoor.url,
  alt: "Светлая межкомнатная дверь"
}, {
  src: portfolioSofa.url,
  alt: "Диван в интерьере"
}, {
  src: portfolioLamp.url,
  alt: "Настольная лампа"
}, {
  src: pfFurniture.url,
  alt: "Гардеробная система"
}, {
  src: portfolioStoneLight.url,
  alt: "Светлая каменная плитка"
}, {
  src: portfolioBedroom.url,
  alt: "Светлая спальня"
}, {
  src: mDoorMinimal.url,
  alt: "Минималистичная белая дверь"
}, {
  src: portfolioStoneDark.url,
  alt: "Тёмная каменная плитка"
}, {
  src: portfolioKitchenRustic.url,
  alt: "Классическая кухня"
}, {
  src: portfolioVanityClassic.url,
  alt: "Классический туалетный столик"
}, {
  src: pfKitchen.url,
  alt: "Светлая кухня с витринами"
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
  src: mDoorGray.url,
  alt: "Серая межкомнатная дверь"
}, {
  src: mDoorOak.url,
  alt: "Деревянная дверь"
}, {
  src: portfolioKitchenWoodStone.url,
  alt: "Кухня дерево и камень"
}, {
  src: portfolioBedroomDark.url,
  alt: "Тёмная спальня"
}, {
  src: portfolioLivingFireplace.url,
  alt: "Гостиная с камином"
}];
const INTERIORS = [{
  src: portfolioDining.url,
  alt: "Светлая столовая зона"
}, {
  src: portfolioBar.url,
  alt: "Барная зона с латунными подвесами"
}, {
  src: portfolioKidsRoom.url,
  alt: "Детская комната"
}, {
  src: pfInteriorWarm.url,
  alt: "Тёплая гостиная с библиотекой"
}, {
  src: portfolioLivingGreen.url,
  alt: "Гостиная-столовая с видом на зелень"
}, {
  src: portfolioClassicHall.url,
  alt: "Классический холл"
}, {
  src: portfolioLoft.url,
  alt: "Лофт-гостиная"
}, {
  src: portfolioOffice.url,
  alt: "Современный переговорный зал"
}, {
  src: pfInteriorLiving.url,
  alt: "Скульптурная гостиная"
}];
const CATEGORIES = [{
  key: "architecture",
  label: "Архитектурная визуализация",
  items: ARCHITECTURE
}, {
  key: "manufacturers",
  label: "Визуализация для производителей",
  items: MANUFACTURERS
}, {
  key: "interiors",
  label: "Интерьерная визуализация",
  items: INTERIORS
}];
function PortfolioPage() {
  const [active, setActive] = useState("architecture");
  const items = CATEGORIES.find((c) => c.key === active).items;
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
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxs("section", { className: "section-pad bg-foreground text-background", children: [
      /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-background/50", children: "Portfolio" }),
          /* @__PURE__ */ jsx("h1", { className: "display-2 mt-4 text-background", children: "Примеры проектов нашей студии" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm md:text-base leading-relaxed text-background/65", children: "Выберите направление, чтобы посмотреть подборку работ." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 flex flex-wrap justify-center gap-2 sm:gap-3", children: CATEGORIES.map((c) => {
          const isActive = c.key === active;
          return /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
            setActive(c.key);
            setOpenIndex(null);
          }, className: `px-5 py-3 text-xs sm:text-sm font-medium uppercase tracking-[0.16em] border transition-colors ${isActive ? "bg-background text-foreground border-background" : "bg-transparent text-background/70 border-background/25 hover:text-background hover:border-background/60"}`, children: c.label }, c.key);
        }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-2 md:grid-cols-3 gap-px bg-background/10", children: items.map((item, index) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setOpenIndex(index), className: "group relative aspect-[4/3] overflow-hidden bg-background/5 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent", "aria-label": `Открыть изображение: ${item.alt}`, children: /* @__PURE__ */ jsx("img", { src: item.src, alt: item.alt, loading: "lazy", decoding: "async", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" }) }, `${active}-${item.src}`)) })
      ] }),
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
    ] }),
    /* @__PURE__ */ jsx(ContactBar, {}),
    /* @__PURE__ */ jsx(InlineCTA, { variant: "warm", title: "Хотите получить подборку кейсов под вашу задачу?", subtitle: "Пришлём релевантные работы и обсудим формат.", buttonLabel: "Получить расчёт проекта" })
  ] });
}
export {
  PortfolioPage as component
};
