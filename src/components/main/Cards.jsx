import Image from "next/image"
import Link from "next/link"

function Cards({ title, difficulty, image, link }) {
  return (
    <div className="bg-lightGray grid gap-2 px-4 py-4 rounded-md text-darkGray min-w-[320px] max-w-[450px]">
      <Image
        src={image}
        alt=""
        width={400}
        height={400}
        className="hover:scale-105  duration-300"
      ></Image>
      <Link href={link}>
        <h1 className="text-sm sm:text-base md:text-lg font-semibold">
          {title}
        </h1>
      </Link>
      <p>{difficulty}</p>
    </div>
  )
}

export default Cards
