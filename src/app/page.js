import Footer from "@/components/main/Footer"
import Header from "@/components/main/Header"
import CardSection from "@/components/main/CardSection"

export default function Home() {
  return (
    <main className="flex flex-col mx-auto gap-8 bg-almostBlack min-h-screen max-h-max pb-4">
      <Header />
      <div className="p-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 grid gap-2 text-almostWhite">
        <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold tracking-wide ">
          All Challenges
        </h1>
        <p className="text-xs md:text-sm lg:text-base font-medium">
          List of challenges from Frontend Mentor which I&apos;ve completed.
        </p>
      </div>
      <CardSection></CardSection>
      <Footer></Footer>
    </main>
  )
}
