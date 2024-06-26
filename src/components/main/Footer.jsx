import { FaGithub } from "react-icons/fa"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className=" text-almostWhite">
      <div className=" flex justify-center items-center flex-col gap-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold">
          Do checkout Github repository
        </h2>
        <Link href="https://github.com/sidr467/frontend_mentor" target="blank">
          <button className=" flex items-center gap-2 bg-darkBlue px-2 py-1 text-sm md:text-base rounded-md hover:scale-110 duration-300">
            <FaGithub />
            Github
          </button>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
