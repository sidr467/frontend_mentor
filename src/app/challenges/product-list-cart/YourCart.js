import Image from "next/image"

const YourCart = () => {
  return (
    <div className="flex gap-8 flex-col px-4 max-w-[500px] lg:max-w-[380px] mx-auto">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-xl text-plc-red">Your Cart (7)</h1>
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:text-sm">
              <h3 className="text-plc-rose-900 font-semibold">Classic Tiramisu</h3>
              <p className="flex gap-4">
                <span className="text-plc-red font-semibold">1x</span>
                <span className="text-plc-rose-500">@ $5.50</span>
                <span className="text-plc-rose-900">$ 5.50</span>
              </p>
            </div>
            <Image
              src="/product-list-cart/icon-remove-item.svg"
              width={20}
              height={20}
              alt="Icon remove"
              className="lg:w-4 ring-1 rounded-full p-1 ring-plc-rose-300"
            ></Image>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:text-sm">
              <h3 className="text-plc-rose-900 font-semibold">Classic Tiramisu</h3>
              <p className="flex gap-4">
                <span className="text-plc-red font-semibold">1x</span>
                <span className="text-plc-rose-500">@ $5.50</span>
                <span className="text-plc-rose-900">$ 5.50</span>
              </p>
            </div>
            <Image
              src="/product-list-cart/icon-remove-item.svg"
              width={20}
              height={20}
              alt="Icon remove"
              className="lg:w-4 ring-1 rounded-full p-1 ring-plc-rose-300"
            ></Image>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 lg:text-sm">
              <h3 className="text-plc-rose-900 font-semibold">Classic Tiramisu</h3>
              <p className="flex gap-4">
                <span className="text-plc-red font-semibold">1x</span>
                <span className="text-plc-rose-500">@ $5.50</span>
                <span className="text-plc-rose-900">$ 5.50</span>
              </p>
            </div>
            <Image
              src="/product-list-cart/icon-remove-item.svg"
              width={20}
              height={20}
              alt="Icon remove"
              className="lg:w-4 ring-1 rounded-full p-1 ring-plc-rose-300"
            ></Image>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-plc-rose-900 lg:text-sm">Order Total</p>
        <p className="text-plc-rose-900 font-bold text-3xl md:text-4xl lg:text-xl">$46.50</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Image
          src="/product-list-cart/icon-carbon-neutral.svg"
          width={20}
          height={20}
          alt="Icon Neutral"
        ></Image>
        <p className="lg:text-sm text-plc-rose-500">This is a <span className="text-plc-rose-900 font-semibold">carbon-neutral</span> delivery</p>
      </div>
      <div className="w-full">
        <button className="w-full bg-plc-red rounded-full py-4 text-plc-rose-100 font-semibold text-lg lg:text-sm">Confirm Order</button>
      </div>
    </div>
  )
}

export default YourCart
