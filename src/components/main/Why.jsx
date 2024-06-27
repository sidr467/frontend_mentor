"use client"

import { IoCloseCircleSharp } from "react-icons/io5"

export default function Why({ showDialog }) {
  return (
    <div className="bg-darkGray fixed z-10 inset-0 bg-opacity-75">
      <div className="flex items-center justify-center h-full">
        <div className="max-w-[700px] flex flex-col gap-4 mx-4 bg-almostWhite p-2 md:p-4 rounded-lg ">
          {/* MODAL HEADER */}
          <div className="flex items-center justify-between">
            <h1 className="text-base sm:text-lg md:text-2xl font-semibold text-darkBlue">
              Why?
            </h1>
            <IoCloseCircleSharp
              onClick={showDialog}
              className="text-lg md:text-2xl text-darkBlue"
            />
          </div>
          <p className="font-medium text-darkGray text-sm md:text-base">
            I like doing small UI challanges or frontend challenges from
            Frontend mentor and there is tons of challenges available on site.
            The main reason to create is from this my github profile will be
            less populated by small repositories.
          </p>
        </div>
      </div>
    </div>
  )
}
