import Image from "next/image"

const page = () => {
  return (
    <main class="font-FontHanken h-screen md:grid items-center justify-center">
      <div class="grid gap-4 md:grid-flow-row md:grid-cols-2 md:max-w-[750px] md:rounded-2xl md:shadow-2xl md:text-base">
        <section class="bg-gradient-to-t from-rsc-BgLightroyalBlue to-rsc-BgLightslateBlue text-rsc-White flex flex-col justify-center items-center gap-6 px-12 py-4 rounded-b-3xl md:rounded-3xl">
          <h1 class="opacity-60">Your Result</h1>
          <div class="bg-gradient-to-t from-rsc-CirclePersianBlue to-rsc-CircleVioletBlue flex flex-col gap-2 items-center justify-center rounded-full min-w-[120px] min-h-[120px] md:min-w-[180px] md:min-h-[180px]">
            <span class="font-extrabold text-4xl md:text-5xl">76</span>
            <span class="text-xs md:text-sm opacity-30">of 100</span>
          </div>
          <div class="text-center">
            <h2 class="text-lg md:text-xl font-normal">Great</h2>
            <p class="text-xs md:text-sm font-medium opacity-60 mt-4">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </section>
        <section class="flex flex-col items-start justify-center gap-4 px-8 py-4">
          <h1 class="text-rsc-DarkgrayBlue font-extrabold mb-4">Summary</h1>
          <div class="flex justify-between w-full bg-rsc-PrimaryLightRed bg-opacity-10 px-2 py-4 rounded-xl">
            <div class="flex gap-2">
              <Image
                src="/result-summary-component/icon-reaction.svg"
                alt="icon-reaction"
                width={20}
                height={20}
              />
              <p class="text-rsc-PrimaryLightRed font-semibold">Reaction</p>
            </div>
            <p class="text-rsc-DarkgrayBlue font-extrabold">
              <span>80 </span>
              <span class="opacity-55"> / 100</span>
            </p>
          </div>

          <div class="flex justify-between w-full bg-rsc-PrimaryOrangeyYellow bg-opacity-10 px-2 py-4 rounded-xl">
            <div class="flex gap-2">
              <Image
                src="/result-summary-component/icon-memory.svg"
                alt="icon-memory"
                width={20}
                height={20}
              />
              <p class="text-rsc-PrimaryOrangeyYellow font-semibold">Memory</p>
            </div>
            <p class="text-rsc-DarkgrayBlue font-extrabold">
              <span>92 </span>
              <span class="opacity-55"> / 100</span>
            </p>
          </div>

          <div class="flex justify-between w-full bg-rsc-PrimaryGreenTeal bg-opacity-10 px-2 py-4 rounded-xl">
            <div class="flex gap-2">
              <Image
                src="/result-summary-component/icon-verbal.svg"
                alt="icon-verbal"
                width={20}
                height={20}
              />
              <p class="text-rsc-PrimaryGreenTeal font-semibold">Verbal</p>
            </div>
            <p class="text-rsc-DarkgrayBlue font-extrabold">
              <span>61 </span>
              <span class="opacity-55"> / 100</span>
            </p>
          </div>

          <div class="flex justify-between w-full bg-rsc-PrimaryCobaltblue bg-opacity-10 px-2 py-4 rounded-xl">
            <div class="flex gap-2">
              <Image
                src="/result-summary-component/icon-visual.svg"
                alt="icon-visual"
                width={20}
                height={20}
              />
              <p class="text-rsc-PrimaryCobaltblue font-semibold">Visual</p>
            </div>
            <p class="text-rsc-DarkgrayBlue font-extrabold">
              <span>72 </span>
              <span class="opacity-55"> / 100</span>
            </p>
          </div>

          <button class="w-full bg-rsc-DarkgrayBlue text-white py-3 rounded-3xl hover:bg-gradient-to-b from-rsc-CircleVioletBlue to-rsc-CirclePersianBlue">
            Continue
          </button>
        </section>
      </div>
    </main>
  )
}

export default page
