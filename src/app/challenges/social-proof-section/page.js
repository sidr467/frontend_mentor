import { League_Spartan } from "next/font/google"
import FeedbackCard from "./FeedbackCard"
import RatingCard from "./RatingCard"

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const page = () => {
  return (
    <div className={`${spartan.className} min-h-screen`}>
      {/* <main>10,000+ of our users love our products.

We only provide great products combined with excellent customer service.
See what our satisfied customers are saying about our services.
</main> */}

      {/* <FeedbackCard></FeedbackCard> */}
      <RatingCard></RatingCard>
    </div>
  )
}

export default page
