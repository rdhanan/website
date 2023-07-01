import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSerif = Newsreader({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-serif",
});