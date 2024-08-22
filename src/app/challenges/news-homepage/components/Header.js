"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import Menu from "./Menu"

const Header = () => {
  const [menu, SetMenu] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        SetMenu(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [menu])

  return (
    <section className="flex justify-between items-center ">
      <div>
        <Image
          src="/news-homepage/logo.svg"
          height={50}
          width={50}
          alt="Main Logo"
          className="md:w-16"
        ></Image>
      </div>
      <div className="md:hidden ">
        <button onClick={() => SetMenu(!menu)}>
          <Image
            src="/news-homepage/icon-menu.svg"
            height={40}
            width={40}
            alt="Main Logo"
          ></Image>
        </button>
        {menu && <Menu onClick={() => SetMenu(!menu)} />}
      </div>
      <div className="hidden md:flex gap-12 text-sm text-nh-DarkGrayishBlue">
        <Link href="/" className="hover:text-nh-SoftRed">Home</Link>
        <Link href="/" className="hover:text-nh-SoftRed">New</Link>
        <Link href="/" className="hover:text-nh-SoftRed">Popular</Link>
        <Link href="/" className="hover:text-nh-SoftRed">Trending</Link>
        <Link href="/" className="hover:text-nh-SoftRed">Categories</Link>
      </div>
    </section>
  )
}

export default Header
