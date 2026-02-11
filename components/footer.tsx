import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="28" height="28" rx="7" className="fill-primary" />
            <path
              d="M9 18V11.5L14 8L19 11.5V18L14 15.5L9 18Z"
              className="fill-primary-foreground"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-semibold text-foreground">NeVacart</span>
        </div>
        <div className="flex gap-6">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
        </div>
        <p className="text-xs text-muted-foreground">
          {`\u00A9 ${new Date().getFullYear()} NeVacart. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
