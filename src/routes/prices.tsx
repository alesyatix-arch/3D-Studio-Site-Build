import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { siteUrl } from "@/lib/site-url";
import { CTAButton, Eyebrow, PricingTable } from "@/components/site/primitives";
import { InlineCTA } from "@/components/site/InlineCTA";
import { ContactBar } from "@/components/site/ContactBar";
import bgExterior2 from "@/assets/bg/exterior2.jpg";

export const Route = createFileRoute("/prices")({
  head: () => ({
    meta: [
      { title: "Стоимость 3D-визуализации — 3D-KULAGIN" },
      { name: "description", content: "Ориентиры по стоимости архитектурной, интерьерной и предметной 3D-визуализации." },
      { property: "og:title", content: "Стоимость 3D-визуализации — 3D-KULAGIN" },
      { property: "og:description", content: "Цены на архитектурную, интерьерную и предметную визуализацию. Расчёт по ТЗ." },
      { property: "og:url", content: siteUrl("/prices") },
    ],
    links: [
      { rel: "canonical", href: siteUrl("/prices") },
    ],
  }),
  component: () => (
    <SiteLayout>
      <section className="relative border-b hairline overflow-hidden">
        <img src={bgExterior2} alt="" loading="eager" decoding="async" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="relative container-site pt-16 md:pt-24 pb-12">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="display-2 mt-6 max-w-3xl headline-mark"><span>Стоимость 3D-визуализации</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Ориентиры по основным направлениям. Точная стоимость зависит от ТЗ,
            исходных данных, количества ракурсов, сроков и формата использования.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site max-w-5xl">
          <PricingTable
            cols={["Направление", "Цена от", "Срок от"]}
            rows={[
              ["Архитектурная визуализация", "от 15 000 ₽ / ракурс", "от 4 дней"],
              ["Интерьерная визуализация", "от 900 ₽ / м²", "от 2 дней"],
              ["Предметная визуализация", "от 5 000 ₽ / предмет", "от 1 дня"],
              ["Интерьерная сцена для товара", "от 12 000 ₽", "от 2 дней"],
              ["Дополнительный ракурс", "от 2 000 ₽", "от 1 дня"],
              ["Полиграфическое разрешение", "от 2 000 ₽", "от 1 дня"],
              ["3D-тур / анимация", "Индивидуально", "По ТЗ"],
            ]}
          />
        </div>
      </section>

      <section className="section-pad border-t hairline bg-surface/40">
        <div className="container-site max-w-5xl grid md:grid-cols-2 gap-10">
          <div>
            <Eyebrow>От чего зависит стоимость</Eyebrow>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Сложность объекта",
                "Наличие исходных данных",
                "Количество ракурсов",
                "Детализация",
                "Окружение",
                "Сроки",
                "Разрешение",
                "Количество правок",
                "Необходимость моделирования",
                "Передача исходной сцены",
              ].map((f) => (
                <li key={f} className="flex gap-3 border-b hairline pb-3">
                  <span className="mt-2 w-1 h-1 bg-accent shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background border hairline p-8 md:p-10 flex flex-col accent-bar group">
            <h2 className="display-3">Рассчитаем точную стоимость по вашему ТЗ</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed flex-1">
              Пришлите вводные — оценим объём, ракурсы и сроки. Ответим
              в течение рабочего дня.
            </p>
            <div className="mt-8">
              <CTAButton to="/contacts">Получить расчёт</CTAButton>
            </div>
          </div>
        </div>
      </section>


      <ContactBar />

      <InlineCTA
        variant="dark"
        title="Получить точный расчёт под объём и сроки"
        subtitle="Цены в таблице — ориентиры. Финальная стоимость зависит от вашего ТЗ."
        buttonLabel="Получить расчёт проекта"
      />
    </SiteLayout>
  ),
});
