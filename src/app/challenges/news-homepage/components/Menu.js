import Link from "next/link"
import Image from "next/image"

const Menu = ({ onClick }) => {
  return (
    <div className="fixed inset-0 bg-nh-VeryDarkblue bg-opacity-30">
      <div className="right-0 min-h-screen flex items-start flex-col gap-20 absolute top-0 bg-white w-60">
        <div className="place-self-end justify-start p-6">
          <button onClick={onClick}>
            <Image
              src="/news-homepage/icon-menu-close.svg"
              width={30}
              height={30}
              alt="Close Icon"
            ></Image>
          </button>
        </div>
        <div className="flex flex-col gap-6 px-8 text-nh-VeryDarkblue text-sm">
          <Link href="" className="hover:text-nh-SoftRed">
            Home
          </Link>
          <Link href="" className="hover:text-nh-SoftRed">
            New
          </Link>
          <Link href="" className="hover:text-nh-SoftRed">
            Popular
          </Link>
          <Link href="" className="hover:text-nh-SoftRed">
            Trending
          </Link>
          <Link href="" className="hover:text-nh-SoftRed">
            Categories
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
