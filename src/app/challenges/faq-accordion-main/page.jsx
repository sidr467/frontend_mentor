import { Work_Sans } from "next/font/google"
import Image from "next/image"

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

const page = () => {
  return (
    <>
      <div className="">
        <Image
          src="/faq-accordion-main/background-pattern-mobile.svg"
          alt="bgmobile"
          height={640}
          width={640}
          className="sm:hidden"
        ></Image>
        <Image
          src="/faq-accordion-main/background-pattern-desktop.svg"
          alt="bgmobile"
          height={300}
          width={1400}
          className="hidden sm:flex w-screen"
        ></Image>
      </div>
      <main className={`${workSans.className} relative mx-6`}>
        <div className="border-2 border-black  flex flex-col px-4 py-4 absolute -top-20 z-10 bg-fam-White ">
          <div className="flex gap-6 items-center text-3xl font-extrabold mb-6">
            <Image
              src="/faq-accordion-main/icon-star.svg"
              alt="icon-star"
              height={25}
              width={25}
            ></Image>
            <h1>FAQs</h1>
          </div>
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h2 className="font-semibold">{faq.question}</h2>
                  <Image
                    src="/faq-accordion-main/icon-plus.svg"
                    alt="iconPlus"
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <p className=" text-fam-Grayish-purple">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default page
