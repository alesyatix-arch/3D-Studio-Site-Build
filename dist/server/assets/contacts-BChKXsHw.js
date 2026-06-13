import { jsx, jsxs } from "react/jsx-runtime";
import { S as SiteLayout } from "./Layout-D62JmS4y.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const bgExterior = "/assets/exterior-BFj8FdDb.jpg";
const SplitComponent = () => /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("section", { className: "relative border-b hairline overflow-hidden", children: [
  /* @__PURE__ */ jsx("img", { src: bgExterior, alt: "", loading: "eager", decoding: "async", fetchPriority: "high", className: "absolute inset-0 w-full h-full object-cover opacity-15" }),
  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" }),
  /* @__PURE__ */ jsxs("div", { className: "relative container-site pt-16 md:pt-24 pb-16 grid md:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "Contacts" }),
      /* @__PURE__ */ jsx("h1", { className: "display-2 mt-6 headline-mark", children: /* @__PURE__ */ jsx("span", { children: "Расскажите о задаче" }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-md leading-relaxed", children: "Изучим вводные, подскажем подходящий формат визуализации, сроки и стоимость." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "Email" }),
        /* @__PURE__ */ jsx("a", { href: "mailto:info@3d-kulagin.ru", className: "mt-3 text-2xl font-display block hover:text-accent transition-colors", children: "info@3d-kulagin.ru" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "Телефон" }),
        /* @__PURE__ */ jsx("a", { href: "tel:+74954765788", className: "mt-3 text-2xl font-display block hover:text-accent transition-colors", children: "+7 (495) 476-57-88" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "https://api.whatsapp.com/send?phone=79687607584", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 h-12 px-4 border border-foreground/20 text-sm font-medium hover:bg-foreground hover:text-background transition-colors", children: "WhatsApp" }),
        /* @__PURE__ */ jsx("a", { href: "https://t.me/Darya3DV", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 h-12 px-4 border border-foreground/20 text-sm font-medium hover:bg-foreground hover:text-background transition-colors", children: "Telegram" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "Город" }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 text-2xl font-display", children: "Москва" })
      ] })
    ] })
  ] })
] }) });
export {
  SplitComponent as component
};
