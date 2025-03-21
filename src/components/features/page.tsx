import { Tv, Globe, Clock, AppleIcon as DevicesIcon } from "lucide-react"

const features = [
  {
    icon: <Tv className="h-12 w-12 text-red-600" />,
    title: "Milhares de canais",
    description: "Acesse uma vasta biblioteca de canais internacionais cobrindo notícias, esportes, entretenimento e muito mais.",
  },
  {
    icon: <Globe className="h-12 w-12 text-red-600" />,
    title: "Conteúdo Global",
    description: "Aproveite conteúdo do mundo inteiro, com programação diversificada.",
  },
  {
    icon: <Clock className="h-12 w-12 text-red-600" />,
    title: "Streaming",
    description: "Veja seus programas e filmes a qualquer momento.",
  },
  {
    icon: <DevicesIcon className="h-12 w-12 text-red-600" />,
    title: "Suporta Diversos Dispositivos",
    description: "Transmita na sua TV, computador, tablet ou smartphone, em qualquer lugar, a qualquer hora.",
  },
]

export default function Features() {
  return (
    <section id="features" className="pt-20 mt-10 px-4 md:px-8 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Por que escolher nossos serviços?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-black p-6 rounded-lg border border-red-600">
              <div className="mb-3 flex items-center justify-center">{feature.icon}</div>
              {/* title */}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>

              {/* description */}
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

