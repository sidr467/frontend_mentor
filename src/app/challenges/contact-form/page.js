import { Karla } from "next/font/google"
import Form from "./components/Form"

const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] })

const page = () => {
  return (
    <div
      className={`${karla.className} min-h-screen bg-contactform-Green200 flex items-center justify-center`}
    >
      <main className="bg-contactform-White mx-4 rounded-lg">
        <Form />
      </main>
    </div>
  )
}

export default page
