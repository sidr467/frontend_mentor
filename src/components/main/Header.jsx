import React from "react"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { SiFrontendmentor } from "react-icons/si"

function Header() {
  const github = "https://github.com/sidr467"
  const frontEndMEntor = "https://www.frontendmentor.io/profile/sidr467"

  return (
    <header className="container my-4 mx-auto p-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 sm bg-gray-500">
      <div className="flex justify-between items-center text-base md:text-xl font-semibold">
        {/* left */}
        <h1 className="">Frontend Mentor Solutions</h1>
        {/* right */}
        <div className="flex gap-4 md:gap-8 items-center  ">
          <button>Why?</button>
          <Link href={github} target="_blank">
            <FaGithub />
          </Link>
          <Link href={frontEndMEntor} target="_blank">
            <SiFrontendmentor />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
