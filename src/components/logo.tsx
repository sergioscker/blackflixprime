import { Tv } from "lucide-react"

export default function Logo() {
  return (
    <div className="logo-container flex items-center">
      <span className="text-3xl font-bold">
        <span className="text-white">Black</span>
        <span className="text-red-600">Flix</span>

        <Tv className="inline-block w-6 h-6 text-red-600 mx-1" />
      </span>
    </div>
  )
}