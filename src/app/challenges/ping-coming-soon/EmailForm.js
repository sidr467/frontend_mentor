const EmailForm = () => {
  return (
    <div className="flex items-center justify-center">
      <form
        action=""
        noValidate
        className="flex items-center justify-center flex-col md:flex-row gap-2 w-full"
      >
        <input
          type="text"
          placeholder="Your Email address..."
          className="ring-1 rounded-full py-3 px-8 w-full ring-pcs-pale-blue text-sm "
        />
        <button type="submit" className="rounded-full py-3 w-full md:w-52 bg-pcs-blue text-white text-sm font-semibold">
          Notify me
        </button>
      </form>
    </div>
  )
}

export default EmailForm
