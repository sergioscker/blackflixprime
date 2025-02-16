
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Basic",
    price: "R$9.99",
    features: ["500+ Channels", "HD Quality", "1 Device", "7-Day Replay"],
  },
  {
    name: "Standard",
    price: "R$19.99",
    features: ["1000+ Channels", "Full HD Quality", "3 Devices", "14-Day Replay", "On-Demand Library"],
  },
  {
    name: "Premium",
    price: "R$29.99",
    features: ["2000+ Channels", "4K Quality", "5 Devices", "30-Day Replay", "On-Demand Library", "Premium Sports"],
  },
]

export default function Price() {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12 text-white">Escolha seu plano:</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col bg-gray-900 border-red-600">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-red-600">{plan.name}</CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-4xl font-bold text-center mb-6 text-white">
                  {plan.price}
                  <strong className="text-sm font-normal text-gray-400">/mês</strong>
                </p>

                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-red-600 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-red-600 text-white hover:bg-red-700">Escolha o plano</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

