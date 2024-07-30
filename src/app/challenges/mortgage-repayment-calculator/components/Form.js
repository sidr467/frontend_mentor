import Inputs from "./Inputs"
import MortgageType from "./MortgageType"
import { FaCalculator } from "react-icons/fa"

const Form = () => {
  return (
    <form className="flex flex-col gap-4 md:p-8 py-6 px-6 w-full h-full md:justify-center">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
        <h1 className="text-mrc-Slate-900 font-bold text-xl">
          Mortgage Calculator
        </h1>
        <button className="text-sm text-mrc-Slate-700 underline decoration-mrc-Slate-500 underline-offset-2">
          Clear All
        </button>
      </div>
      <Inputs />
      <MortgageType />
      <button className="bg-mrc-Lime rounded-full h-12 text-mrc-Slate-900 font-bold flex justify-center items-center gap-4 md:w-fit md:px-6">
        <FaCalculator />
        <span>Calculate Repayments</span>
      </button>
    </form>
  )
}

export default Form
