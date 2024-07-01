import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ weight: "400", subsets: ["latin"] })

export const metadata = {
  title: "Frontend Mentor Solutions",
  description: "Frontend Mentor Solutions repository using Next.JS",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  )
}
