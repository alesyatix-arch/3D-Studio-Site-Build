import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, FileInput, Target, Calculator, PenTool, MessageSquare, PackageCheck, Database } from "lucide-react";
import { S as SiteLayout } from "./Layout-D62JmS4y.js";
import { E as Eyebrow, C as CTAButton, V as VisualPlaceholder, S as SectionHeader, b as PortfolioTile, a as ProcessTimeline } from "./primitives-CJd8Of5e.js";
import { I as InlineCTA, C as ContactBar } from "./ContactBar-DkRAkjfe.js";
import { R as Reveal } from "./Reveal-BT7A1DX1.js";
import { p as pfArchitecture } from "./project-1-cover.png.asset-C7QWtttt.js";
import { p as pfInteriorWarm } from "./portfolio-warm-living.png.asset-DsXnQSZI.js";
import { p as pfFurniture, a as pfKitchen } from "./kitchen-gallery-11.png.asset-Bia_xAdd.js";
import { p as pfAerial } from "./project-2-aerial.png.asset-CDYXQHYE.js";
import { p as pfInteriorLiving } from "./portfolio-sculptural-living.png.asset-BlSmcWBL.js";
const SERVICES = [
  {
    id: "arch",
    label: "Архитектурная визуализация",
    audience: "Девелоперы, застройщики",
    unit: "ракурс",
    unitLabel: "Количество ракурсов",
    pricePerUnit: 15e3,
    min: 1,
    max: 20,
    step: 1,
    defaultQty: 4
  },
  {
    id: "interior",
    label: "Интерьерная визуализация",
    audience: "Дизайнеры, студии, частные заказчики",
    unit: "м²",
    unitLabel: "Площадь интерьера, м²",
    pricePerUnit: 900,
    min: 20,
    max: 400,
    step: 5,
    defaultQty: 60
  },
  {
    id: "product",
    label: "Предметная визуализация",
    audience: "Производители, ритейл",
    unit: "предмет",
    unitLabel: "Количество предметов",
    pricePerUnit: 5e3,
    min: 1,
    max: 50,
    step: 1,
    defaultQty: 6
  },
  {
    id: "scene",
    label: "Интерьерная сцена для товара",
    audience: "Мебель, плитка, сантехника, отделка",
    unit: "сцена",
    unitLabel: "Количество сцен",
    pricePerUnit: 12e3,
    min: 1,
    max: 15,
    step: 1,
    defaultQty: 3
  },
  {
    id: "tour",
    label: "3D-тур / анимация",
    audience: "Недвижимость, презентации, маркетинг",
    unit: null,
    unitLabel: "",
    pricePerUnit: 0,
    min: 0,
    max: 0,
    step: 1,
    defaultQty: 0
  }
];
const URGENCY = [
  { id: "standard", label: "Стандарт", hint: "от 7 дней", multiplier: 1 },
  { id: "fast", label: "Ускоренно", hint: "3–5 дней", multiplier: 1.25 },
  { id: "urgent", label: "Срочно", hint: "от 48 часов", multiplier: 1.5 }
];
function formatPrice(value) {
  return new Intl.NumberFormat("ru-RU").format(Math.round(value)) + " ₽";
}
function PriceCalculator() {
  const [serviceId, setServiceId] = useState(SERVICES[0].id);
  const [urgencyId, setUrgencyId] = useState(URGENCY[0].id);
  const service = SERVICES.find((s) => s.id === serviceId);
  const urgency = URGENCY.find((u) => u.id === urgencyId);
  const [qty, setQty] = useState(service.defaultQty);
  const onSelectService = (id) => {
    setServiceId(id);
    const next = SERVICES.find((s) => s.id === id);
    setQty(next.defaultQty);
  };
  const total = useMemo(() => {
    if (!service.unit) return null;
    return service.pricePerUnit * qty * urgency.multiplier;
  }, [service, qty, urgency]);
  return /* @__PURE__ */ jsx("div", { className: "border hairline bg-background", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 md:p-10 border-b lg:border-b-0 lg:border-r hairline", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground", children: "01 · Направление" }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 grid sm:grid-cols-2 gap-2", children: SERVICES.map((s) => {
          const active = s.id === serviceId;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => onSelectService(s.id),
              className: `text-left px-4 py-3 border transition-colors ${active ? "bg-foreground text-background border-foreground" : "bg-background text-foreground border-hairline hover:border-foreground/40"}`,
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium leading-tight", children: s.label }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `mt-1 text-xs leading-snug ${active ? "text-background/65" : "text-muted-foreground"}`,
                    children: s.audience
                  }
                )
              ]
            },
            s.id
          );
        }) })
      ] }),
      service.unit && /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground", children: "02 · Объём" }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-foreground/80", children: service.unitLabel })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "font-mono text-2xl md:text-3xl font-medium tabular-nums", children: [
            qty,
            /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-muted-foreground font-sans", children: service.unit })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "range",
            min: service.min,
            max: service.max,
            step: service.step,
            value: qty,
            onChange: (e) => setQty(Number(e.target.value)),
            className: "mt-4 w-full accent-accent"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex justify-between font-mono text-[11px] text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { children: service.min }),
          /* @__PURE__ */ jsx("span", { children: service.max })
        ] })
      ] }),
      service.unit && /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground", children: "03 · Сроки" }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-3 gap-2", children: URGENCY.map((u) => {
          const active = u.id === urgencyId;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setUrgencyId(u.id),
              className: `px-3 py-3 border text-left transition-colors ${active ? "bg-foreground text-background border-foreground" : "bg-background text-foreground border-hairline hover:border-foreground/40"}`,
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: u.label }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `mt-1 text-[11px] font-mono ${active ? "text-background/65" : "text-muted-foreground"}`,
                    children: u.hint
                  }
                )
              ]
            },
            u.id
          );
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 p-6 md:p-10 bg-surface flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground", children: "Ориентир по стоимости" }),
      service.unit ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "от" }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-4xl md:text-5xl font-medium tracking-tight tabular-nums leading-none", children: formatPrice(total) })
        ] }),
        /* @__PURE__ */ jsxs("dl", { className: "mt-8 space-y-3 text-sm border-t hairline pt-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Направление" }),
            /* @__PURE__ */ jsx("dd", { className: "text-right", children: service.label })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Объём" }),
            /* @__PURE__ */ jsxs("dd", { className: "text-right tabular-nums", children: [
              qty,
              " ",
              service.unit,
              " × ",
              formatPrice(service.pricePerUnit)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: "Сроки" }),
            /* @__PURE__ */ jsxs("dd", { className: "text-right", children: [
              urgency.label,
              urgency.multiplier > 1 && /* @__PURE__ */ jsxs("span", { className: "ml-1 text-muted-foreground", children: [
                "+",
                Math.round((urgency.multiplier - 1) * 100),
                "%"
              ] })
            ] })
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-medium tracking-tight leading-none", children: "Индивидуально" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: "Стоимость 3D-тура или анимации рассчитываем под задачу: хронометраж, количество сцен, формат и сроки." })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs text-muted-foreground leading-relaxed", children: "Это предварительный ориентир. Финальную смету фиксируем после изучения ТЗ и исходных данных." }),
      /* @__PURE__ */ jsx("div", { className: "mt-auto pt-8", children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/contacts",
          className: "group inline-flex items-center justify-between w-full gap-3 bg-foreground text-background px-5 py-4 hover:bg-foreground/90 transition-colors",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium uppercase tracking-[0.12em]", children: "Получить точный расчёт" }),
            /* @__PURE__ */ jsx(
              ArrowUpRight,
              {
                size: 18,
                strokeWidth: 1.5,
                className: "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              }
            )
          ]
        }
      ) })
    ] })
  ] }) });
}
const url$b = "/__l5e/assets-v1/a7e22d79-dd14-4e67-be69-d7e09d82cd3f/lounge-river.png";
const bgLounge = {
  url: url$b
};
const heroMain = "/assets/hero-main-BxgwmRXf.png";
const heroSmall1 = "/assets/product-D9Qg55XJ.jpg";
const heroSmall2 = "/assets/hero-small2-CrGvL-MB.png";
const url$a = "/__l5e/assets-v1/51fbb2df-8bb4-40dd-b79b-fce92b80d774/tekta.png";
const logoTekta = {
  url: url$a
};
const url$9 = "/__l5e/assets-v1/252aa9c0-0f78-4f42-a93f-c4cced7380db/goodwood.png";
const logoGoodWood = {
  url: url$9
};
const url$8 = "/__l5e/assets-v1/5f06d4e5-23d1-4530-b5bb-71f731d7a992/trest47.png";
const logoTrest47 = {
  url: url$8
};
const url$7 = "/__l5e/assets-v1/4eb14a54-7726-4522-8284-7bf11e4fa41b/hoff.png";
const logoHoff = {
  url: url$7
};
const url$6 = "/__l5e/assets-v1/8f3fcb56-e480-40c0-a5cf-8fd70535c7b0/lemana-pro.png";
const logoLemana = {
  url: url$6
};
const url$5 = "/__l5e/assets-v1/f0347a2c-b510-4cd5-869e-a004f47a028d/roca.png";
const logoRoca = {
  url: url$5
};
const url$4 = "/__l5e/assets-v1/25ab4734-407a-4e13-b00e-8387ba440649/aquaton.png";
const logoAquaton = {
  url: url$4
};
const url$3 = "/__l5e/assets-v1/2ce0c91a-c44d-48cf-8547-5f07101faae8/cersanit.png";
const logoCersanit = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/afdb206b-469c-4077-83dc-7c58b6ecd4c4/estima.png";
const logoEstima = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/602f3888-fe18-4b44-81bb-396a032a7f08/ormatek.png";
const logoOrmatek = {
  url: url$1
};
const url = "/__l5e/assets-v1/bdc45ae9-9b94-4b02-b0db-edaec976e49e/maytoni.png";
const logoMaytoni = {
  url
};
const AUDIENCES = [{
  label: "01",
  title: "Девелоперам и застройщикам",
  text: "Помогаем запускать продажи до завершения строительства: архитектурные рендеры, мастер-кадры, виды с высоты, дворы, входные группы, МОПы и материалы для презентаций.",
  cta: "Перейти к услуге для застройщиков",
  to: "/developers",
  bg: pfArchitecture.url,
  price: "от 15 000 ₽"
}, {
  label: "02",
  title: "Производителям мебели и материалов",
  text: "Создаём визуальный контент для каталогов, сайтов, маркетплейсов и рекламы: товары на белом фоне, интерьерные сцены, цветовые варианты и серии изображений для коллекций.",
  cta: "Перейти к услуге для производителей",
  to: "/manufacturers",
  bg: pfFurniture.url,
  price: "от 5 000 ₽"
}, {
  label: "03",
  title: "Дизайнерам и студиям",
  text: "Делаем интерьерные визуализации по дизайн-проекту, чтобы быстрее согласовывать концепции с клиентами и показывать будущий интерьер до реализации.",
  cta: "Перейти к интерьерной визуализации",
  to: "/designers",
  bg: pfInteriorWarm.url,
  price: "от 900 ₽"
}, {
  label: "04",
  title: "Маркетинговым командам",
  text: "Готовим визуальные материалы под запуск продукта, рекламную кампанию, презентацию, выставку или обновление сайта.",
  cta: "Обсудить задачу",
  to: "/contacts",
  bg: pfInteriorLiving.url,
  price: "от 2 000 ₽"
}];
const WHY = [{
  title: "Недвижимость нужно продавать до сдачи объекта",
  text: "Покупатель принимает решение по образу будущего дома, двора, лобби и окружения."
}, {
  title: "Товар нужно показывать до фотосъёмки и производства линейки",
  text: "3D позволяет быстро подготовить изображения коллекций, цветов, фактур и комплектов."
}, {
  title: "Дизайн нужно согласовывать до ремонта",
  text: "Реалистичная визуализация снижает тревогу клиента и ускоряет принятие решений."
}, {
  title: "Маркетингу нужны материалы сразу в нескольких форматах",
  text: "Один проект даёт изображения для сайта, рекламы, каталога, презентации, соцсетей и печати."
}];
const VALUE = [{
  num: "01",
  title: "Изображения под каналы продаж",
  text: "Сайт, каталог, маркетплейсы, буклеты, наружная реклама, презентации, тендеры."
}, {
  num: "02",
  title: "Единый визуальный стиль",
  text: "Особенно важно для коллекций, серий товаров, ЖК, линеек мебели и отделочных материалов."
}, {
  num: "03",
  title: "Управляемый процесс",
  text: "Понятные этапы, сроки, правки, менеджер проекта и финальные файлы в нужном формате."
}, {
  num: "04",
  title: "Возможность обновлений",
  text: "Сохраняем сцены: можно менять ракурсы, цвета, материалы, сезоны, коллекции и очереди проекта."
}];
const CLIENTS = {
  "Девелоперы и строительство": [{
    name: "TEKTA",
    logo: logoTekta.url
  }, {
    name: "Good Wood",
    logo: logoGoodWood.url
  }, {
    name: "47-й Трест",
    logo: logoTrest47.url
  }],
  "Ритейл и производители": [{
    name: "Hoff",
    logo: logoHoff.url
  }, {
    name: "Лемана ПРО",
    logo: logoLemana.url
  }, {
    name: "Roca",
    logo: logoRoca.url
  }, {
    name: "Aquaton",
    logo: logoAquaton.url
  }, {
    name: "Cersanit",
    logo: logoCersanit.url
  }, {
    name: "Estima",
    logo: logoEstima.url
  }, {
    name: "Ormatek",
    logo: logoOrmatek.url
  }, {
    name: "Maytoni",
    logo: logoMaytoni.url
  }]
};
const PROCESS = [{
  title: "Получаем исходные данные",
  text: "Чертежи, модели, фото, референсы, спецификации, материалы."
}, {
  title: "Уточняем бизнес-задачу",
  text: "Где будут использоваться визуализации: сайт, каталог, реклама, презентация, согласование, маркетплейс."
}, {
  title: "Оцениваем сроки и стоимость",
  text: "Фиксируем объём, ракурсы, формат, этапы и условия."
}, {
  title: "Делаем черновик / пилотный ракурс",
  text: "Согласуем композицию, свет, материалы и подачу."
}, {
  title: "Вносим правки",
  text: "Работаем по согласованным комментариям."
}, {
  title: "Передаём финальные файлы",
  text: "В нужных форматах и разрешениях."
}, {
  title: "Сохраняем сцену",
  text: "Чтобы в будущем быстрее обновлять цвета, ракурсы, коллекции или очереди проекта."
}];
function HomePage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx("section", { className: "border-b hairline", children: /* @__PURE__ */ jsxs("div", { className: "container-site pt-16 md:pt-24 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Студия 3D-визуализации · с 2013" }),
        /* @__PURE__ */ jsx("h1", { className: "display-2 mt-6 max-w-3xl headline-mark", children: /* @__PURE__ */ jsx("span", { children: "3D-визуалзиация для продажи недвижимости, интерьеров и товаров" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed", children: "Создаём фотореалистичные визуальные материалы для девелоперов, производителей, дизайнеров и маркетинговых команд — от одного ракурса до серийного визуального контента." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-foreground/80 max-w-2xl", children: ["Для сайтов, каталогов, презентаций, рекламы и согласований", "Работаем с 2013 года", "Разовые задачи и серийные объёмы", "Ведём проект по этапам: от ТЗ до файлов", "Договор, понятные сроки, ответственный менеджер"].map((b) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-2 w-1.5 h-1.5 bg-accent shrink-0" }),
          b
        ] }, b)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(CTAButton, { to: "/contacts", children: "Получить расчёт проекта" }),
          /* @__PURE__ */ jsx(CTAButton, { to: "/portfolio", variant: "ghost", children: "Смотреть портфолио" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsx(VisualPlaceholder, { src: heroMain, label: "", alt: "Архитектурная визуализация" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx(VisualPlaceholder, { src: heroSmall1, label: "", alt: "Визуализация ванной комнаты", ratio: "aspect-square" }),
          /* @__PURE__ */ jsx(VisualPlaceholder, { src: heroSmall2, label: "", alt: "Интерьерная визуализация", ratio: "aspect-square" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Interest · Для кого работаем", title: "Визуализация под конкретную бизнес-задачу" }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid md:grid-cols-2 gap-px bg-hairline border hairline", children: AUDIENCES.map((a, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs(Link, { to: a.to, className: "relative isolate overflow-hidden bg-background p-8 md:p-10 group flex flex-col h-full accent-bar text-background", children: [
        /* @__PURE__ */ jsx("img", { src: a.bg, alt: "", "aria-hidden": true, className: "absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/60 to-black/35 transition-colors duration-300 group-hover:from-black/90 group-hover:via-black/65" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-background/60", children: a.label }),
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 18, strokeWidth: 1.5, className: "text-background/70 transition-all duration-300 group-hover:text-background group-hover:translate-x-1 group-hover:-translate-y-1" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "display-3 mt-6 text-background flex-1", children: a.title }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between gap-3 text-sm font-medium border-t border-background/20 pt-5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-background/80 group-hover:text-background transition-colors", children: a.cta }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-xs tracking-[0.16em] uppercase text-accent", children: a.price })
        ] })
      ] }) }, a.label)) })
    ] }) }),
    /* @__PURE__ */ jsx(InlineCTA, { variant: "warm", title: "Расскажите про задачу — соберём оптимальный пакет визуализаций", subtitle: "За один рабочий день предложим состав ракурсов, сроки и стоимость под цели проекта.", buttonLabel: "Получить расчёт проекта" }),
    /* @__PURE__ */ jsx("section", { className: "section-pad bg-surface border-y hairline", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Interest · Почему это важно", title: "Когда продукта ещё нет, визуализация становится главным инструментом продаж" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 flex flex-col", children: [
          /* @__PURE__ */ jsx("ol", { className: "divide-y hairline border-y hairline", children: WHY.map((w, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxs("li", { className: "flex gap-6 py-7", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground pt-1 w-8 shrink-0", children: String(i + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-medium leading-snug", children: w.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: w.text })
            ] })
          ] }) }, w.title)) }),
          /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(CTAButton, { to: "/contacts", children: "Обсудить проект" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-6 lg:sticky lg:top-24", children: /* @__PURE__ */ jsx(WhyCarousel, { slides: [{
          src: pfAerial.url,
          alt: "Архитектурная визуализация жилого комплекса"
        }, {
          src: pfInteriorWarm.url,
          alt: "Интерьерная визуализация гостиной"
        }, {
          src: pfFurniture.url,
          alt: "Предметная визуализация гардеробной системы"
        }] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-3xl", children: /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Desire · Что вы получаете", title: "Не просто рендеры, а готовые визуальные материалы для бизнеса" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 grid lg:grid-cols-12 gap-px bg-hairline border hairline items-stretch", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 relative min-h-[420px] lg:min-h-0 overflow-hidden group bg-background", children: [
          /* @__PURE__ */ jsx("img", { src: bgLounge.url, alt: "", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 w-2 h-2 bg-accent" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-7 grid sm:grid-cols-2 gap-px bg-hairline", children: VALUE.map((v, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 70, children: /* @__PURE__ */ jsxs("div", { className: "bg-background p-8 md:p-10 h-full flex flex-col accent-bar group", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-accent", children: v.num }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-semibold mt-4 leading-snug", children: v.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: v.text })
        ] }) }, v.num)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(InlineCTA, { title: "Готовы обсудить визуальный пакет под ваш продукт?", subtitle: "Ответим в течение рабочего дня, предложим формат и сроки.", buttonLabel: "Получить расчёт" }),
    /* @__PURE__ */ jsx("section", { className: "section-pad bg-foreground text-background", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-background/50", children: "Portfolio" }),
          /* @__PURE__ */ jsx("h2", { className: "display-2 mt-4 text-background", children: "Посмотрите, как визуализация работает в разных задачах" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/portfolio", className: "text-sm border-b border-background/30 hover:border-accent transition-colors pb-1", children: "Все проекты →" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 border border-background/10", children: [{
        src: pfArchitecture.url,
        label: "Архитектура",
        caption: "ЖК / старт продаж · мастер-кадр"
      }, {
        src: pfInteriorWarm.url,
        label: "Интерьеры",
        caption: "Жилой интерьер · 2 ракурса"
      }, {
        src: pfFurniture.url,
        label: "Мебель",
        caption: "Каталожный рендер · коллекция"
      }, {
        src: pfAerial.url,
        label: "ЖК",
        caption: "Птичий полёт · окружение"
      }, {
        src: pfKitchen.url,
        label: "Кухни",
        caption: "Интерьерная сцена · коллекция"
      }, {
        src: pfInteriorLiving.url,
        label: "Интерьер",
        caption: "Жилая зона · вечерний свет"
      }].map((t) => /* @__PURE__ */ jsx(PortfolioTile, { src: t.src, label: t.label, caption: t.caption, ratio: "aspect-[4/3]" }, t.label + t.caption)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxs("div", { className: "container-site grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Desire · Почему нам доверяют" }),
        /* @__PURE__ */ jsx("h2", { className: "display-2 mt-4", children: "Работаем с компаниями, для которых важны сроки, качество и управляемость" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-baseline gap-4 border-t hairline pt-8", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-7xl tracking-tighter", children: "12+" }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
            "лет",
            /* @__PURE__ */ jsx("br", {}),
            "на рынке"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-7 grid sm:grid-cols-2 gap-px bg-hairline border hairline", children: [["Командная работа", "Менеджер, визуализаторы, моделлеры, дизайнеры и постобработка."], ["Работаем с объёмом", "Не только один рендер, но и серии для каталогов и крупных объектов."], ["Фиксируем договорённости", "Сроки, стоимость, этапы и результат — до старта."], ["Храним сцены", "Обновления дешевле и быстрее, чем работа с нуля."]].map(([t, s]) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-7", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-base", children: t }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: s })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad bg-surface border-y hairline", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Clients", title: "Нам доверяют девелоперы, производители и ритейлеры" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 space-y-10", children: Object.entries(CLIENTS).map(([group, items]) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow mb-4", children: group }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-x-10 gap-y-6 sm:gap-x-14 border-y hairline py-8", children: items.map((c) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center h-12 text-sm font-display font-medium text-foreground/70", children: [
          c.logo ? /* @__PURE__ */ jsx("img", { src: c.logo, alt: c.name, loading: "lazy", decoding: "async", className: "max-h-10 w-auto object-contain", onError: (e) => {
            const img = e.currentTarget;
            img.style.display = "none";
            const fallback = img.nextElementSibling;
            if (fallback) fallback.style.display = "inline";
          } }) : null,
          /* @__PURE__ */ jsx("span", { style: {
            display: c.logo ? "none" : "inline"
          }, children: c.name })
        ] }, c.name)) })
      ] }, group)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Process", title: "Процесс построен так, чтобы результат был предсказуемым" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 grid lg:grid-cols-12 gap-10", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsx(ProcessTimeline, { steps: PROCESS }) }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 hidden lg:block sticky top-24 self-start", children: /* @__PURE__ */ jsxs("div", { className: "border hairline bg-surface p-7", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-foreground/50", children: "Workflow" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-xl mt-3 leading-tight", children: "Семь шагов от ТЗ до финальных файлов" }),
          /* @__PURE__ */ jsxs("ol", { className: "mt-7 relative", children: [
            /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-foreground/30 to-transparent" }),
            [{
              icon: FileInput,
              label: "Исходные данные"
            }, {
              icon: Target,
              label: "Бизнес-задача"
            }, {
              icon: Calculator,
              label: "Смета и сроки"
            }, {
              icon: PenTool,
              label: "Пилотный ракурс"
            }, {
              icon: MessageSquare,
              label: "Правки"
            }, {
              icon: PackageCheck,
              label: "Финальные файлы"
            }, {
              icon: Database,
              label: "Сохранение сцены"
            }].map(({
              icon: Icon,
              label
            }, i) => /* @__PURE__ */ jsxs("li", { className: "relative flex items-center gap-4 py-2.5", children: [
              /* @__PURE__ */ jsx("span", { className: "relative z-10 w-8 h-8 shrink-0 flex items-center justify-center border hairline bg-background text-foreground", children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4", strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3 min-w-0", children: [
                /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] tracking-[0.18em] text-foreground/40", children: String(i + 1).padStart(2, "0") }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground/85 truncate", children: label })
              ] })
            ] }, label))
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-7 pt-5 border-t hairline grid grid-cols-3 gap-3 text-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-2xl text-accent", children: "7" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.16em] text-foreground/50 mt-1", children: "этапов" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-2xl text-accent", children: "1" }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.16em] text-foreground/50 mt-1", children: "менеджер" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-2xl text-accent", children: "2+" }),
              /* @__PURE__ */ jsxs("div", { className: "text-[10px] uppercase tracking-[0.16em] text-foreground/50 mt-1", children: [
                "дня",
                /* @__PURE__ */ jsx("br", {}),
                "на рендер"
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(InlineCTA, { variant: "dark", title: "Расскажите про задачу — посчитаем по этапам", subtitle: "Фиксируем стоимость и сроки до старта работ.", buttonLabel: "Получить расчёт проекта" }),
    /* @__PURE__ */ jsx("section", { className: "section-pad bg-surface border-y hairline", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Pricing · Калькулятор", title: "Прозрачные ориентиры по стоимости", subtitle: "Выберите направление, объём и сроки — увидите ориентир по цене. Точную смету зафиксируем после изучения ТЗ." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx(PriceCalculator, {}) })
    ] }) }),
    /* @__PURE__ */ jsx(ContactBar, {})
  ] });
}
function WhyCarousel({
  slides
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 2e3);
    return () => clearInterval(id);
  }, [slides.length]);
  return /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden border hairline bg-surface", children: [
    slides.map((s, i) => /* @__PURE__ */ jsx("img", { src: s.src, alt: s.alt, loading: "lazy", decoding: "async", className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}` }, s.src)),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2", children: slides.map((_, i) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setIndex(i), "aria-label": `Слайд ${i + 1}`, className: `h-1.5 transition-all duration-300 ${i === index ? "w-8 bg-background" : "w-4 bg-background/50 hover:bg-background/80"}` }, i)) })
  ] });
}
export {
  HomePage as component
};
