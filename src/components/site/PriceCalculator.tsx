import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

type Service = {
  id: string;
  label: string;
  audience: string;
  unit: string | null; // null = индивидуально
  unitLabel: string;
  pricePerUnit: number;
  min: number;
  max: number;
  step: number;
  defaultQty: number;
};

const SERVICES: Service[] = [
  {
    id: "arch",
    label: "Архитектурная визуализация",
    audience: "Девелоперы, застройщики",
    unit: "ракурс",
    unitLabel: "Количество ракурсов",
    pricePerUnit: 15000,
    min: 1,
    max: 20,
    step: 1,
    defaultQty: 4,
  },
  {
    id: "interior",
    label: "Интерьерная визуализация",
    audience: "Дизайнеры, студии, частные заказчики",
    unit: "м²",
    unitLabel: "Площадь интерьера, м²",
    pricePerUnit: 900,
    min: 20,
    max: 400,
    step: 5,
    defaultQty: 60,
  },
  {
    id: "product",
    label: "Предметная визуализация",
    audience: "Производители, ритейл",
    unit: "предмет",
    unitLabel: "Количество предметов",
    pricePerUnit: 5000,
    min: 1,
    max: 50,
    step: 1,
    defaultQty: 6,
  },
  {
    id: "scene",
    label: "Интерьерная сцена для товара",
    audience: "Мебель, плитка, сантехника, отделка",
    unit: "сцена",
    unitLabel: "Количество сцен",
    pricePerUnit: 12000,
    min: 1,
    max: 15,
    step: 1,
    defaultQty: 3,
  },
  {
    id: "tour",
    label: "3D-тур / анимация",
    audience: "Недвижимость, презентации, маркетинг",
    unit: null,
    unitLabel: "",
    pricePerUnit: 0,
    min: 0,
    max: 0,
    step: 1,
    defaultQty: 0,
  },
];

const URGENCY = [
  { id: "standard", label: "Стандарт", hint: "от 7 дней", multiplier: 1 },
  { id: "fast", label: "Ускоренно", hint: "3–5 дней", multiplier: 1.25 },
  { id: "urgent", label: "Срочно", hint: "от 48 часов", multiplier: 1.5 },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(Math.round(value)) + " ₽";
}

export function PriceCalculator() {
  const [serviceId, setServiceId] = useState(SERVICES[0].id);
  const [urgencyId, setUrgencyId] = useState(URGENCY[0].id);
  const service = SERVICES.find((s) => s.id === serviceId)!;
  const urgency = URGENCY.find((u) => u.id === urgencyId)!;
  const [qty, setQty] = useState(service.defaultQty);

  // reset qty when changing service
  const onSelectService = (id: string) => {
    setServiceId(id);
    const next = SERVICES.find((s) => s.id === id)!;
    setQty(next.defaultQty);
  };

  const total = useMemo(() => {
    if (!service.unit) return null;
    return service.pricePerUnit * qty * urgency.multiplier;
  }, [service, qty, urgency]);

  return (
    <div className="border hairline bg-background">
      <div className="grid lg:grid-cols-12">
        {/* Left: inputs */}
        <div className="lg:col-span-7 p-6 md:p-10 border-b lg:border-b-0 lg:border-r hairline">
          {/* Service selector */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              01 · Направление
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-2">
              {SERVICES.map((s) => {
                const active = s.id === serviceId;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => onSelectService(s.id)}
                    className={`text-left px-4 py-3 border transition-colors ${
                      active
                        ? "bg-foreground text-background border-foreground"
                        : "bg-background text-foreground border-hairline hover:border-foreground/40"
                    }`}
                  >
                    <div className="text-sm font-medium leading-tight">{s.label}</div>
                    <div
                      className={`mt-1 text-xs leading-snug ${
                        active ? "text-background/65" : "text-muted-foreground"
                      }`}
                    >
                      {s.audience}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity */}
          {service.unit && (
            <div className="mt-10">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                    02 · Объём
                  </div>
                  <div className="mt-2 text-sm text-foreground/80">{service.unitLabel}</div>
                </div>
                <div className="font-mono text-2xl md:text-3xl font-medium tabular-nums">
                  {qty}
                  <span className="ml-2 text-sm text-muted-foreground font-sans">{service.unit}</span>
                </div>
              </div>
              <input
                type="range"
                min={service.min}
                max={service.max}
                step={service.step}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="mt-4 w-full accent-accent"
              />
              <div className="mt-2 flex justify-between font-mono text-[11px] text-muted-foreground">
                <span>{service.min}</span>
                <span>{service.max}</span>
              </div>
            </div>
          )}

          {/* Urgency */}
          {service.unit && (
            <div className="mt-10">
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                03 · Сроки
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {URGENCY.map((u) => {
                  const active = u.id === urgencyId;
                  return (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setUrgencyId(u.id)}
                      className={`px-3 py-3 border text-left transition-colors ${
                        active
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background text-foreground border-hairline hover:border-foreground/40"
                      }`}
                    >
                      <div className="text-sm font-medium">{u.label}</div>
                      <div
                        className={`mt-1 text-[11px] font-mono ${
                          active ? "text-background/65" : "text-muted-foreground"
                        }`}
                      >
                        {u.hint}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right: result */}
        <div className="lg:col-span-5 p-6 md:p-10 bg-surface flex flex-col">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            Ориентир по стоимости
          </div>

          {service.unit ? (
            <>
              <div className="mt-6">
                <div className="text-sm text-muted-foreground">от</div>
                <div className="mt-1 text-4xl md:text-5xl font-medium tracking-tight tabular-nums leading-none">
                  {formatPrice(total!)}
                </div>
              </div>

              <dl className="mt-8 space-y-3 text-sm border-t hairline pt-5">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Направление</dt>
                  <dd className="text-right">{service.label}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Объём</dt>
                  <dd className="text-right tabular-nums">
                    {qty} {service.unit} × {formatPrice(service.pricePerUnit)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Сроки</dt>
                  <dd className="text-right">
                    {urgency.label}
                    {urgency.multiplier > 1 && (
                      <span className="ml-1 text-muted-foreground">
                        +{Math.round((urgency.multiplier - 1) * 100)}%
                      </span>
                    )}
                  </dd>
                </div>
              </dl>
            </>
          ) : (
            <>
              <div className="mt-6">
                <div className="text-4xl md:text-5xl font-medium tracking-tight leading-none">
                  Индивидуально
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Стоимость 3D-тура или анимации рассчитываем под задачу: хронометраж, количество сцен, формат и сроки.
                </p>
              </div>
            </>
          )}

          <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
            Это предварительный ориентир. Финальную смету фиксируем после изучения ТЗ и исходных данных.
          </p>

          <div className="mt-auto pt-8">
            <Link
              to="/contacts"
              className="group inline-flex items-center justify-between w-full gap-3 bg-foreground text-background px-5 py-4 hover:bg-foreground/90 transition-colors"
            >
              <span className="text-sm font-medium uppercase tracking-[0.12em]">
                Получить точный расчёт
              </span>
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
