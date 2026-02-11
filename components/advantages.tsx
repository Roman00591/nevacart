"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { Clock, TrendingDown, HeadphonesIcon, Lock, ArrowRight } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "Экономия времени",
    description:
      "Бухгалтерия тратит на сверку чеков 3-5 дней в месяц. С NevaCard — 0. Все данные автоматически попадают в систему учёта.",
    metric: "5 дней/мес",
    metricLabel: "экономия времени бухгалтерии",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: TrendingDown,
    title: "Снижение расходов",
    description:
      "Контроль лимитов, обнаружение аномалий и прозрачные цены помогают нашим клиентам экономить в среднем 15% на топливных расходах.",
    metric: "до 15%",
    metricLabel: "снижение расходов на ГСМ",
    gradient: "from-emerald-500/10 to-emerald-500/5",
  },
  {
    icon: Lock,
    title: "Полная безопасность",
    description:
      "Мгновенная блокировка карт, PIN-коды, геолокация транзакций и интеллектуальный детектор подозрительных операций.",
    metric: "0 ₽",
    metricLabel: "потерь от махинаций",
    gradient: "from-accent/10 to-accent/5",
  },
  {
    icon: HeadphonesIcon,
    title: "Поддержка 24/7",
    description:
      "Персональный менеджер и техническая поддержка круглосуточно. Среднее время ответа — менее 3 минут.",
    metric: "< 3 мин",
    metricLabel: "среднее время ответа",
    gradient: "from-primary/10 to-primary/5",
  },
];

export function Advantages() {
  const [ref, isVisible] = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section id="advantages" className="relative py-16 sm:py-24 lg:py-32 bg-card/60 border-y border-border/60">
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-12 sm:mb-20 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-medium text-emerald-600 mb-6">
            <TrendingDown className="h-3.5 w-3.5" />
            Преимущества
          </div>
          <h2 className="font-heading text-2xl font-extrabold text-foreground sm:text-4xl lg:text-[2.75rem] text-balance leading-tight">
            Почему 4 200+ компаний
            <br className="hidden sm:block" />
            выбрали NevaCard
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Мы решаем реальные проблемы бизнеса, а не продаём пластиковые карты.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              className={`group relative rounded-2xl border border-border/60 bg-background overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.04] hover:border-primary/20 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${150 + i * 120}ms` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${adv.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <adv.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    {adv.title}
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {adv.description}
                  </p>
                  <div className="inline-flex items-center gap-3 rounded-xl bg-card border border-border/60 px-4 py-2.5 shadow-sm">
                    <span className="font-heading font-extrabold text-primary text-xl">
                      {adv.metric}
                    </span>
                    <span className="text-xs text-muted-foreground leading-tight">
                      {adv.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
