import { TrendingUp, Users, Mail, Clock } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average ROI Increase",
    description: "Sales teams see dramatic improvements",
  },
  {
    icon: Users,
    value: "10M+",
    label: "Verified Contacts",
    description: "In our comprehensive database",
  },
  {
    icon: Mail,
    value: "95%",
    label: "Email Accuracy",
    description: "Industry-leading verification rates",
  },
  {
    icon: Clock,
    value: "80%",
    label: "Time Saved",
    description: "On manual prospecting tasks",
  },
]

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-purple-100">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
