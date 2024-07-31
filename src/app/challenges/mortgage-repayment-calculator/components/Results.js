import Image from "next/image"
import { BsCurrencyPound } from "react-icons/bs"

const Results = ({ totalRepayment, monthlyPayment, submitted }) => {
  return (
    <div className="bg-mrc-Slate-900 p-8 md:rounded-r-3xl md:rounded-bl-[4rem]">
      {!submitted ? (
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
          <Image
            src="/mortgage-repayment-calculator/illustration-empty.svg"
            width={200}
            height={200}
            alt="Illustration Empty"
          ></Image>
          <h2 className="text-white font-bold text-2xl">Results shown here</h2>
          <p className="text-center text-mrc-Slate-500">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center md:justify-start gap-4 md:gap-8 w-full h-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-white font-bold text-2xl place-self-start">
              Your results
            </h2>
            <p className="text-mrc-Slate-500 text-sm">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-[#0E2532] p-6 md:p-8 w-full rounded-lg border-t-4 border-t-mrc-Lime">
            <div className="flex flex-col gap-2">
              <span className="text-mrc-Slate-500 text-sm">
                Your monthly repayments
              </span>
              <p className="font-bold text-4xl md:text-5xl text-mrc-Lime flex items-center justify-start">
                <BsCurrencyPound className="fill-mrc-Lime" />
                <span>{monthlyPayment}</span>
              </p>
            </div>
            <hr className="border-mrc-White opacity-30" />
            <div className="flex flex-col gap-2">
              <span className="text-mrc-Slate-500 text-sm">
                Total you&apos;ll repay over the term
              </span>
              <p className="text-white text-xl font-bold md:text-2xl flex items-center justify-start">
                <BsCurrencyPound className="fill-mrc-White" />
                <span>{totalRepayment}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Results
