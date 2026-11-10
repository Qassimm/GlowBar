import type { Metadata } from "next";
import { Geist, Yesteryear, Rokkitt } from "next/font/google";
import "./globals.css";
import Header from "@/component/UI/Header";
import Footer from "@/component/UI/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const yesteryear = Yesteryear({
  weight: "400",
  variable: "--font-yesteryear",
  subsets: ["latin"],
});

const rokkitt = Rokkitt({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rokkitt",
  // only add weight if needed; for variable fonts you can omit it
  // weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "GlowBar ",
  description: "Where beauty matches the personality",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${yesteryear.variable} ${rokkitt.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`${rokkitt.className} min-h-full flex flex-col overflow-x-hidden`}
      suppressHydrationWarning>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}