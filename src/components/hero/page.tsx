import Image from "next/image";

import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto flex items-center justify-between w-full">

        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-5xl font-bold mb-4 text-white">Experimente TV como nunca antes!</h1>

          <p className="text-xl mb-8 text-gray-400">
            Canais ilimitados, conteúdo sob demanda e esportes ao vivo — tudo em um só lugar.
          </p>

          <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
            <Link href='https://bit.ly/Blackflixbr'>
              Comece seu teste gratuito
            </Link>
          </Button>
        </div>

        <div>
          <Image
            src="/blackflix.webp"
            alt="IPTV streaming devices"
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  )
}
