const MortgageType = ({ type, handleMortgageType, error }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4  ">
      <h2 className="text-sm text-mrc-Slate-700 font-medium">Mortgage Type</h2>
      <div className="flex flex-col gap-2 md:gap-4 relative">
        <div
          className={`w-full ring-1 h-10 rounded-md flex items-center px-4 gap-4 ${
            type === "repayment"
              ? "ring-mrc-Lime bg-mrc-Red bg-opacity-5"
              : "ring-mrc-Slate-700"
          }`}
        >
          <input
            type="radio"
            name="type"
            id="repayment"
            value="repayment"
            checked={type === "repayment"}
            onChange={handleMortgageType}
            className="radio-custom"
          />
          <label htmlFor="repayment" className="text-mrc-Slate-900 font-bold">
            Repayment
          </label>
        </div>
        <div
          className={`w-full ring-1 h-10 rounded-md flex items-center px-4 gap-4 ${
            type === "interest-only"
              ? "ring-mrc-Lime bg-mrc-Red bg-opacity-5"
              : "ring-mrc-Slate-700"
          }`}
        >
          <input
            type="radio"
            name="type"
            id="interest-only"
            value="interest-only"
            checked={type === "interest-only"}
            onChange={handleMortgageType}
            className="radio-custom"
          />
          <label
            htmlFor="interest-only"
            className="text-mrc-Slate-900 font-bold"
          >
            Interest Only
          </label>
        </div>
        {error && <span className="text-xs absolute -bottom-5 text-mrc-Red">{error}</span>}
      </div>
    </div>
  )
}

export default MortgageType
