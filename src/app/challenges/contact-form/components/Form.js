"use client"

import { useState } from "react"
import TextInput from "./TextInput"

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
      newErrors.email = "Please enter valid Email Address"
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
    console.log("success")

    setFirstName("")
    setLastName("")
    setEmail("")
    setMessage("")
    setQueryType("")
    setConsent(false)
    setErrors({})
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
    setQueryType(e.target.value)
  }

  const handleConsent = (e) => {
    setConsent(e.target.checked)
  }

  return (
    <form className="px-4 flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={handleFirstName}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={handleLastName}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <label htmlFor="email">Email address</label>
        <input type="text" name="email" id="email" onChange={handleEmail} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <p>Query type</p>
        <div>
          <div>
            <input
              type="radio"
              name="query"
              id="general"
              onChange={handleQueryType}
            />
            <label htmlFor="general">General Enquiry</label>
          </div>
          <div>
            <input
              type="radio"
              name="query"
              id="support"
              onChange={handleQueryType}
            />
            <label htmlFor="general">Support Request</label>
          </div>
          {errors.queryType && <p>{errors.queryType}</p>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="message"
            name="message"
            onChange={handleMessage}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <div>
          <input
            type="checkbox"
            name="consent"
            id="consent"
            onChange={handleConsent}
          />
          <label htmlFor="consent">
            I consent to being contacted by the team To submit this form, please
            consent to being contacted
          </label>
          {errors.consent && <p>{errors.consent}</p>}
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Form
