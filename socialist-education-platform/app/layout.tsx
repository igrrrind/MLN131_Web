import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { PuzzleProvider } from "@/lib/puzzle-context"
import { ThemeProvider } from "next-themes"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body>
        <Suspense fallback={null}>
          <PuzzleProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
              {children}
            </ThemeProvider>
          </PuzzleProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
