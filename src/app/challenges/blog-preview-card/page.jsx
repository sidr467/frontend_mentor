import Image from "next/image"

const page = () => {
  return (
    <main class="container">
      <div class="image-container">
        <Image
          src="/blog-preview-card/illustration-article.svg"
          alt="blog-img"
        />
      </div>
      <div class="text-container">
        <span class="category">Category</span>
        <p class="date">Published 21 Dec 2024</p>
        <h1 class="heading">HTML & CSS foundations</h1>
        <p class="text">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div class="profile">
        <Image src="/blog-preview-card/image-avatar.webp" alt="image-avatar" />
        <p>Siddharth</p>
      </div>
    </main>
  )
}

export default page
