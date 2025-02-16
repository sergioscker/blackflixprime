import { Tv, Globe, Clock, AppleIcon as DevicesIcon } from "lucide-react"

const features = [
  {
    icon: <Tv className="h-12 w-12 text-red-600" />,
    title: "Thousands of Channels",
    description: "Access a vast library of international channels covering news, sports, entertainment, and more.",
  },
  {
    icon: <Globe className="h-12 w-12 text-red-600" />,
    title: "Global Content",
    description: "Enjoy content from around the world, with multi-language support and diverse programming.",
  },
  {
    icon: <Clock className="h-12 w-12 text-red-600" />,
    title: "On-Demand Streaming",
    description: "Watch your favorite shows and movies anytime with our extensive on-demand library.",
  },
  {
    icon: <DevicesIcon className="h-12 w-12 text-red-600" />,
    title: "Multi-Device Support",
    description: "Stream on your TV, computer, tablet, or smartphone - anywhere, anytime.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Por que escolher nossos serviços?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-black p-6 rounded-lg border border-red-600">
              <div className="mb-4 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

