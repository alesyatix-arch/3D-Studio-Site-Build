import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout } from "./Layout-D62JmS4y.js";
import { E as Eyebrow, P as PricingTable, C as CTAButton } from "./primitives-CJd8Of5e.js";
import { C as ContactBar, I as InlineCTA } from "./ContactBar-DkRAkjfe.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const bgExterior2 = "/assets/exterior2-2kL_0tKS.jpg";
const SplitComponent = () => /* @__PURE__ */ jsxs(SiteLayout, { children: [
  /* @__PURE__ */ jsxs("section", { className: "relative border-b hairline overflow-hidden", children: [
    /* @__PURE__ */ jsx("img", { src: bgExterior2, alt: "", loading: "eager", decoding: "async", fetchPriority: "high", className: "absolute inset-0 w-full h-full object-cover opacity-15" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" }),
    /* @__PURE__ */ jsxs("div", { className: "relative container-site pt-16 md:pt-24 pb-12", children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "Pricing" }),
      /* @__PURE__ */ jsx("h1", { className: "display-2 mt-6 max-w-3xl headline-mark", children: /* @__PURE__ */ jsx("span", { children: "Стоимость 3D-визуализации" }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed", children: "Ориентиры по основным направлениям. Точная стоимость зависит от ТЗ, исходных данных, количества ракурсов, сроков и формата использования." })
    ] })
  ] }),
  /* @__PURE__ */ jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsx("div", { className: "container-site max-w-5xl", children: /* @__PURE__ */ jsx(PricingTable, { cols: ["Направление", "Цена от", "Срок от"], rows: [["Архитектурная визуализация", "от 15 000 ₽ / ракурс", "от 4 дней"], ["Интерьерная визуализация", "от 900 ₽ / м²", "от 2 дней"], ["Предметная визуализация", "от 5 000 ₽ / предмет", "от 1 дня"], ["Интерьерная сцена для товара", "от 12 000 ₽", "от 2 дней"], ["Дополнительный ракурс", "от 2 000 ₽", "от 1 дня"], ["Полиграфическое разрешение", "от 2 000 ₽", "от 1 дня"], ["3D-тур / анимация", "Индивидуально", "По ТЗ"]] }) }) }),
  /* @__PURE__ */ jsx("section", { className: "section-pad border-t hairline bg-surface/40", children: /* @__PURE__ */ jsxs("div", { className: "container-site max-w-5xl grid md:grid-cols-2 gap-10", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Eyebrow, { children: "От чего зависит стоимость" }),
      /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3 text-sm", children: ["Сложность объекта", "Наличие исходных данных", "Количество ракурсов", "Детализация", "Окружение", "Сроки", "Разрешение", "Количество правок", "Необходимость моделирования", "Передача исходной сцены"].map((f) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 border-b hairline pb-3", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-2 w-1 h-1 bg-accent shrink-0" }),
        f
      ] }, f)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-background border hairline p-8 md:p-10 flex flex-col accent-bar group", children: [
      /* @__PURE__ */ jsx("h2", { className: "display-3", children: "Рассчитаем точную стоимость по вашему ТЗ" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed flex-1", children: "Пришлите вводные — оценим объём, ракурсы и сроки. Ответим в течение рабочего дня." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(CTAButton, { to: "/contacts", children: "Получить расчёт" }) })
    ] })
  ] }) }),
  /* @__PURE__ */ jsx(ContactBar, {}),
  /* @__PURE__ */ jsx(InlineCTA, { variant: "dark", title: "Получить точный расчёт под объём и сроки", subtitle: "Цены в таблице — ориентиры. Финальная стоимость зависит от вашего ТЗ.", buttonLabel: "Получить расчёт проекта" })
] });
export {
  SplitComponent as component
};
