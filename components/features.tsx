"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import {
  BarChart3,
  ShieldCheck,
  Zap,
  MapPin,
  FileText,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Полный контроль расходов",
    description:
      "Отслеживайте каждую заправку в реальном времени. Устанавливайте лимиты по картам, водителям и транспортным средствам.",
    color: "bg-primary/8 text-primary",
    hoverColor: "group-hover:bg-primary group-hover:text-primary-foreground",
  },
  {
    icon: ShieldCheck,
    title: "Защита от махинаций",
    description:
      "Интеллектуальная система выявляет подозрительные транзакции и мгновенно уведомляет вас. Сливы топлива уходят в прошлое.",
    color: "bg-emerald-500/8 text-emerald-600",
    hoverColor: "group-hover:bg-emerald-500 group-hover:text-card",
  },
  {
    icon: Zap,
    title: "Автоматизация отчётности",
    description:
      "Забудьте о ручном сборе чеков. Автоматическая выгрузка в 1С, детализированные отчёты и электронные акты.",
    color: "bg-accent/8 text-accent",
    hoverColor: "group-hover:bg-accent group-hover:text-accent-foreground",
  },
  {
    icon: MapPin,
    title: "25 000+ АЗС по России",
    description:
      "Работаем со всеми крупными сетями: Лукойл, Газпромнефть, Роснефть, Shell, BP и независимыми АЗС.",
    color: "bg-primary/8 text-primary",
    hoverColor: "group-hover:bg-primary group-hover:text-primary-foreground",
  },
  {
    icon: FileText,
    title: "Прозрачное ценообразование",
    description:
      "Никаких скрытых комиссий и наценок. Вы платите фиксированную стоимость за обслуживание — и видите реальные цены на топливо.",
    color: "bg-emerald-500/8 text-emerald-600",
    hoverColor: "group-hover:bg-emerald-500 group-hover:text-card",
  },
  {
    icon: Users,
    title: "Персональный менеджер",
    description:
      "Выделенный менеджер для вашей компании. Помощь с подключением, настройкой и решением любых вопросов.",
    color: "bg-accent/8 text-accent",
    hoverColor: "group-hover:bg-accent group-hover:text-accent-foreground",
  },
];

export function Features() {
  const [ref, isVisible] = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.02] blur-[100px] -z-10" />

      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-20 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Zap className="h-3.5 w-3.5" />
            Возможности
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-foreground sm:text-4xl lg:text-[2.75rem] text-balance leading-tight">
            Всё, что нужно для контроля
            <br className="hidden sm:block" />
            расходов на топливо
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Мы создали инструмент, который закрывает все боли управления
            топливными расходами — от первого литра до годового отчёта.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative rounded-2xl border border-border/60 bg-card p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.04] hover:border-primary/20 hover:-translate-y-1 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${150 + i * 100}ms` }}
            >
              <div
                className={`flex h-13 w-13 items-center justify-center rounded-2xl ${feature.color} ${feature.hoverColor} mb-6 transition-all duration-300`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
