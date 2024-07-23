"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const Product = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/product-list-cart/json/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col gap-8">
          <div className="relative flex flex-col justify-center items-center">
            <picture>
              <source
                srcSet={product.image.desktop}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={product.image.tablet}
                media="(min-width: 768px)"
              />
              <img
                src={product.image.mobile}
                alt="Product Image"
                width={300}
                height={300}
                className="w-full rounded-lg"
              />
            </picture>
            <button className="absolute -bottom-6 bg-plc-rose-50 py-3 px-9 rounded-full text-center flex items-center gap-2 ring-1 ring-plc-rose-500">
              <Image
                src="/product-list-cart/icon-add-to-cart.svg"
                width={20}
                height={20}
                alt="Add to Cart Icon"
              ></Image>
              <span>Add to Cart</span>
            </button>
          </div>
          <div className="flex flex-col">
            <p className="text-plc-rose-500">{product.category}</p>
            <h2 className="text-plc-rose-900 font-bold">{product.name}</h2>
            <span className="text-plc-red font-semibold">${product.price}</span>
          </div>
        </div>
      ))}
    </div>
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //   {products.map((product, index) => (
    //     <div key={index} className="border p-4 rounded-lg shadow">
    //       <Image
    //         src={product.image.thumbnail}
    //         alt={product.name}
    //         width={150}
    //         height={150}
    //         className="w-full h-auto"
    //       />
    //       <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
    //       <p className="text-gray-600">{product.category}</p>
    //       <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
    //     </div>
    //   ))}
    // </div>
  )
}

export default Product
