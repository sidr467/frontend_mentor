"use client"

import { MdError } from "react-icons/md"
import { useState } from "react"

const ContactUs = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      setError("This field is required")
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Whoops, make sure it's an email")
    } else {
      setEmail("")
      setError("")
    }
  }

  return (
    <section
      id="Contact"
      className="w-full bg-blp-Soft-Blue py-16 px-8 lg:py-20 xl:py-24 flex flex-col items-center justify-center"
    >
      <article className="lg:max-w-[500px] gap-8 flex items-center justify-center flex-col">
        <p className="uppercase text-white text-xs md:text-sm tracking-[4px]">
          35,000+ already joined
        </p>
        <h3 className="font-medium text-2xl lg:text-3xl xl:text-4xl text-white text-center">
          Stay up-to-date with what we&apos;re doing
        </h3>
        <form
          className="flex flex-col gap-4 w-full lg:grid lg:grid-cols-10"
          onSubmit={handleSubmit}
        >
          <div className="w-full lg:col-span-7 relative">
            <input
              type="text"
              className={`h-12 rounded-md px-4 text-sm tracking-wide w-full focus:outline-none ${
                error ? "rounded-b-none ring-2 ring-blp-Soft-Red" : ""
              }`}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <>
                <MdError
                  size={25}
                  className="absolute top-3 right-2 fill-blp-Soft-Red"
                />
                <p className="bg-blp-Soft-Red text-xs italic font-medium py-1 px-2 text-white rounded-b-md ring-2 ring-blp-Soft-Red absolute top-full w-full mt-[1px] z-10">
                  {error}
                </p>
              </>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blp-Soft-Red h-12 rounded-md text-sm font-medium tracking-wide text-white lg:col-span-3 hover:bg-white hover:text-blp-Soft-Red hover:ring-2 ring-blp-Soft-Red transition-colors duration-300"
          >
            Contact Us
          </button>
        </form>
      </article>
    </section>
  )
}

export default ContactUs
