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
    <div className="flex flex-col gap-4 px-4 ">
      {ratings.map((data, index) => (
        <div
          key={index}
          className="w-full lg:w-[500px] rounded-lg flex gap-4 lg:gap-12 flex-col justify-center lg:justify-start  items-center sm:flex-row bg-sps-Light-Grayish-Magenta px-6 py-3 lg:first-of-type:-ml-8 lg:last-of-type:ml-8"
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
          <div>
            <span className="text-sps-Very-Dark-Magenta font-bold">
              {data.rating}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RatingCard
