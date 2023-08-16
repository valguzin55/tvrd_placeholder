import { TailwindIndicator } from "@/components/indicator";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: ".tvrd",
  description: "Сайт плейсхолдер агенства .tvrd",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "favicon/apple-touch-icon.png",
    },
  ],
  manifest: "favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        {/* <TailwindIndicator /> */}
      </body>
    </html>
  );
}
