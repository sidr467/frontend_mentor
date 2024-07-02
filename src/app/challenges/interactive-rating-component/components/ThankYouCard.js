import Image from "next/image"

const ThankYouCard = () => {
  return (
    <div className="max-w-[350px] bg-iac-DarkBlue rounded-lg grid gap-4 p-4">
      <Image
        src="/interactive-rating-component/illustration-thank-you.svg"
        width={150}
        height={150}
        alt="thankyou"
      ></Image>
      <p>You selected of 5</p>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </div>
  )
}

export default ThankYouCard
