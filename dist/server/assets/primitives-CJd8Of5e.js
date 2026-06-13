import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
function Eyebrow({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "eyebrow", children });
}
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  mark = false
}) {
  return /* @__PURE__ */ jsxs("div", { className: align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-3xl", children: [
    eyebrow && /* @__PURE__ */ jsx(Eyebrow, { children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: `display-2 mt-4 ${mark ? "headline-mark" : ""}`, children: mark ? /* @__PURE__ */ jsx("span", { children: title }) : title }),
    subtitle && /* @__PURE__ */ jsx("p", { className: "mt-5 text-base md:text-lg text-muted-foreground leading-relaxed", children: subtitle })
  ] });
}
function CTAButton({
  to,
  children,
  variant = "primary"
}) {
  const base = "inline-flex items-center gap-2 h-12 px-6 text-sm font-medium transition-colors";
  const styles = variant === "primary" ? "bg-foreground text-background hover:bg-foreground/85" : "border hairline text-foreground hover:bg-surface";
  return /* @__PURE__ */ jsxs(Link, { to, className: `${base} ${styles}`, children: [
    children,
    /* @__PURE__ */ jsx(ArrowUpRight, { size: 16, strokeWidth: 1.5 })
  ] });
}
function VisualPlaceholder({
  label,
  ratio = "aspect-[4/5]",
  src,
  alt
}) {
  return /* @__PURE__ */ jsxs("div", { className: `relative ${ratio} bg-surface border hairline overflow-hidden group`, children: [
    src ? /* @__PURE__ */ jsx(
      "img",
      {
        src,
        alt: alt ?? label ?? "",
        loading: "lazy",
        decoding: "async",
        className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      }
    ) : /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,var(--color-hairline)_49%,var(--color-hairline)_51%,transparent_51%)] bg-[length:14px_14px] opacity-40" }),
    src && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/0 to-foreground/0" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-end p-6", children: /* @__PURE__ */ jsx("div", { className: `eyebrow ${src ? "text-background" : "text-muted-foreground"}`, children: label ?? "Render preview" }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 w-2 h-2 bg-accent" })
  ] });
}
function PortfolioTile({
  src,
  label,
  caption,
  ratio = "aspect-[4/5]"
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative ${ratio} bg-foreground overflow-hidden group accent-bar`,
      children: [
        src && /* @__PURE__ */ jsx(
          "img",
          {
            src,
            alt: label,
            loading: "lazy",
            decoding: "async",
            className: "absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-[900ms] group-hover:opacity-100 group-hover:scale-[1.05]"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent pointer-events-none" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 p-5 flex flex-col justify-between pointer-events-none", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] text-background/70 tracking-widest", children: label.toUpperCase() }),
          caption && /* @__PURE__ */ jsx("div", { className: "text-xs text-background/80 max-w-[80%]", children: caption })
        ] })
      ]
    }
  );
}
function ProcessTimeline({ steps }) {
  return /* @__PURE__ */ jsx("ol", { className: "border-t hairline", children: steps.map((s, i) => /* @__PURE__ */ jsxs("li", { className: "grid grid-cols-12 gap-6 py-8 border-b hairline", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-2 md:col-span-1 font-mono text-sm text-muted-foreground pt-1", children: String(i + 1).padStart(2, "0") }),
    /* @__PURE__ */ jsx("div", { className: "col-span-10 md:col-span-4", children: /* @__PURE__ */ jsx("h3", { className: "display-3", children: s.title }) }),
    /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-7 text-muted-foreground leading-relaxed", children: s.text })
  ] }, i)) });
}
function PricingTable({
  rows,
  cols
}) {
  return /* @__PURE__ */ jsxs("div", { className: "border hairline", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "hidden md:grid eyebrow text-muted-foreground bg-surface border-b hairline",
        style: { gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))` },
        children: cols.map((c, i) => /* @__PURE__ */ jsx("div", { className: "px-6 py-4", children: c }, i))
      }
    ),
    rows.map((row, ri) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "grid border-b hairline last:border-0",
        style: { gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))` },
        children: row.map((cell, ci) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `px-6 py-5 text-sm ${ci === 0 ? "font-medium" : "text-muted-foreground"}`,
            children: [
              ci === 0 && /* @__PURE__ */ jsx("div", { className: "md:hidden eyebrow text-muted-foreground mb-1", children: cols[ci] }),
              ci > 0 && /* @__PURE__ */ jsx("div", { className: "md:hidden eyebrow text-muted-foreground mb-1", children: cols[ci] }),
              cell
            ]
          },
          ci
        ))
      },
      ri
    ))
  ] });
}
export {
  CTAButton as C,
  Eyebrow as E,
  PricingTable as P,
  SectionHeader as S,
  VisualPlaceholder as V,
  ProcessTimeline as a,
  PortfolioTile as b
};
