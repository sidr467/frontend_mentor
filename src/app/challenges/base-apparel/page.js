import { Josefin_Sans } from "next/font/google"
import Image from "next/image"

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
})

const page = () => {
  return (
    <div
      className={`${josefin.className} text-[16px] flex items-center justify-center min-h-screen mt-8 `}
    >
      <main className="grid grid-cols-1 gap-16 mb-8">
        <div className="flex flex-col gap-8">
          <Image
            src="/base-apparel/logo.svg"
            width={120}
            height={120}
            alt="logo"
            className="ml-8"
          ></Image>
          <Image
            src="/base-apparel/hero-mobile.jpg"
            width={300}
            height={300}
            alt="hero-mobile"
            className="w-full"
          ></Image>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="uppercase text-5xl text-center px-4 tracking-[10px]">
            <span className="text-bacs-Desaturated-Red font-light ">
              We&apos;re
            </span>{" "}
            <span className="text-bacs-Dark-Grayish-Red font-semibold ">
              coming soon
            </span>
          </h1>

          <p className="text-bacs-Desaturated-Red text-center mx-4">
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form
            action=""
            className="flex items-center justify-between ring-1  ring-bacs-Desaturated-Red rounded-full mx-4 relative "
          >
            <input
              type="email"
              placeholder="Email Address"
              className="px-6 py-4 rounded-full w-full h-full text-base focus:outline-none focus:ring-2 focus:ring-bacs-g2t text-bacs-Desaturated-Red  "
            ></input>
            <button className="absolute right-0 h-full w-20 px-4 flex items-center justify-center rounded-full  bg-gradient-to-tl from-bacs-g2t to-bacs-g2f">
              <Image
                src="/base-apparel/icon-arrow.svg"
                width={10}
                height={10}
                alt="icon-Arrow"
                className=" "
              ></Image>
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default page
