"use client";

const partners = [
  "Лукойл",
  "Газпромнефть",
  "Роснефть",
  "Татнефть",
  "Башнефть",
  "Сургутнефтегаз",
  "Neste",
  "ЕКА",
  "Трасса",
  "Фаэтон",
];

export function LogoTicker() {
  return (
    <section className="border-y border-border/60 bg-card/50 py-6 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
          Работаем с крупнейшими сетями АЗС России
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <span className="text-base font-heading font-bold text-muted-foreground/50 whitespace-nowrap select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
