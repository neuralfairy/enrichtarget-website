"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Zap, Target, Brain } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-medium text-purple-800">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Lead Intelligence
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              AI Hunter: Find and Enrich{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                B2B Leads
              </span>{" "}
              with AI Precision
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your B2B sales pipeline with intelligent prospecting. Discover verified contact emails, enrich
              lead data, and accelerate your sales cycle using cutting-edge AI technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-black text-white hover:bg-gray-800 hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/trial" className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-black border-gray-300 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 group bg-transparent"
              >
                <Link href="/demo" className="flex items-center">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Book a Demo
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                No credit card required
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                14-day free trial
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Target className="w-8 h-8 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Lead Discovery</div>
                      <div className="text-sm text-gray-600">AI-powered prospecting</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">98%</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Brain className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Email Verification</div>
                      <div className="text-sm text-gray-600">Real-time validation</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">95%</div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">Recent Enrichments</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>john.doe@techcorp.com</span>
                      <span className="text-green-600">✓ Verified</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>sarah.smith@innovate.io</span>
                      <span className="text-green-600">✓ Enriched</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
