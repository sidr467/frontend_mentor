import Image from "next/image"
import { useState, useEffect } from "react"
import AddToCartButton from "./AddToCartButton"
import NumberButton from "./NumberButton"

const Product = ({ cart, setCart }) => {
  const [showButton, setShowButton] = useState({})
  const [products, setProducts] = useState([])

  // Toggle button visibility for item quantity
  function buttonShowNumber(index) {
    setShowButton((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  // Fetch product data from JSON
  useEffect(() => {
    fetch("/product-list-cart/json/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  // Update cart
  const updateCart = (index, quantity) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart }
      if (quantity === 0) {
        delete newCart[index]
      } else {
        newCart[index] = quantity
      }
      return newCart
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col gap-10">
          <div
            className={`${
              cart[index] > 0 ? "ring-2 ring-plc-red rounded-lg" : ""
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
            <AddToCartButton buttonShowNumber={() => buttonShowNumber(index)} />
            {showButton[index] && (
              <NumberButton
                initialCount={cart[index] || 1}
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
