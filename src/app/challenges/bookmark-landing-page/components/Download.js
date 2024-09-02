import Image from "next/image"

const download = [
  {
    id: 1,
    name: "Chrome",
    minVersion: "62",
    image: "/bookmark-landing-page/logo-chrome.svg",
  },
  {
    id: 2,
    name: "Firefox",
    minVersion: "55",
    image: "/bookmark-landing-page/logo-firefox.svg",
  },
  {
    id: 3,
    name: "Opera",
    minVersion: "46",
    image: "/bookmark-landing-page/logo-opera.svg",
  },
]

const Download = () => {
  return (
    <section className="py-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col items-center justify-center gap-10">
      <article className="flex flex-col gap-6 items-center justify-center md:gap-8 lg:gap-10 lg:px-4 xl:px-8">
        <h2 className="text-blp-Very-Dark-Blue font-medium text-2xl lg:text-3xl xl:text-4xl">
          Download the extension
        </h2>
        <p className="text-blp-Grayish-Blue text-center text-base md:text-lg lg:text-xl max-w-[600px]">
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favourite you&apos;d like us to prioritize.
        </p>
      </article>
      <article className="flex items-center justify-center flex-col lg:flex-row gap-8">
        {download.map((d) => (
          <div
            key={d.id}
            className="shadow-xl rounded-2xl flex items-center justify-center flex-col gap-8 w-[280px] py-2 lg:even:mt-20 lg:last-of-type:mt-40"
          >
            <div className="">
              <Image src={d.image} width={90} height={90} alt={d.name}></Image>
            </div>
            <div className="w-full text-center border-b-4 border-dotted pb-8">
              <h3 className="text-lg lg:text-xl text-blp-Very-Dark-Blue font-medium">
                Add to {d.name}
              </h3>
              <p className="text-blp-Grayish-Blue text-base md:text-lg lg:text-xl">
                Minimum version {d.minVersion}
              </p>
            </div>
            <button className="h-12 bg-blp-Soft-Blue hover:bg-white hover:ring-1 ring-blp-Soft-Blue hover:text-blp-Soft-Blue transition-colors duration-300 px-4 sm:px-6 lg:px-8 rounded-lg text-white shadow-xl lg:text-base text-sm mb-4 font-medium">
              Add & Install Extension
            </button>
          </div>
        ))}
      </article>
    </section>
  )
}

export default Download
