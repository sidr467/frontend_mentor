"use client"

import { Red_Hat_Text } from "next/font/google"
import Product from "./Product"
import YourCart from "./YourCart"
import { useState, useEffect } from "react"

const rht = Red_Hat_Text({ subsets: ["latin"], weight: ["400", "600", "700"] })

const Page = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  useEffect(() => {
    fetch("/product-list-cart/json/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div
      className={`${rht.className} min-h-screen grid grid-cols-1 lg:grid-cols-10 gap-12 p-4`}
    >
      <div className="lg:col-span-7 flex flex-col gap-8 ">
        <h1 className="text-black font-bold text-3xl md:text-4xl">Desserts</h1>
        <div>
          <Product cart={cart} setCart={setCart} products={products} />
        </div>
      </div>
      <div className="lg:col-span-3 ">
        <YourCart cart={cart} products={products} />
      </div>
    </div>
  )
}

export default Page
