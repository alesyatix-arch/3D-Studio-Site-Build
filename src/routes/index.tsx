import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, FileInput, Target, Calculator, PenTool, MessageSquare, PackageCheck, Database } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import {
  CTAButton,
  Eyebrow,
  
  PortfolioTile,
  PricingTable,
  ProcessTimeline,
  SectionHeader,
  VisualPlaceholder,
} from "@/components/site/primitives";
import { InlineCTA } from "@/components/site/InlineCTA";
import { ContactBar } from "@/components/site/ContactBar";
import { PriceCalculator } from "@/components/site/PriceCalculator";
import { Reveal } from "@/components/site/Reveal";
import bgExterior from "@/assets/bg/exterior.jpg";
import bgExterior2 from "@/assets/bg/exterior2.jpg";
import bgInterior from "@/assets/bg/interior.jpg";
import bgInterior2 from "@/assets/bg/interior2.jpg";
import bgLounge from "@/assets/bg/lounge-river.png.asset.json";
import bgProduct from "@/assets/bg/product.jpg";
import bgProduct2 from "@/assets/bg/product2.jpg";
import heroMain from "@/assets/bg/hero-main.png";
import heroSmall1 from "@/assets/bg/hero-small1.png";
import heroSmall2 from "@/assets/bg/hero-small2.png";
import logoTekta from "@/assets/clients/tekta.png.asset.json";
import logoGoodWood from "@/assets/clients/goodwood.png.asset.json";
import logoTrest47 from "@/assets/clients/trest47.png.asset.json";
import logoHoff from "@/assets/clients/hoff.png.asset.json";
import logoLemana from "@/assets/clients/lemana-pro.png.asset.json";
import logoRoca from "@/assets/clients/roca.png.asset.json";
import logoAquaton from "@/assets/clients/aquaton.png.asset.json";
import logoCersanit from "@/assets/clients/cersanit.png.asset.json";
import logoEstima from "@/assets/clients/estima.png.asset.json";
import logoOrmatek from "@/assets/clients/ormatek.png.asset.json";
import logoMaytoni from "@/assets/clients/maytoni.png.asset.json";
// Portfolio tiles
import pfArchitecture from "@/assets/projects/realized/project-1-cover.png.asset.json";
import pfInteriorWarm from "@/assets/designers/portfolio/portfolio-warm-living.png.asset.json";
import pfFurniture from "@/assets/manufacturers/portfolio/wardrobe-4.png.asset.json";
import pfAerial from "@/assets/projects/realized/project-2-aerial.png.asset.json";
import pfKitchen from "@/assets/manufacturers/portfolio/kitchen-gallery-11.png.asset.json";
import pfInteriorLiving from "@/assets/designers/portfolio/portfolio-sculptural-living.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3D-KULAGIN — 3D-визуализация для бизнеса с 2013 года" },
      {
        name: "description",
        content:
          "Студия 3D-визуализации для девелоперов, производителей и дизайнеров. Архитектура, интерьер, предметные рендеры и серии для каталогов.",
      },
      { property: "og:title", content: "3D-KULAGIN — визуальный продакшн для бизнеса" },
      {
        property: "og:description",
        content:
          "Фотореалистичные 3D-визуализации для продаж недвижимости, каталогов и презентаций.",
      },
    ],
  }),
  component: HomePage,
});

