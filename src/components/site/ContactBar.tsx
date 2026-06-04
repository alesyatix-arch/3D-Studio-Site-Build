export function ContactBar() {
  return (
    <section className="border-y hairline bg-surface">
      <div className="container-site py-10">
        <div className="grid gap-6 sm:grid-cols-2 items-center">
          <div>
            <div className="eyebrow text-muted-foreground">Контакты</div>
            <a
              href="mailto:info@3d-kulagin.ru"
              className="mt-2 block text-xl md:text-2xl font-display hover:text-accent transition-colors"
            >
              info@3d-kulagin.ru
            </a>
          </div>
          <div className="sm:text-right">
            <div className="eyebrow text-muted-foreground">Телефон</div>
            <a
              href="tel:+74954765788"
              className="mt-2 block text-xl md:text-2xl font-display hover:text-accent transition-colors"
            >
              +7 (495) 476-57-88
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
