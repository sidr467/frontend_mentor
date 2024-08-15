"use client"

import { Poppins } from "next/font/google"
import { useState } from "react"

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
      <main>
        <form
          action=""
          className="flex gap-2 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            value={day}
            id="day"
            min="1"
            max="31"
            className="ring-1 ring-black p-2 no-spinner"
            onChange={handleInputChange(setDay, 2)}
          />
          <input
            type="number"
            value={month}
            id="month"
            min="1"
            max="12"
            className="ring-1 ring-black p-2 no-spinner"
            onChange={handleInputChange(setMonth, 2)}
          />
          <input
            type="number"
            value={year}
            id="year"
            className="ring-1 ring-black p-2 no-spinner"
            onChange={handleInputChange(setYear, 4)}
          />
          <button type="submit" className="ring-1 ring-black p-2">
            Submit
          </button>
        </form>
        <div>
          <p>{age.year} years</p>
          <p>{age.month} months</p>
          <p>{age.day} days</p>
        </div>
      </main>
    </div>
  )
}

export default Page
