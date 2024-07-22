import { Poppins, Open_Sans } from "next/font/google"
import Image from "next/image"
import IconsComp from "./IconsComp"

// fonts
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] })
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] })

const Page = () => {
  return (
    <div className="min-h-screen bg-hlp-Violet bg-[url('/huddle-landing-page/bg-mobile.svg')] md:bg-[url('/huddle-landing-page/bg-desktop.svg')] bg-no-repeat bg-contain flex justify-center py-12">
      <main className="flex justify-center items-center flex-col gap-12 md:gap-20 px-8 md:px-16 lg:px-24">
        <div className="place-self-start">
          <Image
            src="/huddle-landing-page/logo.svg"
            width={150}
            height={150}
            alt="Logo-Image"
            className="md:w-48"
          />
        </div>
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 w-full h-full">
          <div className="flex items-center justify-center md:justify-start w-full h-full mx-auto">
            <Image
              src="/huddle-landing-page/illustration-mockups.svg"
              width={300}
              height={300}
              alt="illustration"
              className="md:max-w-[550px] mx-auto lg:max-w-[720px] w-full h-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center md:items-start flex-col gap-6 md:gap-10 w-full h-full">
            <h1
              className={`${poppins.className} flex flex-col gap-2 md:gap-4 text-center md:text-start text-2xl md:text-5xl text-white font-semibold`}
            >
              <span className="text-nowrap">Build The Community</span>
              <span className="text-nowrap"> Your Fans Will Love</span>
            </h1>
            <p
              className={`${openSans.className} text-white font-normal -mx-1 md:mx-0 md:text-lg text-center md:text-start `}
            >
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button
              className={`${poppins.className} bg-white py-4 rounded-full w-56 md:w-48 text-sm md:text-base text-hlp-Violet hover:bg-hlp-SoftMagenta hover:text-white`}
            >
              Register
            </button>
          </div>
        </div>
        <div className="md:place-self-end">
          <IconsComp />
        </div>
      </main>
    </div>
  )
}

export default Page
