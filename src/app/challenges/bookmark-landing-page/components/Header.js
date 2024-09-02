import Image from "next/image"

const links = [
  {
    name: "Features",
  },
  {
    name: "Pricing",
  },
  {
    name: "Contact",
  },
  {
    name: "Login",
  },
]

const Header = () => {
  return (
    <header className="flex justify-between items-center p-8 sm:px-12 md:px-16 lg:px-20 xl:px-32">
      <div>
        <Image
          src="/bookmark-landing-page/logo-bookmark.svg"
          height={50}
          width={50}
          alt="Logo Bookmark"
          className="w-32 lg:w-40"
        ></Image>
      </div>
      <div className="md:hidden">
        <button>
          <Image
            src="/bookmark-landing-page/icon-hamburger.svg"
            height={20}
            width={20}
            alt="Hamburger Icon"
          ></Image>
        </button>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center justify-center md:gap-8 lg:gap-16">
          {links.map((link, index) => (
            <li
              key={index}
              className={`text-sm uppercase font-normal cursor-pointer tracking-widest ${
                link === links[3]
                  ? "bg-blp-Soft-Red py-3 px-10 text-white rounded-lg"
                  : " text-blp-Very-Dark-Blue"
              }`}
            >
              <a href="">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
