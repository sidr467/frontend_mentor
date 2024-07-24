import Image from "next/image"
import { useState } from "react"
import { FiPlus, FiMinus } from "react-icons/fi"

const NumberButton = ({ initialCount, onCountChange }) => {
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
          <FiMinus
            size={20}
            className="rounded-full ring-1 ring-plc-rose-50 stroke-white hover:bg-white hover:stroke-plc-red"
          />
          {/* <Image
            src="/product-list-cart/icon-decrement-quantity.svg"
            alt="decrement icon"
            height={20}
            width={20}
            className="  "
          ></Image> */}
        </button>
        <span className="text-plc-rose-50">{count}</span>
        <button onClick={increment}>
          <FiPlus
            size={20}
            className="rounded-full ring-1 ring-plc-rose-50 stroke-white hover:bg-white hover:stroke-plc-red"
          />
          {/* <Image
            src="/product-list-cart/icon-increment-quantity.svg"
            alt="increment icon"
            height={20}
            width={20}
            className=" rounded-full ring-1 ring-plc-rose-50 p-1 hover:bg-white hover:fill-plc-red"
          ></Image> */}
        </button>
      </div>
    </>
  )
}

export default NumberButton
