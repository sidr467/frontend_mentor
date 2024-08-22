import Image from "next/image"

const popular = [
  {
    num: "01",
    imgSrc: "/news-homepage/image-retro-pcs.jpg",
    imgAlt: "Image of retro PC",
    title: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades?",
  },
  {
    num: "02",
    imgSrc: "/news-homepage/image-top-laptops.jpg",
    imgAlt: "Image of top laptops",
    title: "Top 10 Laptops of 2022",
    desc: "Our best picks for various needs and budgets.",
  },
  {
    num: "03",
    imgSrc: "/news-homepage/image-gaming-growth.jpg",
    imgAlt: "Image of gaming growth",
    title: "The Growth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities.",
  },
]

const Popular = () => {
  return (
    <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {popular.map((p, index) => (
        <article
          key={index}
          className="grid grid-cols-6 gap-4 items-center justify-center"
        >
          <div className="col-span-2">
            <Image
              src={p.imgSrc}
              width={50}
              height={80}
              alt={p.imgAlt}
              className="w-full "
              quality={100}
              unoptimized
            ></Image>
          </div>
          <div className="col-span-4 flex flex-col gap-2 justify-center">
            <span className="text-3xl lg:text-4xl font-extrabold text-nh-SoftRed">
              {p.num}
            </span>
            <h4 className="text-base lg:text-lg font-bold text-nh-VeryDarkblue hover:text-nh-SoftRed">
              {p.title}
            </h4>
            <p className="text-sm lg:text-base font-medium text-nh-DarkGrayishBlue">
              {p.desc}
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Popular
