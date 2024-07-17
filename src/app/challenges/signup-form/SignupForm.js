import Image from "next/image"

const inputs = [
  {
    name: "First name",
    errorMsg: "First name cannot be empty",
  },
  {
    name: "Last name",
    errorMsg: "Last name cannot be empty",
  },
  {
    name: "Email Address",
    errorMsg: "Looks like this not an Email",
  },
  {
    name: "Password",
    errorMsg: "Password cannot be empty",
  },
]

const SignupForm = () => {
  return (
    <div className="bg-white flex items-start justify-center flex-col gap-4 px-6 py-2 md:p-12  rounded-lg ">
      <form className="flex flex-col gap-4 w-full">
        {inputs.map((input, index) => (
          <div key={index} className="relative flex flex-col gap-1">
            <input
              type="text"
              placeholder={input.name}
              required
              className=" placeholder:text-icsf-dark-blue ring-1 ring-opacity-30 focus:ring-icsf-dark-blue focus:outline-none focus:opacity-90 ring-icsf-dark-blue w-full h-12 rounded-sm px-4 text-icsf-dark-blue text-sm font-semibold"
            />
            <Image
              src="/signup-form/icon-error.svg"
              width={30}
              height={30}
              alt="Error-Icon"
              className="absolute right-2 top-3 w-6"
            ></Image>
            <div className="text-xs text-end text-icsf-red italic font-normal">
              <p>{input.errorMsg}</p>
            </div>
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
