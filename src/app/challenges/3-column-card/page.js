import { Lexend_Deca, Big_Shoulders_Display } from "next/font/google"
import Image from "next/image"

const ld = Lexend_Deca({ subsets: ["latin"], weight: ["400"] })
const bsd = Big_Shoulders_Display({ subsets: ["latin"], weight: ["700"] })

const cars = [
  {
    modal: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    image: "/3-column-card/icon-sedans.svg",
    bgcolor: "bg-3col-Bright-orange",
    textcolor: "text-3col-Bright-orange",
  },
  {
    modal: "SUVs",
    description:
      " Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    image: "/3-column-card/icon-suvs.svg",
    bgcolor: "bg-3col-Dark-cyan",
    textcolor: "text-3col-Dark-cyan",
  },
  {
    modal: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    image: "/3-column-card/icon-luxury.svg",
    bgcolor: "bg-3col-Very-dark-cyan",
    textcolor: "text-3col-Very-dark-cyan",
  },
]

const page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <main className="grid grid-cols-1 md:grid-cols-3 max-w-[950px] px-4 py-8">
        {cars.map((car, index) => (
          <div
            key={index}
            className={`${car.bgcolor} px-16 py-8 flex flex-col justify-between gap-6 md:gap-10 first-of-type:rounded-t-2xl md:first-of-type:rounded-tr-none md:last-of-type:rounded-bl-none last-of-type:rounded-b-2xl md:first-of-type:rounded-l-2xl md:last-of-type:rounded-r-2xl`}
          >
            <div className="flex flex-col gap-6">
              <Image
                src={car.image}
                alt={`${car.modal} image`}
                width={50}
                height={50}
              ></Image>
              <h1
                className={`${bsd.className} text-3col-Very-light-gray font-bold text-2xl md:text-4xl uppercase`}
              >
                {car.modal}
              </h1>
              <p
                className={`${ld.className} text-3col-Transparent-white text-sm leading-6`}
              >
                {car.description}
              </p>
            </div>
            <button
              className={`${car.textcolor} bg-3col-Very-light-gray rounded-full py-2 w-fit px-4 md:mt-8 hover:bg-transparent hover:text-3col-Very-light-gray hover:ring-1 ring-3col-Very-light-gray `}
            >
              Learn more
            </button>
          </div>
        ))}
      </main>
    </div>
  )
}

export default page
