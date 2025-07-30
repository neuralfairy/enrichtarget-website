import type { Metadata } from "next"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Hunter Pricing - Choose Your Plan | Enrichtarget Solutions",
  description:
    "Transparent pricing for AI Hunter. Choose from Starter, Professional, or Enterprise plans. 14-day free trial available.",
}

const plans = [
  {
    name: "Starter",
    price: 49,
    description: "Perfect for small sales teams getting started with AI prospecting",
    features: [
      "1,000 verified contacts/month",
      "Basic AI prospecting",
      "Email verification",
      "CRM integration (3 platforms)",
      "Basic analytics",
      "Email support",
    ],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: 149,
    description: "Ideal for growing sales teams that need advanced features",
    features: [
      "5,000 verified contacts/month",
      "Advanced AI prospecting",
      "Real-time enrichment",
      "CRM integration (unlimited)",
      "Advanced analytics & reporting",
      "Automated workflows",
      "Priority support",
      "Custom integrations",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom requirements",
    features: [
      "Unlimited verified contacts",
      "Custom AI models",
      "White-label options",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security features",
      "SLA guarantee",
      "On-premise deployment",
    ],
    popular: false,
    cta: "Contact Sales",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your sales team. All plans include a 14-day free trial with no credit card
            required.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? "border-purple-500 shadow-xl scale-105"
                    : "border-gray-200 hover:border-purple-200 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {typeof plan.price === "number" ? (
                      <div>
                        <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-600">/month</span>
                      </div>
                    ) : (
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular ? "bg-black text-white hover:bg-gray-800" : "bg-gray-100 text-black hover:bg-gray-200"
                  } hover:shadow-lg transition-all duration-300`}
                >
                  <Link href={plan.name === "Enterprise" ? "/contact" : "/trial"}>{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change my plan anytime?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                prorate any billing adjustments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens after my free trial ends?</h3>
              <p className="text-gray-600">
                After your 14-day free trial, you can choose to continue with a paid plan or your account will be
                paused. No charges are made without your explicit consent.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom enterprise solutions?</h3>
              <p className="text-gray-600">
                Yes, our Enterprise plan includes custom features, dedicated support, and flexible deployment options.
                Contact our sales team for a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of sales professionals who have transformed their prospecting with AI Hunter.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-white text-black hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <Link href="/trial">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
