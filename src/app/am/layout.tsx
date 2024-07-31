import type { Metadata } from "next";
import FooterAm from "@/components/footerAm";
import HeaderControllerAm from "@/components/headerControllerAm";

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
      <body className="bg-cyan-400">
        <HeaderControllerAm />
        {children}
        <FooterAm />
      </body>
    </html>
  );
}
