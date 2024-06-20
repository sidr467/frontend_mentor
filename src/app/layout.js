import { PT_Sans } from "next/font/google"
import "./globals.css"

const inter = PT_Sans({ weight: "400", subsets: ["latin"] })

export const metadata = {
  title: "Frontend Mentor Solutions",
  description: "Frontend Mentor Solutions by Next.JS",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
