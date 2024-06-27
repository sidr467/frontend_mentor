"use client"

import Image from "next/image"

const Page = () => {
  return (
    <main className="font-sl-inter flex justify-center items-center h-screen text-center bg-qr-light-gray font-Outfit">
      <div className="rounded-2xl w-[340px] h-[520px] bg-white shadow-2xl">
        <div className=" flex justify-center">
          <Image
            src="/qr-code/image-qr-code.png"
            alt="Qr-Code-Image"
            height={300}
            width={300}
            className="my-4 mx-auto rounded-2xl "
            priority
          />
        </div>

        <div className="flex flex-col gap-4 my-8 mx-12">
          <h1 className="text-qr-dark-navy text-lg font-bold">
            Improve your front-end skills by building projects
          </h1>
          <p className="font-normal text-qr-gray text-sm ">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  )
}

export default Page
