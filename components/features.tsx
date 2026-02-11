const features = [
  {
    title: "Real-time Tracking",
    description:
      "Monitor every transaction as it happens. Set limits per card, driver, or vehicle and get instant alerts on suspicious activity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Expense Reports",
    description:
      "Auto-generated reports with full breakdowns by driver, vehicle, and fuel type. Export to CSV or sync with your accounting software.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Driver Analytics",
    description:
      "Understand driving patterns, fuel efficiency, and spending habits per driver. Identify top performers and areas for improvement.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-muted/40 px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Everything you need to manage fuel spend
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground sm:mt-4 sm:text-lg">
            Three powerful tools that give you full visibility and control over
            your fleet{"'"}s fuel costs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
