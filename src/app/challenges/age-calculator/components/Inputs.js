const Inputs = ({ label, value, onChange, error,placeholder }) => {
  return (
    <div className="flex flex-col gap-2 justify-center ">
      <label
        htmlFor={label}
        className="uppercase text-xs text-ageCalc-smokey-grey font-bold tracking-[4px] place-self-start"
      >
        {label}
      </label>
      <input
        type="number"
        value={value}
        id={label}
        placeholder={placeholder}
        className="ring-[0.5px] ring-ageCalc-smokey-grey rounded-lg px-2 py-1 h-12 no-spinner text-ageCalc-off-black text-xl font-extrabold"
        onChange={onChange}
      />
      {error && <p className="text-xs font-medium text-ageCalc-light-red">{error}</p>}
    </div>
  )
}

export default Inputs
