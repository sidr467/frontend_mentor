import Image from "next/image"

const YourCart = ({ cart, products }) => {
  const cartItems = Object.keys(cart).map((key) => ({
    ...products[key],
    quantity: cart[key],
  }))

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="flex gap-8 flex-col px-4 max-w-[500px] lg:max-w-[380px] mx-auto">
      {cartItems.length > 0 ? (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-xl text-plc-red">
              Your Cart ({cartItems.length})
            </h1>
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex flex-col gap-1 lg:text-sm">
                  <h3 className="text-plc-rose-900 font-semibold">{item.name}</h3>
                  <p className="flex gap-4">
                    <span className="text-plc-red font-semibold">
                      {item.quantity}x
                    </span>
                    <span className="text-plc-rose-500">
                      @ ${item.price.toFixed(2)}
                    </span>
                    <span className="text-plc-rose-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
                <button>
                  <Image
                    src="/product-list-cart/icon-remove-item.svg"
                    width={20}
                    height={20}
                    alt="Icon remove"
                    className="lg:w-4 ring-1 rounded-full p-1 ring-plc-rose-300"
                  ></Image>
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-plc-rose-900 lg:text-sm">Order Total</p>
            <p className="text-plc-rose-900 font-bold text-3xl md:text-4xl lg:text-xl">
              ${totalAmount.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Image
              src="/product-list-cart/icon-carbon-neutral.svg"
              width={20}
              height={20}
              alt="Icon Neutral"
            ></Image>
            <p className="lg:text-sm text-plc-rose-500">
              This is a{" "}
              <span className="text-plc-rose-900 font-semibold">
                carbon-neutral
              </span>{" "}
              delivery
            </p>
          </div>
          <div className="w-full">
            <button className="w-full bg-plc-red rounded-full py-4 text-plc-rose-100 font-semibold text-lg lg:text-sm">
              Confirm Order
            </button>
          </div>
        </div>
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
          ></Image>
          <p className="text-plc-rose-500">Your added items will appear here</p>
        </div>
      )}
    </div>
  )
}

export default YourCart
