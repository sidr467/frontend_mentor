import { Overpass } from "next/font/google"
import RatingCard from "./components/RatingCard"

const overpass = Overpass({ subsets: ["latin"], weight: ["400", "700"] })

const page = () => {
  return (
    <main className={`${overpass.className} flex items-center justify-center h-screen bg-iac-VeryDarkBlue`}>
      <RatingCard />
    </main>
  )
}

export default page
