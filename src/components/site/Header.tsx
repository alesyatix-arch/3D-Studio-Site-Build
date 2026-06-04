import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/developers", label: "Для застройщиков" },
  { to: "/manufacturers", label: "Для производителей" },
  { to: "/designers", label: "Для дизайнеров" },
  { to: "/portfolio", label: "Портфолио" },
  { to: "/prices", label: "Цены" },
  { to: "/about", label: "О студии" },
  { to: "/contacts", label: "Контакты" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b hairline">
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Link to="/" className="font-display font-bold tracking-tight text-base">
          3D<span className="text-muted-foreground">·</span>KULAGIN
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.slice(0, 3).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] text-foreground/80 hover:text-foreground transition-colors story-link"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
          <span className="h-3 w-px bg-hairline" />
          {NAV.slice(3).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors story-link"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contacts"
            className="group hidden md:inline-flex items-center gap-2 h-10 pl-5 pr-3 bg-foreground text-background text-[13px] font-medium hover:bg-foreground/85 transition-colors"
          >
            Получить расчёт
            <span className="inline-flex items-center justify-center w-7 h-7 bg-accent text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t hairline">
          <nav className="container-site py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacts"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center h-11 px-5 bg-foreground text-background text-sm font-medium"
            >
              Получить расчёт
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
