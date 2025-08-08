import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Samuel Ogunware - Computer Science Graduate & Developer",
  description:
    "Computer Science graduate specializing in AI, web development, and data analysis. Experienced in Python, Java, and building scalable solutions.",
  keywords: "computer science, software developer, AI, machine learning, python, java, blockchain, data analysis",
  authors: [{ name: "Samuel Ogunware" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  // Security headers via metadata
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https:; frame-ancestors 'none';"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
