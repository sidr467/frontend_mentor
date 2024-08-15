"use client"

import { Poppins } from "next/font/google"
import { useState } from "react"
import AgeDisplay from "./components/AgeDisplay"
import Inputs from "./components/Inputs"
import Image from "next/image"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "800"] })

const Page = () => {
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [error, setError] = useState({})
  const [age, setAge] = useState({ year: "--", month: "--", day: "--" })

  const handleInputChange = (setter, maxlength) => (e) => {
    const value = e.target.value
    if (value.length <= maxlength) {
      setter(value)
    }
  }

  const handleErrors = () => {
    const errors = {}
    //for day
    if (!day) {
      errors.day = "This field is required"
    } else if (day < 1 || day > 31) {
      errors.day = "Must be valid date"
    }

    //for month
    if (!month) {
      errors.month = "This field is required"
    } else if (month < 1 || month > 12) {
      errors.month = "Must be valid month"
    }
    if (!year) {
      errors.year = "This field is required"
    } else if (year < 1900 || year > new Date().getFullYear()) {
      errors.year = "Must be valid year"
    }

    return errors
  }

  const calculatingAge = (birthDate) => {
    const today = new Date()
    const birthDateObj = new Date(birthDate)

    let year = today.getFullYear() - birthDateObj.getFullYear()
    let month = today.getMonth() - birthDateObj.getMonth()
    let day = today.getDate() - birthDateObj.getDate()

    if (day < 0) {
      month--
      day += new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    }

    if (month < 0) {
      year--
      month += 12
    }

    return { year, month, day }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = handleErrors()

    if (Object.keys(errors).length > 0) {
      setError(errors)
    } else {
      setError({})
      const birthDate = `${year}-${month}-${day}`
      console.log(birthDate)
      const age = calculatingAge(birthDate)
      console.log(age)
      setAge(age)
    }
  }

  return (
    <div
      className={`${poppins.className} min-h-screen bg-ageCalc-light-grey flex items-center justify-center`}
    >
      <main className="bg-ageCalc-white px-4 py-8 rounded-br-[100px] w-full mx-4 max-w-[700px]">
        <form
          action=""
          className="flex flex-col gap-12 justify-center"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-3 gap-4">
            <Inputs
              onChange={handleInputChange(setDay, 2)}
              value={day}
              label="Day"
              error={error.day}
              placeholder="DD"
            />
            <Inputs
              onChange={handleInputChange(setMonth, 2)}
              value={month}
              label="Month"
              error={error.month}
              placeholder="MM"
            />
            <Inputs
              onChange={handleInputChange(setYear, 4)}
              value={year}
              label="Year"
              error={error.year}
              placeholder="YYYY"
            />
          </div>
          <div className="relative flex items-center justify-center">
            <button
              type="submit"
              className="bg-ageCalc-purple rounded-full p-4 z-10 place-content-center"
            >
              <Image
                src="/age-calculator/icon-arrow.svg"
                alt="Arrow-Icon"
                height={20}
                width={20}
              ></Image>
            </button>
            <hr className="  w-full absolute top-[50%] z-1 " />
          </div>
        </form>
        <AgeDisplay year={age.year} month={age.month} day={age.day} />
      </main>
    </div>
  )
}

export default Page
