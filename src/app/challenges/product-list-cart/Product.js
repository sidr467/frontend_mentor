"use client"

import { useState } from "react"
import AddToCartButton from "./AddToCartButton"
import NumberButton from "./NumberButton"

const Product = ({cart,setCart,products}) => {
  const [showButton, setShowButton] = useState({})

  //button show for adding item counter
  function buttonShowNumber(index) {
    setShowButton((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  //cart update
  const updateCart = (index, quantity) => {
    setCart((prevCart) => {
      const newCart = {...prevCart}
      if (quantity === 0) {
        delete newCart[index]
      } else {
        newCart[index] = quantity
      }
      return newCart
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col gap-10">
          <div
            className={`${
              showButton[index] ? "ring-2 ring-plc-red rounded-lg " : ""
            } relative flex flex-col justify-center items-center`}
          >
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
                className="w-full rounded-lg object-contain"
              />
            </picture>
            <AddToCartButton
              buttonShowNumber={() => buttonShowNumber(index)}
            ></AddToCartButton>
            {showButton[index] && (
              <NumberButton
                initialCount={cart[index] || 0}
                onCountChange={(count) => updateCart(index, count)}
              />
            )}
          </div>
          <div className="flex flex-col">
            <p className="text-plc-rose-500">{product.category}</p>
            <h2 className="text-plc-rose-900 font-bold">{product.name}</h2>
            <span className="text-plc-red font-semibold">${product.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product
