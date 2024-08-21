import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <section className="flex justify-between items-center ">
      <div>
        <Image
          src="/news-homepage/logo.svg"
          height={50}
          width={50}
          alt="Main Logo"
          className="md:w-16"
        ></Image>
      </div>
      <div className="md:hidden">
        <Image
          src="/news-homepage/icon-menu.svg"
          height={40}
          width={40}
          alt="Main Logo"
        ></Image>
      </div>
      <div className="hidden md:flex gap-12 text-sm text-nh-DarkGrayishBlue">
        <Link href="/">Home</Link>
        <Link href="/">New</Link>
        <Link href="/">Popular</Link>
        <Link href="/">Trending</Link>
        <Link href="/">Categories</Link>
      </div>
    </section>
  )
}

export default Header
