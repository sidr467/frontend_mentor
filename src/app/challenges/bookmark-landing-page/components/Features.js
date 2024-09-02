"use client"

import { useState } from "react"
import Image from "next/image"

const featuretabs = [
  {
    id: 1,
    name: "Simple Bookmarking",
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "/bookmark-landing-page/illustration-features-tab-1.svg",
  },
  {
    id: 2,
    name: "Speedy Searching",
    title: "Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "/bookmark-landing-page/illustration-features-tab-2.svg",
  },
  {
    id: 3,
    name: "Easy Sharing",
    title: "Share your bookmarks",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "/bookmark-landing-page/illustration-features-tab-3.svg",
  },
]

const Features = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col items-center justify-center gap-10 md:gap-12 lg:gap-16 xl:gap-20">
      <article className="flex items-center justify-center flex-col gap-6 md:gap-8 lg:gap-10">
        <h2 className="text-blp-Very-Dark-Blue font-medium text-2xl lg:text-3xl xl:text-4xl text-center">
          Features
        </h2>
        <p className="text-blp-Grayish-Blue text-center text-base md:text-lg lg:text-xl lg:w-[600px]">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </article>
      <article className="flex flex-col gap-16">
        <div className="w-full flex items-center justify-center flex-col">
          <ul className="w-full flex flex-col md:flex-row items-center justify-center md:gap-8 lg:w-[800px] md:border-b-2">
            {featuretabs.map((tab) => (
              <li
                key={tab.id}
                className="border-b-2 first-of-type:border-t-2 md:border-none flex items-center justify-center w-full"
              >
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 -mb-[0.5px] text-base lg:text-lg ${
                    activeTab === tab.id
                      ? "border-b-4 border-blp-Soft-Red text-blp-Very-Dark-Blue font-medium "
                      : "text-blp-Grayish-Blue font-normal"
                  }  `}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-col-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="relative flex items-center justify-center lg:px-8 xl:px-16">
            <Image
              src={featuretabs[activeTab - 1].image}
              width={500}
              height={500}
              alt={featuretabs[activeTab - 1].title}
              className="object-contain w-full "
            ></Image>
            <div className="absolute w-[350px] h-[180px] sm:w-[600px] sm:h-[250px] md:w-[650px] md:h-[300px] lg:w-[400px] lg:h-[200px] xl:w-[600px] xl:h-[300px] bg-blp-Soft-Blue -left-16 sm:-left-20 md:-left-24 lg:-left-28 xl:-left-32 -bottom-8 md:-bottom-10 lg:-bottom-14 xl:-bottom-20 -z-10 rounded-e-full"></div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center lg:items-start md:gap-8 lg:gap-10 lg:px-4 xl:px-8">
            <h2 className="text-blp-Very-Dark-Blue font-medium text-2xl lg:text-3xl xl:text-4xl">
              {featuretabs[activeTab - 1].title}
            </h2>
            <p className="text-blp-Grayish-Blue text-center text-base md:text-lg lg:text-xl lg:text-start lg:pr-20">
              {featuretabs[activeTab - 1].desc}
            </p>
            <button className="h-12 bg-blp-Soft-Blue px-4 lg:px-6 rounded-lg text-white shadow-xl transition-colors duration-300 lg:text-base text-sm ">
              More info
            </button>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Features
