import { Plus_Jakarta_Sans } from "next/font/google"
import Form from "./components/Form"
import Results from "./components/Results"

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "700"] })

const page = () => {
  return (
    <div
      className={`${pjs.className} min-h-screen lg:bg-mrc-Slate-100 flex justify-center md:items-center text-[16px] `}
    >
      <main className="bg-mrc-White w-full h-full grid grid-cols-1 md:grid-cols-2 md:max-w-[1000px] md:h-[500px] gap-8 rounded-3xl">
        <Form />
        <Results />
      </main>
    </div>
  )
}

export default page
