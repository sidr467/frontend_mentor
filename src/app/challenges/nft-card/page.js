import { Outfit } from "next/font/google"

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "300", "600"] })

const page = () => {
  return (

      <main className={`${outfit.className}`}>
hello
  </main>
)
}

export default page
