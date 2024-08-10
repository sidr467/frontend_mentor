const TextInput = ({ label, input, handleChange, error, value }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor={input} className="relative">
        <span className="text-sm font-medium text-contactform-Grey900">
          {label}
        </span>
        <sup className="absolute top-0 ml-2 text-lg font-bold text-contactform-Green600">
          *
        </sup>
      </label>
      <input
        type="text"
        name={input}
        id={input}
        value={value}
        onChange={handleChange}
        className={`ring-1  h-10 w-full rounded-lg font-medium text-contactform-Grey900 px-4 hover:ring-contactform-Green600 focus:outline-none focus:ring-contactform-Green600 ${
          error ? "ring-contactform-Red" : "ring-contactform-Grey500"
        }`}
      />
      {error && (
        <p className="text-xs text-contactform-Red font-medium">{error}</p>
      )}
    </div>
  )
}

export default TextInput
