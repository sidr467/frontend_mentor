const newsN = [
  {
    title: "Hydrogen VS Electric Cars",
    description: " Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "  The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
]

const NewSection = () => {
  return (
    <section className="bg-nh-VeryDarkblue p-4 md:p-6 lg:py-8 flex flex-col gap-4 md:gap-6 lg:gap-8 md:col-span-4 lg:col-span-3 w-full">
      <div>
        <h2 className="text-nh-SoftOrange font-extrabold text-2xl md:text-3xl lg:text-4xl">
          New
        </h2>
      </div>
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
        {newsN.map((n, index) => (
          <div key={index} className="flex flex-col gap-4">
            <article className="flex flex-col gap-2 md:gap-4">
              <h3 className="text-nh-OffWhite text-base lg:text-lg font-bold">
                {n.title}
              </h3>
              <p className="text-nh-DarkGrayishBlue font-medium text-sm lg:text-base">
                {n.description}
              </p>
            </article>
            {index < newsN.length - 1 && <hr className="opacity-30" />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewSection
