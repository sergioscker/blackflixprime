import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black py-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/' className="text-red-600 font-bold text-3xl ">
          IPTV Pro
        </Link>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#features" className="text-white hover:text-red-600">
                Features
              </Link>
            </li>

            <li>
              <Link href="#features" className="text-white hover:text-red-600">
                Pagamento
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </header>



  )
}
