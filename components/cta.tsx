import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Sales Process?
            </span>
          </h2>

          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join thousands of sales professionals who have accelerated their pipeline with AI Hunter. Start your free
            trial today and experience the power of AI-driven prospecting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              asChild
              className="bg-white text-black hover:bg-gray-100 hover:shadow-xl transition-all duration-300 group"
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
              className="text-white border-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
            >
              <Link href="/demo">Schedule Demo</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-purple-100">
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              14-day free trial
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
