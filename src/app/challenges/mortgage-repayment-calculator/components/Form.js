"use client"

import { useRef, useState } from "react"
import Inputs from "./Inputs"
import MortgageType from "./MortgageType"
import { FaCalculator } from "react-icons/fa"
import Results from "./Results"

const Form = () => {
  const mortgageAmountRef = useRef(null)
  const mortgageTermRef = useRef(null)
  const interestRateRef = useRef(null)
  const [type, setType] = useState("") // Ensure this matches the radio values
  const [monthlyPayment, setMonthlyPayment] = useState(null)
  const [totalRepayment, setTotalRepayment] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const errorLength = Object.keys(errors).length

  const validateForm = () => {
    const errors = {}
    if (!mortgageAmountRef.current.value) {
      errors.mortgageAmount = "Mortgage amount is required"
    }
    if (!mortgageTermRef.current.value) {
      errors.mortgageTerm = "Mortgage term is required"
    }
    if (!interestRateRef.current.value) {
      errors.interestRate = "Interest rate is required"
    }
    if (!type) {
      errors.type = "Mortgage type is required"
    }
    return errors
  }

  const handleMortgageType = (e) => {
    setType(e.target.value)
  }

  const handleCalculate = (e) => {
    e.preventDefault()

    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    const mortgageAmount = parseFloat(mortgageAmountRef.current.value)
    const mortgageTerm = parseFloat(mortgageTermRef.current.value)
    const interestRate = parseFloat(interestRateRef.current.value)
    const monthlyInterestRate = interestRate / 100 / 12
    const numberOfPayments = mortgageTerm * 12

    let monthlyPayment

    if (type === "repayment") {
      monthlyPayment =
        (mortgageAmount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    } else if (type === "interest-only") {
      monthlyPayment = mortgageAmount * monthlyInterestRate
    }

    const finalMonthlyPayment = monthlyPayment.toFixed(2)
    const totalRepayment = (monthlyPayment * numberOfPayments).toFixed(2)

    setMonthlyPayment(finalMonthlyPayment)
    setTotalRepayment(totalRepayment)
    setSubmitted(true)
    setErrors({})
  }

  const resetForm = () => {
    mortgageAmountRef.current.value = ""
    mortgageTermRef.current.value = ""
    interestRateRef.current.value = ""
    setMonthlyPayment(null)
    setTotalRepayment(null)
    setSubmitted(false)
    setErrors({})
    setType("")
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <form
        onSubmit={handleCalculate}
        className={`flex flex-col gap-4 ${
          errorLength > 0 ? "gap-8 md:gap-8" : ""
        } md:gap-4 md:p-8 py-6 px-6 w-full h-full md:justify-center`}
      >
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
          <h1 className="text-mrc-Slate-900 font-bold text-xl">
            Mortgage Calculator
          </h1>
          <button
            type="button"
            onClick={resetForm}
            className="text-sm text-mrc-Slate-700 hover:text-mrc-Slate-900 underline decoration-mrc-Slate-500 underline-offset-2"
          >
            Clear All
          </button>
        </div>
        <Inputs
          mortgageAmountRef={mortgageAmountRef}
          mortgageTermRef={mortgageTermRef}
          interestRateRef={interestRateRef}
          errorsMA={errors.mortgageAmount}
          errorsT={errors.mortgageTerm}
          errorsIR={errors.interestRate}
        />
        <MortgageType
          type={type}
          handleMortgageType={handleMortgageType}
          error={errors.type}
        />
        <button
          type="submit"
          className="bg-mrc-Lime hover:bg-opacity-70 rounded-full h-12 text-mrc-Slate-900 font-bold flex justify-center items-center gap-4 md:w-fit md:px-6"
        >
          <FaCalculator />
          <span>Calculate Repayments</span>
        </button>
      </form>
      <Results
        monthlyPayment={monthlyPayment}
        totalRepayment={totalRepayment}
        submitted={submitted}
      />
    </div>
  )
}

export default Form
