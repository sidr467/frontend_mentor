import Image from "next/image"

const ratings = [1, 2, 3, 4, 5]

const RatingCard = () => {
  return (
    <div className="max-w-[350px] bg-iac-DarkBlue rounded-lg grid gap-4 p-4">
      <div className="bg-iac-LightGrey w-10 h-10 p-3 rounded-full bg-opacity-10">
        <Image
          src="/interactive-rating-component/icon-star.svg"
          alt="star-svg"
          width={15}
          height={15}
        ></Image>
      </div>
      <h1 className="text-iac-White text-xl font-bold">How did we do?</h1>
      <p className="text-iac-LightGrey font-normal">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="text-iac-White text-sm flex justify-between">
        {ratings.map((raitng, index) => (
          <button
            key={index}
            className=" bg-iac-LightGrey hover:bg-iac-Orange active:bg-iac-White active:text-iac-VeryDarkBlue w-10 h-10 text-center rounded-full bg-opacity-10"
          >
            {raitng}
          </button>
        ))}
      </div>
      <button className="bg-iac-Orange rounded-full py-2 mx-2 uppercase text-sm text-iac-VeryDarkBlue tracking-widest font-bold">Submit</button>
    </div>
  )
}

export default RatingCard
