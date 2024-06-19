import Image from "next/image"
import Link from "next/link"

function Cards({ title, difficulty, image, link, difficultyText }) {
  return (
    <div className="bg-lightGray grid gap-2 px-4 py-4 rounded-md text-darkGray min-w-[320px] max-w-[450px]">
      <div>
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="hover:scale-105  duration-300 mb-4"
        ></Image>
      </div>
      <div className="flex items-center justify-between">
        <Link href={link} className="hover:underline">
          <h1 className="text-sm sm:text-base md:text-lg font-semibold">
            {title}
          </h1>
        </Link>
        <p className="font-semibold ring-2 ring-darkGray rounded-md">
          <span className="bg-darkGray rounded-b-md rounded-t-md px-2 py-1 text-almostWhite ">{difficulty}</span>
          <span className="px-4">{difficultyText}</span>
        </p>
      </div>
    </div>
  )
}

export default Cards
