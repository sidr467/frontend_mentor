import { Red_Hat_Display } from "next/font/google"
import Image from "next/image"

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
})

const page = () => {
  return (
    <main
      className={`${redHat.className} text-[16px] h-screen flex items-center justify-center flex-col bg-osc-Pale-blue`}
    >
      <div className="max-w-[350px] bg-osc-Very-pale-blue flex flex-col gap-8 items-center m-6">
        <section className="">
          <Image
            src="/order-summary/illustration-hero.svg"
            width={300}
            height={300}
            alt=""
            className="w-full"
          ></Image>
        </section>
        <div className="flex flex-col items-center justify-center px-6">
          <div className="text-center">
            <h1>Order Summary</h1>
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>
          <section>
            <div>
              <Image
                src="/order-summary/icon-music.svg"
                alt="icon-music"
                width={30}
                height={30}
              ></Image>
            </div>
            <div>
              <span>Annual Plan</span>
              <span>$59.99/year</span>
            </div>
            <div>
              <p>Change</p>
            </div>
          </section>
          <section>
            <button>Proceed to Payment</button>
            <button>Cancel Order</button>
          </section>
        </div>
      </div>
    </main>
  )
}

export default page
