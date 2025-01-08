import localFont from "next/font/local";
import "../globals.css";
import { Toaster } from "sonner";

const dinFont = localFont({
  src: [
    {
      path: '../fonts/DINRoundPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/DINRoundPro-Medi.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/DINRoundPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/DINRoundPro-Black.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
})

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`w-full h-screen ${dinFont.className}`}>
        <div className="p-[30px]">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  )
}
