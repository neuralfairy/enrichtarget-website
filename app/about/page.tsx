import type { Metadata } from "next"
import { Users, Target, Award, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Enrichtarget Solutions - AI-Powered B2B Lead Intelligence | Atlanta",
  description:
    "Learn about Enrichtarget Solutions, the Atlanta-based company behind AI Hunter. Our mission, team, and commitment to transforming B2B sales.",
}

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Former VP of Sales at Fortune 500 companies with 15+ years in B2B sales technology.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "AI/ML expert with previous experience at Google and Microsoft, specializing in sales intelligence.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Product",
    bio: "Product leader with deep expertise in SaaS platforms and user experience design.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "David Kim",
    role: "Head of Sales",
    bio: "Sales veteran with proven track record of building high-performing sales teams.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We deliver accurate, verified data that sales teams can trust and act upon.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Our customers' success is our success. We're committed to their growth and results.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We continuously push the boundaries of AI technology to solve real sales challenges.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Enrichtarget
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to transform B2B sales through AI-powered intelligence, helping sales teams find and
              convert their ideal prospects with unprecedented precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">2019</div>
              <div className="text-gray-600">Founded in Atlanta</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600">Verified contacts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At Enrichtarget Solutions, we believe that every sales professional deserves access to accurate,
                actionable intelligence that helps them connect with the right prospects at the right time.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in Atlanta in 2019, we've built AI Hunter to be the most comprehensive B2B lead intelligence
                platform available, combining cutting-edge artificial intelligence with proven sales methodologies to
                deliver results that matter.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Enrichtarget team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we build products, serve customers, and grow as a
              company.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced leaders driving innovation and growth at Enrichtarget Solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-purple-600 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 mr-3" />
                <h2 className="text-3xl lg:text-5xl font-bold">Atlanta, GA</h2>
              </div>
              <p className="text-xl text-purple-100 mb-6 leading-relaxed">
                Headquartered in the heart of Atlanta's thriving tech scene, we're proud to be part of a city known for
                innovation, diversity, and entrepreneurial spirit.
              </p>
              <p className="text-lg text-purple-100 leading-relaxed">
                While our roots are in Atlanta, we serve customers globally and our remote-first culture allows us to
                attract top talent from around the world.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Atlanta skyline"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for transforming B2B sales through
            innovative technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-black text-white hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <Link href="/careers">View Open Positions</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-black border-gray-300 hover:bg-gray-50 bg-transparent"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
