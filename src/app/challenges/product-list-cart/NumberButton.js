import Image from "next/image"
import { useState } from "react"

const NumberButton = ({initialCount, onCountChange}) => {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    const newCount = count + 1
    setCount(newCount)
    onCountChange(newCount)
  }

  const decrement = () => {
    const newCount = Math.max(0, count - 1)
    setCount(newCount)
    onCountChange(newCount)
  }

  return (
    <>
      <div className="absolute -bottom-6 bg-plc-red py-4 px-4 rounded-full text-center flex items-center justify-around gap-8 w-[200px] h-[50px] transition-all duration-300 ease-in">
        <button onClick={decrement}>
          <Image
            src="/product-list-cart/icon-decrement-quantity.svg"
            alt="decrement icon"
            height={20}
            width={20}
            className=" rounded-full ring-1 ring-plc-rose-50 py-2 px-1"
          ></Image>
        </button>
        <span className="text-plc-rose-50">{count}</span>
        <button onClick={increment}>
          <Image
            src="/product-list-cart/icon-increment-quantity.svg"
            alt="increment icon"
            height={20}
            width={20}
            className=" rounded-full ring-1 ring-plc-rose-50 p-1"
          ></Image>
        </button>
      </div>
    </>
  )
}

export default NumberButton
