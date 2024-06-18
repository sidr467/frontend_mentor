import Cards from "./Cards"
import { challenges } from "./Challanges"

function CardSection() {
  return (
    <div className="p-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {challenges.map((challenge) => (
        <Cards
          key={challenge}
          title={challenge.title}
          link={challenge.link}
          difficulty={challenge.difficulty}
          image={challenge.image}
        />
      ))}
    </div>
  )
}

export default CardSection
