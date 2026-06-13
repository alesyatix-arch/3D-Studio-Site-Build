import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { S as SiteLayout } from "./Layout-D62JmS4y.js";
import { E as Eyebrow, C as CTAButton, S as SectionHeader, P as PricingTable, a as ProcessTimeline } from "./primitives-CJd8Of5e.js";
import { I as InlineCTA, C as ContactBar } from "./ContactBar-DkRAkjfe.js";
import { p as pfArchitecture } from "./project-1-cover.png.asset-C7QWtttt.js";
import { p as project1Entry, a as project1Yard, b as project1View, c as project2Cover, e as project2Entry, d as project2Exterior, f as project2View, g as project4Cover, i as project4Street, h as project4Aerial, j as project4Yard, k as project4Evening } from "./project-4-evening.png.asset-Cw9cRGIT.js";
import { p as pfAerial } from "./project-2-aerial.png.asset-CDYXQHYE.js";
import "@tanstack/react-router";
import "lucide-react";
const bgDevelopersHero = "/assets/developers-hero-lZ7M5Hk4.jpg";
const bgDevelopersHero2 = "/assets/developers-hero-2-DJc_PBEq.png";
const bgDevelopersHero3 = "/assets/developers-hero-3-WykXn_Al.png";
const url$7 = "/__l5e/assets-v1/b5eebb01-4b7a-4311-8dcd-0bc03871e538/developers-hero-winter.png";
const bgDevelopersHeroWinter = {
  url: url$7
};
const url$6 = "/__l5e/assets-v1/904bf21a-70d5-4060-b86c-f5419b030583/project-2-winter-entry.png";
const project2WinterEntry = {
  url: url$6
};
const url$5 = "/__l5e/assets-v1/04d81225-c30b-4186-876c-412761691da4/project-2-winter-aerial.png";
const project2WinterAerial = {
  url: url$5
};
const url$4 = "/__l5e/assets-v1/9e319e5c-50b8-4395-8266-8d20b1d7fe27/project-3-new-1.png";
const project3New1 = {
  url: url$4
};
const url$3 = "/__l5e/assets-v1/50d1c333-c9a5-4f45-a015-2ac3026df49e/project-3-new-2.png";
const project3New2 = {
  url: url$3
};
const url$2 = "/__l5e/assets-v1/9238e8e5-66f0-46ac-a543-5e24c96cc256/project-3-new-3.png";
const project3New3 = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/f5eed9b4-79a8-4fc0-bbf3-dbb2ba38ec90/project-3-new-4.png";
const project3New4 = {
  url: url$1
};
const url = "/__l5e/assets-v1/78914080-63d4-413e-8904-072c8097ee61/project-3-new-5.png";
const project3New5 = {
  url
};
function HeroCarousel({
  images
}) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 3e3);
    return () => clearInterval(t);
  }, [images.length]);
  return /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] overflow-hidden border hairline bg-surface", children: images.map((src, i) => /* @__PURE__ */ jsx("img", { src, alt: "", loading: i === 0 ? "eager" : "lazy", decoding: "async", className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-[3000ms] ease-in-out ${i === idx ? "opacity-100" : "opacity-0"}` }, src)) });
}
function RealizedProjectsShowcase({
  projects
}) {
  const [openProjectId, setOpenProjectId] = useState(projects[0]?.id ?? null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const activeProject = useMemo(() => projects.find((project) => project.id === openProjectId) ?? projects[0], [openProjectId, projects]);
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [openProjectId]);
  if (!activeProject) {
    return null;
  }
  const selectedImage = activeProject.gallery[selectedImageIndex] ?? activeProject.cover;
  return /* @__PURE__ */ jsxs("div", { className: "mt-12 space-y-6", children: [
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: projects.map((project, index) => {
      const isOpen = project.id === activeProject.id;
      return /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setOpenProjectId(project.id), "aria-expanded": isOpen, className: "group relative overflow-hidden border hairline bg-background text-left transition-colors hover:bg-background/95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent", children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-[5/6] overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: project.cover.url, alt: project.cover.alt, loading: "lazy", decoding: "async", "data-no-zoom": true, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "font-mono text-[10px] tracking-widest text-background/60", children: [
            "ПРОЕКТ ",
            String(index + 1).padStart(2, "0")
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 font-display text-xl text-background", children: project.title })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-4 border border-background/20 bg-foreground/20 px-3 py-1 text-[10px] font-mono tracking-[0.2em] text-background backdrop-blur-sm", children: isOpen ? "ОТКРЫТО" : "СМОТРЕТЬ" })
      ] }) }, project.id);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "border border-background/10 bg-background/5 p-4 md:p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-end justify-between gap-3", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] tracking-widest text-background/50", children: activeProject.title.toUpperCase() }),
          /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-2xl text-background md:text-3xl", children: "Галерея проекта" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "relative aspect-[16/10] overflow-hidden border border-background/10 bg-foreground/10", children: /* @__PURE__ */ jsx("img", { src: selectedImage.url, alt: selectedImage.alt, "data-no-zoom": true, className: "absolute inset-0 h-full w-full object-cover", loading: "eager", decoding: "async" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2", children: activeProject.gallery.map((image, index) => {
        const isSelected = index === selectedImageIndex;
        return /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setSelectedImageIndex(index), "aria-pressed": isSelected, className: `group relative overflow-hidden border text-left transition-all ${isSelected ? "border-background bg-background/10" : "border-background/10 bg-foreground/5 hover:bg-background/5"}`, children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: image.url, alt: image.alt, loading: "lazy", decoding: "async", "data-no-zoom": true, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" }) }) }, image.url);
      }) })
    ] }) })
  ] });
}
const TASKS = [["Старт продаж", "Мастер-кадр, фасады, двор, птичий полёт"], ["Презентация инвесторам", "Общие виды, генплан, окружение, вечерние сценарии"], ["Реклама", "Кадры под баннеры, наружку, digital"], ["Офис продаж", "Визуализации, схемы, виды, презентационные материалы"], ["Согласования", "Фасады, материалы, посадка объекта, окружение"], ["Новая очередь", "Обновление старой сцены без работы с нуля"]];
const OBJECTS = [{
  title: "Жилые комплексы и МКД",
  text: "Показываем архитектуру, дворы, благоустройство, входные группы и сценарий жизни."
}, {
  title: "Коттеджные посёлки",
  text: "Передаём атмосферу загородной жизни, приватность, ландшафт, свет, окружение."
}, {
  title: "Коммерческая недвижимость",
  text: "Показываем входы, витрины, потоки людей, городскую среду и инвестпривлекательность."
}, {
  title: "Промышленные объекты",
  text: "Понятная визуализация масштаба, логистики, территории и функциональных зон."
}, {
  title: "МОПы и лобби",
  text: "Интерьерные зоны, которые влияют на восприятие класса объекта."
}, {
  title: "Частные застройки",
  text: "Загородные дома и резиденции: архитектура, фасады, ландшафт и видовые ракурсы для презентации заказчику."
}];
const SHOTS = [["Мастер-кадр", "Главный образ проекта"], ["Птичий полёт", "Масштаб, генплан, окружение"], ["Двор", "Жизнь внутри комплекса"], ["Входная группа", "Уровень и класс объекта"], ["Вечерний ракурс", "Эмоция и рекламная выразительность"], ["Крупный план фасада", "Материалы, детали, качество"], ["Вид из окна", "Ценность конкретных квартир"], ["Паркинг / подъезды", "Практическое удобство"]];
const PROCESS = [{
  title: "Получаем чертежи, генплан, фасады, референсы",
  text: "Базовый комплект для понимания объекта и контекста."
}, {
  title: "Уточняем задачу",
  text: "Продажи, инвесторы, согласования, реклама — от этого зависит набор ракурсов."
}, {
  title: "Предлагаем набор ракурсов",
  text: "Минимальный и расширенный пакет под цели проекта."
}, {
  title: "Делаем черновой ракурс",
  text: "Композиция, ключевой ракурс, базовое освещение."
}, {
  title: "Согласуем композицию, свет, окружение",
  text: "Этап работы с правками."
}, {
  title: "Готовим финальные изображения",
  text: "Финальный свет, материалы, постобработка."
}, {
  title: "Передаём файлы под нужные каналы",
  text: "Web, печать, презентация, наружка."
}, {
  title: "Сохраняем сцену",
  text: "Для будущих обновлений и новых очередей."
}];
const REALIZED_PROJECTS = [{
  id: "project-01",
  title: "Жилой комплекс",
  location: "Первая реализованная позиция",
  cover: {
    url: pfArchitecture.url,
    alt: "Главный вечерний ракурс реализованного жилого комплекса"
  },
  gallery: [{
    url: pfArchitecture.url,
    alt: "Общий вечерний вид жилого комплекса"
  }, {
    url: project1Entry.url,
    alt: "Входная группа жилого комплекса в вечернем освещении"
  }, {
    url: project1Yard.url,
    alt: "Благоустроенный двор жилого комплекса на закате"
  }, {
    url: project1View.url,
    alt: "Вид с верхнего этажа и остеклённый угол квартиры"
  }]
}, {
  id: "project-02",
  title: "Жилой квартал",
  location: "Вторая реализованная позиция",
  cover: {
    url: project2Cover.url,
    alt: "Главный ракурс жилого квартала с прогулочной зоной"
  },
  gallery: [{
    url: project2Cover.url,
    alt: "Общий вид жилого квартала с благоустроенной территорией"
  }, {
    url: project2Entry.url,
    alt: "Входная группа и лобби жилого квартала"
  }, {
    url: project2Exterior.url,
    alt: "Фасады жилого квартала в вечернем освещении"
  }, {
    url: pfAerial.url,
    alt: "Вид с высоты на территорию жилого квартала"
  }, {
    url: project2View.url,
    alt: "Вид из квартиры на городской парк и интерьерное пространство"
  }, {
    url: project2WinterEntry.url,
    alt: "Зимний вид входной группы жилого квартала с вечерним освещением"
  }, {
    url: project2WinterAerial.url,
    alt: "Жилой квартал зимой на закате с заснеженным благоустройством"
  }]
}, {
  id: "project-03",
  title: "Жилой ансамбль",
  location: "Третья реализованная позиция",
  cover: {
    url: project3New1.url,
    alt: "Вечерний двор жилого ансамбля с подсветкой и благоустройством"
  },
  gallery: [{
    url: project3New1.url,
    alt: "Вечерний двор жилого ансамбля с подсветкой и благоустройством"
  }, {
    url: project3New2.url,
    alt: "Уличный ракурс жилого ансамбля в тёплом вечернем свете"
  }, {
    url: project3New3.url,
    alt: "Панорамный вид из интерьера на жилой ансамбль и городской пейзаж"
  }, {
    url: project3New4.url,
    alt: "Зимний фасад жилого ансамбля с заснеженной территорией"
  }, {
    url: project3New5.url,
    alt: "Зимний двор жилого ансамбля с прогулочной зоной и подсветкой"
  }]
}, {
  id: "project-04",
  title: "Коттеджный посёлок",
  location: "Четвёртая реализованная позиция",
  cover: {
    url: project4Cover.url,
    alt: "Главный ракурс коттеджного посёлка с прогулочной аллеей"
  },
  gallery: [{
    url: project4Cover.url,
    alt: "Пешеходная аллея и фасады домов в коттеджном посёлке"
  }, {
    url: project4Street.url,
    alt: "Уличный ракурс с линией домов и благоустроенной территорией"
  }, {
    url: project4Aerial.url,
    alt: "Вид с высоты на генеральный план коттеджного посёлка"
  }, {
    url: project4Yard.url,
    alt: "Детская площадка и общественное пространство внутри посёлка"
  }, {
    url: project4Evening.url,
    alt: "Вечерний приватный двор с террасой и мягкой подсветкой"
  }]
}];
function DevelopersPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx("section", { className: "border-b hairline", children: /* @__PURE__ */ jsxs("div", { className: "container-site grid items-end gap-10 pb-16 pt-16 md:pb-24 md:pt-24 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Для девелоперов и застройщиков" }),
        /* @__PURE__ */ jsx("h1", { className: "display-2 mt-6 max-w-3xl headline-mark", children: /* @__PURE__ */ jsx("span", { children: "Архитектурная 3D-визуализация для девелоперов" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground", children: "Создаём рендеры жилых комплексов, коттеджных посёлков, коммерческой недвижимости и инфраструктуры — для отдела продаж, маркетинга и согласований." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-8 grid max-w-2xl gap-x-8 gap-y-3 text-sm text-foreground/80 sm:grid-cols-2", children: ["Мастер-кадры и виды с высоты птичьего полёта", "Дворы, входные группы, МОПы, лобби", "Дневные и вечерние сценарии", "Серии ракурсов под разные каналы", "Сохранение сцен для новых очередей"].map((b) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 bg-accent" }),
          b
        ] }, b)) }),
        /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(CTAButton, { to: "/contacts", children: "Получить КП по объекту" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsx(HeroCarousel, { images: [bgDevelopersHero, bgDevelopersHeroWinter.url, bgDevelopersHero2, bgDevelopersHero3] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Tasks · Какие задачи закрываем", title: "Каждый ракурс должен решать задачу" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 border hairline", children: TASKS.map(([t, d], i) => /* @__PURE__ */ jsxs("div", { className: `grid gap-6 px-6 py-6 md:grid-cols-12 md:px-8 ${i < TASKS.length - 1 ? "border-b hairline" : ""}`, children: [
        /* @__PURE__ */ jsx("div", { className: "font-display font-semibold md:col-span-4", children: t }),
        /* @__PURE__ */ jsx("div", { className: "text-muted-foreground md:col-span-8", children: d })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad border-y hairline bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Objects", title: "Какие объекты визуализируем" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-px border hairline bg-hairline md:grid-cols-2 lg:grid-cols-3", children: OBJECTS.map((o) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-semibold", children: o.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: o.text })
      ] }, o.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Shots", title: "Ракурсы и их роль в продажах" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-px border hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4", children: SHOTS.map(([t, d], i) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] tracking-widest text-accent", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 font-display font-semibold", children: t }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: d })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad bg-foreground text-background", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-end justify-between gap-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-background/50", children: "Portfolio" }),
        /* @__PURE__ */ jsx("h2", { className: "display-2 mt-4 text-background", children: "Реализованные проекты" })
      ] }) }),
      /* @__PURE__ */ jsx(RealizedProjectsShowcase, { projects: REALIZED_PROJECTS })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad border-y hairline bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Pricing", title: "Стоимость зависит от объёма, сложности объекта и количества ракурсов" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx(PricingTable, { cols: ["Услуга", "Цена от"], rows: [["Экстерьерная визуализация", "от 15 000 ₽ / ракурс"], ["Ракурс с высоты птичьего полёта", "от 20 000 ₽"], ["Дополнительный ракурс", "от 5 000 ₽"], ["Вечернее освещение", "+30%"], ["Другое время года", "+50%"], ["Разрешение для полиграфии", "от 2 000 ₽"], ["Передача готовой сцены", "Индивидуально"]] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(CTAButton, { to: "/contacts", children: "Получить расчёт по чертежам" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-pad", children: /* @__PURE__ */ jsxs("div", { className: "container-site", children: [
      /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Process", title: "Как мы ведём проект" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx(ProcessTimeline, { steps: PROCESS }) })
    ] }) }),
    /* @__PURE__ */ jsx(InlineCTA, { variant: "dark", title: "Хотите узнать стоимость по своему объекту?", subtitle: "Пришлите чертежи и генплан — оценим в течение рабочего дня.", buttonLabel: "Получить расчёт проекта" }),
    /* @__PURE__ */ jsx(ContactBar, {})
  ] });
}
export {
  DevelopersPage as component
};
