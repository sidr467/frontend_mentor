import { Outfit } from "next/font/google"
import Image from "next/image"

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "300", "600"] })

const page = () => {
  return (
    <main className={`${outfit.className}`}>
      <section>
        <Image
          src="/nft-card/image-equilibrium.jpg"
          alt="nft-card"
          height={200}
          width={200}
        ></Image>
      </section>
      <h1>Equilibrium #3429</h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <section>
        <div>
          <Image
            src="/nft-card/icon-ethereum.svg"
            alt="icon-ethereum"
            height={10}
            width={10}
          ></Image>
          <span>0.041 ETH</span>
        </div>{" "}
        <div>
          <Image
            src="/nft-card/icon-clock.svg"
            alt="icon-clock"
            height={15}
            width={15}
          ></Image>
          <span>3 days left</span>
        </div>
      </section>
      <section>
        <Image
          src="/nft-card/image-avatar.png"
          alt="Image-avatar"
          height={30}
          width={30}
        ></Image>

        <span>Creation of Jules Wyvern</span>
      </section>
    </main>
  )
}

export default page
