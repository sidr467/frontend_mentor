import Image from "next/image"

const Hero = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 mb-10">
      <section className="relative lg:order-2 flex items-center justify-center mb-8 lg:mb-0 ">
        <Image
          src="/bookmark-landing-page/illustration-hero.svg"
          width={500}
          height={500}
          alt="Illustration Hero"
          className="object-contain w-full max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl"
        />
        <div className="absolute w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[400px] lg:w-[450px] lg:h-[250px] xl:w-[550px] xl:h-[350px] bg-blp-Soft-Blue -right-16 sm:-right-20 md:-right-24 lg:-right-28 xl:-right-32 -bottom-4 -z-10 rounded-s-full"></div>
      </section>
      <section className="flex flex-col items-center justify-center md:items-start gap-6 md:gap-8 lg:gap-10 lg:px-4 xl:px-8">
        <h1 className="text-blp-Very-Dark-Blue font-medium text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center md:text-left">
          A Simple Bookmark Manager
        </h1>
        <p className="text-blp-Grayish-Blue font-normal text-base md:text-lg lg:text-xl text-center md:text-left lg:pr-4">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex items-center justify-center md:justify-start text-sm font-medium gap-4 md:gap-6 lg:gap-8">
          <button className="h-12 bg-blp-Soft-Blue px-4 sm:px-6 lg:px-8 rounded-lg text-white shadow-xl hover:bg-blue-600 transition-colors duration-300">
            Get it on Chrome
          </button>
          <button className="h-12 bg-blp-Grayish-Blue px-4 sm:px-6 lg:px-8 rounded-lg bg-opacity-20 text-gray-500 shadow-xl hover:bg-gray-400 hover:bg-opacity-40 transition-colors duration-300">
            Get it on Firefox
          </button>
        </div>
      </section>
    </main>
  )
}

export default Hero
