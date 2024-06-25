import Image from "next/image"

const page = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-cream">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="md:max-w-screen-md mx-auto">
          <picture>
            <source
              srcSet="/product-card/image-product-desktop.jpg"
              media="(min-width: 786px)"
            />
            <source
              srcSet="/product-card/image-product-mobile.jpg"
              media="(max-width: 375px)"
            />
            <img
              className="rounded-tl-lg rounded-tr-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none w-[90%] md:w-full mx-auto block md:transform scale-95 h-full object-cover transition-all duration-500 ease-in-out"
              src="/product-card/image-product-mobile.jpg"
              alt="Gabrielle Essence Eau De Parfum"
            />
          </picture>
        </div>
        <div className={` p-6 flex flex-col justify-center gap-6`}>
          <p
            className={`tracking-widest font-montserrat text-sm uppercase text-gray-500`}
          >
            Perfume
          </p>
          <h1 className="product-name font-fraunces text-3xl font-extrabold mt-1 text-verydarkblue">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="product-description mt-3 font-fraunces text-darkgrayishblue">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price-container flex items-center mt-2 gap-6">
            <p className="price font-fraunces text-4xl text-darkcyan">
              $149.99
            </p>
            <p className="st-price text-xs pt-1 font-bold line-through text-darkgrayishblue">
              $169.99
            </p>
          </div>
          <div className="button-container flex">
            <button
              className="rounded-md flex justify-center items-center gap-4 w-full pt-3 pb-3 bg-darkcyan text-white hover:bg-green-950 transition"
              aria-label="Add Gabrielle Essence Eau De Parfum to cart"
            >
              <Image
                src="/product-card/icon-cart.svg"
                alt="Cart icon"
                height={20}
                width={20}
              />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
