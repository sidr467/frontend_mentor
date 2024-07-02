import Image from "next/image"

const ThankYouCard = ({ rating }) => {
  return (
    <div className="max-w-[350px] bg-iac-DarkBlue rounded-lg flex flex-col gap-4 p-6 items-center justify-center text-center">
      <div className="">
        <Image
          src="/interactive-rating-component/illustration-thank-you.svg"
          width={150}
          height={150}
          alt="thankyou"
        ></Image>
      </div>
      <p className="bg-iac-LightGrey bg-opacity-10 rounded-full text-sm px-6 py-1 pt-1.5 text-iac-Orange ">
        You selected {rating} of 5
      </p>
      <h2 className="text-iac-White text-2xl font-bold">Thank you!</h2>
      <p className="text-iac-LightGrey font-normal text-sm">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </div>
  )
}

export default ThankYouCard
