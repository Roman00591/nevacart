import { Fuel } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    heading: "Продукт",
    links: [
      { label: "Возможности", href: "#features" },
      { label: "Преимущества", href: "#advantages" },
      { label: "Как подключить", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Компания",
    links: [
      { label: "О нас", href: "#" },
      { label: "Контакты", href: "#contact" },
      { label: "Блог", href: "#" },
      { label: "Карьера", href: "#" },
    ],
  },
  {
    heading: "Правовая информация",
    links: [
      { label: "Политика конфиденциальности", href: "#" },
      { label: "Пользовательское соглашение", href: "#" },
      { label: "Оферта", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 py-10 sm:gap-10 sm:py-16 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary transition-transform duration-300 group-hover:scale-110">
                <Fuel className="h-4.5 w-4.5 text-primary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold text-foreground">
                Neva<span className="text-primary">Card</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-8">
              Корпоративные топливные карты для бизнеса. Полный контроль,
              автоматизация и экономия расходов на ГСМ.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-heading font-semibold text-foreground">
                8 (800) 500-00-00
              </p>
              <p>Бесплатно по России</p>
              <p>info@nevacard.ru</p>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-5">
                {group.heading}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/60 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            {`\u00A9 ${new Date().getFullYear()} NevaCard. Все права защищены.`}
          </p>
          <p className="text-xs text-muted-foreground/60">
            {'ООО "НеваКарт" | ИНН 7801234567 | ОГРН 1234567890123'}
          </p>
        </div>
      </div>
    </footer>
  );
}
