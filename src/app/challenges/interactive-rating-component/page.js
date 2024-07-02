import { Overpass } from "next/font/google"

const overpass = Overpass({ subsets: ["latin"], weight: ["400", "700"] })

const page = () => {
  return <main className={`${overpass.className}`}>HELLO</main>
}

export default page
