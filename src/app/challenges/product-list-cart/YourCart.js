import Image from "next/image"
import { IoIosClose } from "react-icons/io";

const YourCart = ({ cart, setCart, products, onConfirm }) => {
  const handleRemoveItem = (index) => {
    const updatedCart = { ...cart }
    delete updatedCart[index]
    setCart(updatedCart)
  }

  const totalAmount = Object.keys(cart).reduce((total, index) => {
    const product = products[index]
    return total + product.price * cart[index]
  }, 0)

  return (
    <div className="flex flex-col px-4 max-w-[500px] lg:max-w-[380px] mx-auto">
      {Object.keys(cart).length > 0 ? (
        <>
          <div className="flex flex-col gap-8">
            <h1 className="font-bold place-self-start text-3xl md:text-4xl lg:text-xl text-plc-red">
              Your Cart ({Object.keys(cart).length})
            </h1>
            <div className="flex flex-col gap-4">
              {Object.keys(cart).map((index) => {
                const product = products[index]
                return (
                  <>
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex flex-col gap-1 lg:text-sm">
                        <h3 className="text-plc-rose-900 font-semibold">
                          {product.name}
                        </h3>
                        <p className="flex gap-4">
                          <span className="text-plc-red font-semibold">
                            {cart[index]}x
                          </span>
                          <span className="text-plc-rose-500">
                            @ ${product.price}
                          </span>
                          <span className="text-plc-rose-900">
                            ${(cart[index] * product.price).toFixed(2)}
                          </span>
                        </p>
                      </div>
                      <button onClick={() => handleRemoveItem(index)}>
                        <IoIosClose size={15} className="ring-1 rounded-full hover:fill-black fill-plc-rose-400 hover:ring-black ring-plc-rose-400"/>
                      </button>
                    </div>
                    <hr />
                  </>
                )
              })}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-plc-rose-900 lg:text-sm">Order Total</p>
              <p className="text-plc-rose-900 font-bold text-3xl md:text-4xl lg:text-xl">
                ${totalAmount.toFixed(2)}
              </p>
            </div>
            <div className="flex gap-2 text-sm items-center justify-center bg-plc-rose-100 w-full p-4 rounded-lg ">
              <Image
                src="/product-list-cart/icon-carbon-neutral.svg"
                width={20}
                height={20}
                alt="icon"
              ></Image>
              <p className="">This is a <span className="text-plc-rose-900 font-semibold ">carbon-neutral</span> delivery</p>
            </div>
            <div className="w-full">
              <button
                className="w-full bg-plc-red rounded-full py-4 text-plc-rose-100 font-semibold text-lg lg:text-sm"
                onClick={onConfirm}
              >
                Confirm Order
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-12">
          <h1 className="font-bold place-self-start text-3xl md:text-4xl lg:text-xl text-plc-red">
            Your Cart (0)
          </h1>
          <Image
            src="/product-list-cart/illustration-empty-cart.svg"
            width={300}
            height={300}
            alt="Empty cart Image"
            className="w-[200px]"
          />
          <p className="text-plc-rose-500">Your added items will appear here</p>
        </div>
      )}
    </div>
  )
}

export default YourCart
