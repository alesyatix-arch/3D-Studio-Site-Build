import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { X, Menu, ArrowUpRight } from "lucide-react";
const NAV = [
  { to: "/developers", label: "Для застройщиков" },
  { to: "/manufacturers", label: "Для производителей" },
  { to: "/designers", label: "Для дизайнеров" },
  { to: "/portfolio", label: "Портфолио" },
  { to: "/prices", label: "Цены" },
  { to: "/about", label: "О студии" },
  { to: "/contacts", label: "Контакты" }
];
function Header() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-40 bg-background/90 backdrop-blur border-b hairline", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-site flex h-16 items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "font-display font-bold tracking-tight text-base", children: [
        "3D",
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "·" }),
        "KULAGIN"
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-7", children: [
        NAV.slice(0, 3).map((item) => /* @__PURE__ */ jsx(
          Link,
          {
            to: item.to,
            className: "text-[13px] text-foreground/80 hover:text-foreground transition-colors story-link",
            activeProps: { className: "text-foreground font-medium" },
            children: item.label
          },
          item.to
        )),
        /* @__PURE__ */ jsx("span", { className: "h-3 w-px bg-hairline" }),
        NAV.slice(3).map((item) => /* @__PURE__ */ jsx(
          Link,
          {
            to: item.to,
            className: "text-[13px] text-muted-foreground hover:text-foreground transition-colors story-link",
            activeProps: { className: "text-foreground" },
            children: item.label
          },
          item.to
        ))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/contacts",
            className: "group hidden md:inline-flex items-center gap-2 h-10 pl-5 pr-3 bg-foreground text-background text-[13px] font-medium hover:bg-foreground/85 transition-colors",
            children: [
              "Получить расчёт",
              /* @__PURE__ */ jsx("span", { className: "inline-flex items-center justify-center w-7 h-7 bg-accent text-foreground transition-transform duration-300 group-hover:translate-x-0.5", children: "→" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "lg:hidden p-2 -mr-2",
            onClick: () => setOpen(!open),
            "aria-label": "Меню",
            children: open ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Menu, { size: 20 })
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "lg:hidden border-t hairline", children: /* @__PURE__ */ jsxs("nav", { className: "container-site py-6 flex flex-col gap-4", children: [
      NAV.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          to: item.to,
          onClick: () => setOpen(false),
          className: "text-base text-foreground",
          children: item.label
        },
        item.to
      )),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contacts",
          onClick: () => setOpen(false),
          className: "mt-2 inline-flex items-center justify-center h-11 px-5 bg-foreground text-background text-sm font-medium",
          children: "Получить расчёт"
        }
      )
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-foreground text-background mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container-site py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-lg tracking-tight", children: "3D·KULAGIN" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-background/60 leading-relaxed", children: "Визуальный продакшн для недвижимости, производителей и интерьерного бизнеса. С 2013 года." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-background/50", children: "Аудитории" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/developers", className: "hover:text-accent transition-colors", children: "Застройщикам" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/manufacturers", className: "hover:text-accent transition-colors", children: "Производителям" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/designers", className: "hover:text-accent transition-colors", children: "Дизайнерам" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-background/50", children: "Студия" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/portfolio", className: "hover:text-accent transition-colors", children: "Портфолио" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/prices", className: "hover:text-accent transition-colors", children: "Цены" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-accent transition-colors", children: "О студии" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contacts", className: "hover:text-accent transition-colors", children: "Контакты" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-background/50", children: "Контакты" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-3 text-sm text-background/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:info@3d-kulagin.ru", className: "hover:text-accent transition-colors", children: "info@3d-kulagin.ru" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+74954765788", className: "hover:text-accent transition-colors", children: "+7 (495) 476-57-88" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://api.whatsapp.com/send?phone=79687607584", target: "_blank", rel: "noopener noreferrer", className: "hover:text-accent transition-colors", children: "WhatsApp" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://t.me/Darya3DV", target: "_blank", rel: "noopener noreferrer", className: "hover:text-accent transition-colors", children: "Telegram" }) }),
          /* @__PURE__ */ jsx("li", { className: "text-background/50", children: "Москва" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/40", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " 3D-KULAGIN. Все права защищены."
      ] }),
      /* @__PURE__ */ jsx("div", { children: "Студия 3D-визуализации" })
    ] })
  ] }) });
}
function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: "/contacts",
      "aria-label": "Получить расчёт проекта",
      className: `md:hidden fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 h-12 px-5 bg-foreground text-background text-sm font-medium shadow-lg transition-all duration-300 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`,
      children: [
        "Расчёт проекта",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 16, strokeWidth: 1.5 })
      ]
    }
  );
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen flex flex-col text-foreground", children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "site-grid" }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "site-grain" }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "site-warm" }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "relative flex-1", children }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingCTA, {})
  ] });
}
export {
  SiteLayout as S
};
