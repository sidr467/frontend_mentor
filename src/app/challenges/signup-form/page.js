import { Poppins } from "next/font/google"
import SignupForm from "./SignupForm"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const page = () => {
  return (
    <div
      className={`${poppins.className} text-[16px] min-h-screen bg-icsf-red bg-[url('/signup-form/bg-intro-mobile.png')] md:bg-[url('/signup-form/bg-intro-desktop.png')] flex items-center justify-center`}
    >
      <main className="mx-4 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] py-12">
        <section className="flex items-center justify-center px-8">
          <div className="grid gap-6">
            <h1 className="text-2xl md:text-5xl font-bold text-white text-center md:text-start">
              Learn to code by watching others
            </h1>
            <p className="text-white text-sm md:text-base font-normal text-center md:text-start ">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
        </section>
        <section className="max-w-[550px] flex flex-col gap-6">
          <div className="bg-icsf-blue rounded-lg flex items-center justify-center px-20 py-6 text-center text-white shadow-[0_8px_0px_0_rgba(0,0,0,0.2)]">
            <p>
              <span className="font-semibold">Try it free 7 days</span>{" "}
              <span className=" text-icsf-grayish-blue font-medium">
                then $20/mo. thereafter
              </span>
            </p>
          </div>
          <SignupForm />
        </section>
      </main>
    </div>
  )
}

export default page
