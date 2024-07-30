import { Plus_Jakarta_Sans } from "next/font/google"
import Form from "./components/Form"

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "700"] })

const page = () => {
  return (
    <div
      className={`${pjs.className} min-h-screen lg:bg-mrc-Slate-100 flex justify-center py-6 px-6 text-[16px] `}
    >
      <main className="bg-mrc-White w-full h-full">
        <Form />
      </main>
    </div>
  )
}

export default page
