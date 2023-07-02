import { type Metadata } from "next";
import Script from "next/script";

import { fontMono, fontSans, fontSerif } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { BreakpointIndicator } from "@/components/breakpoint-indicator";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | tifan.me",
    default: "tifan.me",
  },
  description: "A blog",
  keywords: ["blog", "web development", "javascript", "typescript", "react"],
  creator: "Tifan Dwi Avianto",
  authors: [
    {
      name: "Tifan Dwi Avianto",
      url: "https://twitter.com/tifandotme",
    },
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "light" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          fontSerif.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <BreakpointIndicator />
        </ThemeProvider>
        <Script
          async
          src="https://analytics.tifan.me/script.js"
          data-website-id="7edd9838-f991-48d3-aa41-c7fe0cd55d36"
        />
      </body>
    </html>
  );
}
