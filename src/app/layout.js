import { Roboto_Slab } from "next/font/google"
import "./globals.css"

const inter = Roboto_Slab({ weight: "400", subsets: ["latin"] })

export const metadata = {
  title: "Frontend Mentor Solutions",
  description: "Frontend Mentor Solutions repository using Next.JS",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
