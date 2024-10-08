import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/commons/header";
import { META_DATA_DEFAULT } from "@/utils/constants/seo";
import Footer from "@/components/commons/footer";

const dinFont = localFont({
  src: [
    {
      path: './fonts/DINRoundPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/DINRoundPro-Medi.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/DINRoundPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/DINRoundPro-Black.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
})
export const metadata: Metadata = META_DATA_DEFAULT;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dinFont.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
