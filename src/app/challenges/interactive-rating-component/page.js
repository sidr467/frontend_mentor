import { Overpass } from "next/font/google"
import RatingCard from "./components/RatingCard"
import ThankYouCard from "./components/ThankYouCard"

const overpass = Overpass({ subsets: ["latin"], weight: ["400", "700"] })

const page = () => {
  return (
    <main className={`${overpass.className} flex items-center justify-center h-screen bg-iac-VeryDarkBlue`}>
      <RatingCard />
      {/* <ThankYouCard/> */}
    </main>
  )
}

export default page
