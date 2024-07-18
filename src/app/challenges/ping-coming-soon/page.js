import { Libre_Franklin } from "next/font/google"

const lf = Libre_Franklin({ subsets: ["latin"], weight: ["300", "600", "700"] })

const page = () => {
  return <div className={`${lf.className} min-h-screen`}>Enter</div>
}

export default page
