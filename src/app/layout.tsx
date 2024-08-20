import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/commons/header";
import { META_DATA_DEFAULT } from "@/utils/constants/seo";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = META_DATA_DEFAULT;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
