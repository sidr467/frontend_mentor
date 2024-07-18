"use client"

import { useRef, useState } from "react"

const EmailForm = () => {
  const emailRef = useRef(null)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email === "") {
      setError("Whoops! It looks like you forgot to add your email")
      return
    } else if (!emailRegex.test(email)) {
      setError("Please provide a valid email address")
      return
    }

    setError("")
    emailRef.current.value = ""
  }

  return (
    <div className="flex items-center justify-center">
      <form
        action=""
        noValidate
        className="flex items-center justify-center flex-col md:flex-row gap-2 w-full"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex items-center justify-center gap-2 flex-col md:relative">
          <input
            type="email"
            placeholder="Your Email address..."
            ref={emailRef}
            className={`${
              error ? "ring-pcs-light-red" : ""
            } ring-1 rounded-full py-3 px-8 w-full md:w-96 ring-pcs-pale-blue text-sm  `}
          />
          {error && (
            <p className="text-xs italic text-pcs-light-red mb-4 md:mb-0 md:absolute left-4 -bottom-6 ">
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="rounded-full py-3 w-full md:w-52 bg-pcs-blue hover:opacity-80 text-white text-sm font-semibold shadow-xl"
        >
          Notify me
        </button>
      </form>
    </div>
  )
}

export default EmailForm
