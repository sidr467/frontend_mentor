import Image from "next/image"

const page = () => {
  return (
    <main class="font-barlow bg-tgs-Lightgray p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12">
      <div>
        <section class="flex flex-col justify-center gap-8 m-4 lg:grid grid-cols-4 lg:mx-auto grid-rows-2 max-w-[1200px]">
          <article class="bg-tgs-Moderateviolet text-tgs-White rounded-md p-8 flex flex-col gap-6 col-span-2 relative">
            <Image
              src="/testimonials-grid-section/bg-pattern-quotation.svg"
              alt="bg-pattern-quotation"
              class="absolute -top-[1px] right-8 opacity-40"
              width={100}
              height={100}
            />
            <div class="flex justify-start items-center gap-4">
              <div class="">
                <Image
                  src="/testimonials-grid-section/image-daniel.jpg"
                  width="28"
                  height="28"
                  class="rounded-full ring-1 ring-tgs-White object-cover"
                  alt="image-daniel"
                />
              </div>
              <div class="">
                <p class="text-sm font-medium">Daniel Clifford</p>
                <p class="text-sm text-tgs-Lightgray">Verified Graduate</p>
              </div>
            </div>
            <div class="grid gap-6">
              <h1 class="font-semibold text-xl">
                I received a job offer mid-course, and the subjects I learned
                were current, if not more so, in the company I joined. I
                honestly feel I got every penny&apos;s worth.
              </h1>
              <h2 class="text-sm text-tgs-Lightgray">
                “ I was an EMT for many years before I joined the bootcamp.
                I&apos;ve been looking to make a transition and have heard some
                people who had an amazing experience here. I signed up for the
                free intro course and found it incredibly fun! I enrolled
                shortly thereafter. The next 12 weeks was the best - and most
                grueling - time of my life. Since completing the course,
                I&apos;ve successfully switched careers, working as a Software
                Engineer at a VR startup. ”
              </h2>
            </div>
          </article>
          <article class="bg-tgs-Verydarkgrayishblue text-tgs-White rounded-md p-8 flex flex-col gap-6">
            <div class="flex justify-start items-center gap-4">
              <div class="">
                <Image
                  src="/testimonials-grid-section/image-jonathan.jpg"
                  width="28"
                  height="28"
                  class="rounded-full ring-1 ring-tgs-White object-cover"
                  alt="image-daniel"
                />
              </div>
              <div class="">
                <p class="text-sm font-medium">Jonathan Walters</p>
                <p class="text-sm text-tgs-Lightgray">Verified Graduate</p>
              </div>
            </div>
            <div class="grid gap-6">
              <h1 class="font-semibold text-xl">
                The team was very supportive and kept me motivated
              </h1>
              <h2 class="text-sm text-tgs-Lightgray">
                “ I started as a total newbie with virtually no coding skills. I
                now work as a mobile engineer for a big company. This was one of
                the best investments I&apos;ve made in myself. ”
              </h2>
            </div>
          </article>
          <article class="bg-tgs-White rounded-md p-8 flex flex-col gap-6 row-start-2">
            <div class="flex justify-start items-center gap-4">
              <div class="">
                <Image
                  src="/testimonials-grid-section/image-jeanette.jpg"
                  width="28"
                  height="28"
                  class="rounded-full ring-1 ring-tgs-White object-cover"
                  alt="image-daniel"
                />
              </div>
              <div class="">
                <p class="text-sm font-medium">Jeanette Harmon</p>
                <p class="text-sm text-tgs-Verydarkgrayishblue">
                  Verified Graduate
                </p>
              </div>
            </div>
            <div class="grid gap-6">
              <h1 class="font-semibold text-xl">
                An overall wonderful and rewarding experience
              </h1>
              <h2 class="text-sm text-tgs-Verydarkgrayishblue">
                “ Thank you for the wonderful experience! I now have a job I
                really enjoy, and make a good living while doing something I
                love. ”
              </h2>
            </div>
          </article>
          <article class="bg-tgs-Verydarkblackishblue text-tgs-White rounded-md p-8 flex flex-col gap-6 col-span-2">
            <div class="flex justify-start items-center gap-4">
              <div class="">
                <Image
                  src="/testimonials-grid-section/image-patrick.jpg"
                  width="28"
                  height="28"
                  class="rounded-full ring-1 ring-tgs-White object-cover"
                  alt="image-daniel"
                />
              </div>
              <div class="">
                <p class="text-sm font-medium">Patrick Abrams</p>
                <p class="text-sm text-tgs-Lightgray">Verified Graduate</p>
              </div>
            </div>
            <div class="grid gap-6">
              <h1 class="font-semibold text-xl">
                Awesome teaching support from TAs who did the bootcamp
                themselves. Getting guidance from them and learning from their
                experiences was easy.
              </h1>
              <h2 class="text-sm text-tgs-Lightgray">
                “ The staff seem genuinely concerned about my progress which I
                find really refreshing. The program gave me the confidence
                necessary to be able to go out in the world and present myself
                as a capable junior developer. The standard is above the rest.
                You will get the personal attention you need from an incredible
                community of smart and amazing people. ”
              </h2>
            </div>
          </article>
          <article class="bg-tgs-White text-tgs-Verydarkgrayishblue rounded-md p-8 flex flex-col gap-6 row-start-1 col-start-4 row-end-3">
            <div class="flex justify-start items-center gap-4">
              <div class="">
                <Image
                  src="/testimonials-grid-section/image-kira.jpg"
                  width="28"
                  height="28"
                  class="rounded-full ring-1 ring-tgs-White object-cover"
                  alt="image-daniel"
                />
              </div>
              <div class="">
                <p class="text-sm font-medium">Kira Whittle</p>
                <p class="text-sm text-tgs-Verydarkgrayishblue">
                  Verified Graduate
                </p>
              </div>
            </div>
            <div class="grid gap-6">
              <h1 class="font-semibold text-xl">
                Such a life-changing experience. Highly recommended!
              </h1>
              <h2 class="text-sm text-tgs-Verydarkgrayishblue">
                “ Before joining the bootcamp, I&apos;ve never written a line of
                code. I needed some structure from professionals who can help me
                learn programming step by step. I was encouraged to enroll by a
                former student of theirs who can only say wonderful things about
                the program. The entire curriculum and staff did not disappoint.
                They were very hands-on and I never had to wait long for
                assistance. The agile team project, in particular, was
                outstanding. It took my learning to the next level in a way that
                no tutorial could ever have. In fact, I&apos;ve often referred
                to it during interviews as an example of my developent
                experience. It certainly helped me land a job as a full-stack
                developer after receiving multiple offers. 100% recommend! ”
              </h2>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}

export default page
