const RadioInputs = ({ id, handleQueryType, queryType, label, checked }) => {
  const isSelected = queryType === id

  return (
    <div
      className={`ring-1  hover:ring-contactform-Green600 h-10 w-full rounded-lg px-4 flex items-center gap-4 ${
        isSelected
          ? "bg-contactform-Green200 ring-contactform-Green600"
          : "bg-white ring-contactform-Grey500"
      } `}
    >
      <input
        type="radio"
        name="query"
        id={id}
        onChange={handleQueryType}
        checked={checked}
        className="contact-form-radio"
      />
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
    </div>
  )
}

export default RadioInputs
