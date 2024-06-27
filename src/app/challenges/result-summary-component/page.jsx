import Image from "next/image"

const Marks = [
  {
    image: "/result-summary-component/icon-reaction.svg",
    bgcolor: "bg-rsc-PrimaryLightRed",
    textcolor: "text-rsc-PrimaryLightRed",
    name: "Reaction",
    marks: "80",
  },
  {
    image: "/result-summary-component/icon-memory.svg",
    bgcolor: "bg-rsc-PrimaryOrangeyYellow",
    textcolor: "text-rsc-PrimaryOrangeyYellow",
    name: "Memory",
    marks: "92",
  },
  {
    image: "/result-summary-component/icon-verbal.svg",
    bgcolor: "bg-rsc-PrimaryGreenTeal",
    textcolor: "text-rsc-PrimaryGreenTeal",
    name: "Verbal",
    marks: "61",
  },
  {
    image: "/result-summary-component/icon-visual.svg",
    bgcolor: "bg-rsc-PrimaryCobaltblue",
    textcolor: "text-rsc-PrimaryCobaltblue",
    name: "Visual",
    marks: "72",
  },
]

const page = () => {
  return (
    <main className="font-FontHanken h-screen md:grid items-center justify-center">
      <div className="grid gap-4 md:grid-flow-row md:grid-cols-2 md:max-w-[750px] md:rounded-2xl md:shadow-2xl md:text-base">
        <section className="bg-gradient-to-t from-rsc-BgLightroyalBlue to-rsc-BgLightslateBlue text-rsc-White flex flex-col justify-center items-center gap-6 px-12 py-4 rounded-b-3xl md:rounded-3xl">
          <h1 className="opacity-60">Your Result</h1>
          <div className="bg-gradient-to-t from-rsc-CirclePersianBlue to-rsc-CircleVioletBlue flex flex-col gap-2 items-center justify-center rounded-full min-w-[120px] min-h-[120px] md:min-w-[180px] md:min-h-[180px]">
            <span className="font-extrabold text-4xl md:text-5xl">76</span>
            <span className="text-xs md:text-sm opacity-30">of 100</span>
          </div>
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-normal">Great</h2>
            <p className="text-xs md:text-sm font-medium opacity-60 mt-4">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-start justify-center gap-4 px-8 py-4">
          <h1 className="text-rsc-DarkgrayBlue font-extrabold mb-4">Summary</h1>
          {Marks.map((data, index) => (
            <div
              key={index}
              className={`${data.bgcolor} flex justify-between w-full bg-opacity-10 px-2 py-4 rounded-xl`}
            >
              <div className="flex gap-2">
                <Image
                  src={data.image}
                  alt="icon-reaction"
                  width={20}
                  height={20}
                />
                <p className={`${data.textcolor} font-semibold`}>{data.name}</p>
              </div>
              <p className="text-rsc-DarkgrayBlue font-extrabold">
                <span>{data.marks} </span>
                <span className="opacity-55"> / 100</span>
              </p>
            </div>
          ))}
          <button className="w-full bg-rsc-DarkgrayBlue text-white py-3 rounded-3xl hover:bg-gradient-to-b from-rsc-CircleVioletBlue to-rsc-CirclePersianBlue">
            Continue
          </button>
        </section>
      </div>
    </main>
  )
}

export default page
