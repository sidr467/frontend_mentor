"use client"

import Image from "next/image"
import { useRef, useState } from "react"

const inputs = [
  {
    placeholder: "First name",
    name: "firstName",
    type: "text",
    errorMsg: "First name cannot be empty",
  },
  {
    placeholder: "Last name",
    name: "lastName",
    type: "text",

    errorMsg: "Last name cannot be empty",
  },
  {
    placeholder: "Email Address",
    name: "email",
    type: "text",
    errorMsg: "Email cannot be empty",
  },
  {
    placeholder: "Password",
    name: "password",
    type: "password",
    errorMsg: "Password cannot be empty",
  },
]

const SignupForm = () => {
  const formRef = useRef({})
  const [formErrors, setFormErrors] = useState({})

  const formValidation = () => {
    const errors = {}
    inputs.forEach((input) => {
      const value = formRef.current[input.name].value

      if (!value) {
        errors[input.name] = input.errorMsg
      } else if (input.name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
          errors[input.name] = "Looks like this is not an Email"
        }
      }
    })
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = formValidation()
    if (Object.keys(errors).length === 0) {
      console.log("Submission Successfull")
      setFormErrors({})
      Object.values(formRef.current).forEach((ref) => (ref.value = ""))
    } else {
      setFormErrors(errors)
    }
  }

  return (
    <div className="bg-white flex items-start justify-center flex-col gap-4 p-6 md:p-12  rounded-lg ">
      <form
        className="flex flex-col gap-4 w-full"
        action=""
        noValidate
        onSubmit={handleSubmit}
      >
        {inputs.map((input, index) => (
          <div key={index} className="relative flex flex-col gap-1">
            <input
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              required
              ref={(el) => (formRef.current[input.name] = el)}
              className={`${
                formErrors[input.name] ? "ring-icsf-red ring-2" : ""
              } placeholder:text-icsf-dark-blue placeholder:font-bold placeholder:opacity-60 font-bold ring-1 ring-opacity-30 focus:ring-icsf-dark-blue focus:outline-none focus:opacity-90 ring-icsf-dark-blue w-full h-12 rounded-sm px-4 text-icsf-dark-blue text-sm `}
            />
            {formErrors[input.name] && (
              <>
                <Image
                  src="/signup-form/icon-error.svg"
                  width={30}
                  height={30}
                  alt="Error-Icon"
                  className="absolute right-2 top-3 w-6"
                ></Image>
                <div className="text-xs text-end text-icsf-red italic font-normal">
                  <p>{formErrors[input.name]}</p>
                </div>
              </>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="shadow-[0_4px_0_0_rgba(46,184,130,1)] bg-icsf-green w-full h-12 rounded-md flex items-center justify-center uppercase text-white text-sm font-semibold tracking-wider"
        >
          Claim your free trial
        </button>
      </form>
      <div className="text-xs text-center w-full px-2 leading-6 ">
        <p className="text-icsf-grayish-blue font-medium">
          By clicking the button, you are agreeing to our{" "}
          <span className="text-icsf-red font-bold">Terms and Services</span>
        </p>
      </div>
    </div>
  )
}

export default SignupForm
