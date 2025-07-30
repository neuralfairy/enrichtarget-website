import type { Metadata } from "next"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Stats from "@/components/stats"

export const metadata: Metadata = {
  title: "AI Hunter: Find and Enrich B2B Leads with AI Precision | Enrichtarget Solutions",
  description:
    "Transform your B2B sales with AI Hunter - the intelligent prospecting tool that finds verified contact emails and enriches leads using AI-powered intelligence.",
  keywords: "AI-powered prospecting, lead intelligence, AI Hunter, contact discovery, B2B sales, lead generation",
  openGraph: {
    title: "AI Hunter: Find and Enrich B2B Leads with AI Precision",
    description:
      "Transform your B2B sales with AI Hunter - the intelligent prospecting tool that finds verified contact emails and enriches leads using AI-powered intelligence.",
    url: "https://enrichtarget.com",
    siteName: "Enrichtarget Solutions",
    locale: "en_US",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  )
}
