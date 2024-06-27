import Image from "next/image"
import { Outfit, Young_Serif } from "next/font/google"

const outfit = Outfit({ subsets: ["latin"], weight: "400" })
const youngSerif = Young_Serif({ subsets: ["latin"], weight: "400" })

//Data

const DartPreparation = [
  { strong: "Total", time: "Approximately 10 minutes" },
  { strong: "Preparation", time: "5 minutes" },
  { strong: "Cooking", time: "5 minutes" },
]

const Ingredients = [
  "2-3 large eggs",
  "Salt to taste",
  "Pepper to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
]

const Instructions = [
  {
    strong: "Beat the eggs",
    descriprtion:
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    strong: "Heat the pan",
    descriprtion:
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    strong: "Cook the omelette",
    descriprtion:
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    strong: "Add fillings (optional):",
    descriprtion:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    strong: "Fold and serve",
    descriprtion:
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    strong: "Enjoy",
    descriprtion: "Serve hot, with additional salt and pepper if needed.",
  },
]

const Nutrition = [
  {
    name: "Calories",
    amount: "277kcal",
  },
  {
    name: "Carbs",
    amount: "0g",
  },
  {
    name: "Protein",
    amount: "20g",
  },
  {
    name: "Fat",
    amount: "22g",
  },
]

const page = () => {
  return (
    <main
      className={`${outfit.className} w-full max-w-[1440px] p-4 my-8 mx-auto md:px-8 md:py-4 lg:px-16 lg:py-4`}
    >
      <div className=" flex flex-col items-center justify-center">
        <div className="container mx-auto p-4">
          <Image
            src="/recipe-page/image-omelette.jpeg"
            alt="Delicious omelette on a plate"
            width="1000"
            height="1000"
            className="rounded-[2rem] w-full max-w-[1000px] h-auto object-center my-0 mx-auto"
          />
          <h1
            className={`${youngSerif.className} font-youngSerif text-recipe-DarkCharcoal text-4xl mt-10 font-bold`}
          >
            Simple Omelette Recipe
          </h1>
          <p className="mt-6  ml-3 text-recipe-WengeBrown ">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div className="bg-pink-100 container mx-auto p-8 rounded-xl mt-2">
          <h2
            className={`${youngSerif.className}text-xl font-bold font-youngSerif text-rose-800`}
          >
            Preparation time
          </h2>
          <div className=" ml-8 mt-6">
            <ul className=" list-disc">
              {DartPreparation.map((data) => (
                <li key={data}>
                  <p className="text-recipe-WengeBrown ml-3">
                    <strong className="text-recipe-WengeBrown">
                      {data.strong}
                    </strong>
                    :{data.time}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ingredients-container container mx-auto mt-10 pb-12 border-b-[1px] border-recipe-LightGrey">
          <h2
            className={`${youngSerif.className} text-recipe-Nutmeg font-youngSerif text-2xl font-bold`}
          >
            Ingredients
          </h2>
          <ul className=" list-disc ml-8 mt-6">
            {Ingredients.map((data) => (
              <li key={data}>
                <p className="text-recipe-WengeBrown ml-3">{data}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="instruction-container container mx-auto mt-10 pb-12 border-b-[1px] border-recipe-LightGrey">
          <h2
            className={`${youngSerif.className} text-recipe-Nutmeg font-youngSerif text-2xl font-bold`}
          >
            Instructions
          </h2>
          <ol className="list-decimal mt-6 ml-8">
            {Instructions.map((data) => (
              <li key={data}>
                <p className="text-recipe-WengeBrown ml-3">
                  <strong className="text-recipe-WengeBrown">
                    {data.strong}
                  </strong>
                  :{data.descriprtion}{" "}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className="nutrition-container container mx-auto mt-10">
          <h2
            className={`${youngSerif.className} text-recipe-Nutmeg font-youngSerif text-2xl font-bold`}
          >
            Nutrition
          </h2>
          <div className="details mt-6">
            <p className="text-recipe-WengeBrown ml-3">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table className="table-auto mt-6 ml-8 py-2 px-4 border-b-[1px] border-recipe-LightGrey md:px-20 md:py-4 lg:px-[10rem] lg:py-4">
              <tbody>
                {Nutrition.map((data) => (
                  <tr key={data}>
                    <td className="py-2 px-4 border-b-[1px] border-recipe-LightGrey text-recipe-WengeBrown md:px-20 md:py-4 lg:px-[10rem] lg:py-4">
                      {data.name}
                    </td>
                    <th className="py-2 px-4 border-b-[1px] border-recipe-LightGrey text-recipe-Nutmeg md:px-20 md:py-4 lg:px-[10rem] lg:py-4">
                      {data.amount}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
