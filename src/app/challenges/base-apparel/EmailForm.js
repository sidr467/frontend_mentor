"use client"

import Image from "next/image"
import { useState } from "react"

const EmailForm = () => {
  const emailRef = useState(null)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = emailRef.current.value

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    console.log("Email submitted:", email)
    setError("")
    emailRef.current.value = ""
  }

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="flex items-center justify-between rounded-full mx-4 relative"
    >
      <input
        type="text"
        placeholder="Email Address"
        aria-label="Email Address"
        className={`${
          error ? "ring-2 ring-bacs-Soft-Red" : "ring-bacs-Dark-Grayish-Red"
        } px-6 py-4 rounded-full w-full h-full text-base focus:outline-none ring-1 text-bacs-Desaturated-Red`}
        ref={emailRef}
      />
      {error && (
        <Image
          src="/base-apparel/icon-error.svg"
          width={18}
          height={18}
          alt="icon-error"
          className="absolute right-24"
        />
      )}
      <button
        type="submit"
        className="absolute right-0 h-full w-20 px-4  flex items-center justify-center rounded-full shadow-bacs bg-gradient-to-tl scale-110 from-bacs-g2t to-bacs-g2f"
      >
        <Image
          src="/base-apparel/icon-arrow.svg"
          width={13}
          height={13}
          alt="icon-Arrow"
        />
      </button>
      {error && (
        <div className="text-bacs-Soft-Red font-semibold absolute -bottom-8 left-2 text-xs md:text-sm">
          {error}
        </div>
      )}
    </form>
  )
}

export default EmailForm
