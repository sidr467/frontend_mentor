import { Plus_Jakarta_Sans } from "next/font/google"
import Form from "./components/Form"

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "700"] })

const page = () => {
  return (
    <div
      className={`${pjs.className} min-h-screen lg:bg-mrc-Slate-100 flex justify-center md:items-center text-[16px] `}
    >
      <main className="bg-mrc-White w-full h-full grid grid-cols-1 md:max-w-[900px] md:max-h-[550px] gap-8 rounded-3xl">
        <Form />
      </main>
    </div>
  )
}

export default page
