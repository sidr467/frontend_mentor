import { League_Spartan } from "next/font/google"
import FeedbackCard from "./FeedbackCard"
import RatingCard from "./RatingCard"
import Image from "next/image"

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const page = () => {
  return (
    <div
      className={`${spartan.className} min-h-screen flex justify-center items-center relative  `}
    >
      <Image
        src="/social-proof-section/bg-pattern-top-mobile.svg"
        alt="BgTopMobile"
        height={400}
        width={400}
        className="absolute top-0 lg:hidden"
      ></Image>
      <Image
        src="/social-proof-section/bg-pattern-bottom-mobile.svg"
        alt="BgBottomMobile"
        height={400}
        width={400}
        className="absolute bottom-0 lg:hidden"
      ></Image>
      <Image
        src="/social-proof-section/bg-pattern-bottom-desktop.svg"
        alt="BgBottomDesktop"
        height={400}
        width={400}
        className="absolute right-0 bottom-0 w-[1000px] hidden lg:flex"
      ></Image>
      <Image
        src="/social-proof-section/bg-pattern-top-desktop.svg"
        alt="BgTopDesktop"
        height={500}
        width={500}
        className="absolute left-20 top-0 hidden lg:flex"
      ></Image>
      <main className="grid grid-cols-1 gap-8 my-12 lg:mx-20 lg:px-24 z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center justify-center ">
          <div className=" flex flex-col gap-4 px-12 flex-1 lg:px-20 ">
            <h1 className="text-sps-Very-Dark-Magenta text-4xl font-bold text-center leading-none lg:text-start lg:text-5xl ">
              10,000+ of our users love our products.
            </h1>
            <p className="text-center lg:text-start text-sps-Dark-Grayish-Magenta font-medium">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <RatingCard></RatingCard>
        </div>
        <FeedbackCard></FeedbackCard>
      </main>
    </div>
  )
}

export default page
