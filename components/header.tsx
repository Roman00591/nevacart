import Link from "next/link";
import { MobileNavToggle } from "./mobile-nav-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80">
      <div className="relative mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
          >
            <rect width="28" height="28" rx="7" className="fill-primary" />
            <path
              d="M9 18V11.5L14 8L19 11.5V18L14 15.5L9 18Z"
              className="fill-primary-foreground"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            {"NeVa"}<span className="text-primary">{"cart"}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Get Started Free
          </Link>
        </nav>

        <MobileNavToggle />
      </div>
    </header>
  );
}
