import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState, type ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  mark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  mark?: boolean;
}) {
  return (
    <div className={align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`display-2 mt-4 ${mark ? "headline-mark" : ""}`}>
        {mark ? <span>{title}</span> : title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CTAButton({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 h-12 px-6 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-foreground/85"
      : "border hairline text-foreground hover:bg-surface";
  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
      <ArrowUpRight size={16} strokeWidth={1.5} />
    </Link>
  );
}

export function VisualPlaceholder({
  label,
  ratio = "aspect-[4/5]",
  src,
  alt,
}: {
  label?: string;
  ratio?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div className={`relative ${ratio} bg-surface border hairline overflow-hidden group`}>
      {src ? (
        <img
          src={src}
          alt={alt ?? label ?? ""}
          loading="lazy" decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,var(--color-hairline)_49%,var(--color-hairline)_51%,transparent_51%)] bg-[length:14px_14px] opacity-40" />
      )}
      {src && (
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/0 to-foreground/0" />
      )}
      <div className="absolute inset-0 flex items-end p-6">
        <div className={`eyebrow ${src ? "text-background" : "text-muted-foreground"}`}>
          {label ?? "Render preview"}
        </div>
      </div>
      <div className="absolute top-4 right-4 w-2 h-2 bg-accent" />
    </div>
  );
}

export function PortfolioTile({
  src,
  label,
  caption,
  ratio = "aspect-[4/5]",
}: {
  src?: string;
  label: string;
  caption?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`relative ${ratio} bg-foreground overflow-hidden group accent-bar`}
    >
      {src && (
        <img
          src={src}
          alt={label}
          loading="lazy" decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-[900ms] group-hover:opacity-100 group-hover:scale-[1.05]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
        <div className="font-mono text-[10px] text-background/70 tracking-widest">{label.toUpperCase()}</div>
        {caption && <div className="text-xs text-background/80 max-w-[80%]">{caption}</div>}
      </div>
    </div>
  );
}

export function ProcessTimeline({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="border-t hairline">
      {steps.map((s, i) => (
        <li key={i} className="grid grid-cols-12 gap-6 py-8 border-b hairline">
          <div className="col-span-2 md:col-span-1 font-mono text-sm text-muted-foreground pt-1">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div className="col-span-10 md:col-span-4">
            <h3 className="display-3">{s.title}</h3>
          </div>
          <div className="col-span-12 md:col-span-7 text-muted-foreground leading-relaxed">
            {s.text}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function PricingTable({
  rows,
  cols,
}: {
  cols: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="border hairline">
      <div
        className="hidden md:grid eyebrow text-muted-foreground bg-surface border-b hairline"
        style={{ gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))` }}
      >
        {cols.map((c, i) => (
          <div key={i} className="px-6 py-4">{c}</div>
        ))}
      </div>
      {rows.map((row, ri) => (
        <div
          key={ri}
          className="grid border-b hairline last:border-0"
          style={{ gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))` }}
        >
          {row.map((cell, ci) => (
            <div
              key={ci}
              className={`px-6 py-5 text-sm ${ci === 0 ? "font-medium" : "text-muted-foreground"}`}
            >
              {ci === 0 && (
                <div className="md:hidden eyebrow text-muted-foreground mb-1">
                  {cols[ci]}
                </div>
              )}
              {ci > 0 && (
                <div className="md:hidden eyebrow text-muted-foreground mb-1">
                  {cols[ci]}
                </div>
              )}
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function FinalCTA({
  eyebrow = "Контакт",
  title,
  subtitle,
  buttonLabel = "Получить расчёт проекта",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="section-pad bg-foreground text-background">
      <div className="container-site grid md:grid-cols-2 gap-12">
        <div>
          <div className="eyebrow text-background/50">{eyebrow}</div>
          <h2 className="display-2 mt-4 text-background">{title}</h2>
          {subtitle && (
            <p className="mt-5 text-background/70 max-w-md leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
          }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Имя" className="h-12 px-4 bg-transparent border border-background/20 text-background placeholder:text-background/40 focus:border-accent outline-none" />
            <input required placeholder="Телефон" className="h-12 px-4 bg-transparent border border-background/20 text-background placeholder:text-background/40 focus:border-accent outline-none" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="email" placeholder="Email" className="h-12 px-4 bg-transparent border border-background/20 text-background placeholder:text-background/40 focus:border-accent outline-none" />
            <input placeholder="Компания" className="h-12 px-4 bg-transparent border border-background/20 text-background placeholder:text-background/40 focus:border-accent outline-none" />
          </div>
          <input placeholder="Тип задачи" className="h-12 px-4 bg-transparent border border-background/20 text-background placeholder:text-background/40 focus:border-accent outline-none" />
          <input placeholder="Ссылка на материалы" className="h-12 px-4 bg-transparent border border-background/20 text-background placeholder:text-background/40 focus:border-accent outline-none" />
          <textarea rows={3} placeholder="Комментарий" className="p-4 bg-transparent border border-background/20 text-background placeholder:text-background/40 focus:border-accent outline-none resize-none" />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-background text-foreground text-sm font-medium hover:bg-accent transition-colors"
          >
            {buttonLabel}
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </button>
          <p className="text-xs text-background/40">
            Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных.
          </p>
        </form>
      </div>
    </section>
  );
}
