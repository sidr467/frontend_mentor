import Image from "next/image"

const feedbacks = [
  {
    image: "/social-proof-section/image-colton.jpg",
    name: "Colton Smith ",
    status: "Verified Buyer",
    feedback:
      '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time.Excellent!"',
  },
  {
    image: "/social-proof-section/image-irene.jpg",
    name: "Irene Roberts",
    status: "Verified Buyer",
    feedback:
      '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
  },
  {
    image: "/social-proof-section/image-anne.jpg",
    name: " Anne Wallace",
    status: "Verified Buyer",
    feedback:
      '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
  },
]

const FeedbackCard = () => {
  return (
    <div className="w-full lg:col-span-2 px-8 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mt-12 ">
      {feedbacks.map((data, index) => (
        <div
          key={index}
          className="lg:max-w-[340px] lg:h-[240px] bg-sps-Very-Dark-Magenta rounded-lg px-8 py-8 grid grid-cols-1 gap-4 lg:first-of-type:mb-16 lg:even:mt-8 lg:last-of-type:mt-16"
        >
          <div className="flex gap-6 items-center">
            <Image
              src={data.image}
              width={40}
              height={40}
              alt={`Profile image of ${data.name}`}
              className="rounded-full"
            ></Image>
            <div>
              <h2 className="text-sps-White font-medium">{data.name}</h2>
              <p className="text-sps-Soft-Pink">{data.status}</p>
            </div>
          </div>
          <div>
            <p className="text-sps-Light-Grayish-Magenta">{data.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeedbackCard
