import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href='/'>
          IPTV Pro
        </Link>

        <nav>
          <ul>
            <li>
              features
            </li>

            <li>
              payments
            </li>
          </ul>
        </nav>
      </div>

    </header>



  )
}
