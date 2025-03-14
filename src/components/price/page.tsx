// icons
import { Check } from "lucide-react"

// components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Basic / Mês",
    price: "R$29.99",
    features: ["500+ Canais", " Qualidade Full HD ", "3+ Dispositivos"],
  },
  {
    name: "Standard / Trimestral",
    price: "R$79.99",
    features: ["500+ Canais", " Qualidade Full HD ", "3+ Dispositivos"],
  },
  {
    name: "Premium / Semestral",
    price: "R$149.99",
    features: ["500+ Canais", " Qualidade Full HD ", "3+ Dispositivos"],
  },
]

export default function Price() {
  return (
    <section id="price" className="py-20 mt-10 px-4 md:px-8 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Escolha seu plano:</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col bg-gray-900 border-red-600 ">
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
                    <li key={featureIndex} className="flex items-center text-gray-300 md:text-center">
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
  );
}

