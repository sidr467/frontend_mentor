"use client"

import { Manrope } from "next/font/google"
import Image from "next/image"
import SharingHover from "./SharingHover"
import { useState } from "react"

const manRope = Manrope({ subsets: ["latin"], weight: ["500", "700"] })

const Page = () => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div
      className={`${manRope.className} text-[13px] flex justify-center items-center min-h-screen bg-acp-Light-Grayish-Blue`}
    >
      <main className="bg-white max-w-[340px] rounded-2xl flex flex-col md:flex-row md:max-w-[800px] md:gap-4  gap-8">
        <div className="md:w-full">
          <Image
            src="/article-component/drawers.jpg"
            alt="Drawers Image"
            width={300}
            height={300}
            className="w-full h-[200px] md:h-[300px] rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl object-cover"
          ></Image>
        </div>
        <div className="flex flex-col gap-8 md:justify-center">
          <div className="px-10 flex flex-col gap-4">
            <h1 className="text-acp-Very-Dark-Grayish-Blue text-base md:text-xl font-bold tracking-[0.5px] md:tracking-[1px]">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="text-acp-Desaturated-Dark-Blue font-medium leading-5 text-sm">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I&apos;ve got some simple
              tips to help you make any room feel complete.
            </p>
          </div>
          <div className="relative">
            <div className="px-10 flex items-center justify-between mb-4 pt-4 md:mb-0">
              <div className="flex gap-4 items-center">
                <Image
                  src="/article-component/avatar-michelle.jpg"
                  width={40}
                  height={40}
                  alt="Avatar"
                  className="rounded-full"
                ></Image>
                <div className="flex flex-col">
                  <span className="text-acp-Very-Dark-Grayish-Blue text-xs md:text-sm font-bold tracking-[0.5px] md:tracking-[1px]">
                    Michelle Appleton
                  </span>
                  <span className="text-acp-Grayish-Blue text-xs md:text-sm">
                    28 Jun 2020
                  </span>
                </div>
              </div>
              <button
                className={`rounded-full bg-acp-Light-Grayish-Blue p-2 `}
                onClick={handleShow}
              >
                <Image
                  src="/article-component/icon-share.svg"
                  width={15}
                  height={15}
                  alt="Icon Share"
                ></Image>
              </button>
            </div>
            {show && <SharingHover handleShow={handleShow} />}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page
