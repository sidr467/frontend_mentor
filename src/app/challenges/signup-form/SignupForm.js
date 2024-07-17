const inputs = [
  {
    name: "First name",
  },
  {
    name: "Last name",
  },
  {
    name: "Email Address",
  },
  {
    name: "Password",
  },
]

const SignupForm = () => {
  return (
    <div className="bg-white flex items-start justify-center flex-col gap-4 p-6 md:p-12  rounded-lg ">
      <div className="flex flex-col gap-6 w-full">
        {inputs.map((input, index) => (
          <input
            key={index}
            type="text"
            placeholder={input.name}
            // value={input.name}
            className="ring-1 ring-opacity-30 focus:ring-icsf-dark-blue focus:outline-none focus:opacity-90 ring-icsf-dark-blue w-full h-12 rounded-sm px-4 text-icsf-dark-blue text-sm font-semibold"
          />
        ))}
      </div>
      <div className="shadow-[0_4px_0_0_rgba(46,184,130,1)] bg-icsf-green w-full h-12 rounded-md flex items-center justify-center uppercase text-white text-sm font-semibold tracking-wider">
        Claim your free trial
      </div>
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
