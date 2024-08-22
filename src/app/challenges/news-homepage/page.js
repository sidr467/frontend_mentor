import { Inter } from "next/font/google"
import Header from "./components/Header"
import Hero from "./components/Hero"
import NewSection from "./components/NewSection"
import Popular from "./components/Popular"

const inter = Inter({
  subsets: ["cyrillic-ext"],
  weight: ["400", "700", "800"],
})

const NewsHompage = () => {
  return (
    <div
      className={`${inter.className} min-h-screenx p-6 md:p-12 lg:px-20 xl:px-28`}
    >
      <main className="grid gap-8 md:gap-12 lg:gap-16 grid-cols-1">
        <Header></Header>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-10">
            <Hero></Hero>
            <NewSection></NewSection>
        </div>
        <Popular></Popular>
      </main>
    </div>
  )
}

export default NewsHompage
