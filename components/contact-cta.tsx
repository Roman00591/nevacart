"use client";

import { useState } from "react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Sparkles, Phone } from "lucide-react";

const benefits = [
  "Бесплатное подключение и доставка карт",
  "Без скрытых комиссий и наценок",
  "Персональный менеджер для вашей компании",
  "Отмена в любой момент без штрафов",
];

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [ref, isVisible] = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Dark background */}
      <div className="absolute inset-0 bg-foreground -z-20" />
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div
            className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-1.5 text-sm font-medium text-primary-foreground/60 mb-8">
              <Sparkles className="h-3.5 w-3.5" />
              Начните сегодня
            </div>

            <h2 className="font-heading text-2xl font-extrabold text-primary-foreground sm:text-4xl lg:text-[2.75rem] text-balance leading-tight">
              Готовы взять расходы
              <br className="hidden sm:block" />
              на топливо под контроль?
            </h2>
            <p className="mt-4 sm:mt-6 text-primary-foreground/50 leading-relaxed text-base sm:text-lg max-w-lg">
              Оставьте заявку, и наш менеджер свяжется с вами в течение
              15 минут. Подберём оптимальный тариф и доставим карты за 1 день.
            </p>

            <ul className="mt-10 space-y-4">
              {benefits.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 text-sm text-primary-foreground/70 ${
                    isVisible ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${300 + i * 100}ms` }}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 shrink-0">
                    <Check className="h-3.5 w-3.5 text-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-4 pt-8 border-t border-primary-foreground/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/40">
                  Или позвоните
                </p>
                <p className="font-heading font-bold text-primary-foreground text-lg">
                  8 (800) 500-00-00
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <div className="rounded-3xl glass-dark border border-primary-foreground/10 p-6 sm:p-8 lg:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-accent/20 mb-6 animate-scale-in">
                    <Check className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-3">
                    Заявка отправлена!
                  </h3>
                  <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-xs mx-auto">
                    Наш менеджер свяжется с вами в течение 15 минут
                    в рабочее время.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
                    Оставить заявку
                  </h3>
                  <p className="text-sm text-primary-foreground/40 mb-6">
                    Заполните форму и мы свяжемся с вами
                  </p>

                  <Input
                    required
                    placeholder="Название компании"
                    className="h-12 rounded-xl bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary/50 focus:ring-primary/20 transition-all"
                  />
                  <Input
                    required
                    placeholder="Ваше имя"
                    className="h-12 rounded-xl bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary/50 focus:ring-primary/20 transition-all"
                  />
                  <Input
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="h-12 rounded-xl bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary/50 focus:ring-primary/20 transition-all"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="h-12 rounded-xl bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary/50 focus:ring-primary/20 transition-all"
                    />
                    <Input
                      placeholder="Кол-во авто"
                      className="h-12 rounded-xl bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary/50 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-13 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 group text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
                  >
                    Отправить заявку
                    <ArrowRight className="ml-2 h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <p className="text-[11px] text-primary-foreground/30 text-center leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с политикой
                    конфиденциальности и обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
