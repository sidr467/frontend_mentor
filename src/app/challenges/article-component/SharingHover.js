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

const SharingHover = () => {
  return (
    <div className="flex justify-between items-center px-10 bg-acp-Very-Dark-Grayish-Blue">
      <div className="flex items-center gap-4">
        <p className="uppercase text-acp-Grayish-Blue tracking-widest">Share</p>
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
      <div className="w-fit rounded-full bg-acp-Light-Grayish-Blue p-2">
        <Image
          src="/article-component/icon-share.svg"
          width={15}
          height={15}
          alt="Icon Share"
        ></Image>
      </div>
    </div>
  )
}

export default SharingHover
