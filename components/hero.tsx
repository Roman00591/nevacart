"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  CreditCard,
  TrendingDown,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-28">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-[80px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(220 30% 10%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 30% 10%) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground mb-8 animate-fade-up opacity-0-initial delay-100">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Покрытие 25 000+ АЗС по всей России
            </div>

            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] xl:text-6xl text-balance leading-[1.1] animate-fade-up opacity-0-initial delay-200">
              Топливные расходы{" "}
              <span className="relative inline-block text-primary">
                под контролем
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8.5C50 3 100 2 150 5C200 8 250 4 298 7"
                    stroke="hsl(25, 95%, 53%)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-fade-in delay-700 opacity-0-initial"
                    style={{ animationFillMode: "forwards" }}
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up opacity-0-initial delay-300">
              NevaCard — корпоративные топливные карты для компаний с автопарком.
              Автоматизируйте учёт ГСМ, сократите расходы до 15% и забудьте
              о бумажных чеках навсегда.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0-initial delay-400">
              <Button size="lg" className="rounded-xl text-base h-13 px-8 group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" asChild>
                <Link href="#contact">
                  Получить карты бесплатно
                  <ArrowRight className="ml-2 h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl text-base h-13 px-8 hover:bg-card transition-all duration-300 bg-transparent" asChild>
                <Link href="#how-it-works">Как это работает</Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground animate-fade-up opacity-0-initial delay-500">
              <span className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-accent" />
                Подключение за 1 день
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                Без скрытых комиссий
              </span>
            </div>
          </div>

          {/* Right: Visual Card */}
          <div className="relative flex items-center justify-center lg:justify-end animate-fade-up opacity-0-initial delay-300">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 px-6 sm:px-0">
              {/* Glow behind card */}
              <div className="absolute inset-4 rounded-3xl bg-primary/10 blur-2xl" />

              {/* Main card */}
              <div className="relative rounded-3xl bg-foreground p-6 sm:p-8 text-primary-foreground shadow-2xl shadow-foreground/20 animate-card-tilt">
                <div className="flex items-center justify-between mb-8 sm:mb-10">
                  <span className="font-heading text-base sm:text-lg font-bold tracking-wide">NevaCard</span>
                  <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 opacity-40" />
                </div>

                {/* Chip */}
                <div className="mb-6 sm:mb-8 w-10 h-7 sm:w-12 sm:h-9 rounded-md bg-gradient-to-br from-amber-300/60 to-amber-500/40" />

                <div className="mb-6 sm:mb-8 flex gap-2 sm:gap-4 text-base sm:text-xl tracking-[0.25em] font-mono opacity-70">
                  <span>4276</span>
                  <span>****</span>
                  <span>****</span>
                  <span>8901</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider opacity-40 mb-1">
                      {"Владелец"}
                    </p>
                    <p className="text-xs sm:text-sm font-medium opacity-80">
                      {'ООО "ЛОГИСТИКА+"'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-wider opacity-40 mb-1">
                      {"Лимит/день"}
                    </p>
                    <p className="text-xs sm:text-sm font-medium opacity-80">
                      {"15 000 ₽"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-4 right-0 sm:-right-4 lg:-right-8 rounded-2xl glass border border-border/60 p-3 sm:p-4 shadow-xl animate-float delay-200">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                    <TrendingDown className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground font-medium">Экономия</p>
                    <p className="text-base sm:text-lg font-bold font-heading text-foreground">-15%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 left-0 sm:-left-4 lg:-left-8 rounded-2xl glass border border-border/60 p-3 sm:p-4 shadow-xl animate-float delay-500">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground font-medium">АЗС в сети</p>
                    <p className="text-base sm:text-lg font-bold font-heading text-foreground">25 000+</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute top-1/2 -left-2 lg:-left-12 -translate-y-1/2 rounded-2xl glass border border-border/60 p-3 sm:p-4 shadow-xl animate-float delay-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-accent/10">
                    <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground font-medium">Защита</p>
                    <p className="text-base sm:text-lg font-bold font-heading text-foreground">24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
