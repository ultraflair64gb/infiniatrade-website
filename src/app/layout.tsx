import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "InfiniaTrade - Leading Futures Broker | Advanced Trading Platform",
  description: "Trade futures with InfiniaTrade's advanced cloud-based platform. Multi-device trading, transparent pricing, and 40+ trading tools designed for modern traders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body suppressHydrationWarning className="antialiased min-h-screen font-roboto">
        <ClientBody>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
