'use client'

import { Overpass } from "next/font/google"
import RatingCard from "./components/RatingCard"
import ThankYouCard from "./components/ThankYouCard"
import { useState } from "react"

const overpass = Overpass({ subsets: ["latin"], weight: ["400", "700"] })

const Page = () => {
  const [rating,setRating] = useState(null)

  const handleRating = (selectedRating) =>{
    setRating(selectedRating)
  }

  return (
    <main className={`${overpass.className} flex items-center justify-center h-screen bg-iac-VeryDarkBlue`}>
      {rating === null ? 
      <RatingCard onSubmit={handleRating} />
      :
     <ThankYouCard rating={rating}/>
    }
      
    </main>
  )
}

export default Page
