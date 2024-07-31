"use client"

import { BsCurrencyPound } from "react-icons/bs"

const Inputs = ({
  mortgageAmountRef,
  mortgageTermRef,
  interestRateRef,
  errorsMA,
  errorsT,
  errorsIR,
}) => {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="" className="text-sm text-mrc-Slate-700 font-medium">
          Mortgage Amount
        </label>
        <div
          className={`grid grid-cols-10  ring-1 ring-mrc-Slate-700 ${
            errorsMA ? "ring-mrc-Red " : ""
          } rounded-md w-full h-10`}
        >
          <span
            className={`col-span-1 h-full rounded-l-md bg-mrc-Slate-100 ${
              errorsMA ? "bg-mrc-Red" : ""
            } text-center flex items-center justify-center`}
          >
            <BsCurrencyPound
              className={`fill-mrc-Slate-700 ${
                errorsMA ? "fill-mrc-White" : ""
              }`}
            />
          </span>
          <input
            type="number"
            ref={mortgageAmountRef}
            className="col-span-9 rounded-r-md px-4 text-mrc-Slate-900 font-bold"
          />
        </div>
        {errorsMA && (
          <span className="text-xs mt-0 absolute -bottom-4 text-mrc-Red font-medium">
            {errorsMA}
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="" className="text-sm text-mrc-Slate-700 font-medium">
            Mortgage Term
          </label>
          <div
            className={` grid grid-cols-10  ring-1 ring-mrc-Slate-700 ${
              errorsT ? "ring-mrc-Red " : ""
            } rounded-md w-full h-10`}
          >
            <input
              type="number"
              ref={mortgageTermRef}
              className="col-span-8 md:col-span-7 rounded-l-md px-4 text-mrc-Slate-900 font-bold"
            />
            <span
              className={`col-span-2 md:col-span-3 h-full rounded-r-md bg-mrc-Slate-100 ${
                errorsT ? "bg-mrc-Red text-mrc-White" : ""
              } text-center pt-2 text-sm font-bold text-mrc-Slate-700`}
            >
              years
            </span>
          </div>
          {errorsT && (
            <span className="absolute -bottom-4 text-xs mt-0 text-mrc-Red font-medium">
              {errorsT}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="" className="text-sm text-mrc-Slate-700  font-medium">
            Interest Rate
          </label>
          <div
            className={`ring-1 ring-mrc-Slate-700 ${
              errorsIR ? "ring-mrc-Red " : ""
            } rounded-md w-full h-10 grid grid-cols-10`}
          >
            <input
              type="number"
              ref={interestRateRef}
              className="col-span-9 md:col-span-8 rounded-l-md px-4 text-mrc-Slate-900 font-bold"
            />
            <span
              className={`md:col-span-2 h-full rounded-r-md bg-mrc-Slate-100 ${
                errorsIR ? "bg-mrc-Red text-mrc-White" : ""
              } text-center pt-2 text-sm font-bold text-mrc-Slate-700`}
            >
              %
            </span>
          </div>
          {errorsIR && (
            <span className="absolute -bottom-4 text-xs mt-0 text-mrc-Red font-medium">
              {errorsIR}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Inputs
