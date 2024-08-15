import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "800"] })

const Page = () => {
  return <div className={`${poppins.className} min-h-screen`}>Enter</div>
}

export default Page
