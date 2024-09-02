import { Rubik } from "next/font/google"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500"] })

const Page = () => {
  return (
    <div
      className={`${rubik.className} min-h-screen text-[18px] flex flex-col gap-16 overflow-x-hidden mb-20`}
    >
      <Header />
      <Hero />
      <Features />
    </div>
  )
}

export default Page
