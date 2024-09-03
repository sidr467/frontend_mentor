"use client"

import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"

const faqData = [
  {
    id: 1,
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 3,
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
]

const FAQ = () => {
  const [answer, setAnswer] = useState(null)

  const toggleAnswer = (id) => {
    setAnswer(answer === id ? null : id)
  }

  return (
    <section
      aria-labelledby="faq-title"
      className="py-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col items-center justify-center gap-10 md:gap-12 lg:gap-14 xl:gap-16"
    >
      <article className="flex flex-col gap-6 items-center justify-center md:gap-8 lg:gap-10 lg:px-4 xl:px-8">
        <h2
          id="faq-title"
          className="text-blp-Very-Dark-Blue font-medium text-2xl lg:text-3xl xl:text-4xl"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-blp-Grayish-Blue text-center text-base md:text-lg lg:text-xl max-w-[600px]">
          Here are some of our FAQs. If you have any other questions you&apos;d
          like answered please feel free to email us.
        </p>
      </article>
      <article className="max-w-[600px] w-full">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="border-b-2 lg:first-of-type:border-t-2 py-6"
          >
            <button
              onClick={() => toggleAnswer(faq.id)}
              aria-expanded={answer === faq.id}
              aria-controls={`faq-answer-${faq.id}`}
              className="flex justify-between items-center w-full group cursor-pointer"
            >
              <span className="text-base md:text-lg lg:text-xl text-blp-Very-Dark-Blue group-hover:text-blp-Soft-Red">
                {faq.question}
              </span>
              <IoIosArrowDown
                size={20}
                className={`transition-transform duration-300 ease-in-out ${
                  answer === faq.id
                    ? "rotate-180 fill-blp-Soft-Red"
                    : "fill-blp-Soft-Blue"
                }`}
              />
            </button>
            <div
              id={`faq-answer-${faq.id}`}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                answer === faq.id ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm md:text-base lg:text-lg pt-4 text-blp-Grayish-Blue">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </article>
      <button className="h-12 bg-blp-Soft-Blue px-4 lg:px-6 rounded-lg text-white shadow-xl transition-colors duration-300 lg:text-base text-sm hover:bg-white hover:text-blp-Soft-Blue hover:ring-1 ring-blp-Soft-Blue">
        More info
      </button>
    </section>
  )
}

export default FAQ
