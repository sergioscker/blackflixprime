import Link from "next/link";
import Logo from "../logo";

export default function Header() {
  return (
    <header className="container w-full py-5">
      <div className="mx-auto flex justify-center xl:justify-between items-center">
        <Link href='/' className="text-red-600 font-bold text-3xl">
          <Logo />
        </Link>

        <nav>
          <ul className="flex space-x-4 p-3">
            <li>
              <Link href="#features" className="text-white hover:text-red-600">
                Benefícios
              </Link>
            </li>

            <li>
              <Link href="#price" className="text-white hover:text-red-600">
                Planos de Pagamento
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  )
}
