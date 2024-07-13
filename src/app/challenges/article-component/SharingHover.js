import Image from "next/image"

const Socials = [
  {
    name: "Facebook",
    path: "/article-component/icon-facebook.svg",
  },
  {
    name: "Twitter",
    path: "/article-component/icon-twitter.svg",
  },
  {
    name: "Pinterest",
    path: "/article-component/icon-pinterest.svg",
  },
]

const SharingHover = ({ handleShow }) => {
  return (
    <>
      <div className="lg:hidden w-full h-full absolute top-0 rounded-b-2xl flex justify-between items-center px-10 bg-acp-Very-Dark-Grayish-Blue">
        <div className="flex items-center gap-4">
          <p className="uppercase text-acp-Grayish-Blue tracking-[4px] font-medium">
            Share
          </p>
          {Socials.map((image, index) => (
            <Image
              key={index}
              src={image.path}
              width={20}
              height={20}
              alt={`Icon of ${image.name}`}
            ></Image>
          ))}
        </div>
        <button
          className="w-fit rounded-full bg-acp-Desaturated-Dark-Blue p-2"
          onClick={handleShow}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
            <path
              fill="hsl(210, 46%, 95%)"
              d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
            />
          </svg>
        </button>
      </div>
      <div className="w-72 hidden z-10 absolute bottom-14 left-60 lg:block bg-acp-Very-Dark-Grayish-Blue px-8 py-4 rounded-lg">
        <div className="flex items-center justify-center gap-4">
          <p className="uppercase text-acp-Grayish-Blue tracking-[4px] font-medium">
            Share
          </p>
          {Socials.map((image, index) => (
            <Image
              key={index}
              src={image.path}
              width={20}
              height={20}
              alt={`Icon of ${image.name}`}
            ></Image>
          ))}
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute top-4 left-[110px] w-0 h-0 border-t-[14px] border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent border-t-acp-Very-Dark-Grayish-Blue "></div>
        </div>
      </div>
    </>
  )
}

export default SharingHover
