import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
function InlineCTA({
  title = "Получить расчёт проекта",
  subtitle = "Пришлите вводные — оценим объём, ракурсы и сроки в течение рабочего дня.",
  buttonLabel = "Получить расчёт",
  to = "/contacts",
  variant = "light"
}) {
  const styles = variant === "dark" ? "bg-foreground text-background" : variant === "warm" ? "bg-[color:var(--color-accent)]/15 border-y hairline" : "bg-surface border-y hairline";
  const btn = variant === "dark" ? "bg-background text-foreground hover:bg-accent" : "bg-foreground text-background hover:bg-foreground/85";
  return /* @__PURE__ */ jsx("section", { className: `relative ${styles}`, children: /* @__PURE__ */ jsxs("div", { className: "container-site py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: `eyebrow ${variant === "dark" ? "text-background/50" : ""}`, children: "Заявка" }),
      /* @__PURE__ */ jsx("h3", { className: `mt-3 font-display font-semibold text-xl md:text-2xl tracking-tight leading-snug ${variant === "dark" ? "text-background" : ""}`, children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: `mt-2 text-sm leading-relaxed ${variant === "dark" ? "text-background/70" : "text-muted-foreground"}`, children: subtitle })
    ] }),
    /* @__PURE__ */ jsxs(
      Link,
      {
        to,
        className: `inline-flex items-center gap-2 h-12 px-6 text-sm font-medium transition-colors whitespace-nowrap ${btn}`,
        children: [
          buttonLabel,
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 16, strokeWidth: 1.5 })
        ]
      }
    )
  ] }) });
}
function ContactBar() {
  return /* @__PURE__ */ jsx("section", { className: "border-y hairline bg-surface", children: /* @__PURE__ */ jsx("div", { className: "container-site py-10", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6 sm:grid-cols-2 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow text-muted-foreground", children: "Контакты" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "mailto:info@3d-kulagin.ru",
          className: "mt-2 block text-xl md:text-2xl font-display hover:text-accent transition-colors",
          children: "info@3d-kulagin.ru"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sm:text-right", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow text-muted-foreground", children: "Телефон" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "tel:+74954765788",
          className: "mt-2 block text-xl md:text-2xl font-display hover:text-accent transition-colors",
          children: "+7 (495) 476-57-88"
        }
      )
    ] })
  ] }) }) });
}
export {
  ContactBar as C,
  InlineCTA as I
};
