import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function ImageLightbox() {
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState<string>("");

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const img = target.closest("img") as HTMLImageElement | null;
      if (!img) return;
      if (img.dataset.noZoom !== undefined) return;
      // Skip tiny icons/logos
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
    const onKey = (e: KeyboardEvent) => {
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

  return (
    <div
      className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={() => setSrc(null)}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Закрыть"
        className="absolute top-4 right-4 h-10 w-10 inline-flex items-center justify-center text-background hover:text-accent transition-colors"
        onClick={() => setSrc(null)}
      >
        <X size={24} strokeWidth={1.5} />
      </button>
      <img
        src={src}
        alt={alt}
        data-no-zoom
        className="max-w-[95vw] max-h-[95vh] object-contain shadow-2xl cursor-zoom-out"
        onClick={(e) => {
          e.stopPropagation();
          setSrc(null);
        }}
      />
    </div>
  );
}
