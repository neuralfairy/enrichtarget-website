import { Brain, Target, Zap, Shield, BarChart3, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Prospecting",
    description:
      "Advanced machine learning algorithms identify and qualify high-value prospects with unprecedented accuracy.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Target,
    title: "Verified Contact Discovery",
    description: "Find accurate email addresses and contact information with 95%+ verification rates.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Real-Time Enrichment",
    description: "Instantly enrich lead profiles with comprehensive company and contact data.",
    gradient: "from-cyan-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "Enterprise-grade security and compliance with international data protection regulations.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track performance metrics and optimize your prospecting strategy with detailed insights.",
    gradient: "from-pink-500 to-blue-500",
  },
  {
    icon: Users,
    title: "CRM Integrations",
    description: "Seamlessly integrate with Salesforce, HubSpot, Pipedrive, and 50+ other platforms.",
    gradient: "from-blue-500 to-purple-500",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Supercharge Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Sales Pipeline
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI Hunter combines cutting-edge artificial intelligence with proven sales methodologies to deliver the most
            accurate and comprehensive B2B lead intelligence platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="bg-black text-white hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
          >
            <Link href="/features">Explore All Features</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
