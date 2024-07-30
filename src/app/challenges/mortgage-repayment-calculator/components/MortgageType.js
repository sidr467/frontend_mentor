const MortgageType = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-sm text-mrc-Slate-700 font-medium">Mortgage Type</h2>
      <div className="flex flex-col gap-2">
        <div className="w-full ring-1 ring-mrc-Slate-500 h-10 rounded-md flex items-center px-4 gap-4">
          <input type="radio" name="" id="" className="" />
          <label htmlFor="" className="text-mrc-Slate-900 font-bold">
            Repayment
          </label>
        </div>
        <div className="w-full ring-1 ring-mrc-Slate-500 h-10 rounded-md flex items-center px-4 gap-4">
          <input type="radio" name="" id="" />
          <label htmlFor="" className="text-mrc-Slate-900 font-bold">
            Interest Only
          </label>
        </div>
      </div>
    </div>
  )
}

export default MortgageType
