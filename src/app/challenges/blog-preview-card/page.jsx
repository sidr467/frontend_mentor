import Image from "next/image"

const page = () => {
  return (
    <main className=" flex items-center justify-center min-h-screen bg-bpc-yellow font-Figtree">
      <div className="max-w-[340px] h-[530px] bg-bpc-pure-white border-bpc-black rounded-2xl border-[1px] flex flex-col items-center gap-6 shadow-custom">
        <div className="mt-6">
          <Image
            src="/blog-preview-card/illustration-article.svg"
            alt="blog-img"
            width={300}
            height={300}
            className=" rounded-2xl max-w-[300px]"
          />
        </div>
        <div className="max-w-[380px] max-h-[250px] flex flex-col  gap-4 ml-8 text-[15px]">
          <span className=" bg-bpc-yellow p-2.5 font-extrabold rounded-[0.2rem] w-fit">
            Category
          </span>
          <p class="font-medium">Published 21 Dec 2024</p>
          <h1 class="font-extrabold text-[1.3rem] hover:text-bpc-yellow">
            HTML & CSS foundations
          </h1>
          <p class="text-bpc-grey">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div class="flex items-center font-extrabold gap-4 mb-4 -ml-40 text-[15px]">
          <Image
            src="/blog-preview-card/image-avatar.webp"
            alt="image-avatar"
            width={32}
            height={32}
          />
          <p>Siddharth</p>
        </div>
      </div>
    </main>
  )
}

export default page
