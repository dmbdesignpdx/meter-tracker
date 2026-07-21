// Theirs
import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";

// Ours
import { Toaster } from "@/components/shadcn/sonner";
import { MetaData, Url } from "@/data/meta";
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
  title: MetaData.title,
  description: MetaData.description,
  metadataBase: Url.BASE,
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
