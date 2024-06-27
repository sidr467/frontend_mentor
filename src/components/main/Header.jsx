"use client"

import React from "react"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { SiFrontendmentor } from "react-icons/si"
import { useState } from "react"
import Why from "./Why"

function Header() {
  const github = "https://github.com/sidr467"
  const frontEndMEntor = "https://www.frontendmentor.io/profile/sidr467"
  const [open, setOpen] = useState(false)

  function showDialog() {
    setOpen(!open)
  }

  return (
    <header className=" h-20 bg-darkBlue p-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 grid items-center">
      {/* Display dialoag */}
      {open && <Why showDialog={showDialog} />}
      <div className="flex justify-between items-center text-almostWhite">
        {/* left */}
        <h1 className="text-base sm:text-lg md:text-2xl font-bold">
          Frontend Mentor Solutions
        </h1>
        {/* right */}
        <div className="flex gap-4 md:gap-8 items-center">
          <button
            className="text-sm sm:text-lg font-medium hover:border-b-2 duration-300 border-almostWhite"
            onClick={() => setOpen(true)}
          >
            Why?
          </button>
          <Link href={github} target="_blank">
            <FaGithub className="text-lg md:text-2xl hover:scale-110 duration-300 " />
          </Link>
          <Link href={frontEndMEntor} target="_blank">
            <SiFrontendmentor className="text-lg md:text-2xl hover:scale-110 duration-300" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
