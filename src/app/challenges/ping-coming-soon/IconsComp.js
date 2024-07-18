import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa"

const Icons = [
  {
    icon: <FaFacebookF className="fill-pcs-blue hover:fill-white" size={18} />,
  },
  {
    icon: <FaTwitter className="fill-pcs-blue hover:fill-white" size={18} />,
  },
  {
    icon: <FaInstagram className="fill-pcs-blue hover:fill-white" size={18} />,
  },
]

const IconsComp = () => {
  return (
    <div className="flex gap-4">
      {Icons.map((data, index) => (
        <div
          key={index}
          className="rounded-full ring-1 p-2 hover:bg-pcs-blue ring-opacity-40 ring-pcs-gray flex items-center justify-center"
        >
          <button>{data.icon}</button>
        </div>
      ))}
    </div>
  )
}

export default IconsComp
