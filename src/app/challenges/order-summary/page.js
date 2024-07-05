import { Red_Hat_Display } from "next/font/google"

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
})

const page = () => {
  return <main className={`${redHat.className} text-[16px]`}>
     Order Summary

You can now listen to millions of songs, audiobooks, and podcasts on any 
device anywhere you like!

Annual Plan
$59.99/year

Change

Proceed to Payment
Cancel Order

  </main>
}

export default page
