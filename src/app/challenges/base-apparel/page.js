import { Josefin_Sans } from "next/font/google"
import Image from "next/image"

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
})

const page = () => {
  return (
    <div
      className={`${josefin.className} text-[16px] flex items-center justify-center w-full bg-black min-h-screen pt-8 md:p-0 `}
    >
      <main className="md:min-h-screen w-full h-full bg-pink-500 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 mb-8 md:m-0">
        <div className="flex flex-col gap-8 md:gap-0 md:order-2 w-full h-full bg-slate-400 md:col-span-1">
          <Image
            src="/base-apparel/logo.svg"
            width={120}
            height={120}
            alt="logo"
            className="ml-8 md:hidden"
          ></Image>
          <Image
            src="/base-apparel/hero-mobile.jpg"
            width={300}
            height={300}
            alt="hero-mobile"
            className="w-full md:hidden"
          ></Image>
          <Image
            src="/base-apparel/hero-desktop.jpg"
            width={300}
            height={300}
            alt="hero-desktop"
            className="hidden md:block w-full max-h-screen object-contain"
          ></Image>
        </div>
        <div className="flex flex-col gap-8 md:justify-center max-h-full md:max-h-screen w-full bg-gray-500 md:col-span-2">
          <Image
            src="/base-apparel/logo.svg"
            width={120}
            height={120}
            alt="logo"
            className="ml-8 md:flex hidden"
          ></Image>
          <h1 className="uppercase text-5xl text-center md:text-start px-4 tracking-[10px]">
            <span className="text-bacs-Desaturated-Red font-light ">
              We&apos;re
            </span>{" "}
            <span className="text-bacs-Dark-Grayish-Red font-semibold ">
              coming soon
            </span>
          </h1>
          <p className="text-bacs-Desaturated-Red text-center md:text-start mx-4">
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
            <button className="absolute right-0 h-full w-20 px-4 flex items-center justify-center rounded-full shadow-bacs-Desaturated-Red hover:shadow-2xl  bg-gradient-to-tl from-bacs-g2t to-bacs-g2f">
              <Image
                src="/base-apparel/icon-arrow.svg"
                width={13}
                height={13}
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
