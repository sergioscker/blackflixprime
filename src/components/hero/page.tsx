import Link from "next/link";
import Image from "next/image";

//icons
import { FaWhatsapp, FaInstagram } from 'react-icons/fa6'

export default function Hero() {
  return (
    <section className="bg-black py-20 px-4 md:px-8 bg-center bg-cover"
      style={{ backgroundImage: "url('/background.svg')" }}
    >
      <div className="flex flex-col md:flex-row xl:justify-around items-center gap-4 w-full">
        {/* texts */}
        <div className="flex flex-col p-4 max-w-xl text-center xl:text-left">
          <h1 className="flex xl:text-left text-center text-3xl sm:text-4xl
           md:text-6xl font-bold mb-4 text-white leading-tight">
            Experimente TV como nunca antes!
          </h1>

          <p className="xl:text-left text-center text-2xl mb-8 text-gray-400 leading-relaxed">
            Canais ilimitados, conteúdo sob demanda e esportes ao vivo — tudo em um só lugar.
          </p>

          {/* sociais buttons */}
          <div className="flex flex-col gap-4 xl:items-start items-center">
            <Link href='https://bit.ly/Blackflixbr'
              className="bg-red-600 text-white p-3 rounded-md hover:bg-red-500">
              Comece seu teste gratuito
            </Link>

            <div className="flex gap-3">
              <Link href='https://bit.ly/Blackflixbr' className="text-red-600 hover:text-red-700/80 
              border border-red-600 rounded-md p-2">
                <FaWhatsapp className="w-10 h-10" />
              </Link>

              <Link href='https://www.instagram.com/blackflix_prime?igsh=dDQ5eXFtODVsa3ds' className="text-red-600 hover:text-red-700 
              border border-red-600 rounded-md p-2">
                <FaInstagram className="w-10 h-10" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center xl:w-1/4 w-full">
          <Image
            src="/blackflix.webp"
            alt="IPTV streaming devices"
            quality={100}
            width={500}
            height={500}
            className="rounded-md w-full h-auto max-w-sm" />
        </div>
      </div>
    </section>
  )
}
