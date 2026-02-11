"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Fuel, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Возможности", href: "#features" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Как подключить", href: "#how-it-works" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary transition-transform duration-300 group-hover:scale-110">
            <Fuel className="h-4.5 w-4.5 text-primary-foreground" />
          </div>
          <span className="text-xl font-heading font-bold tracking-tight text-foreground">
            Neva<span className="text-primary">Card</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-lg hover:bg-foreground/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link href="#contact">Войти</Link>
          </Button>
          <Button size="sm" className="group rounded-xl" asChild>
            <Link href="#contact">
              Оставить заявку
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden relative p-2 text-foreground rounded-lg hover:bg-foreground/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
                mobileOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
                mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-border/50 px-5 pb-6 pt-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 px-4">
            <Button variant="outline" className="rounded-xl bg-transparent" asChild>
              <Link href="#contact">Войти</Link>
            </Button>
            <Button className="rounded-xl" asChild>
              <Link href="#contact">
                Оставить заявку
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
