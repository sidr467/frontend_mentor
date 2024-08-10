import { FaCheck } from "react-icons/fa6"

const SuccessModal = () => {
  return (
    <div className="bg-contactform-Grey900 text-contactform-White py-6 px-8 rounded-lg flex flex-col gap-3 absolute bottom-0 md:-top-6">
      <h3 className="flex items-center gap-4 text-lg font-bold ">
        <FaCheck className="ring-1 p-0.5 ring-contactform-White rounded-full " />
        <span>Message Sent!</span>
      </h3>
      <p className="text-sm font-medium">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </div>
  )
}

export default SuccessModal
