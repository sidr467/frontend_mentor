import { Overpass } from "next/font/google"
import Image from "next/image"

const overpass = Overpass({ subsets: ["latin"], weight: ["400", "700"] })

const page = () => {
  return (
    <main className={`${overpass.className}`}>
      {/* <!-- Rating state start --> */}

      <div>
        <Image
          src="/interactive-rating-component/icon-star.svg"
          alt="star-svg"
          width={40}
          height={40}
        ></Image>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <button>Submit</button>
      </div>

      {/* <!-- Rating state end --> */}

      {/* <!-- Thank you state start --> */}

      <div>
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

      {/* <!-- Thank you state end --> */}
    </main>
  )
}

export default page
