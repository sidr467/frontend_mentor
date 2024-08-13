import { MdCheckCircle } from "react-icons/md"

const SuccessModal = ({ email, handleCloseModal }) => {
  return (
    <div className="bg-nsu-White flex items-start justify-center flex-col gap-12 px-6 md:max-w-[400px] md:rounded-3xl md:px-12 md:py-8">
      <div className="flex flex-col gap-6 text-nsu-Dark-Slate-Grey flex-1 justify-center">
        <MdCheckCircle className="w-16 h-16 fill-nsu-Tomato" />
        <h1 className="text-4xl md:text-5xl font-bold">
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>
      </div>
      <button
        onClick={handleCloseModal}
        className=" mb-8 bg-nsu-Dark-Slate-Grey text-nsu-White rounded-lg h-12 w-full md:mb-0 hover:shadow-nsu hover:bg-gradient-to-r from-nsu-Tomato to-orange-400"
      >
        Dismiss message
      </button>
    </div>
  )
}

export default SuccessModal
