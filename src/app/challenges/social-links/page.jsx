"use client"

import Image from "next/image"
import Link from "next/link"
import LinkButton from "./components/LinkButton"

const Links = [
  {
    name: "Github",
  },
  {
    name: "Frontend Mentor",
  },
  {
    name: "Twitter",
  },
  {
    name: "LinkedIN",
  },
  {
    name: "Instagram",
  },
]

const page = () => {
  return (
    <main className=" font-sl-inter flex items-center justify-center min-h-screen bg-sc-OffBlack text-sc-White">
      <div className="bg-sc-DarkGrey w-[350px] h-fit rounded-2xl flex flex-col items-center gap-4">
        <div className="">
          <Image
            src="/social-links/avatar-jessica.jpeg"
            alt="avatar-jessica"
            width={80}
            height={80}
            className="rounded-full mt-8"
          />
        </div>
        <div className="text-center text-[15px]">
          <h1 className="font-semibold text-3xl">Jessica Randall</h1>
          <p className="mt-[0.6rem] font-bold text-[0.8rem] text-sc-Green mb-[1.4rem]">
            London, United Kingdom
          </p>
          <p className="text-[0.9rem]">
            &ldquo;Frontend developer and avid reader&rdquo;
          </p>
        </div>
        <div className="my-[1.4rem] mx-auto grid grid-cols-1 gap-y-4">
          {Links.map((Link) => (
            <LinkButton key={Link.id} name={Link.name}>
              Github
            </LinkButton>
          ))}
        </div>
      </div>
    </main>
  )
}

export default page
