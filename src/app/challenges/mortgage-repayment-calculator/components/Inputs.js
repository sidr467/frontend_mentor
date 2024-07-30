import { BsCurrencyPound } from "react-icons/bs"

const Inputs = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-sm text-mrc-Slate-700 font-medium">
          Mortgage Amount
        </label>
        <div className="relative">
          <input
            type="text"
            className="ring-1 ring-mrc-Slate-700 rounded-md w-full h-10"
          />
          <span className="absolute left-0 w-fit h-full rounded-l-md bg-mrc-Slate-100 text-center p-3">
            <BsCurrencyPound className="fill-mrc-Slate-700" />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-sm text-mrc-Slate-700 font-medium">
          Mortgage Term
        </label>
        <div className="relative w-full">
          <input
            type="text"
            className="ring-1 ring-mrc-Slate-700 rounded-md w-full h-10"
          />
          <span className="absolute right-0 w-fit h-full rounded-r-md bg-mrc-Slate-100 text-center py-2 px-3 text-sm font-bold text-mrc-Slate-700">
            years
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-sm text-mrc-Slate-700  font-medium">
          Interest Rate
        </label>
        <div className="w-full relative">
          <input
            type="text"
            className="ring-1 ring-mrc-Slate-700 rounded-md w-full h-10"
          />
          <span className="absolute right-0 w-fit h-full rounded-r-md bg-mrc-Slate-100 text-center py-2 px-3 text-sm font-bold text-mrc-Slate-700">
            %
          </span>
        </div>
      </div>
    </div>
  )
}

export default Inputs
