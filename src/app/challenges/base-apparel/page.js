import { Josefin_Sans } from "next/font/google"
import Image from "next/image"

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
})

const page = () => {
  return (
    <div
      className={`${josefin.className} text-[16px] flex items-center justify-center w-full min-h-screen pt-8 md:p-0 `}
    >
      <main className="md:min-h-screen w-full h-full flex flex-col md:flex-row gap-10 md:gap-0 mb-8 md:m-0">
        <div className="md:gap-0 md:order-2 w-full h-full">
          {/* Mobile */}
          <div className="flex flex-col gap-8">
            <Image
              src="/base-apparel/logo.svg"
              width={120}
              height={120}
              alt="logo"
              quality={100}
              className="ml-8 md:hidden"
            ></Image>
            <Image
              src="/base-apparel/hero-mobile.jpg"
              width={300}
              height={300}
              quality={100}
              alt="hero-mobile"
              className="w-full md:hidden"
            ></Image>
          </div>
          {/* Desktop */}
          <div className="md:flex hidden min-h-screen items-center justify-center relative">
            <Image
              src="/base-apparel/hero-desktop.jpg"
              alt="hero-desktop"
              layout="fill"
              quality={100}
              className="hidden md:block w-full max-h-screen object-cover absolute inset-0"
            ></Image>
          </div>
        </div>
        <div className="relative h-screen w-full flex items-center justify-center">
          <Image
            src="/base-apparel/bg-pattern-desktop.svg"
            layout="fill"
            alt="bg"
            objectFit="cover"
          ></Image>
          <div className="md:pl-40 flex flex-col gap-8 md:gap-24 justify-center max-h-full md:max-h-screen w-full z-10 ">
            <div>
              <Image
                src="/base-apparel/logo.svg"
                width={120}
                height={120}
                alt="logo"
                className="mx-4 md:flex hidden w-[150px]"
              ></Image>
            </div>
            <div className="flex flex-col gap-8 md:gap-10 md:max-w-[500px]">
              <h1 className="uppercase text-5xl md:text-7xl text-center md:text-start px-4 tracking-[10px]">
                <span className="text-bacs-Desaturated-Red font-light ">
                  We&apos;re
                </span>{" "}
                <span className="text-bacs-Dark-Grayish-Red font-semibold ">
                  coming soon
                </span>
              </h1>
              <p className="text-bacs-Desaturated-Red text-center md:text-base md:text-start mx-4 md:pr-8">
                Hello fellow shoppers! We&apos;re currently building our new
                fashion store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>
              <form
                action=""
                className="flex items-center justify-between rounded-full mx-4 relative "
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  className="px-6 py-4 rounded-full w-full h-full text-base focus:outline-none focus:ring-2 ring-1 ring-bacs-Desaturated-Red focus:ring-bacs-g2t text-bacs-Desaturated-Red  "
                ></input>
                <button className="absolute right-0 h-full w-20 px-4 flex items-center justify-center rounded-full shadow-bacs bg-gradient-to-tl hover:scale-110 from-bacs-g2t to-bacs-g2f">
                  <Image
                    src="/base-apparel/icon-arrow.svg"
                    width={13}
                    height={13}
                    alt="icon-Arrow"
                    className=""
                  ></Image>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
