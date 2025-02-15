import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/headerEn";
import Footer from "../components/footerEn";

export const metadata: Metadata = {
  title: {
    absolute: "Tesfa Addis",
    default: "Tesfa Addis",
    template: "%s | Tesfa Addis",
  },

  description: "Tesfa Addis Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cyan-400">{children}</body>
    </html>
  );
}
