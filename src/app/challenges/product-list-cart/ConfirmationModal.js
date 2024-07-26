import Image from "next/image"

const ConfirmationModal = ({ cart, products, onClose }) => {
  const totalAmount = Object.keys(cart).reduce((total, index) => {
    const product = products[index]
    return total + product.price * cart[index]
  }, 0)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  ">
      <div className="bg-white p-8 md:rounded-lg  rounded-t-lg shadow-lg flex flex-col gap-6 max-w-[500px] sm:w-[500px] fixed bottom-0 sm:relative ">
        <div>
          <Image
            src="/product-list-cart/icon-order-confirmed.svg"
            width={50}
            height={50}
            alt="confirmIcon"
          ></Image>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-2xl font-bold">Order Confirmed</h2>
          <p className="text-xs">We hope you enjoy your food!</p>
        </div>
        <div className="w-full bg-plc-rose-100 p-4 rounded-lg">
          {Object.keys(cart).map((index) => {
            const product = products[index]
            return (
              <div key={index} className="flex flex-col mb-4 w-full">
                <div>
                  <div className="flex justify-between items-center gap-8 w-full">
                    <div className="flex gap-4 items-center">
                      <Image
                        src={product.image.thumbnail}
                        width={50}
                        height={50}
                        alt="product thumbnail"
                        className="rounded-md"
                      ></Image>
                      <div className="text-sm">
                        <span className="font-bold">{product.name}</span>
                        <div className="flex gap-4">
                          <span className="text-plc-red font-semibold">
                            {cart[index]}x
                          </span>
                          <span className="text-plc-rose-500">
                            @${product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-plc-rose-900">
                      ${(cart[index] * product.price).toFixed(2)}
                    </span>
                  </div>
                </div>
                <hr className="mt-2 border-plc-rose-300" />
              </div>
            )
          })}
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm">Order Total</span>
            <span className="font-bold text-lg">${totalAmount.toFixed(2)}</span>
          </div>
        </div>
        <button
          className="mt-4 w-full bg-plc-red text-white py-3 rounded-full text-sm"
          onClick={onClose}
        >
          Start New Order
        </button>
      </div>
    </div>
  )
}

export default ConfirmationModal
