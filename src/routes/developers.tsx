import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import {
  CTAButton,
  Eyebrow,
  
  PricingTable,
  ProcessTimeline,
  SectionHeader,
} from "@/components/site/primitives";
import { InlineCTA } from "@/components/site/InlineCTA";
import { ContactBar } from "@/components/site/ContactBar";
import bgDevelopersHero from "@/assets/bg/developers-hero.jpg";
import bgDevelopersHero2 from "@/assets/bg/developers-hero-2.png";
import bgDevelopersHero3 from "@/assets/bg/developers-hero-3.png";
import bgDevelopersHeroWinter from "@/assets/bg/developers-hero-winter.png.asset.json";
import project1Cover from "@/assets/projects/realized/project-1-cover.png.asset.json";
import project1Entry from "@/assets/projects/realized/project-1-entry.png.asset.json";
import project1Yard from "@/assets/projects/realized/project-1-yard.png.asset.json";
import project1View from "@/assets/projects/realized/project-1-view.png.asset.json";
import project2Cover from "@/assets/projects/realized/project-2-cover.png.asset.json";
import project2Entry from "@/assets/projects/realized/project-2-entry.png.asset.json";
import project2Exterior from "@/assets/projects/realized/project-2-exterior.png.asset.json";
import project2Aerial from "@/assets/projects/realized/project-2-aerial.png.asset.json";
import project2View from "@/assets/projects/realized/project-2-view.png.asset.json";
import project2WinterEntry from "@/assets/projects/realized/project-2-winter-entry.png.asset.json";
import project2WinterAerial from "@/assets/projects/realized/project-2-winter-aerial.png.asset.json";
import project3New1 from "@/assets/projects/realized/project-3-new-1.png.asset.json";
import project3New2 from "@/assets/projects/realized/project-3-new-2.png.asset.json";
import project3New3 from "@/assets/projects/realized/project-3-new-3.png.asset.json";
import project3New4 from "@/assets/projects/realized/project-3-new-4.png.asset.json";
import project3New5 from "@/assets/projects/realized/project-3-new-5.png.asset.json";
import project4Cover from "@/assets/projects/realized/project-4-cover.png.asset.json";
import project4Street from "@/assets/projects/realized/project-4-street.png.asset.json";
import project4Aerial from "@/assets/projects/realized/project-4-aerial.png.asset.json";
import project4Yard from "@/assets/projects/realized/project-4-yard.png.asset.json";
import project4Evening from "@/assets/projects/realized/project-4-evening.png.asset.json";


function HeroCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative aspect-[4/5] overflow-hidden border hairline bg-surface">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading={i === 0 ? "eager" : "lazy"} decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[3000ms] ease-in-out ${i === idx ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

type RealizedProject = {
  id: string;
  title: string;
  location: string;
  cover: { url: string; alt: string };
  gallery: { url: string; alt: string }[];
};

