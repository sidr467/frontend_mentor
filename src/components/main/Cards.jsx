import Image from "next/image"
import Link from "next/link"

function Cards({ title, difficulty, image, link, difficultyText }) {
  return (
    <div className="bg-lightGray grid gap-2 px-4 py-4 rounded-md text-darkGray min-w-[320px] max-w-[450px]">
      <div className="">
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="hover:scale-105 duration-300 mb-4 object-cover"
        ></Image>
      </div>
      <div className="flex items-center justify-between">
        <Link href={link} className="hover:underline">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold">
            {title}
          </h1>
        </Link>
        <div
          className={`flex flex-row items-center justify-between outline outline-2 outline-darkGray h-[23px] rounded-lg`}
        >
          <div
            className={`w-6 bg-darkGray flex items-center justify-center outline outline-2 outline-darkGray rounded-l-lg`}
          >
            <p className={` text-sm font-bold text-white`}>{difficulty}</p>
          </div>
          <p className={`p-2 text-sm text-end font-bold`}>{difficultyText}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
