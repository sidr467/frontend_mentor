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

  function showDialoag() {
    setOpen(!open)
  }

  return (
    <header className="md:my-4 md:mx-4 h-20 bg-darkBlue p-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 md:rounded-lg grid items-center">
      {/* Display dialoag */}
      {open && <Why showDialoag={showDialoag} />}
      <div className="flex justify-between items-center text-almostWhite">
        {/* left */}
        <h1 className="text-base sm:text-lg md:text-2xl font-semibold">
          Frontend Mentor Solutions
        </h1>
        {/* right */}
        <div className="flex gap-4 md:gap-8 items-center">
          <button
            className="text-sm sm:text-lg font-medium bg-lightGray py-1 px-4 rounded-md"
            onClick={() => setOpen(true)}
          >
            Why?
          </button>
          <Link href={github} target="_blank">
            <FaGithub className="text-lg md:text-2xl" />
          </Link>
          <Link href={frontEndMEntor} target="_blank">
            <SiFrontendmentor className="text-lg md:text-2xl" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
