import { Rubik } from "next/font/google"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Download from "./components/Download"
import FAQ from "./components/FAQ"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500"] })

const Page = () => {
  return (
    <div
      className={`${rubik.className} min-h-screen text-[18px] overflow-x-hidden mt-4`}
    >
      <div className="flex flex-col gap-16">
        <Header />
        <Hero />
        <Features />
        <Download />
        <FAQ />
        <ContactUs />
      </div>
      <Footer />
    </div>
  )
}

export default Page
