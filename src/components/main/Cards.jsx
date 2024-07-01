import Image from "next/image"
import Link from "next/link"

function Cards({ title, difficulty, image, link, difficultyText }) {
  return (
    <div className="bg-lightGray grid gap-2 px-4 py-4 rounded-md text-darkGray min-w-[320px] max-w-[450px]">
      <Link href={link}>
        <div className="overflow-hidden">
          <Image
            src={image}
            alt=""
            width={1000}
            height={1000}
            className="hover:scale-105 duration-300 mb-4 object-cover w-full"
            priority
          ></Image>
        </div>
      </Link>
      <div className="flex items-center justify-between">
        <Link href={link} className="hover:underline">
          <h1 className="text-base sm:text-base md:text-lg font-semibold">
            {title}
          </h1>
        </Link>
        <div
          className={`flex flex-row items-center justify-between outline outline-2 outline-darkGray h-[23px] rounded-lg`}
        >
          <div
            className={`h-5 w-5 md:w-6 bg-darkGray flex items-center justify-center outline outline-2 outline-darkGray rounded-l-lg`}
          >
            <p className={`text-xs md:text-sm font-bold text-white`}>
              {difficulty}
            </p>
          </div>
          <p className={`p-2 text-xs md:text-sm text-end font-bold`}>
            {difficultyText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cards