function RealizedProjectsShowcase({ projects }: { projects: RealizedProject[] }) {
  const [openProjectId, setOpenProjectId] = useState<string | null>(projects[0]?.id ?? null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === openProjectId) ?? projects[0],
    [openProjectId, projects],
  );

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [openProjectId]);

  if (!activeProject) {
    return null;
  }

  const selectedImage = activeProject.gallery[selectedImageIndex] ?? activeProject.cover;

  return (
    <div className="mt-12 space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => {
          const isOpen = project.id === activeProject.id;

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => setOpenProjectId(project.id)}
              aria-expanded={isOpen}
              className="group relative overflow-hidden border hairline bg-background text-left transition-colors hover:bg-background/95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              <div className="relative aspect-[5/6] overflow-hidden">
                <img
                  src={project.cover.url}
                  alt={project.cover.alt}
                  loading="lazy" decoding="async"
                  data-no-zoom
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="font-mono text-[10px] tracking-widest text-background/60">
                    ПРОЕКТ {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 font-display text-xl text-background">{project.title}</div>
                  
                </div>
                <div className="absolute right-4 top-4 border border-background/20 bg-foreground/20 px-3 py-1 text-[10px] font-mono tracking-[0.2em] text-background backdrop-blur-sm">
                  {isOpen ? "ОТКРЫТО" : "СМОТРЕТЬ"}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="border border-background/10 bg-background/5 p-4 md:p-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)]">
          <div className="space-y-4">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <div className="font-mono text-[10px] tracking-widest text-background/50">
                  {activeProject.title.toUpperCase()}
                </div>
                <h3 className="mt-2 font-display text-2xl text-background md:text-3xl">
                  Галерея проекта
                </h3>
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden border border-background/10 bg-foreground/10">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                data-no-zoom
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager" decoding="async"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {activeProject.gallery.map((image, index) => {
              const isSelected = index === selectedImageIndex;

              return (
                <button
                  key={image.url}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  aria-pressed={isSelected}
                  className={`group relative overflow-hidden border text-left transition-all ${isSelected ? "border-background bg-background/10" : "border-background/10 bg-foreground/5 hover:bg-background/5"}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.alt}
                      loading="lazy" decoding="async"
                      data-no-zoom
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/developers")({
  head: () => ({
    meta: [
      { title: "3D-визуализация для застройщиков — 3D-KULAGIN" },
      {
        name: "description",
        content:
          "Архитектурная 3D-визуализация для девелоперов: мастер-кадры, дворы, виды с высоты, входные группы, МОПы для старта продаж, рекламы и презентаций.",
      },
      { property: "og:title", content: "3D-визуализация для девелоперов и застройщиков" },
      {
        property: "og:description",
        content:
          "Продавайте объект до завершения строительства. Архитектурные рендеры и материалы для отдела продаж.",
      },
      { property: "og:url", content: "https://viz-studio-build.lovable.app/developers" },
    ],
    links: [
      { rel: "canonical", href: "https://viz-studio-build.lovable.app/developers" },
    ],
  }),
  component: DevelopersPage,
});

const TASKS = [
  ["Старт продаж", "Мастер-кадр, фасады, двор, птичий полёт"],
  ["Презентация инвесторам", "Общие виды, генплан, окружение, вечерние сценарии"],
  ["Реклама", "Кадры под баннеры, наружку, digital"],
  ["Офис продаж", "Визуализации, схемы, виды, презентационные материалы"],
  ["Согласования", "Фасады, материалы, посадка объекта, окружение"],
  ["Новая очередь", "Обновление старой сцены без работы с нуля"],
];

const OBJECTS = [
  {
    title: "Жилые комплексы и МКД",
    text: "Показываем архитектуру, дворы, благоустройство, входные группы и сценарий жизни.",
  },
  {
    title: "Коттеджные посёлки",
    text: "Передаём атмосферу загородной жизни, приватность, ландшафт, свет, окружение.",
  },
  {
    title: "Коммерческая недвижимость",
    text: "Показываем входы, витрины, потоки людей, городскую среду и инвестпривлекательность.",
  },
  {
    title: "Промышленные объекты",
    text: "Понятная визуализация масштаба, логистики, территории и функциональных зон.",
  },
  {
    title: "МОПы и лобби",
    text: "Интерьерные зоны, которые влияют на восприятие класса объекта.",
  },
  {
    title: "Частные застройки",
    text: "Загородные дома и резиденции: архитектура, фасады, ландшафт и видовые ракурсы для презентации заказчику.",
  },
];

const SHOTS = [
  ["Мастер-кадр", "Главный образ проекта"],
  ["Птичий полёт", "Масштаб, генплан, окружение"],
  ["Двор", "Жизнь внутри комплекса"],
  ["Входная группа", "Уровень и класс объекта"],
  ["Вечерний ракурс", "Эмоция и рекламная выразительность"],
  ["Крупный план фасада", "Материалы, детали, качество"],
  ["Вид из окна", "Ценность конкретных квартир"],
  ["Паркинг / подъезды", "Практическое удобство"],
];

const PROCESS = [
  {
    title: "Получаем чертежи, генплан, фасады, референсы",
    text: "Базовый комплект для понимания объекта и контекста.",
  },
  {
    title: "Уточняем задачу",
    text: "Продажи, инвесторы, согласования, реклама — от этого зависит набор ракурсов.",
  },
  {
    title: "Предлагаем набор ракурсов",
    text: "Минимальный и расширенный пакет под цели проекта.",
  },
  {
    title: "Делаем черновой ракурс",
    text: "Композиция, ключевой ракурс, базовое освещение.",
  },
  {
    title: "Согласуем композицию, свет, окружение",
    text: "Этап работы с правками.",
  },
  {
    title: "Готовим финальные изображения",
    text: "Финальный свет, материалы, постобработка.",
  },
  {
    title: "Передаём файлы под нужные каналы",
    text: "Web, печать, презентация, наружка.",
  },
  {
    title: "Сохраняем сцену",
    text: "Для будущих обновлений и новых очередей.",
  },
];

const REALIZED_PROJECTS: RealizedProject[] = [
  {
    id: "project-01",
    title: "Жилой комплекс",
    location: "Первая реализованная позиция",
    cover: {
      url: project1Cover.url,
      alt: "Главный вечерний ракурс реализованного жилого комплекса",
    },
    gallery: [
      {
        url: project1Cover.url,
        alt: "Общий вечерний вид жилого комплекса",
      },
      {
        url: project1Entry.url,
        alt: "Входная группа жилого комплекса в вечернем освещении",
      },
      {
        url: project1Yard.url,
        alt: "Благоустроенный двор жилого комплекса на закате",
      },
      {
        url: project1View.url,
        alt: "Вид с верхнего этажа и остеклённый угол квартиры",
      },
    ],
  },
  {
    id: "project-02",
    title: "Жилой квартал",
    location: "Вторая реализованная позиция",
    cover: {
      url: project2Cover.url,
      alt: "Главный ракурс жилого квартала с прогулочной зоной",
    },
    gallery: [
      {
        url: project2Cover.url,
        alt: "Общий вид жилого квартала с благоустроенной территорией",
      },
      {
        url: project2Entry.url,
        alt: "Входная группа и лобби жилого квартала",
      },
      {
        url: project2Exterior.url,
        alt: "Фасады жилого квартала в вечернем освещении",
      },
      {
        url: project2Aerial.url,
        alt: "Вид с высоты на территорию жилого квартала",
      },
      {
        url: project2View.url,
        alt: "Вид из квартиры на городской парк и интерьерное пространство",
      },
      {
        url: project2WinterEntry.url,
        alt: "Зимний вид входной группы жилого квартала с вечерним освещением",
      },
      {
        url: project2WinterAerial.url,
        alt: "Жилой квартал зимой на закате с заснеженным благоустройством",
      },
    ],
  },
  {
    id: "project-03",
    title: "Жилой ансамбль",
    location: "Третья реализованная позиция",
    cover: {
      url: project3New1.url,
      alt: "Вечерний двор жилого ансамбля с подсветкой и благоустройством",
    },
    gallery: [
      {
        url: project3New1.url,
        alt: "Вечерний двор жилого ансамбля с подсветкой и благоустройством",
      },
      {
        url: project3New2.url,
        alt: "Уличный ракурс жилого ансамбля в тёплом вечернем свете",
      },
      {
        url: project3New3.url,
        alt: "Панорамный вид из интерьера на жилой ансамбль и городской пейзаж",
      },
      {
        url: project3New4.url,
        alt: "Зимний фасад жилого ансамбля с заснеженной территорией",
      },
      {
        url: project3New5.url,
        alt: "Зимний двор жилого ансамбля с прогулочной зоной и подсветкой",
      },
    ],
  },
  {
    id: "project-04",
    title: "Коттеджный посёлок",
    location: "Четвёртая реализованная позиция",
    cover: {
      url: project4Cover.url,
      alt: "Главный ракурс коттеджного посёлка с прогулочной аллеей",
    },
    gallery: [
      {
        url: project4Cover.url,
        alt: "Пешеходная аллея и фасады домов в коттеджном посёлке",
      },
      {
        url: project4Street.url,
        alt: "Уличный ракурс с линией домов и благоустроенной территорией",
      },
      {
        url: project4Aerial.url,
        alt: "Вид с высоты на генеральный план коттеджного посёлка",
      },
      {
        url: project4Yard.url,
        alt: "Детская площадка и общественное пространство внутри посёлка",
      },
      {
        url: project4Evening.url,
        alt: "Вечерний приватный двор с террасой и мягкой подсветкой",
      },
    ],
  },
];


function DevelopersPage() {
  return (
    <SiteLayout>
      <section className="border-b hairline">
        <div className="container-site grid items-end gap-10 pb-16 pt-16 md:pb-24 md:pt-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Для девелоперов и застройщиков</Eyebrow>
            <h1 className="display-2 mt-6 max-w-3xl headline-mark">
              <span>Архитектурная 3D-визуализация для девелоперов</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Создаём рендеры жилых комплексов, коттеджных посёлков, коммерческой
              недвижимости и инфраструктуры — для отдела продаж, маркетинга и
              согласований.
            </p>
            <ul className="mt-8 grid max-w-2xl gap-x-8 gap-y-3 text-sm text-foreground/80 sm:grid-cols-2">
              {[
                "Мастер-кадры и виды с высоты птичьего полёта",
                "Дворы, входные группы, МОПы, лобби",
                "Дневные и вечерние сценарии",
                "Серии ракурсов под разные каналы",
                "Сохранение сцен для новых очередей",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTAButton to="/contacts">Получить КП по объекту</CTAButton>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroCarousel images={[bgDevelopersHero, bgDevelopersHeroWinter.url, bgDevelopersHero2, bgDevelopersHero3]} />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeader
            eyebrow="Tasks · Какие задачи закрываем"
            title="Каждый ракурс должен решать задачу"
          />
          <div className="mt-12 border hairline">
            {TASKS.map(([t, d], i) => (
              <div
                key={t}
                className={`grid gap-6 px-6 py-6 md:grid-cols-12 md:px-8 ${i < TASKS.length - 1 ? "border-b hairline" : ""}`}
              >
                <div className="font-display font-semibold md:col-span-4">{t}</div>
                <div className="text-muted-foreground md:col-span-8">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y hairline bg-surface">
        <div className="container-site">
          <SectionHeader eyebrow="Objects" title="Какие объекты визуализируем" />
          <div className="mt-12 grid gap-px border hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {OBJECTS.map((o) => (
              <div key={o.title} className="bg-background p-8">
                <h3 className="text-lg font-display font-semibold">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeader eyebrow="Shots" title="Ракурсы и их роль в продажах" />
          <div className="mt-12 grid gap-px border hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {SHOTS.map(([t, d], i) => (
              <div key={t} className="bg-background p-6">
                <div className="font-mono text-[10px] tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 font-display font-semibold">{t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-foreground text-background">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow text-background/50">Portfolio</div>
              <h2 className="display-2 mt-4 text-background">Реализованные проекты</h2>
            </div>
          </div>
          <RealizedProjectsShowcase projects={REALIZED_PROJECTS} />
        </div>
      </section>

      <section className="section-pad border-y hairline bg-surface">
        <div className="container-site">
          <SectionHeader
            eyebrow="Pricing"
            title="Стоимость зависит от объёма, сложности объекта и количества ракурсов"
          />
          <div className="mt-12">
            <PricingTable
              cols={["Услуга", "Цена от"]}
              rows={[
                ["Экстерьерная визуализация", "от 15 000 ₽ / ракурс"],
                ["Ракурс с высоты птичьего полёта", "от 20 000 ₽"],
                ["Дополнительный ракурс", "от 5 000 ₽"],
                ["Вечернее освещение", "+30%"],
                ["Другое время года", "+50%"],
                ["Разрешение для полиграфии", "от 2 000 ₽"],
                ["Передача готовой сцены", "Индивидуально"],
              ]}
            />
          </div>
          <div className="mt-10">
            <CTAButton to="/contacts">Получить расчёт по чертежам</CTAButton>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeader eyebrow="Process" title="Как мы ведём проект" />
          <div className="mt-12">
            <ProcessTimeline steps={PROCESS} />
          </div>
        </div>
      </section>

      <InlineCTA
        variant="dark"
        title="Хотите узнать стоимость по своему объекту?"
        subtitle="Пришлите чертежи и генплан — оценим в течение рабочего дня."
        buttonLabel="Получить расчёт проекта"
      />

      <ContactBar />

    </SiteLayout>
  );
}
