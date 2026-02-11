import Link from "next/link";

export function Hero() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Fuel Costs{" "}
          <span className="text-primary">Under Control</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
          Track, analyze, and optimize your fleet{"'"}s fuel consumption in real time.
          Reduce waste, gain visibility, and save up to 15% on fuel expenses.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="#contact"
            className="inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto"
          >
            Get Started Free
          </Link>
          <Link
            href="#features"
            className="inline-flex h-12 w-full items-center justify-center rounded-md border border-border bg-background px-6 text-base font-medium text-foreground hover:bg-muted sm:w-auto"
          >
            See Features
          </Link>
        </div>

        <p className="mt-6 text-xs text-muted-foreground sm:text-sm">
          No credit card required. Free for teams up to 10 vehicles.
        </p>
      </div>
    </section>
  );
}
