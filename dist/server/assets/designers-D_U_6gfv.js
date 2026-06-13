import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import { S as SiteLayout } from "./Layout-D62JmS4y.js";
import { E as Eyebrow, C as CTAButton, S as SectionHeader, P as PricingTable, a as ProcessTimeline } from "./primitives-CJd8Of5e.js";
import { I as InlineCTA, C as ContactBar } from "./ContactBar-DkRAkjfe.js";
import { p as portfolioDining, a as portfolioBar, b as portfolioKidsRoom, c as portfolioLivingGreen, d as portfolioClassicHall, e as portfolioLoft, f as portfolioOffice } from "./portfolio-kids-room.png.asset-BsG1lzyl.js";
import { p as pfInteriorWarm } from "./portfolio-warm-living.png.asset-DsXnQSZI.js";
import { p as pfInteriorLiving } from "./portfolio-sculptural-living.png.asset-BlSmcWBL.js";
import "@tanstack/react-router";
import "lucide-react";
const url$2 = "/__l5e/assets-v1/bab67b8e-6a8b-415a-ad78-7080844f693f/hero-classic.png";
const heroClassic = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/81f2ed0c-c38d-44c2-84c5-97ab7b571b0c/hero-kids.png";
const heroKids = {
  url: url$1
};
const url = "/__l5e/assets-v1/e9a59b8a-41ad-44cf-b04d-29807a7f61d2/hero-bar.png";
const heroBar = {
  url
};
const HERO_SLIDES = [{
  src: heroClassic.url,
  alt: "Парадная гостиная с панорамными окнами"
}, {
  src: heroKids.url,
  alt: "Детская комната в природных тонах"
}, {
  src: heroBar.url,
  alt: "Барная зона с латунными акцентами"
}];
const PORTFOLIO_SHOWCASE = [{
  src: portfolioDining.url,
  alt: "Светлая столовая зона с арочным окном и терракотовыми креслами"
}, {
  src: portfolioBar.url,
  alt: "Барная зона со светлым камнем и латунными подвесами"
}, {
  src: portfolioKidsRoom.url,
  alt: "Детская комната в мягкой бежево-оливковой гамме"
}, {
  src: pfInteriorWarm.url,
  alt: "Тёплая гостиная с деревянной библиотекой"
}, {
  src: portfolioLivingGreen.url,
  alt: "Гостиная-столовая с панорамными окнами и видом на зелень"
}, {
  src: portfolioClassicHall.url,
  alt: "Классический интерьер холла с декоративной лепниной"
}, {
  src: portfolioLoft.url,
  alt: "Лофт-гостиная с кирпичными стенами и тёмной библиотекой"
}, {
  src: portfolioOffice.url,
  alt: "Современный переговорный зал с панорамным видом на город"
}, {
  src: pfInteriorLiving.url,
  alt: "Скульптурная гостиная в светлой каменной палитре"
}];
function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % HERO_SLIDES.length), 3e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] bg-surface border hairline overflow-hidden", children: [
    HERO_SLIDES.map((s, idx) => /* @__PURE__ */ jsx("img", { src: s.src, alt: s.alt, loading: idx === 0 ? "eager" : "lazy", decoding: "async", className: "absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out", style: {
      opacity: i === idx ? 1 : 0
    } }, idx)),
    /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 w-2 h-2 bg-accent" })
  ] });
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
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-3 gap-px bg-background/10", children: items.map((item, index) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setOpenIndex(index), className: "group relative aspect-[4/3] overflow-hidden bg-background/5 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent", "aria-label": `Открыть изображение: ${item.alt}`, children: /* @__PURE__ */ jsx("img", { src: item.src, alt: item.alt, loading: "lazy", decoding: "async", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" }) }, item.src)) }),
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
const VALUE = [["Согласование быстрее", "Клиент видит будущий интерьер до ремонта и принимает решение увереннее."], ["Качество подачи", "Свет, материалы, ракурсы и постобработка уровня премиум-студии."], ["Чёткие сроки", "Понятные этапы и предсказуемое время на правки."], ["Сохраняем сцены", "Меняем материалы, мебель, свет — без работы с нуля."]];
const FORMATS = [{
  title: "Жилые интерьеры",
  text: "Квартиры, дома, апартаменты — для согласования концепции с клиентом."
}, {
  title: "Коммерческие интерьеры",
  text: "Офисы, шоурумы, рестораны, отели, ритейл."
}, {
  title: "Отдельные зоны",
  text: "Кухня, ванная, гостиная, прихожая — когда нужны акцентные ракурсы."
}, {
  title: "Дневной и вечерний свет",
  text: "Два сценария освещения одной сцены."
}];
const PROCESS = [{
  title: "Получаем дизайн-проект",
  text: "Планировки, развёртки, спецификации, референсы."
}, {
  title: "Согласуем ракурсы",
  text: "Какие зоны и углы важны для презентации клиенту."
}, {
  title: "Готовим пилотный кадр",
  text: "Базовая геометрия, материалы, свет."
}, {
  title: "Работаем с правками",
  text: "По согласованным комментариям."
}, {
  title: "Финальная подача",
  text: "Постобработка, цветокор, нужные форматы."
}, {
  title: "Передаём сцену",
  text: "По запросу — для будущих изменений."
}];
function DesignersPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx("section", { className: "border-b hairline", children: /* @__PURE__ */ jsxs("div", { className: "container-site pt-16 md:pt-24 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Для дизайнеров и студий" }),
        /* @__PURE__ */ jsx("h1", { className: "display-2 mt-6 max-w-3xl headline-mark", children: /* @__PURE__ */ jsx("span", { children: "Интерьерная визуализация по дизайн-проекту" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed", children: "Создаём фотореалистичные рендеры интерьеров, чтобы быстрее согласовывать концепции с клиентами и показывать будущий интерьер до реализации." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-foreground/80 max-w-2xl", children: ["Жилые и коммерческие интерьеры", "Дневной и вечерний свет", "Подача в едином стиле студии", "Правки в согласованных рамках", "Сохранение сцен для обновлений"].map((b) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-2 w-1.5 h-1.5 bg-accent shrink-0" }),
          b
        ] }, b)) }),
        /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(CTAButton, { to: "/contacts", children: "Рассчитать интерьер" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsx(HeroCarousel, {}) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Value", title: "Что вы получаете" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid md:grid-cols-2 gap-px bg-hairline border hairline", children: VALUE.map(([t, d]) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "display-3", children: t }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: d })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad bg-surface border-y hairline", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Formats", title: "Какие интерьеры визуализируем" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border hairline", children: FORMATS.map((f, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-7", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] text-accent tracking-widest", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold mt-3", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: f.text })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad bg-foreground text-background", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-background/50", children: "Portfolio" }),
          /* @__PURE__ */ jsx("h2", { className: "display-2 mt-4 text-background", children: "Реализованные проекты" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-background/65", children: "Подборка актуальных работ: жилые сцены, private-зоны и коммерческие интерьеры в спокойной, премиальной подаче без лишних подписей поверх изображения." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-[10px] font-mono tracking-[0.28em] text-background/40 uppercase", children: "09 selected scenes" })
      ] }),
      /* @__PURE__ */ jsx(PortfolioGallery, { items: PORTFOLIO_SHOWCASE })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad bg-surface border-y hairline", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Pricing", title: "Стоимость интерьерной визуализации", subtitle: "Цена за м² зависит от сложности интерьера, материалов и количества ракурсов." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx(PricingTable, { cols: ["Услуга", "Цена от"], rows: [["Интерьерная визуализация", "от 900 ₽ / м²"], ["Дополнительный ракурс", "от 2 000 ₽"], ["Вечернее освещение", "+30%"], ["Сложная сцена / нестандарт", "Индивидуально"], ["Передача готовой сцены", "Индивидуально"]] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(CTAButton, { to: "/contacts", children: "Получить расчёт по проекту" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Process", title: "Как мы работаем с дизайнерами" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx(ProcessTimeline, { steps: PROCESS }) })
    ] }) }),
    /* @__PURE__ */ jsx(InlineCTA, { variant: "dark", title: "Нужна интерьерная визуализация под дизайн-проект?", subtitle: "Пришлите планировки и развёртки — посчитаем по м².", buttonLabel: "Получить расчёт проекта" }),
    /* @__PURE__ */ jsx(ContactBar, {})
  ] });
}
export {
  DesignersPage as component
};
