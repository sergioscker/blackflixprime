import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container">
        <div className="flex justify-around gap-5">

          {/* links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-white">Navegação</h3>

            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-600">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#features" className="text-gray-400 hover:text-red-600">
                  Features
                </Link>
              </li>

              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-red-600">
                  Preço
                </Link>
              </li>
            </ul>
          </div>

          {/* socials midia */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-white">Conecte</h3>

            <ul className="space-y-2">
              <li>
                <Link href="https://bit.ly/Blackflixbr" className="text-gray-400 hover:text-red-600">
                  WhatsApp
                </Link>
              </li>

              <li>
                <Link href="https://www.instagram.com/blackflix_oficial?igsh=dDQ5eXFtODVsa3ds" className="text-gray-400 hover:text-red-600">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* info */}
          <div className="flex flex-col">
            <h3 className="text-lg text-left font-semibold mb-4 text-red-600">IPTV Pro</h3>

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

