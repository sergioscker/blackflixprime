import { Tv } from "lucide-react"

export default function Logo() {
  return (
    <div className="logo-container flex">
      <div className="flex justify-center items-center text-2xl xl:text-3xl font-bold">
        <span className="text-white">Black</span>
        <span className="text-red-600 mr-1">Prime</span>

        <Tv className="inline-block w-7 h-7 text-red-600 mx-1" />
      </div>
    </div>
  )
}