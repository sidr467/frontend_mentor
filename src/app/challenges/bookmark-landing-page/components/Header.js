"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Menu from "./Menu"

const links = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Contact" },
  { name: "Login" },
]

const Header = () => {
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenu(false)
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
    <header className="flex justify-between items-center p-8 sm:px-12 md:px-16 lg:px-20 xl:px-32">
      <div>
        <a href="#home" aria-label="Home">
          <Image
            src="/bookmark-landing-page/logo-bookmark.svg"
            height={50}
            width={50}
            alt="Logo Bookmark"
            className="w-32 lg:w-40"
          />
        </a>
      </div>
      <nav>
        <button
          onClick={() => setMenu(true)}
          aria-label="Open Menu"
          aria-expanded={menu}
          aria-controls="menu-list"
          className="md:hidden"
        >
          <Image
            src="/bookmark-landing-page/icon-hamburger.svg"
            height={20}
            width={20}
            alt="Hamburger Icon"
          />
        </button>
        {menu && <Menu menu={menu} setMenu={() => setMenu(false)} />}
        <ul
          id="menu-list"
          className="hidden md:flex items-center justify-center md:gap-8 lg:gap-16"
          role="menu"
        >
          {links.map((link, index) => (
            <li key={index} role="menuitem">
              <a
                href={`#${link.name}`}
                className={`text-sm uppercase font-normal cursor-pointer tracking-widest hover:text-blp-Soft-Red transition-colors duration-300 ${
                  link.name === "Login"
                    ? "bg-blp-Soft-Red py-3 px-10 hover:bg-white hover:text-blp-Soft-Red hover:ring-2 ring-blp-Soft-Red text-white rounded-lg"
                    : "text-blp-Very-Dark-Blue"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
