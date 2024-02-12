import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Syne } from "next/font/google";
import "./global.scss"


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })


export const metadata: Metadata = {
  title: "Rafael David | Portfolio",
  description: "Rafael David's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
