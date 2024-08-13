import Image from "next/image"
import { MdCheckCircle } from "react-icons/md"

const Main = ({ email, handleSubmit, error, onChange }) => {
  return (
    <main className="bg-nsu-White flex flex-col gap-12 md:flex-row mb-8 md:mb-0 md:rounded-2xl md:p-6 md:max-w-[900px] md:max-h-[600px]">
      <div className="md:order-2">
        <Image
          src="/newsletter-sign-up/illustration-sign-up-mobile.svg"
          height={300}
          width={300}
          alt="Mobile-Illustration"
          className="w-full md:hidden"
        ></Image>
        <Image
          src="/newsletter-sign-up/illustration-sign-up-desktop.svg"
          height={300}
          width={300}
          alt="Desktop-Illustration"
          className="w-full hidden md:block"
        ></Image>
      </div>
      <div className="flex flex-col gap-6 px-6 text-nsu-Dark-Slate-Grey md:order-1 md:justify-center">
        <h1 className=" font-bold text-3xl md:text-5xl ">Stay updated!</h1>
        <p className="">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div>
          <ul className="flex flex-col gap-2 m-0 p-0">
            <li className="flex gap-4 items-center">
              <MdCheckCircle className="fill-nsu-Tomato min-w-6 min-h-6" />
              <span>Product discovery and building what matters</span>
            </li>
            <li className="flex gap-4 items-center">
              <MdCheckCircle className="fill-nsu-Tomato min-w-6 min-h-6" />
              <span>Measuring to ensure updates are a success</span>
            </li>
            <li className="flex gap-4 items-center">
              <MdCheckCircle className="fill-nsu-Tomato min-w-6 min-h-6" />
              <span>And much more!</span>
            </li>
          </ul>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label htmlFor="email" className="text-xs font-bold">
                Email address
              </label>
              {error && (
                <p className="text-nsu-Tomato text-xs font-bold ">{error}</p>
              )}
            </div>
            <input
              type="text"
              placeholder="email@company.com"
              value={email}
              onChange={onChange}
              className={`ring-1  w-full px-6 rounded-lg h-12 focus:outline-none  ${
                error
                  ? "bg-nsu-Tomato bg-opacity-25 ring-nsu-Tomato text-nsu-Tomato"
                  : "ring-nsu-Grey text-nsu-Dark-Slate-Grey focus:outline-none focus:ring-nsu-Dark-Slate-Grey"
              }`}
            />
          </div>
          <button
            type="submit"
            className="hover:shadow-nsu focus:outline-none text-sm font-bold text-nsu-White bg-nsu-Dark-Slate-Grey rounded-lg h-12 hover:bg-gradient-to-r from-nsu-Tomato to-orange-400"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </main>
  )
}

export default Main