const AUDIENCES = [
  {
    label: "01",
    title: "Девелоперам и застройщикам",
    text: "Помогаем запускать продажи до завершения строительства: архитектурные рендеры, мастер-кадры, виды с высоты, дворы, входные группы, МОПы и материалы для презентаций.",
    cta: "Перейти к услуге для застройщиков",
    to: "/developers" as const,
    bg: pfArchitecture.url,
    price: "от 15 000 ₽",
  },
  {
    label: "02",
    title: "Производителям мебели и материалов",
    text: "Создаём визуальный контент для каталогов, сайтов, маркетплейсов и рекламы: товары на белом фоне, интерьерные сцены, цветовые варианты и серии изображений для коллекций.",
    cta: "Перейти к услуге для производителей",
    to: "/manufacturers" as const,
    bg: pfFurniture.url,
    price: "от 5 000 ₽",
  },
  {
    label: "03",
    title: "Дизайнерам и студиям",
    text: "Делаем интерьерные визуализации по дизайн-проекту, чтобы быстрее согласовывать концепции с клиентами и показывать будущий интерьер до реализации.",
    cta: "Перейти к интерьерной визуализации",
    to: "/designers" as const,
    bg: pfInteriorWarm.url,
    price: "от 900 ₽",
  },
  {
    label: "04",
    title: "Маркетинговым командам",
    text: "Готовим визуальные материалы под запуск продукта, рекламную кампанию, презентацию, выставку или обновление сайта.",
    cta: "Обсудить задачу",
    to: "/contacts" as const,
    bg: pfInteriorLiving.url,
    price: "от 2 000 ₽",
  },
];

const WHY = [
  {
    title: "Недвижимость нужно продавать до сдачи объекта",
    text: "Покупатель принимает решение по образу будущего дома, двора, лобби и окружения.",
  },
  {
    title: "Товар нужно показывать до фотосъёмки и производства линейки",
    text: "3D позволяет быстро подготовить изображения коллекций, цветов, фактур и комплектов.",
  },
  {
    title: "Дизайн нужно согласовывать до ремонта",
    text: "Реалистичная визуализация снижает тревогу клиента и ускоряет принятие решений.",
  },
  {
    title: "Маркетингу нужны материалы сразу в нескольких форматах",
    text: "Один проект даёт изображения для сайта, рекламы, каталога, презентации, соцсетей и печати.",
  },
];

const VALUE = [
  { num: "01", title: "Изображения под каналы продаж", text: "Сайт, каталог, маркетплейсы, буклеты, наружная реклама, презентации, тендеры." },
  { num: "02", title: "Единый визуальный стиль", text: "Особенно важно для коллекций, серий товаров, ЖК, линеек мебели и отделочных материалов." },
  { num: "03", title: "Управляемый процесс", text: "Понятные этапы, сроки, правки, менеджер проекта и финальные файлы в нужном формате." },
  { num: "04", title: "Возможность обновлений", text: "Сохраняем сцены: можно менять ракурсы, цвета, материалы, сезоны, коллекции и очереди проекта." },
];



type ClientEntry = { name: string; logo?: string };
const CLIENTS: Record<string, ClientEntry[]> = {
  "Девелоперы и строительство": [
    { name: "TEKTA", logo: logoTekta.url },
    { name: "Good Wood", logo: logoGoodWood.url },
    { name: "47-й Трест", logo: logoTrest47.url },
  ],
  "Ритейл и производители": [
    { name: "Hoff", logo: logoHoff.url },
    { name: "Лемана ПРО", logo: logoLemana.url },
    { name: "Roca", logo: logoRoca.url },
    { name: "Aquaton", logo: logoAquaton.url },
    { name: "Cersanit", logo: logoCersanit.url },
    { name: "Estima", logo: logoEstima.url },
    { name: "Ormatek", logo: logoOrmatek.url },
    { name: "Maytoni", logo: logoMaytoni.url },
  ],
};

