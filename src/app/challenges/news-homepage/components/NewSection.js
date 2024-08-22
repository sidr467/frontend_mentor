const NewSection = () => {
  return (
    <section className="bg-nh-VeryDarkblue p-4 md:p-6 lg:py-8 flex flex-col gap-4 md:gap-6 lg:gap-8 md:col-span-4 lg:col-span-3 w-full">
      <div>
        <h2 className="text-nh-SoftOrange font-extrabold text-2xl md:text-3xl lg:text-4xl">
          New
        </h2>
      </div>
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
        <article className="flex flex-col gap-2 md:gap-4">
          <h3 className="text-nh-OffWhite text-base lg:text-lg font-bold">
            Hydrogen VS Electric Cars
          </h3>
          <p className="text-nh-DarkGrayishBlue font-medium text-sm lg:text-base">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </article>
        <hr className="opacity-30" />
        <article className="flex flex-col gap-2 md:gap-4">
          <h3 className="text-nh-OffWhite text-base lg:text-lg font-bold">
            The Downsides of AI Artistry
          </h3>
          <p className="text-nh-DarkGrayishBlue font-medium text-sm lg:text-base">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </article>
        <hr className="opacity-30" />
        <article className="flex flex-col gap-2 md:gap-4">
          <h3 className="text-nh-OffWhite text-base lg:text-lg font-bold">
            Is VC Funding Drying Up?
          </h3>
          <p className="text-nh-DarkGrayishBlue font-medium text-sm lg:text-base">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </article>
        {/* 



 */}
      </div>
    </section>
  )
}

export default NewSection
