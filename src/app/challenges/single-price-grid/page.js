import { Karla } from "next/font/google"

const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] })

const page = () => {
  return <div className={`${karla.className} min-h-screen`}></div>
}

export default page
