import { Red_Hat_Text } from "next/font/google"
import Product from "./Product"

const rht = Red_Hat_Text({ subsets: ["latin"], weight: ["400", "600", "700"] })

const page = () => {
  return (
    <div
      className={`${rht.className} min-h-screen grid grid-cols-1 md:grid-cols-4 p-4`}
    >
      <div className="md:col-span-3 flex flex-col gap-8 ">
        <h1 className="text-black font-bold text-3xl md:text-4xl">Desserts</h1>
        <div>
          <Product />
        </div>
      </div>
      <div className="md:col-span-1 ">Cart</div>
    </div>
  )
}

export default page
