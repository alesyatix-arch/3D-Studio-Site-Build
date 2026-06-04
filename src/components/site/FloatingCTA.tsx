import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      to="/contacts"
      aria-label="Получить расчёт проекта"
      className={`md:hidden fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 h-12 px-5 bg-foreground text-background text-sm font-medium shadow-lg transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      Расчёт проекта
      <ArrowUpRight size={16} strokeWidth={1.5} />
    </Link>
  );
}
