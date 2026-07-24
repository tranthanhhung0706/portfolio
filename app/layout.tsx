import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hung Tran — Full Stack Developer & Freelancer",
    template: "%s | Hung Tran",
  },
  description:
    "Portfolio of Hung Tran, a full stack developer based in Vietnam building headless e-commerce, CRM, and internal tooling with Next.js, Shopify, and Angular.",
  keywords: [
    "Hung Tran",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "Shopify",
    "Portfolio",
  ],
  authors: [{ name: "Hung Tran", url: "https://github.com/tranthanhhung0706" }],
  creator: "Hung Tran",
  openGraph: {
    title: "Hung Tran — Full Stack Developer & Freelancer",
    description:
      "Portfolio of Hung Tran, a full stack developer based in Vietnam building headless e-commerce, CRM, and internal tooling with Next.js, Shopify, and Angular.",
    siteName: "Hung Tran Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hung Tran — Full Stack Developer & Freelancer",
    description:
      "Portfolio of Hung Tran, a full stack developer based in Vietnam building headless e-commerce, CRM, and internal tooling with Next.js, Shopify, and Angular.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
