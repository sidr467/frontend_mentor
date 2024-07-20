import { Poppins, Open_Sans } from "next/font/google"
import Image from "next/image"
import IconsComp from "./IconsComp"

//fonts
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] })
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] })

const page = () => {
  return (
    <div className="min-h-screen max-h-fit bg-hlp-Violet flex justify-center py-2
    ">
      <main className="w-full h-full flex justify-center items-center flex-col gap-12 md:gap-20 px-8 lg:px-24">
        <div className="place-self-start">
          <Image
            src="/huddle-landing-page/logo.svg"
            width={150}
            height={150}
            alt="Logo-Image"
            className="md:w-48"
          ></Image>
        </div>
        <div className="flex gap-12 flex-col md:flex-row">
          <div className="flex items-center justify-center md:justify-start flex-shrink-0">
            <Image
              src="/huddle-landing-page/illustration-mockups.svg"
              width={320}
              height={320}
              alt="illustration"
              className="md:max-w-[550px] lg:max-w-[720px] w-full h-full object-cover"
            ></Image>
          </div>
          <div className="flex items-center justify-center md:items-start flex-col gap-6 md:gap-10">
            <h1
              className={` ${poppins.className} text-center md:text-start text-2xl md:text-5xl text-white font-semibold`}
            >
              Build The Community Your Fans Will Love
            </h1>
            <p
              className={`${openSans.className} text-white font-normal -mx-1 md:text-xl text-center md:text-start`}
            >
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="bg-white py-4 rounded-full w-56 md:w-48 text-sm md:text-base text-hlp-Violet hover:bg-hlp-SoftMagenta hover:text-white">
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

export default page