const PROCESS = [
  { title: "Получаем исходные данные", text: "Чертежи, модели, фото, референсы, спецификации, материалы." },
  { title: "Уточняем бизнес-задачу", text: "Где будут использоваться визуализации: сайт, каталог, реклама, презентация, согласование, маркетплейс." },
  { title: "Оцениваем сроки и стоимость", text: "Фиксируем объём, ракурсы, формат, этапы и условия." },
  { title: "Делаем черновик / пилотный ракурс", text: "Согласуем композицию, свет, материалы и подачу." },
  { title: "Вносим правки", text: "Работаем по согласованным комментариям." },
  { title: "Передаём финальные файлы", text: "В нужных форматах и разрешениях." },
  { title: "Сохраняем сцену", text: "Чтобы в будущем быстрее обновлять цвета, ракурсы, коллекции или очереди проекта." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b hairline">
        <div className="container-site pt-16 md:pt-24 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <Eyebrow>Студия 3D-визуализации · с 2013</Eyebrow>
            <h1 className="display-2 mt-6 max-w-3xl headline-mark">
              <span>3D-визуалзиация для продажи недвижимости, интерьеров и товаров</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Создаём фотореалистичные визуальные материалы для девелоперов,
              производителей, дизайнеров и маркетинговых команд — от одного ракурса
              до серийного визуального контента.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-foreground/80 max-w-2xl">
              {[
                "Для сайтов, каталогов, презентаций, рекламы и согласований",
                "Работаем с 2013 года",
                "Разовые задачи и серийные объёмы",
                "Ведём проект по этапам: от ТЗ до файлов",
                "Договор, понятные сроки, ответственный менеджер",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-accent shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTAButton to="/contacts">Получить расчёт проекта</CTAButton>
              <CTAButton to="/portfolio" variant="ghost">Смотреть портфолио</CTAButton>
            </div>
          </div>
          <div className="lg:col-span-5">
            <VisualPlaceholder src={heroMain} label="" alt="Архитектурная визуализация" />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <VisualPlaceholder src={heroSmall1} label="" alt="Визуализация ванной комнаты" ratio="aspect-square" />
              <VisualPlaceholder src={heroSmall2} label="" alt="Интерьерная визуализация" ratio="aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeader
            eyebrow="Interest · Для кого работаем"
            title="Визуализация под конкретную бизнес-задачу"
          />
          <div className="mt-14 grid md:grid-cols-2 gap-px bg-hairline border hairline">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.label} delay={i * 80}>
                <Link
                  to={a.to}
                  className="relative isolate overflow-hidden bg-background p-8 md:p-10 group flex flex-col h-full accent-bar text-background"
                >
                  <img
                    src={a.bg}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/60 to-black/35 transition-colors duration-300 group-hover:from-black/90 group-hover:via-black/65" />
                  <div className="flex items-start justify-between">
                    <div className="font-mono text-xs text-background/60">{a.label}</div>
                    <ArrowUpRight size={18} strokeWidth={1.5} className="text-background/70 transition-all duration-300 group-hover:text-background group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="display-3 mt-6 text-background flex-1">{a.title}</h3>
                  <div className="mt-8 flex items-center justify-between gap-3 text-sm font-medium border-t border-background/20 pt-5">
                    <span className="text-background/80 group-hover:text-background transition-colors">{a.cta}</span>
                    <span className="font-mono text-xs tracking-[0.16em] uppercase text-accent">{a.price}</span>
                  </div>
                </Link>

              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA
        variant="warm"
        title="Расскажите про задачу — соберём оптимальный пакет визуализаций"
        subtitle="За один рабочий день предложим состав ракурсов, сроки и стоимость под цели проекта."
        buttonLabel="Получить расчёт проекта"
      />

      {/* Why */}
      <section className="section-pad bg-surface border-y hairline">
        <div className="container-site">
          <SectionHeader
            eyebrow="Interest · Почему это важно"
            title="Когда продукта ещё нет, визуализация становится главным инструментом продаж"
          />
          <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-6 flex flex-col">
              <ol className="divide-y hairline border-y hairline">
                {WHY.map((w, i) => (
                  <Reveal key={w.title} delay={i * 60}>
                    <li className="flex gap-6 py-7">
                      <span className="font-mono text-xs text-muted-foreground pt-1 w-8 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-medium leading-snug">{w.title}</h3>
                        <p className="mt-3 text-muted-foreground leading-relaxed">{w.text}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
              <div className="mt-10">
                <CTAButton to="/contacts">Обсудить проект</CTAButton>
              </div>
            </div>
            <div className="lg:col-span-6 lg:sticky lg:top-24">
              <WhyCarousel
                slides={[
                  { src: pfAerial.url, alt: "Архитектурная визуализация жилого комплекса" },
                  { src: pfInteriorWarm.url, alt: "Интерьерная визуализация гостиной" },
                  { src: pfFurniture.url, alt: "Предметная визуализация гардеробной системы" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>



      {/* Value — split with image */}
      <section className="section-pad">
        <div className="container-site">
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow="Desire · Что вы получаете"
              title="Не просто рендеры, а готовые визуальные материалы для бизнеса"
            />
          </div>
          <div className="mt-14 grid lg:grid-cols-12 gap-px bg-hairline border hairline items-stretch">
            <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-0 overflow-hidden group bg-background">
              <img
                src={bgLounge.url}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 w-2 h-2 bg-accent" />
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-hairline">
              {VALUE.map((v, i) => (
                <Reveal key={v.num} delay={i * 70}>
                  <div className="bg-background p-8 md:p-10 h-full flex flex-col accent-bar group">
                    <div className="font-mono text-xs text-accent">{v.num}</div>
                    <h3 className="text-lg font-display font-semibold mt-4 leading-snug">{v.title}</h3>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>


      <InlineCTA
        title="Готовы обсудить визуальный пакет под ваш продукт?"
        subtitle="Ответим в течение рабочего дня, предложим формат и сроки."
        buttonLabel="Получить расчёт"
      />


      {/* Portfolio */}
      <section className="section-pad bg-foreground text-background">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="eyebrow text-background/50">Portfolio</div>
              <h2 className="display-2 mt-4 text-background">
                Посмотрите, как визуализация работает в разных задачах
              </h2>
            </div>
            <Link to="/portfolio" className="text-sm border-b border-background/30 hover:border-accent transition-colors pb-1">
              Все проекты →
            </Link>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 border border-background/10">
            {[
              { src: pfArchitecture.url, label: "Архитектура", caption: "ЖК / старт продаж · мастер-кадр" },
              { src: pfInteriorWarm.url, label: "Интерьеры", caption: "Жилой интерьер · 2 ракурса" },
              { src: pfFurniture.url, label: "Мебель", caption: "Каталожный рендер · коллекция" },
              { src: pfAerial.url, label: "ЖК", caption: "Птичий полёт · окружение" },
              { src: pfKitchen.url, label: "Кухни", caption: "Интерьерная сцена · коллекция" },
              { src: pfInteriorLiving.url, label: "Интерьер", caption: "Жилая зона · вечерний свет" },
            ].map((t) => (
              <PortfolioTile key={t.label + t.caption} src={t.src} label={t.label} caption={t.caption} ratio="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-pad">
        <div className="container-site grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Desire · Почему нам доверяют</Eyebrow>
            <h2 className="display-2 mt-4">
              Работаем с компаниями, для которых важны сроки, качество и управляемость
            </h2>
            <div className="mt-10 flex items-baseline gap-4 border-t hairline pt-8">
              <div className="font-display font-semibold text-7xl tracking-tighter">12+</div>
              <div className="text-sm text-muted-foreground">лет<br />на рынке</div>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-hairline border hairline">
            {[
              ["Командная работа", "Менеджер, визуализаторы, моделлеры, дизайнеры и постобработка."],
              ["Работаем с объёмом", "Не только один рендер, но и серии для каталогов и крупных объектов."],
              ["Фиксируем договорённости", "Сроки, стоимость, этапы и результат — до старта."],
              ["Храним сцены", "Обновления дешевле и быстрее, чем работа с нуля."],
            ].map(([t, s]) => (
              <div key={t} className="bg-background p-7">
                <h3 className="font-display font-semibold text-base">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-pad bg-surface border-y hairline">
        <div className="container-site">
          <SectionHeader
            eyebrow="Clients"
            title="Нам доверяют девелоперы, производители и ритейлеры"
          />
          <div className="mt-12 space-y-8">
            {Object.entries(CLIENTS).map(([group, items]) => (
              <div key={group}>
                <div className="eyebrow mb-4">{group}</div>
                <div
                  className="grid gap-px bg-hairline border hairline grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
                >
                  {items.map((c) => (
                    <div key={c.name} className="bg-background h-20 flex items-center justify-center px-4 text-sm font-display font-medium text-foreground/70">
                      {c.logo ? (
                        <img
                          src={c.logo}
                          alt={c.name}
                          loading="lazy" decoding="async"
                          className="max-h-10 max-w-full object-contain opacity-80"
                          onError={(e) => {
                            const img = e.currentTarget;
                            img.style.display = "none";
                            const fallback = img.nextElementSibling as HTMLElement | null;
                            if (fallback) fallback.style.display = "inline";
                          }}
                        />
                      ) : null}
                      <span style={{ display: c.logo ? "none" : "inline" }}>{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeader
            eyebrow="Process"
            title="Процесс построен так, чтобы результат был предсказуемым"
          />
          <div className="mt-14 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <ProcessTimeline steps={PROCESS} />
            </div>
            <div className="lg:col-span-4 hidden lg:block sticky top-24 self-start">
              <div className="border hairline bg-surface p-7">
                <div className="eyebrow text-foreground/50">Workflow</div>
                <h3 className="font-display font-semibold text-xl mt-3 leading-tight">
                  Семь шагов от ТЗ до финальных файлов
                </h3>
                <ol className="mt-7 relative">
                  <span
                    aria-hidden
                    className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-foreground/30 to-transparent"
                  />
                  {[
                    { icon: FileInput, label: "Исходные данные" },
                    { icon: Target, label: "Бизнес-задача" },
                    { icon: Calculator, label: "Смета и сроки" },
                    { icon: PenTool, label: "Пилотный ракурс" },
                    { icon: MessageSquare, label: "Правки" },
                    { icon: PackageCheck, label: "Финальные файлы" },
                    { icon: Database, label: "Сохранение сцены" },
                  ].map(({ icon: Icon, label }, i) => (
                    <li key={label} className="relative flex items-center gap-4 py-2.5">
                      <span className="relative z-10 w-8 h-8 shrink-0 flex items-center justify-center border hairline bg-background text-foreground">
                        <Icon className="w-4 h-4" strokeWidth={1.5} />
                      </span>
                      <div className="flex items-baseline gap-3 min-w-0">
                        <span className="font-mono text-[10px] tracking-[0.18em] text-foreground/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-foreground/85 truncate">{label}</span>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-7 pt-5 border-t hairline grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="font-display font-semibold text-2xl text-accent">7</div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-foreground/50 mt-1">этапов</div>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-2xl text-accent">1</div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-foreground/50 mt-1">менеджер</div>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-2xl text-accent">2+</div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-foreground/50 mt-1">дня<br/>на рендер</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InlineCTA
        variant="dark"
        title="Расскажите про задачу — посчитаем по этапам"
        subtitle="Фиксируем стоимость и сроки до старта работ."
        buttonLabel="Получить расчёт проекта"
      />

      {/* Pricing — interactive calculator */}
      <section className="section-pad bg-surface border-y hairline">
        <div className="container-site">
          <SectionHeader
            eyebrow="Pricing · Калькулятор"
            title="Прозрачные ориентиры по стоимости"
            subtitle="Выберите направление, объём и сроки — увидите ориентир по цене. Точную смету зафиксируем после изучения ТЗ."
          />
          <div className="mt-12">
            <PriceCalculator />
          </div>
        </div>
      </section>



      <ContactBar />

    </SiteLayout>
  );
}

function WhyCarousel({ slides }: { slides: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 2000);
    return () => clearInterval(id);
  }, [slides.length]);
  return (
    <div className="relative aspect-[4/5] overflow-hidden border hairline bg-surface">
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          loading="lazy" decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Слайд ${i + 1}`}
            className={`h-1.5 transition-all duration-300 ${
              i === index ? "w-8 bg-background" : "w-4 bg-background/50 hover:bg-background/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

