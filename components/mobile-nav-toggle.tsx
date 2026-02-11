"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileNavToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:bg-muted sm:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-t border-border bg-background px-4 pb-4 pt-2 sm:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              href="#features"
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#contact"
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90"
              onClick={() => setOpen(false)}
            >
              Get Started Free
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
