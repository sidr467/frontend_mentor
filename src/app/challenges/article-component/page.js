import { Manrope } from "next/font/google"

const manRope = Manrope({ subsets: ["latin"], weight: ["500", "700"] })

const page = () => {
  return (
    <div className={`${manRope.className} text-[13px] flex justify-center items-center min-h-screen`}>
      <main>
        <div></div>
        <div>
          <h1>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I&apos;ve got some simple tips to
            help you make any room feel complete.
          </p>
        </div>
        <div>
          <div></div>
          <div>
            <span>Michelle Appleton</span>
            <span>28 Jun 2020</span>
          </div>
          <div></div>
        </div>
      </main>
    </div>
  )
}

export default page
