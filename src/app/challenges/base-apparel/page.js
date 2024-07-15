import { Josefin_Sans } from "next/font/google"

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
})

const page = () => {
  return <div className={`${josefin.className} text-[16px]`}></div>
}

export default page
