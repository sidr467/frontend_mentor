"use client"

import { Roboto } from "next/font/google"
import Image from "next/image"
import { useState } from "react"
import SuccessModal from "./components/SuccessModal"
import Main from "./components/Main"

const roboto = Roboto({ subsets: ["cyrillic-ext"], weight: ["400", "700"] })

const Page = () => {
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState({})
  const [modalVisibility, setModalVisibility] = useState(false)
  console.log(email)

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!email) {
      newErrors.email = "This field is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Valid email required"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setModalVisibility(true)
  }

  const handleCloseModal = () => {
    setModalVisibility(false)
    setEmail("")
  }

  return (
    <div
      className={`${roboto.className} min-h-screen md:bg-nsu-Charcoal-Grey flex justify-center md:items-center text-[16px]`}
    >
      {!modalVisibility ? (
       <Main email={email} handleSubmit={handleSubmit} error={errors.email} onChange={(e) => setEmail(e.target.value)} />
      ) : (
        <SuccessModal email={email} handleCloseModal={handleCloseModal} />
      )}
    </div>
  )
}

export default Page
