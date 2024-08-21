import Link from "next/link"
import Image from "next/image"

const Menu = ({ onClick }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30">
        <div className="right-0 min-h-screen flex items-start flex-col gap-20 absolute top-0 bg-white w-60">
          <div className="place-self-end justify-start p-6">
            <button onClick={onClick}>
              <Image
                src="/news-homepage/icon-menu-close.svg"
                width={40}
                height={40}
                alt="Close Icon"
              ></Image>
            </button>
          </div>
          <div className="flex flex-col gap-6 px-8">
            <Link href="/">Home</Link>
            <Link href="/">New</Link>
            <Link href="/">Popular</Link>
            <Link href="/">Trending</Link>
            <Link href="/">Categories</Link>
          </div>
        </div>
    </div>
  )
}

export default Menu
