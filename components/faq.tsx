"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "Сколько времени занимает подключение?",
    a: "Подключение занимает 1 рабочий день. Вы оставляете заявку, мы оформляем договор и доставляем карты курьером. Можно начать пользоваться уже на следующий день.",
  },
  {
    q: "Какие АЗС принимают карты NevaCard?",
    a: "Наши карты принимаются на более чем 25 000 АЗС по всей России, включая Лукойл, Газпромнефть, Роснефть, Shell, BP и тысячи независимых станций. Покрытие охватывает все регионы.",
  },
  {
    q: "Можно ли установить лимиты на карты?",
    a: "Да, вы можете устанавливать дневные, недельные и месячные лимиты на каждую карту отдельно. Также доступны ограничения по типу топлива и географии заправок.",
  },
  {
    q: "Есть ли скрытые комиссии?",
    a: "Нет. Вы платите только фиксированную абонентскую плату за каждую карту. Стоимость топлива на АЗС — по рыночной цене без наценок. Все условия прозрачно описаны в договоре.",
  },
  {
    q: "Как происходит интеграция с 1С?",
    a: 'На тарифах "Бизнес" и "Корпорация" доступна прямая интеграция с 1С. Мы предоставляем модуль и инструкцию, а наш технический специалист поможет с настройкой бесплатно.',
  },
  {
    q: "Что делать, если карта потеряна или украдена?",
    a: "Вы можете мгновенно заблокировать карту в личном кабинете или через мобильное приложение. Новая карта будет доставлена в течение 1-2 рабочих дней.",
  },
];

export function FAQ() {
  const [ref, isVisible] = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section id="faq" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-3xl px-5 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <HelpCircle className="h-3.5 w-3.5" />
            Вопросы и ответы
          </div>
          <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-4xl lg:text-[2.75rem] text-balance leading-tight">
            Часто задаваемые вопросы
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Не нашли ответ? Напишите нам — мы ответим в течение часа.
          </p>
        </div>

        <div
          className={`${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={`faq-${i}`}
                value={`item-${i}`}
                className="border border-border/60 rounded-2xl px-6 bg-card data-[state=open]:shadow-lg data-[state=open]:shadow-primary/[0.03] data-[state=open]:border-primary/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5 text-[15px]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-[15px]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div
          className={`text-center mt-12 ${
            isVisible ? "animate-fade-up delay-400" : "opacity-0"
          }`}
        >
          <p className="text-muted-foreground mb-4">
            Остались вопросы? Мы на связи.
          </p>
          <Button variant="outline" className="rounded-xl group bg-transparent" asChild>
            <Link href="#contact">
              Связаться с нами
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
