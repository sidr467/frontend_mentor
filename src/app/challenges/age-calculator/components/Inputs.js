const Inputs = ({ label, value, onChange, error, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 justify-center relative ">
      <label
        htmlFor={label}
        className={`uppercase text-xs lg:text-sm font-bold tracking-[4px] place-self-start ${
          error ? "text-ageCalc-light-red" : "text-ageCalc-smokey-grey"
        }`}
      >
        {label}
      </label>
      <input
        type="number"
        value={value}
        id={label}
        placeholder={placeholder}
        className={` rounded-lg px-2 py-1 h-12 lg:h-16 no-spinner text-ageCalc-off-black text-xl lg:text-3xl font-extrabold focus:outline-none focus:ring-1 focus:ring-ageCalc-purple hover:outline-none hover:ring-1 hover:ring-ageCalc-purple ${
          error
            ? "ring-1 ring-ageCalc-light-red"
            : "ring-[0.5px] ring-ageCalc-smokey-grey"
        } `}
        onChange={onChange}
      />
      {error && (
        <p className="text-xs font-medium italic text-ageCalc-light-red absolute -bottom-9 md:-bottom-6">
          {error}
        </p>
      )}
    </div>
  )
}

export default Inputs
