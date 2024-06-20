import Image from "next/image"

const page = () => {
  return (
    <main className=" flex items-center justify-center h-screen bg-bpc-yellow font-Figtree">
      <div className="w-[340px] h-[522px] bg-bpc-pure-white border-bpc-black rounded-2xl border-[1px] flex flex-col items-center gap-6 shadow-custom">
        <div class="mt-6">
          <Image
            src="/blog-preview-card/illustration-article.svg"
            alt="blog-img"
            width={300}
            height={300}
          />
        </div>
        <div class="text-container">
          <span class="category w">Category</span>
          <p class="date">Published 21 Dec 2024</p>
          <h1 class="heading">HTML & CSS foundations</h1>
          <p class="text">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div class="profile">
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
