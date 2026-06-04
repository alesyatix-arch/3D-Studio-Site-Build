import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function InlineCTA({
  title = "Получить расчёт проекта",
  subtitle = "Пришлите вводные — оценим объём, ракурсы и сроки в течение рабочего дня.",
  buttonLabel = "Получить расчёт",
  to = "/contacts",
  variant = "light",
}: {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  to?: string;
  variant?: "light" | "warm" | "dark";
}) {
  const styles =
    variant === "dark"
      ? "bg-foreground text-background"
      : variant === "warm"
        ? "bg-[color:var(--color-accent)]/15 border-y hairline"
        : "bg-surface border-y hairline";

  const btn =
    variant === "dark"
      ? "bg-background text-foreground hover:bg-accent"
      : "bg-foreground text-background hover:bg-foreground/85";

  return (
    <section className={`relative ${styles}`}>
      <div className="container-site py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className={`eyebrow ${variant === "dark" ? "text-background/50" : ""}`}>
            Заявка
          </div>
          <h3 className={`mt-3 font-display font-semibold text-xl md:text-2xl tracking-tight leading-snug ${variant === "dark" ? "text-background" : ""}`}>
            {title}
          </h3>
          {subtitle && (
            <p className={`mt-2 text-sm leading-relaxed ${variant === "dark" ? "text-background/70" : "text-muted-foreground"}`}>
              {subtitle}
            </p>
          )}
        </div>
        <Link
          to={to}
          className={`inline-flex items-center gap-2 h-12 px-6 text-sm font-medium transition-colors whitespace-nowrap ${btn}`}
        >
          {buttonLabel}
          <ArrowUpRight size={16} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
