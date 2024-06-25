import Cards from "./Cards"
import { challenges } from "./Challanges"

function CardSection() {
  return (
    <div className="p-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto xl:gap-12 mx-auto">
      {challenges.map((challenge) => (
        <Cards
          key={challenge}
          title={challenge.title}
          link={challenge.link}
          difficulty={challenge.difficulty}
          difficultyText={challenge.difficultyText}
          image={challenge.image}
        />
      ))}
    </div>
  )
}

export default CardSection
