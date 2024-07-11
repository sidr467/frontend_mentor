import { Kumbh_Sans } from "next/font/google"
import Image from "next/image"

const kumbhSans = Kumbh_Sans({ subsets: ["latin"], weight: ["400", "700"] })

const profileStats = [
  {
    number: "80K",
    name: "Followers",
  },
  {
    number: "803K",
    name: "Likes",
  },
  {
    number: "1.4K",
    name: "Photos",
  },
]

const page = () => {
  return (
    <div
      className={`${kumbhSans.className} min-h-screen overflow-hidden w-full bg-pfc-Dark-cyan flex items-center justify-center relative text-[18px]`}
    >
      <Image
        src="/profile-card/bg-pattern-top.svg"
        alt="bgImage"
        height={300}
        width={300}
        className="absolute w-[500px] xl:w-[1000px] xl:-top-[600px] -top-32 -left-52  rotate-"
      ></Image>
      <Image
        src="/profile-card/bg-pattern-bottom.svg"
        alt="bgImage"
        height={300}
        width={300}
        className="absolute w-[500px] xl:w-[1000px] xl:-bottom-[600px]  -bottom-32 -right-52"
      ></Image>
      <main className="max-w-[350px] shadow-2xl rounded-2xl bg-white z-10 flex flex-col gap-6 relative ">
        <Image
          src="/profile-card/bg-pattern-card.svg"
          height={300}
          width={300}
          alt="bgcard"
          className="rounded-t-2xl"
        ></Image>
        <Image
          src="/profile-card/image-victor.jpg"
          height={80}
          width={80}
          alt="profileImage"
          className="rounded-full absolute top-20 left-28 ring-4 ring-white"
        ></Image>

        <div className="flex flex-col items-center justify-center gap-4 mt-8  ">
          <div className="grid grid-rows-2 gap-1 items-center">
            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-pfc-Very-dark-desaturated-blue ">
                Victor Crest
              </h1>
              <span className="text-pfc-Dark-grayishblue text-base">26</span>
            </div>
            <p className="text-pfc-Dark-grayishblue font-base text-xs text-center">London</p>
          </div>
        </div>
        <hr className="border-pfc-Dark-gray opacity-45" />
        <div className="flex gap-8 items-center justify-center">
          {profileStats.map((stat, index) => (
            <div key={index} className="text-center mb-6">
              <h2 className="text-pfc-Very-dark-desaturated-blue font-bold">
                {stat.number}
              </h2>
              <p className="text-pfc-Dark-grayishblue font-base text-xs">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default page
