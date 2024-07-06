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
    stats: "12m+",
  },
]

const page = () => {
  return (
    <main className={`${inter.className} text-[15px]`}>
      <section>
        <Image
          src="/stats-preview/image-header-mobile.jpg"
          width={200}
          height={200}
          alt=""
        ></Image>
      </section>
      <section>
        <h1>Get insights that help your business grow.</h1>{" "}
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>{" "}
        <div>
          {Stats.map((stat, index) => (
            <div key={index}>
              <span>{stat.stats}</span>
              <span>{stat.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default page
