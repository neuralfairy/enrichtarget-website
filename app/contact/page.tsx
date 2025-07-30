import type { Metadata } from "next"
import { Mail, Phone, MapPin, MessageSquare, Users, Briefcase, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Contact Enrichtarget Solutions - Get in Touch | AI Hunter Support",
  description:
    "Contact our sales team, get support, or request a partnership. Multiple ways to reach Enrichtarget Solutions in Atlanta, GA.",
}

const contactOptions = [
  {
    icon: Briefcase,
    title: "Sales Inquiry",
    description: "Ready to transform your sales process? Let's discuss how AI Hunter can help.",
    action: "Contact Sales",
    href: "#sales-form",
  },
  {
    icon: HelpCircle,
    title: "Support Request",
    description: "Need help with your AI Hunter account? Our support team is here to assist.",
    action: "Get Support",
    href: "#support-form",
  },
  {
    icon: Users,
    title: "Partnerships",
    description: "Interested in partnering with us? Let's explore collaboration opportunities.",
    action: "Partner With Us",
    href: "#partnership-form",
  },
  {
    icon: MessageSquare,
    title: "Request a Quote",
    description: "Get a custom quote for your enterprise needs and specific requirements.",
    action: "Get Quote",
    href: "#quote-form",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your B2B sales process? Our team is here to help you get started with AI Hunter and
              answer any questions you may have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="text-black border-gray-300 hover:bg-gray-50 bg-transparent"
                >
                  <a href={option.href}>{option.action}</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (800) ENRICH</p>
              <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">hello@enrichtarget.com</p>
              <p className="text-sm text-gray-500">We respond within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600">Atlanta, GA</p>
              <p className="text-sm text-gray-500">Serving clients globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input id="firstName" type="text" required className="w-full" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input id="lastName" type="text" required className="w-full" placeholder="Doe" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" required className="w-full" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <Input id="company" type="text" className="w-full" placeholder="Your Company" />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type *
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales Inquiry</SelectItem>
                    <SelectItem value="support">Support Request</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="quote">Request Quote</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full"
                  placeholder="Tell us about your needs and how we can help..."
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Our live chat support is available during business hours for instant help.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
          >
            Start Live Chat
          </Button>
        </div>
      </section>
    </main>
  )
}
