import { Lexend_Deca, Inter } from "next/font/google"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] })
const lexendDeca = Lexend_Deca({ subsets: ["latin"], weight: ["400"] })

const Stats = [
  {
    name: "companies",
    stats: "10k+",
  },
  {
    name: " templates ",
    stats: "314",
  },
  {
    name: "queries",
    stats: "12M+",
  },
]

const page = () => {
  return (
    <main
      className={`${inter.className} text-[15px] min-h-screen max-h-fit flex flex-col justify-center items-center bg-spc-Very-dark-blue`}
    >
      <div className="bg-spc-Dark-desaturated-blue max-w-[350px] flex flex-col justify-center gap-8 mx-8 rounded-lg my-16 ">
        <section className="">
          <Image
            src="/stats-preview/image-header-mobile.jpg"
            width={200}
            height={200}
            alt=""
            className="w-full object-cover rounded-t-lg"
          ></Image>
        </section>
        <section className="flex flex-col items-center justify-center gap-8">
          <div className="text-center px-8 flex flex-col gap-4">
            <h1 className="text-spc-White text-2xl font-bold">
              Get <span className="text-spc-Soft-violet">insights</span> that
              help your business grow.
            </h1>{" "}
            <p className="text-spc-Slightly-transparent-white-mainPara text-sm leading-6">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>{" "}
          </div>
          <div className="flex flex-col gap-6 mb-6 ">
            {Stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <span className="text-spc-White text-xl font-bold">
                  {stat.stats}
                </span>
                <span
                  className={`${lexendDeca.className} text-spc-Slightly-transparent-white-statHead uppercase text-[11px] font-normal tracking-wider`}
                >
                  {stat.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default page
