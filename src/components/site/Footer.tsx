import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="container-site py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="font-display font-bold text-lg tracking-tight">
              3D·KULAGIN
            </div>
            <p className="mt-4 text-sm text-background/60 leading-relaxed">
              Визуальный продакшн для недвижимости, производителей и интерьерного
              бизнеса. С 2013 года.
            </p>
          </div>

          <div>
            <div className="eyebrow text-background/50">Аудитории</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/developers" className="hover:text-accent transition-colors">Застройщикам</Link></li>
              <li><Link to="/manufacturers" className="hover:text-accent transition-colors">Производителям</Link></li>
              <li><Link to="/designers" className="hover:text-accent transition-colors">Дизайнерам</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-background/50">Студия</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Портфолио</Link></li>
              <li><Link to="/prices" className="hover:text-accent transition-colors">Цены</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">О студии</Link></li>
              <li><Link to="/contacts" className="hover:text-accent transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow text-background/50">Контакты</div>
            <ul className="mt-5 space-y-3 text-sm text-background/80">
              <li><a href="mailto:info@3d-kulagin.ru" className="hover:text-accent transition-colors">info@3d-kulagin.ru</a></li>
              <li><a href="tel:+74954765788" className="hover:text-accent transition-colors">+7 (495) 476-57-88</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=79687607584" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp</a></li>
              <li><a href="https://t.me/Darya3DV" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Telegram</a></li>
              <li className="text-background/50">Москва</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/40">
          <div>© {new Date().getFullYear()} 3D-KULAGIN. Все права защищены.</div>
          <div>Студия 3D-визуализации</div>
        </div>
      </div>
    </footer>
  );
}
