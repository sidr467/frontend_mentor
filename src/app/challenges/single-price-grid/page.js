import { Karla } from "next/font/google"

const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] })

const page = () => {
  return (
    <div
      className={`${karla.className} min-h-screen  bg-spg-light-gray grid items-center justify-center`}
    >
      <main className="mx-6 grid grid-cols-1 md:grid-cols-2 max-w-[768px] shadow-2xl">
        <div className="bg-white rounded-t-lg p-6 md:px-16 md:py-12 grid gap-4 grid-cols-1 md:col-span-2">
          <h1 className="text-spg-cyan font-bold text-lg md:text-3xl">
            Join our community
          </h1>
          <h2 className="text-spg-bright-yellow md:text-xl font-bold">
            30-day, hassle-free money back guarantee
          </h2>
          <p className="text-spg-grayish-blue text-sm font-normal leading-6 md:text-lg">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="bg-spg-cyan p-6 md:p-12 text-white md:rounded-bl-lg grid gap-4 md:gap-8 grid-cols-1">
          <h2 className="font-bold md:text-xl ">Monthly Subscription</h2>
          <div>
            <p className="grid items-center grid-cols-2 md:gap-2 w-fit">
              <span className="text-3xl md:text-4xl font-bold">$29 </span>
              <span className="text-spg-light-gray text-sm md:text-base">
                per month
              </span>
            </p>
            <p className=" font-normal md:text-lg">
              Full access for less than $1 a day
            </p>
          </div>
          <button className="bg-spg-bright-yellow py-3 md:text-lg rounded-md font-bold shadow-2xl">
            Sign Up
          </button>
        </div>
        <div className="bg-spg-cyan bg-opacity-50 rounded-b-lg md:rounded-bl-none p-6 md:p-12 grid gap-4 grid-cols-1">
          <h2 className="text-white font-bold md:text-xl">Why Us</h2>
          <p className="text-spg-light-gray text-sm font-normal pr-20 md:text-base">
            Tutorials by industry experts Peer &amp; expert code review Coding
            exercises Access to our GitHub repos Community forum Flashcard decks
            New videos every week
          </p>
        </div>
      </main>
    </div>
  )
}

export default page
