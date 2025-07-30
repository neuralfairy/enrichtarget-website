import type { Metadata } from "next"
import { Brain, Target, Zap, Shield, BarChart3, Users, Database, Workflow, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Hunter Features - Advanced B2B Lead Intelligence | Enrichtarget",
  description:
    "Discover AI Hunter's powerful features: AI-powered prospecting, verified contact discovery, real-time enrichment, CRM integrations, and more.",
}

const features = [
  {
    icon: Brain,
    title: "AI-Powered Prospecting",
    description:
      "Advanced machine learning algorithms analyze millions of data points to identify and qualify high-value prospects with unprecedented accuracy.",
    benefits: [
      "95% lead qualification accuracy",
      "Predictive lead scoring",
      "Behavioral pattern analysis",
      "Intent data integration",
    ],
  },
  {
    icon: Target,
    title: "Verified Contact Discovery",
    description:
      "Find accurate email addresses and contact information with industry-leading verification rates and real-time validation.",
    benefits: [
      "95%+ email verification rate",
      "Real-time validation",
      "Bounce rate reduction",
      "Deliverability optimization",
    ],
  },
  {
    icon: Zap,
    title: "Real-Time Enrichment",
    description:
      "Instantly enrich lead profiles with comprehensive company and contact data from over 200 premium data sources.",
    benefits: ["200+ data sources", "Instant profile completion", "Company intelligence", "Social media insights"],
  },
  {
    icon: Users,
    title: "CRM Integrations",
    description:
      "Seamlessly integrate with Salesforce, HubSpot, Pipedrive, and 50+ other platforms for streamlined workflow.",
    benefits: ["50+ CRM integrations", "Two-way data sync", "Automated workflows", "Custom field mapping"],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track performance metrics and optimize your prospecting strategy with detailed insights and reporting.",
    benefits: ["Real-time dashboards", "ROI tracking", "Performance metrics", "Custom reports"],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "GDPR compliant with enterprise-grade security and compliance with international data protection regulations.",
    benefits: ["GDPR compliance", "SOC 2 certified", "Data encryption", "Privacy controls"],
  },
  {
    icon: Database,
    title: "Comprehensive Database",
    description: "Access to over 10 million verified B2B contacts and 2 million companies with fresh, accurate data.",
    benefits: ["10M+ verified contacts", "2M+ companies", "Monthly data refresh", "Global coverage"],
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description:
      "Set up intelligent automation sequences that nurture leads and trigger actions based on prospect behavior.",
    benefits: ["Smart automation", "Trigger-based actions", "Lead nurturing", "Follow-up sequences"],
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Comprehensive coverage across North America, Europe, Asia-Pacific, and emerging markets.",
    benefits: ["Global data coverage", "Multi-language support", "Regional compliance", "Local insights"],
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Modern Sales Teams
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            AI Hunter combines cutting-edge artificial intelligence with proven sales methodologies to deliver the most
            comprehensive B2B lead intelligence platform available.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-black text-white hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
          >
            <Link href="/trial">Start Free Trial</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Ready to Experience AI Hunter?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of sales professionals who have transformed their prospecting with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-white text-black hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <Link href="/trial">Start Free Trial</Link>
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
        </div>
      </section>
    </main>
  )
}
