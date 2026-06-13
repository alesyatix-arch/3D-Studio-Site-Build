import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout } from "./Layout-D62JmS4y.js";
import { E as Eyebrow, C as CTAButton } from "./primitives-CJd8Of5e.js";
import { I as InlineCTA, C as ContactBar } from "./ContactBar-DkRAkjfe.js";
import { R as Reveal, u as useInView } from "./Reveal-BT7A1DX1.js";
import { useState, useEffect } from "react";
import { p as pfArchitecture } from "./project-1-cover.png.asset-C7QWtttt.js";
import { p as pfInteriorWarm } from "./portfolio-warm-living.png.asset-DsXnQSZI.js";
import "@tanstack/react-router";
import "lucide-react";
function useCountUp(target, start, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}
const url = "/__l5e/assets-v1/089cc0d1-2278-48cd-add8-f68fa46a7229/bathroom-tiles.png";
const portfolioManufacturers = {
  url
};
function StatNumber({
  value,
  suffix = "+",
  label
}) {
  const {
    ref,
    inView
  } = useInView();
  const n = useCountUp(value, inView);
  return /* @__PURE__ */ jsxs("div", { ref, className: "bg-background p-10 relative accent-bar group", children: [
    /* @__PURE__ */ jsxs("div", { className: "font-display font-semibold text-6xl md:text-7xl tracking-tighter tabular-nums", children: [
      n,
      /* @__PURE__ */ jsx("span", { className: "text-accent", children: suffix })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 text-sm text-muted-foreground", children: label })
  ] });
}
function AboutPage() {
  const mosaic = [{
    src: pfArchitecture.url,
    alt: "Архитектурная визуализация — ЖК"
  }, {
    src: pfInteriorWarm.url,
    alt: "Интерьерная визуализация — гостиная"
  }, {
    src: portfolioManufacturers.url,
    alt: "Визуализация для производителей — ванная комната"
  }];
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative border-b hairline overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: pfArchitecture.url, alt: "", loading: "eager", decoding: "async", fetchPriority: "high", className: "absolute inset-0 w-full h-full object-cover opacity-20" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" }),
      /* @__PURE__ */ jsxs("div", { className: "relative container-site pt-16 md:pt-24 pb-16", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "About" }),
        /* @__PURE__ */ jsx("h1", { className: "display-2 mt-6 max-w-3xl headline-mark", children: /* @__PURE__ */ jsx("span", { children: "Команда, которой можно доверить B2B-задачу" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed", children: "Студия 3D-визуализации с 2013 года. Работаем с девелоперами, производителями и дизайнерами. Ведём проекты по этапам, фиксируем сроки и стоимость до старта." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "section-pad", children: [
      /* @__PURE__ */ jsxs("div", { className: "container-site grid md:grid-cols-3 gap-px bg-hairline border hairline", children: [
        /* @__PURE__ */ jsx(StatNumber, { value: 12, label: "лет на рынке" }),
        /* @__PURE__ */ jsx(StatNumber, { value: 5e3, label: "выполненных проектов" }),
        /* @__PURE__ */ jsx(StatNumber, { value: 500, label: "клиентов в B2B" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container-site mt-16 grid grid-cols-2 md:grid-cols-3 gap-3", children: mosaic.map((item, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden border hairline group aspect-[4/3]", children: [
        /* @__PURE__ */ jsx("img", { src: item.src, alt: item.alt, loading: "lazy", decoding: "async", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" })
      ] }) }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "container-site mt-16", children: /* @__PURE__ */ jsx(CTAButton, { to: "/contacts", children: "Обсудить проект" }) })
    ] }),
    /* @__PURE__ */ jsx(InlineCTA, { variant: "warm", title: "Хотите посмотреть подборку под вашу задачу?", subtitle: "Пришлём кейсы, которые ближе всего к вашему типу проекта.", buttonLabel: "Получить подборку" }),
    /* @__PURE__ */ jsx(ContactBar, {})
  ] });
}
export {
  AboutPage as component
};
