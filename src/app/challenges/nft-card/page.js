import { Outfit } from "next/font/google"
import Image from "next/image"

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "300", "600"] })

const page = () => {
  return (
    <main
      className={`${outfit.className} h-screen flex flex-col items-center justify-center  bg-nft-Very-dark-blue-main-BG`}
    >
      <div className="max-w-[350px] bg-nft-Very-dark-blue-card-BG flex flex-col gap-4 justify-center p-6 m-6 rounded-lg">
        <section className="flex justify-center w-full ">
          <Image
            src="/nft-card/image-equilibrium.jpg"
            alt="nft-card"
            height={200}
            width={200}
            className="rounded-lg w-full"
          ></Image>
        </section>
        <h1 className="text-nft-White font-semibold text-xl hover:text-nft-Cyan">Equilibrium #3429</h1>
        <p className="text-nft-Soft-blue font-light">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <section className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Image
              src="/nft-card/icon-ethereum.svg"
              alt="icon-ethereum"
              height={12}
              width={12}
              className="object-contain"
            ></Image>
            <span className="text-nft-Cyan font-semibold">0.041 ETH</span>
          </div>{" "}
          <div className="flex gap-2 items-center">
            <Image
              src="/nft-card/icon-clock.svg"
              alt="icon-clock"
              height={18}
              width={18}
              className="object-contain"
            ></Image>
            <span className="text-nft-Soft-blue font-light">3 days left</span>
          </div>
        </section>
        <hr className="border-nft-Very-dark-blue" />
        <section className="flex gap-4 items-center">
          <Image
            src="/nft-card/image-avatar.png"
            alt="Image-avatar"
            height={30}
            width={30}
            className="rounded-full ring-1 ring-nft-White"
          ></Image>
          <p>
            <span className="text-nft-Soft-blue font-light">Creation of</span>
            <span className="text-nft-White font-normal hover:text-nft-Cyan"> Jules Wyvern</span>
          </p>
        </section>
      </div>
    </main>
  )
}

export default page
