import Image from "next/image"
import Header from "@/components/main/Header"
import CardSection from "@/components/main/CardSection"

export default function Home() {
  return (
    <main className="flex flex-col mx-auto gap-8">
      <Header />
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl text-almostWhite font-extrabold tracking-wide text-center">
          All Challanges
        </h1>
      </div>
      <CardSection></CardSection>
    </main>
  )
}
