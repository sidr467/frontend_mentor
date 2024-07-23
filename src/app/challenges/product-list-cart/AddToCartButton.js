import Image from "next/image"

const AddToCartButton = ({buttonShowNumber}) => {
  

  return (
    <>
      <button
        className={` w-[200px] h-[50px] absolute -bottom-6 bg-plc-rose-50 py-3 px-9 rounded-full text-center flex items-center gap-2 ring-1 ring-plc-rose-500`}
        onClick={buttonShowNumber}
      >
        <Image
          src="/product-list-cart/icon-add-to-cart.svg"
          width={20}
          height={20}
          alt="Add to Cart Icon"
        ></Image>
        <span>Add to Cart</span>
      </button>
      
    </>
  )
}

export default AddToCartButton
