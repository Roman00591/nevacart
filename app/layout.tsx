import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title:
    "NevaCard — Корпоративные топливные карты | Контроль расходов на ГСМ",
  description:
    "NevaCard — сервис корпоративных топливных карт с покрытием по всей России. Полный контроль расходов на ГСМ, автоматизация отчётности, экономия до 15% на топливе.",
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
