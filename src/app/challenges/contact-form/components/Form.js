"use client"

import { useState } from "react"
import TextInput from "./TextInput"
import RadioInputs from "./RadioInputs"

const Form = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [queryType, setQueryType] = useState("")
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!firstName) {
      newErrors.firstName = "This field is required"
    }

    if (!lastName) {
      newErrors.lastName = "This field is required"
    }

    if (!email) {
      newErrors.email = "This field is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!message) {
      newErrors.message = "Message is required"
    }

    if (!queryType) {
      newErrors.queryType = "Please select a query type"
    }

    if (!consent) {
      newErrors.consent =
        "To submit this form, you must consent to be contacted"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setFirstName("")
    setLastName("")
    setEmail("")
    setMessage("")
    setQueryType("")
    setConsent(false)
    setErrors({})
    console.log("Form submitted successfully")
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const handleQueryType = (e) => {
    setQueryType(e.target.id)
  }

  const handleConsent = (e) => {
    setConsent(e.target.checked)
  }

  return (
    <form
      className="p-6 flex flex-col gap-8 md:gap-6 text-contactform-Grey900 max-w-[600px] md:w-[700px]"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold text-contactform-Grey900">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TextInput
          handleChange={handleFirstName}
          error={errors.firstName}
          input="firstname"
          label="First Name"
          value={firstName}
        />
        <TextInput
          handleChange={handleLastName}
          error={errors.lastName}
          input="lastname"
          label="Last Name"
          value={lastName}
        />
      </div>
      <div>
        <TextInput
          handleChange={handleEmail}
          error={errors.email}
          input="email"
          label="Email Address"
          value={email}
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className=" relative">
          <span className="text-sm font-medium">Query type</span>
          <sup className="absolute top-0 ml-2 text-lg font-bold text-contactform-Green600">
            *
          </sup>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <RadioInputs
            handleQueryType={handleQueryType}
            queryType={queryType}
            label="General Enquiry"
            id="general"
            checked={queryType === "general"}
          />
          <RadioInputs
            handleQueryType={handleQueryType}
            queryType={queryType}
            label="Support Request"
            id="support"
            checked={queryType === "support"}
          />
        </div>
        {errors.queryType && (
          <p className="text-xs text-contactform-Red font-medium">
            {errors.queryType}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="message" className="relative">
          <span className="text-sm font-medium">Message</span>
          <sup className="absolute top-0 ml-2 text-lg font-bold text-contactform-Green600">
            *
          </sup>
        </label>
        <textarea
          type="text"
          id="message"
          name="message"
          onChange={handleMessage}
          className={`ring-1  rounded-lg h-40 w-full md:h-20 p-4 text-contactform-Grey900 hover:ring-contactform-Green600 focus:outline-none focus:ring-contactform-Green600 ${
            errors.message ? "ring-contactform-Red" : "ring-contactform-Grey500"
          } `}
          value={message}
        />
        {errors.message && (
          <p className="text-xs text-contactform-Red font-medium">
            {errors.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            onChange={handleConsent}
            checked={consent}
            className="contact-form-checkbox"
          />
          <label htmlFor="consent" className="relative">
            <span className="text-sm font-medium">
              I consent to being contacted by the team
            </span>
            <sup className="absolute top-0 ml-1 text-lg font-bold text-contactform-Green600">
              *
            </sup>
          </label>
        </div>
        {errors.consent && (
          <p className="text-xs text-contactform-Red font-medium">
            {errors.consent}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-contactform-Green600 w-full hover:bg-[#023020] text-contactform-White font-medium h-12 rounded-lg"
      >
        Submit
      </button>
    </form>
  )
}

export default Form
