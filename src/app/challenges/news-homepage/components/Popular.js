import Image from "next/image"

const Popular = () => {
  return (
    <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <article className="grid grid-cols-6 gap-4 items-center justify-center">
        <div className="col-span-2">
          <Image
            src="/news-homepage/image-retro-pcs.jpg"
            width={50}
            height={80}
            alt="Image of retro PC"
            className="w-full "
            quality={100}
          ></Image>
        </div>
        <div className="col-span-4 flex flex-col gap-2 justify-center">
          <span className="text-3xl lg:text-4xl font-extrabold text-nh-SoftRed">01</span>
          <h4 className="text-base lg:text-lg font-bold text-nh-VeryDarkblue hover:text-nh-SoftRed">
            Reviving Retro PCs
          </h4>
          <p className="text-sm lg:text-base font-medium text-nh-DarkGrayishBlue">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </article>
      <article className="grid grid-cols-6 gap-4 items-center justify-center">
        <div className="col-span-2">
          <Image
            src="/news-homepage/image-top-laptops.jpg"
            width={50}
            height={80}
            quality={100}
            alt="Image of top laptops"
            className="w-full"
          ></Image>
        </div>
        <div className="col-span-4 flex flex-col gap-2 justify-center">
          <span className="text-3xl lg:text-4xl font-extrabold text-nh-SoftRed">02</span>
          <h4 className="text-base lg:text-lg font-bold text-nh-VeryDarkblue hover:text-nh-SoftRed">
            Top 10 Laptops of 2022
          </h4>
          <p className="text-sm lg:text-base font-medium text-nh-DarkGrayishBlue">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </article>
      <article className="grid grid-cols-6 gap-4 items-center justify-center">
        <div className="col-span-2">
          <Image
            src="/news-homepage/image-gaming-growth.jpg"
            width={50}
            height={80}
            quality={100}
            alt="Image of gaming growth"
            className="w-full"
          ></Image>
        </div>
        <div className="col-span-4 flex flex-col gap-2 justify-center">
          <span className="text-3xl lg:text-4xl font-extrabold text-nh-SoftRed">03</span>
          <h4 className="text-base lg:text-lg font-bold text-nh-VeryDarkblue hover:text-nh-SoftRed">
            The Growth of Gaming
          </h4>
          <p className="text-sm lg:text-base font-medium text-nh-DarkGrayishBlue">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </article>
    </section>
  )
}

export default Popular
