import { League_Spartan } from "next/font/google"

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const page = () => {
  return (
    <div className={`${spartan.className} min-h-screen`}>
      <main>Enter</main>
    </div>
  )
}

export default page
