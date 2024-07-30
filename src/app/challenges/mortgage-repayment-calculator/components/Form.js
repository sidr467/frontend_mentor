import Inputs from "./Inputs"
import MortgageType from "./MortgageType"

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <h1 className="text-mrc-Slate-900 font-bold text-xl">
          Mortgage Calculator
        </h1>
        <button className="text-sm text-mrc-Slate-700 underline decoration-mrc-Slate-500 underline-offset-2">
          Clear All
        </button>
      </div>
      <Inputs />
      <MortgageType />
      <button>Calculate Repayments</button>
    </form>
  )
}

export default Form
