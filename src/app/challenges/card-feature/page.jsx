import Image from "next/image"

const page = () => {
  return (
    <main className="font-poppins px-4 min-h-screen flex flex-col items-center justify-between mb-10">
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex flex-col items-center justify-center text-center gap-4 md:gap-6 lg:gap-8">
          <h1>
            <span className="text-2xl md:text-4xl font-normal text-cf-GrayishBlue">
              Reliable, efficient delivery
            </span>
            <br />
            <span className="font-bold md:text-4xl text-2xl text-cf-VeryDarkBlue">
              Powered by Technology
            </span>
          </h1>
          <p className="text-center max-w-xs md:max-w-md lg:max-w-lg text-cf-GrayishBlue">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        {/* <!-- Cards Container --> */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-8 lg:mt-[-20vh] md:gap-10 lg:gap-12  items-center justify-center">
          <div className="flex flex-col gap-4 w-full lg:w-auto max-w-sm shadow-xl px-6 py-8 border-t-4 lg:mt-[40vh] border-cf-Cyan rounded-md bg-white">
            {/* <!-- Card Text  --> */}
            <div className="mb-2 w-full">
              <h2 className="font-bold text-lg text-cf-VeryDarkBlue">
                Supervisor
              </h2>
              <p className="text-cf-GrayishBlue">
                Monitors activity to identify project roadblocks
              </p>
            </div>
            {/* <!-- Card Image --> */}
            <div className="place-self-end">
              <Image
                className="object-cover"
                src="/card-feature/icon-supervisor.svg"
                alt="icon-supervisor"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="flex flex-col w-full max-w-sm gap-4 shadow-xl px-6 py-8 border-t-4 border-cf-Red rounded-md bg-white lg:order-1">
            {/* <!-- Card Text  --> */}
            <div className="mb-2 w-full">
              <h2 className="font-bold text-lg text-cf-VeryDarkBlue">
                Team Builder
              </h2>
              <p className="text-cf-GrayishBlue">
                Scans our talent network to create the optimal team for your
                project
              </p>
            </div>
            {/* <!-- Card Image --> */}
            <div className="place-self-end">
              <Image
                className="object-cover"
                src="/card-feature/icon-team-builder.svg"
                alt="icon-supervisor"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-sm shadow-xl px-6 py-8 border-t-4 border-cf-Orange lg:mt-[-20vh] rounded-md bg-white lg:order-3">
            {/* <!-- Card Text  --> */}
            <div className="mb-2 w-full">
              <h2 className="font-bold text-lg text-cf-VeryDarkBlue">Karma</h2>
              <p className="text-cf-GrayishBlue">
                Regularly evaluates our talent to ensure quality
              </p>
            </div>
            {/* <!-- Card Image --> */}
            <div className="place-self-end">
              <Image
                className="object-cover"
                src="/card-feature/icon-karma.svg"
                alt="icon-supervisor"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-sm shadow-xl px-6 py-8 border-t-4 border-cf-Blue lg:mt-[40vh] rounded-md bg-white lg:order-2">
            {/* <!-- Card Text  --> */}
            <div className="mb-2 w-full">
              <h2 className="font-bold text-lg text-cf-VeryDarkBlue">
                Calculator
              </h2>
              <p className="text-cf-GrayishBlue">
                Uses data from past projects to provide better delivery
                estimates
              </p>
            </div>
            {/* <!-- Card Image --> */}
            <div className="place-self-end">
              <Image
                className="object-cover"
                src="/card-feature/icon-calculator.svg"
                alt="icon-supervisor"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
