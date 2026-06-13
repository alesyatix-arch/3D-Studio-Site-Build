import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

import bgExterior from "@/assets/bg/exterior.jpg";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — 3D-KULAGIN" },
      { name: "description", content: "Свяжитесь со студией 3D-визуализации 3D-KULAGIN. Расчёт проекта по ТЗ." },
      { property: "og:title", content: "Контакты — 3D-KULAGIN" },
      { property: "og:description", content: "Email, телефон, WhatsApp и Telegram. Расчёт проекта по ТЗ." },
      { property: "og:url", content: "https://viz-studio-build.lovable.app/contacts" },
    ],
    links: [
      { rel: "canonical", href: "https://viz-studio-build.lovable.app/contacts" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <section className="relative border-b hairline overflow-hidden">
        <img src={bgExterior} alt="" loading="eager" decoding="async" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="relative container-site pt-16 md:pt-24 pb-16 grid md:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow">Contacts</div>
            <h1 className="display-2 mt-6 headline-mark"><span>Расскажите о задаче</span></h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
              Изучим вводные, подскажем подходящий формат визуализации,
              сроки и стоимость.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <div className="eyebrow">Email</div>
              <a href="mailto:info@3d-kulagin.ru" className="mt-3 text-2xl font-display block hover:text-accent transition-colors">info@3d-kulagin.ru</a>
            </div>
            <div>
              <div className="eyebrow">Телефон</div>
              <a href="tel:+74954765788" className="mt-3 text-2xl font-display block hover:text-accent transition-colors">+7 (495) 476-57-88</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://api.whatsapp.com/send?phone=79687607584" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-12 px-4 border border-foreground/20 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
                WhatsApp
              </a>
              <a href="https://t.me/Darya3DV" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-12 px-4 border border-foreground/20 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
                Telegram
              </a>
            </div>
            <div>
              <div className="eyebrow">Город</div>
              <div className="mt-3 text-2xl font-display">Москва</div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});
