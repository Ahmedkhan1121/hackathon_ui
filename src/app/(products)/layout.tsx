import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import HeaderProduct from "@/components/HeaderProduct/HeaderProduct";
import FooterProducList from "@/components/Footer2/Footer2";
import { popin } from "@/utils/hepler";
import TopBar from "@/components/TopBar/TopBar";


const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${popin.className} antialiased`}
        >
        <TopBar/>
        <HeaderProduct />
        {children}
        <FooterProducList/>
      </body>
    </html>
  );
}
