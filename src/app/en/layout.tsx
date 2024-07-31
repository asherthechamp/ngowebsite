import type { Metadata } from "next";
import FooterEn from "../../components/footerEn";
import HeaderControllerEn from "@/components/headerControllerEn";

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
        <HeaderControllerEn />
        {children}
        <FooterEn />
      </body>
    </html>
  );
}
