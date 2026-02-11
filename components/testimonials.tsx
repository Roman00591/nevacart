"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Алексей Петров",
    role: "Финансовый директор",
    company: "ТрансЛогистика",
    text: "До NevaCart мы тратили 3 дня в месяц на сверку чеков. Сейчас всё автоматически выгружается в 1С. Экономия времени — колоссальная.",
    rating: 5,
    fleet: "120 автомобилей",
  },
  {
    name: "Марина Соколова",
    role: "Руководитель автопарка",
    company: "СтройСервис Про",
    text: "Подключили 85 карт за один день. Менеджер провёл за руку через всю настройку. Сливы топлива сократились на 90% за первый месяц.",
    rating: 5,
    fleet: "85 автомобилей",
  },
  {
    name: "Дмитрий Волков",
    role: "Владелец",
    company: "Экспресс Доставка",
    text: "Раньше водители заправлялись где попало и за наличные. Теперь полная прозрачность — я вижу каждую транзакцию в телефоне.",
    rating: 5,
    fleet: "45 автомобилей",
  },
];

export function Testimonials() {
  const [ref, isVisible] = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 bg-card/60 border-y border-border/60"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-20 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent mb-6">
            <Star className="h-3.5 w-3.5 fill-current" />
            Отзывы клиентов
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-foreground sm:text-4xl lg:text-[2.75rem] text-balance leading-tight">
            Нам доверяют 4 200+ компаний
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Послушайте, что говорят наши клиенты о работе с NevaCart.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group relative rounded-2xl border border-border/60 bg-background p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.04] hover:border-primary/20 hover:-translate-y-1 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 120}ms` }}
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary/10 mb-4 transition-colors duration-300 group-hover:text-primary/20" />

              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={`star-${t.name}-${j}`}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <blockquote className="text-foreground leading-relaxed mb-8 text-[15px]">
                {`"${t.text}"`}
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-border/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 font-heading font-bold text-primary text-sm transition-transform duration-300 group-hover:scale-110">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <p className="font-heading font-semibold text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
                <span className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider">
                  {t.fleet}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
