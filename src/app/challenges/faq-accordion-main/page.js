"use client"

import Image from "next/image"
import { Work_Sans } from "next/font/google"
import { useState } from "react"

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

const faqs = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellentway to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
]

const Page = () => {
  const [open, setOpen] = useState(null)

  function toggleFaq(index) {
    setOpen(open === index ? null : index)
  }

  return (
    <div className=" bg-fam-Light-pink max-h-max min-h-screen ">
      <div className="h-[300px]">
        <Image
          src="/faq-accordion-main/background-pattern-mobile.svg"
          alt="bgmobile"
          height={640}
          width={640}
          className="sm:hidden"
          priority={true}
        ></Image>
        <Image
          src="/faq-accordion-main/background-pattern-desktop.svg"
          alt="bgmobile"
          height={300}
          width={1400}
          priority={true}
          className="hidden sm:flex w-screen"
        ></Image>
      </div>
      <main
        className={`${workSans.className} mx-6 bg-fam-Light-pink relative flex items-center justify-center`}
      >
        <div className="rounded-md flex flex-col px-4 py-4 bg-fam-White absolute -top-28 sm:-top-16 md:-top-36  max-w-[640px] ">
          <div className="flex gap-6 items-center text-3xl md:text-5xl font-bold mb-6">
            <Image
              src="/faq-accordion-main/icon-star.svg"
              alt="icon-star"
              height={25}
              width={25}
            ></Image>
            <h1 className="text-fam-Dark-purple ">FAQs</h1>
          </div>
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="grid gap-4">
                <div
                  className="flex justify-between gap-6"
                  onClick={() => toggleFaq(index)}
                >
                  <h2 className="font-bold md:text-lg text-fam-Dark-purple ">
                    {faq.question}
                  </h2>
                  <button className="cursor-pointer">
                    {open === index ? (
                      <Image
                        src="/faq-accordion-main/icon-minus.svg"
                        alt="iconPlus"
                        width={30}
                        height={30}
                      ></Image>
                    ) : (
                      <Image
                        src="/faq-accordion-main/icon-plus.svg"
                        alt="iconPlus"
                        width={30}
                        height={30}
                      ></Image>
                    )}
                  </button>
                </div>
                {open === index && (
                  <p className="text-sm md:text-base text-fam-Grayish-purple">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page
