import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa"

const Icons = [
  {
    icon: (
      <FaFacebookF className="fill-white group-hover:fill-hlp-SoftMagenta md:w-5 md:h-5" size={15}  />
    ),
  },
  {
    icon: (
      <FaTwitter className="fill-white group-hover:fill-hlp-SoftMagenta md:w-5 md:h-5" size={15} />
    ),
  },
  {
    icon: (
      <FaInstagram className="fill-white group-hover:fill-hlp-SoftMagenta md:w-5 md:h-5" size={15} />
    ),
  },
]

const IconsComp = () => {
  return (
    <div className="flex gap-4">
      {Icons.map((data, index) => (
        <button
          key={index}
          className="rounded-full ring-1 p-2 group hover:ring-hlp-SoftMagenta ring-white flex items-center justify-center"
        >
          {data.icon}
        </button>
      ))}
    </div>
  )
}

export default IconsComp
