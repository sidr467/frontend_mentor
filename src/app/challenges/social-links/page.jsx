import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <main className=" font-sl-inter flex items-center justify-center min-h-screen bg-sc-OffBlack text-sc-White">
      <div className="bg-sc-DarkGrey w-[350px] h-fit rounded-2xl flex flex-col items-center gap-4">
        <div class="img-container">
          <Image
            src="/social-links/avatar-jessica.jpeg"
            alt="avatar-jessica"
            width={80}
            height={80}
            className="rounded-full mt-8"
          />
        </div>
        <div class="text-center text-[15px]">
          <h1 class="font-semibold text-3xl">Jessica Randall</h1>
          <p class="mt-[0.6rem] font-bold text-[0.8rem] text-sc-Green mb-[1.4rem]">
            London, United Kingdom
          </p>
          <p class="text-[0.9rem]">
            &ldquo;Frontend developer and avid reader&rdquo;
          </p>
        </div>
        <div class="my-[1.4rem] mx-auto grid grid-cols-1 grid-rows-5 gap-y-4">
          <Link
            href="#"
            class=" block bg-sc-Grey w-[310px] p-4 text-center text-[0.9rem] font-white rounded-xl font-bold hover:bg-sc-Green hover:text-sc-OffBlack"
          >
            Github
          </Link>
          <Link
            href="#"
            class=" block bg-sc-Grey w-[310px] p-4 text-center text-[0.9rem] font-white rounded-xl font-bold hover:bg-sc-Green hover:text-sc-OffBlack"
          >
            Frontend Mentor
          </Link>
          <Link
            href="#"
            class=" block bg-sc-Grey w-[310px] p-4 text-center text-[0.9rem] font-white rounded-xl font-bold hover:bg-sc-Green hover:text-sc-OffBlack"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            class=" block bg-sc-Grey w-[310px] p-4 text-center text-[0.9rem] font-white rounded-xl font-bold hover:bg-sc-Green hover:text-sc-OffBlack"
          >
            Twitter
          </Link>
          <Link
            href="#"
            class=" block bg-sc-Grey w-[310px] p-4 text-center text-[0.9rem] font-white rounded-xl font-bold hover:bg-sc-Green hover:text-sc-OffBlack"
          >
            Instagram
          </Link>
        </div>
      </div>
    </main>
  )
}

export default page
