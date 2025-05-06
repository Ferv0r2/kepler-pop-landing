import type React from "react"
import type { Metadata } from "next"
import { Inter, Press_Start_2P } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kepler-pop-landing.vercel.app'),
  title: "Kepler-pop | Cosmic Puzzle Adventure",
  description:
    "Explore the cosmic wonders of Kepler as you pop, match, and blast your way through an interstellar adventure!",
  keywords: [
    "Puzzle Game",
    "Cosmic Adventure",
    "Kepler-pop",
    "Interstellar",
    "Match-3",
    "Space Game",
    "Casual Game",
    "Mobile Game",
    "Blast Game",
    "Fun Puzzle",
    "Galaxy",
    "Pop Game"
  ],
  authors: [{ name: "Ferv0r2" }],
  openGraph: {
    title: "Kepler-pop | Cosmic Puzzle Adventure",
    description:
      "Explore the cosmic wonders of Kepler as you pop, match, and blast your way through an interstellar adventure!",
    url: "https://kepler-pop-landing.vercel.app",
    type: "website",
    locale: "en_US",
    siteName: "Kepler-pop",
    images: [
      {
        url: "/images/kepler-pop-gameplay.png",
        width: 1200,
        height: 630,
        alt: "Kepler-pop Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kepler-pop | Cosmic Puzzle Adventure",
    description:
      "Pop, match, and blast your way through the stars in Kepler-pop! Embark on a cosmic puzzle adventure.",
    site: "@Ferv0r2",
    images: ["/images/kepler-pop-gameplay.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* GSAP and premium plugins */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollSmoother.min.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/SplitText.min.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Flip.min.js" async></script>
        <meta name="apple-mobile-web-app-title" content="Kepler Pop" />
      </head>
      <body className={`${inter.variable} ${pressStart2P.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
