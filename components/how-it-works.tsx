"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import {
  FileSignature,
  CreditCard,
  BarChart3,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: FileSignature,
    step: "01",
    title: "Оставьте заявку",
    description:
      "Заполните форму на сайте или позвоните нам. Менеджер свяжется в течение 15 минут и подберёт оптимальный тариф.",
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Получите карты",
    description:
      "Мы доставим карты курьером за 1 рабочий день. Нужно от 5 карт — но можно и 500. Без ограничений.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Управляйте расходами",
    description:
      "Личный кабинет с аналитикой, лимитами и уведомлениями. Всё прозрачно и под вашим контролем.",
  },
  {
    icon: Headphones,
    step: "04",
    title: "Получайте поддержку",
    description:
      "Персональный менеджер и техподдержка 24/7. Мы рядом, когда вам нужна помощь.",
  },
];

export function HowItWorks() {
  const [ref, isVisible] = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section
      id="how-it-works"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[80px] -z-10" />

      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-12 sm:mb-20 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent mb-6">
            <CreditCard className="h-3.5 w-3.5" />
            Как подключить
          </div>
          <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-4xl lg:text-[2.75rem] text-balance leading-tight">
            Подключение за 4 простых шага
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Никакой бюрократии. Мы сделали процесс максимально простым,
            чтобы вы могли начать экономить уже сегодня.
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-[2px]">
            <div
              className={`h-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transition-all duration-1000 ${
                isVisible ? "scale-x-100" : "scale-x-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            />
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className={`relative ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${200 + i * 150}ms` }}
              >
                <div className="text-center group">
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-card border border-border/60 shadow-lg mb-8 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/[0.08] group-hover:-translate-y-1">
                    <step.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <span className="absolute -top-2.5 -right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg shadow-primary/30 ring-4 ring-background">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
