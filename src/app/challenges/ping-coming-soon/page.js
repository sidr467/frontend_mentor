import { Libre_Franklin } from "next/font/google"
import Image from "next/image"
import IconsComp from "./IconsComp"
import EmailForm from "./EmailForm"

const lf = Libre_Franklin({ subsets: ["latin"], weight: ["300", "600", "700"] })

const page = () => {
  return (
    <div
      className={`${lf.className} min-h-screen w-full h-full flex justify-center my-20`}
    >
      <main className="flex flex-col justify-center w-full h-full px-8">
        <div className="flex flex-col gap-8  md:gap-12 w-full h-full">
          <section className="flex items-center justify-center">
            <Image
              src="/ping-coming-soon/logo.svg"
              width={60}
              height={60}
              alt="Logo_Image"
              className="md:w-24"
            ></Image>
          </section>
          <section className="flex flex-col gap-4 text-center">
            <h1 className="text-2xl md:text-5xl font-light text-pcs-gray">
              We are launching
              <span className="text-pcs-very-dark-blue font-bold"> soon!</span>
            </h1>
            <h2 className="text-sm md:text-lg text-pcs-very-dark-blue font-normal">
              Subscribe and get notified
            </h2>
          </section>
          <section>
            <EmailForm />
          </section>
        </div>
        <section className="flex items-center justify-center w-full h-full">
          <Image
            src="/ping-coming-soon/illustration-dashboard.png"
            width={300}
            height={300}
            alt="Dashboard_Image"
            className="max-w-[600px] w-full px-4 h-auto"
          ></Image>
        </section>
        <section className="flex flex-col items-center justify-center gap-8">
          <IconsComp />
          <p className="text-xs text-pcs-gray">
            &copy; Copyright Ping. All rights reserved.
          </p>
        </section>
      </main>
    </div>
  )
}

export default page
