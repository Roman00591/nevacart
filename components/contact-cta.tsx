import Link from "next/link";

export function ContactCTA() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
          Ready to take control of your fuel costs?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground sm:mt-4 sm:text-lg">
          Start for free with up to 10 vehicles. No credit card required. Setup
          takes less than 5 minutes.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="#"
            className="inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto"
          >
            Get Started Free
          </Link>
          <Link
            href="#"
            className="inline-flex h-12 w-full items-center justify-center rounded-md border border-border bg-background px-8 text-base font-medium text-foreground hover:bg-muted sm:w-auto"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
