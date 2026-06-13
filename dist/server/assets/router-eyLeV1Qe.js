import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
const appCss = "/assets/styles-BoUYOEm8.css";
function ImageLightbox() {
  const [src, setSrc] = useState(null);
  const [alt, setAlt] = useState("");
  useEffect(() => {
    const onClick = (e) => {
      const target = e.target;
      if (!target) return;
      const img = target.closest("img");
      if (!img) return;
      if (img.dataset.noZoom !== void 0) return;
      if (img.naturalWidth && img.naturalWidth < 80) return;
      if (img.closest("a, button")) return;
      e.preventDefault();
      e.stopPropagation();
      setSrc(img.currentSrc || img.src);
      setAlt(img.alt || "");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  useEffect(() => {
    if (!src) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSrc(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [src]);
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `img:not([data-no-zoom]):not(a img):not(button img){cursor:zoom-in}`;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  if (!src) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200",
      onClick: () => setSrc(null),
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": "Закрыть",
            className: "absolute top-4 right-4 h-10 w-10 inline-flex items-center justify-center text-background hover:text-accent transition-colors",
            onClick: () => setSrc(null),
            children: /* @__PURE__ */ jsx(X, { size: 24, strokeWidth: 1.5 })
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src,
            alt,
            "data-no-zoom": true,
            className: "max-w-[95vw] max-h-[95vh] object-contain shadow-2xl cursor-zoom-out",
            onClick: (e) => {
              e.stopPropagation();
              setSrc(null);
            }
          }
        )
      ]
    }
  );
}
const SITE_URL = "https://3d-kulagin.com".replace(/\/$/, "");
function siteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "3D-KULAGIN" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "3D-KULAGIN",
        description: "Студия 3D-визуализации для девелоперов, производителей и дизайнеров с 2013 года.",
        url: SITE_URL,
        email: "info@3d-kulagin.ru",
        telephone: "+7 (495) 476-57-88",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Москва",
          addressCountry: "RU"
        }
      })
    }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(ImageLightbox, {})
  ] });
}
const $$splitComponentImporter$7 = () => import("./prices-CdVQNeuk.js");
const Route$7 = createFileRoute("/prices")({
  head: () => ({
    meta: [{
      title: "Стоимость 3D-визуализации — 3D-KULAGIN"
    }, {
      name: "description",
      content: "Ориентиры по стоимости архитектурной, интерьерной и предметной 3D-визуализации."
    }, {
      property: "og:title",
      content: "Стоимость 3D-визуализации — 3D-KULAGIN"
    }, {
      property: "og:description",
      content: "Цены на архитектурную, интерьерную и предметную визуализацию. Расчёт по ТЗ."
    }, {
      property: "og:url",
      content: siteUrl("/prices")
    }],
    links: [{
      rel: "canonical",
      href: siteUrl("/prices")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./portfolio-B5kibBfo.js");
const Route$6 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: "Портфолио — 3D-KULAGIN"
    }, {
      name: "description",
      content: "Примеры проектов студии 3D-KULAGIN: архитектурная визуализация, визуализация для производителей и интерьерная визуализация."
    }, {
      property: "og:title",
      content: "Портфолио — 3D-KULAGIN"
    }, {
      property: "og:description",
      content: "Архитектура, интерьеры, предметная визуализация. Реализованные проекты студии."
    }, {
      property: "og:url",
      content: siteUrl("/portfolio")
    }],
    links: [{
      rel: "canonical",
      href: siteUrl("/portfolio")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./manufacturers-ClhZw9Qq.js");
const Route$5 = createFileRoute("/manufacturers")({
  head: () => ({
    meta: [{
      title: "3D-визуализация для производителей мебели и материалов — 3D-KULAGIN"
    }, {
      name: "description",
      content: "Предметные рендеры, интерьерные сцены и серии изображений для каталогов, маркетплейсов и сайтов производителей мебели, плитки, сантехники и отделки."
    }, {
      property: "og:title",
      content: "3D-визуализация для производителей и ритейла"
    }, {
      property: "og:description",
      content: "Замена дорогой фотосъёмки. Серийный визуальный контент для коллекций и каталогов."
    }, {
      property: "og:url",
      content: siteUrl("/manufacturers")
    }],
    links: [{
      rel: "canonical",
      href: siteUrl("/manufacturers")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./developers-CwONUFTo.js");
const Route$4 = createFileRoute("/developers")({
  head: () => ({
    meta: [{
      title: "3D-визуализация для застройщиков — 3D-KULAGIN"
    }, {
      name: "description",
      content: "Архитектурная 3D-визуализация для девелоперов: мастер-кадры, дворы, виды с высоты, входные группы, МОПы для старта продаж, рекламы и презентаций."
    }, {
      property: "og:title",
      content: "3D-визуализация для девелоперов и застройщиков"
    }, {
      property: "og:description",
      content: "Продавайте объект до завершения строительства. Архитектурные рендеры и материалы для отдела продаж."
    }, {
      property: "og:url",
      content: siteUrl("/developers")
    }],
    links: [{
      rel: "canonical",
      href: siteUrl("/developers")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./designers-D_U_6gfv.js");
const Route$3 = createFileRoute("/designers")({
  head: () => ({
    meta: [{
      title: "Интерьерная 3D-визуализация для дизайнеров — 3D-KULAGIN"
    }, {
      name: "description",
      content: "Фотореалистичная визуализация интерьеров по дизайн-проекту для быстрого согласования концепции с клиентом."
    }, {
      property: "og:title",
      content: "3D-визуализация интерьеров для дизайнеров и студий"
    }, {
      property: "og:description",
      content: "Согласуйте дизайн-проект быстрее. Реалистичные рендеры по вашему проекту."
    }, {
      property: "og:url",
      content: siteUrl("/designers")
    }],
    links: [{
      rel: "canonical",
      href: siteUrl("/designers")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contacts-BChKXsHw.js");
const Route$2 = createFileRoute("/contacts")({
  head: () => ({
    meta: [{
      title: "Контакты — 3D-KULAGIN"
    }, {
      name: "description",
      content: "Свяжитесь со студией 3D-визуализации 3D-KULAGIN. Расчёт проекта по ТЗ."
    }, {
      property: "og:title",
      content: "Контакты — 3D-KULAGIN"
    }, {
      property: "og:description",
      content: "Email, телефон, WhatsApp и Telegram. Расчёт проекта по ТЗ."
    }, {
      property: "og:url",
      content: siteUrl("/contacts")
    }],
    links: [{
      rel: "canonical",
      href: siteUrl("/contacts")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-BXuiMCDt.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "О студии — 3D-KULAGIN"
    }, {
      name: "description",
      content: "Команда 3D-визуализаторов, моделлеров и менеджеров. Работаем с 2013 года."
    }, {
      property: "og:title",
      content: "О студии — 3D-KULAGIN"
    }, {
      property: "og:description",
      content: "12 лет на рынке. 5000+ проектов. 500+ B2B-клиентов."
    }, {
      property: "og:url",
      content: siteUrl("/about")
    }],
    links: [{
      rel: "canonical",
      href: siteUrl("/about")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-lnN4SjLO.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "3D-KULAGIN — 3D-визуализация для бизнеса с 2013 года"
    }, {
      name: "description",
      content: "Студия 3D-визуализации для девелоперов, производителей и дизайнеров. Архитектура, интерьер, предметные рендеры и серии для каталогов."
    }, {
      property: "og:title",
      content: "3D-KULAGIN — визуальный продакшн для бизнеса"
    }, {
      property: "og:description",
      content: "Фотореалистичные 3D-визуализации для продаж недвижимости, каталогов и презентаций."
    }, {
      property: "og:url",
      content: siteUrl("/")
    }],
    links: [{
      rel: "canonical",
      href: siteUrl("/")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const PricesRoute = Route$7.update({
  id: "/prices",
  path: "/prices",
  getParentRoute: () => Route$8
});
const PortfolioRoute = Route$6.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$8
});
const ManufacturersRoute = Route$5.update({
  id: "/manufacturers",
  path: "/manufacturers",
  getParentRoute: () => Route$8
});
const DevelopersRoute = Route$4.update({
  id: "/developers",
  path: "/developers",
  getParentRoute: () => Route$8
});
const DesignersRoute = Route$3.update({
  id: "/designers",
  path: "/designers",
  getParentRoute: () => Route$8
});
const ContactsRoute = Route$2.update({
  id: "/contacts",
  path: "/contacts",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactsRoute,
  DesignersRoute,
  DevelopersRoute,
  ManufacturersRoute,
  PortfolioRoute,
  PricesRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
