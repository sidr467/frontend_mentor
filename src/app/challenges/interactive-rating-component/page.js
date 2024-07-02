import { Overpass } from "next/font/google"
import Image from "next/image"

const overpass = Overpass({ subsets: ["latin"], weight: ["400", "700"] })

const page = () => {
  return (
    <main className={`${overpass.className}`}>
      {/* <!-- Rating state start --> */}

     
      {/* <!-- Rating state end --> */}

      {/* <!-- Thank you state start --> */}

     
      {/* <!-- Thank you state end --> */}
    </main>
  )
}

export default page
