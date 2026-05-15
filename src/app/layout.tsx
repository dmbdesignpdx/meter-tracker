import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";
import { Toaster } from "@/components/shadcn/sonner";
import { cn } from "@/lib/utils";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  adjustFontFallback: false,
  fallback: ["sans-serif"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  adjustFontFallback: false,
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Meter Tracker",
  description: "Track your progress of gas meter surveying.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cn(roboto.variable, robotoMono.variable)}>
      <body dir="ltr">
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
