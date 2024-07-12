import Image from "next/image"

const ratings = [
  {
    star: 5,
    rating: "Rated 5 Stars in Reviews",
  },
  {
    star: 5,
    rating: "Rated 5 Stars in Report Guru",
  },
  {
    star: 5,
    rating: `Rated 5 Stars in BestTech`,
  },
]

const RatingCard = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      {ratings.map((data, index) => (
        <div
          key={index}
          className="w-full flex gap-4 flex-col justify-center  items-center sm:flex-row bg-sps-Light-Grayish-Magenta px-6 py-3"
        >
          <div className="flex gap-2">
            {[...Array(data.star)].map((_, index) => (
              <div key={index} className="">
                <Image
                  src="/social-proof-section/icon-star.svg"
                  width={20}
                  height={20}
                  alt="Star Icon"
                  className=""
                ></Image>
              </div>
            ))}
          </div>
          <span className="text-sps-Very-Dark-Magenta font-bold">
            {data.rating}
          </span>
        </div>
      ))}
    </div>
  )
}

export default RatingCard
