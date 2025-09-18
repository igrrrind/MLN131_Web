import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { PuzzleProvider } from "@/lib/puzzle-context"
import { ThemeProvider } from "next-themes"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/header"
import localFont from "next/font/local";
import { Be_Vietnam_Pro, Merriweather } from "next/font/google";



export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/SVN-Gilroy Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],    // you can add "vietnamese" too
  weight: ["400", "500", "700"], // pick the weights you need
  variable: "--font-bevietnam",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${beVietnam.className} antialiased`}>
      <body>
        <Suspense fallback={null}>
          <PuzzleProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
              <Header />         
              {children}
            </ThemeProvider>
          </PuzzleProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
