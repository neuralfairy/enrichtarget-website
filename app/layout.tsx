import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LiveChat from "@/components/live-chat"
import StickyTrialButton from "@/components/sticky-trial-button"
import ExitIntentPopup from "@/components/exit-intent-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Enrichtarget Solutions - AI-Powered B2B Lead Intelligence",
  description: "Transform your B2B sales with AI Hunter - find verified contacts and enrich leads with AI precision.",
  metadataBase: new URL("https://enrichtarget.com"),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Enrichtarget Solutions",
              url: "https://enrichtarget.com",
              logo: "https://enrichtarget.com/logo.png",
              description: "AI-powered B2B lead intelligence and prospecting solutions",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Atlanta",
                addressRegion: "GA",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-ENRICH",
                contactType: "sales",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <LiveChat />
        <StickyTrialButton />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
