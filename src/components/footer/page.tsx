import Link from "next/link"

//icons
import { FaInstagram, FaWhatsapp, FaMoneyCheckDollar, FaHouse, FaWifi } from "react-icons/fa6"
import Logo from "../logo"

export default function Footer() {
  return (
    <footer className="bg-gray-900 mx-auto py-6 px-4 md:px-8 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-around gap-8">

          {/* logo */}
          <div className="flex flex-col gap-4">
            <Logo />

            <div className="flex gap-4">
              <FaInstagram className="h-8 w-8 hover:text-red-600" />
              <FaWhatsapp className="h-8 w-8 hover:text-red-600" />
            </div>
          </div>

          {/* links */}
          <div className="sm:w-auto flex flex-col items-center text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-red-600">Navegação</h3>

            <ul className="space-y-2">
              <li>
                <Link href="/" className="flex gap-2 items-center hover:text-red-600">
                  <FaHouse className="w-5 h-5" /> Home
                </Link>
              </li>

              <li>
                <Link href="#price" className="flex gap-2 items-center hover:text-red-700">
                  <FaMoneyCheckDollar className="w-5 h-5" /> Preço
                </Link>
              </li>

              <li>
                <Link href="#features" className="flex gap-2 items-center hover:text-red-700">
                  <FaWifi className="w-5 h-5" /> Features
                </Link>
              </li>
            </ul>
          </div>


          {/* socials midia */}
          <div className="sm:w-auto flex flex-col items-center text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-red-600">Conecte-se</h3>

            <ul className="space-y-2">
              <li>
                <Link href='https://bit.ly/Blackflixbr'
                  className="flex gap-2 items-center hover:text-red-700">
                  <FaWhatsapp className="w-5 h-5" /> WhatsApp
                </Link>
              </li>

              <li>
                <Link href="https://www.instagram.com/blackflix_oficial?igsh=dDQ5eXFtODVsa3ds"
                  className="flex items-center gap-2 hover:text-red-700">
                  <FaInstagram className="w-5 h-5" /> Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* infos */}
          <div className="w-full sm:w-auto flex flex-col text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-red-600">IPTV Pro</h3>

            <p className="text-gray-400 max-w-[300px]">
              Experimente o futuro da televisão com nosso serviço de IPTV de ponta.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 IPTV Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

