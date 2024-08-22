import Image from "next/image"

const Hero = () => {
  return (
    <section className="grid grid-flow-row grid-cols-1 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8 md:col-span-6 lg:col-span-7">
      <div className="flex items-center justify-center xl:col-span-6">
        <Image
          src="/news-homepage/image-web-3-mobile.jpg"
          width={300}
          height={300}
          alt="Web3 Image"
          className="w-full sm:hidden max-w-[350px]"
          quality={100}
          unoptimized
        ></Image>
        <Image
          src="/news-homepage/image-web-3-desktop.jpg"
          width={300}
          height={300}
          alt="Web3 Image"
          className="w-full hidden sm:block"
          quality={100}
          unoptimized
        ></Image>
      </div>
      <div className="pr-8 xl:col-span-3">
        <h1 className="text-4xl text-nh-VeryDarkblue font-extrabold md:text-5xl lg:text-6xl">
          The Bright Future of Web 3.0?
        </h1>
      </div>
      <div className="flex flex-col gap-4 items-start justify-between xl:col-span-3 md:pr-20">
        <p className="text-sm lg:text-base font-medium text-nh-DarkGrayishBlue  ">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="bg-nh-SoftRed h-10 px-8 text-xs lg:text-sm font-bold text-nh-VeryDarkblue hover:bg-nh-VeryDarkblue hover:text-nh-OffWhite uppercase tracking-[4px] ">
          Read more
        </button>
      </div>
    </section>
  )
}

export default Hero
