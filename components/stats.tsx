"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { useCountUp } from "@/hooks/use-count-up";
import { Fuel, Users, TrendingDown, Clock } from "lucide-react";

function StatItem({
  value,
  suffix,
  label,
  icon: Icon,
  index,
  isVisible,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: typeof Fuel;
  index: number;
  isVisible: boolean;
}) {
  const count = useCountUp(value, 2200, isVisible);

  return (
    <div
      className={`relative py-12 px-6 text-center lg:py-16 group ${
        isVisible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-heading text-4xl font-extrabold text-foreground lg:text-5xl tabular-nums">
        {count.toLocaleString("ru-RU")}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

const stats = [
  { value: 25000, suffix: "+", label: "АЗС по России", icon: Fuel },
  { value: 4200, suffix: "+", label: "Компаний-клиентов", icon: Users },
  { value: 15, suffix: "%", label: "Средняя экономия", icon: TrendingDown },
  { value: 1, suffix: " день", label: "Подключение", icon: Clock },
];

export function Stats() {
  const [ref, isVisible] = useAnimateOnScroll<HTMLDivElement>(0.2);

  return (
    <section ref={ref} className="relative bg-card/60 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/60">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
