import { Red_Hat_Display } from "next/font/google"
import Image from "next/image"

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
})

const page = () => {
  return (
    <main
      className={`${redHat.className} text-[16px] h-screen flex items-center justify-center flex-col bg-osc-Pale-blue`}
    >
      <div className="max-w-[350px] sm:max-w-[400px] bg-osc-Very-pale-blue flex flex-col gap-8 items-center m-6 rounded-xl">
        <section className="">
          <Image
            src="/order-summary/illustration-hero.svg"
            width={300}
            height={300}
            alt=""
            className="w-full rounded-tr-xl rounded-tl-xl "
          ></Image>
        </section>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="text-center grid gap-4 px-8">
            <h1 className="text-osc-Dark-blue text-xl font-black">
              Order Summary
            </h1>
            <p className="text-osc-Desaturated-blue font-medium">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>
          <section className="flex justify-between items-center gap-12 text-sm bg-osc-Pale-blue bg-opacity-40 sm:px-8 sm:py-4 px-4 mx-6 py-2 rounded-md">
            <div className="flex gap-4 mr-8">
              <Image
                src="/order-summary/icon-music.svg"
                alt="icon-music"
                width={45}
                height={45}
                className=""
              ></Image>
              <div className="flex flex-col gap-1">
                <span className="text-osc-Dark-blue font-bold whitespace-nowrap">
                  Annual Plan
                </span>
                <span className="text-osc-Desaturated-blue font-medium">
                  $59.99/year
                </span>
              </div>
            </div>
            <div>
              <p className="font-bold underline text-osc-Bright-blue">Change</p>
            </div>
          </section>
          <section className="text-sm font-bold flex gap-4 flex-col mb-8">
            <button className="text-osc-Pale-blue bg-osc-Bright-blue w-[280px] px-4 py-4 sm:w-[320px] rounded-xl shadow-xl">
              Proceed to Payment
            </button>
            <button className="text-osc-Desaturated-blue">Cancel Order</button>
          </section>
        </div>
      </div>
    </main>
  )
}

export default page
