import { Kumbh_Sans } from "next/font/google"

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
    <div className={`${kumbhSans.className} min-h-screen w-full`}>
      <main>Victor Crest 26 London</main>
    </div>
  )
}

export default page
