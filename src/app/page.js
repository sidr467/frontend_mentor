import Image from "next/image"
import Header from "@/components/main/Header"
import CardSection from "@/components/main/CardSection"

export default function Home() {
  return (
    <main className="flex flex-col mx-auto gap-8 md:container bg-almostBlack min-h-screen max-h-max">
      <Header />
      <div className="p-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 grid gap-2 text-almostWhite">
        <h1 className="text-xl md:text-2xl lg:text-3xl  font-extrabold tracking-wide ">
          All Challanges
        </h1>
        <p className="text-xs md:text-sm lg:text-base font-medium">
          Challanges list from Frontend Mentor which I&apos;ve completed.
        </p>
      </div>
      <CardSection></CardSection>
    </main>
  )
}
