import Image from "next/image"
import { Outfit, Young_Serif } from "next/font/google"

const outfit = Outfit({ subsets: ["latin"], weight: "400" })
const youngSerif = Young_Serif({ subsets: ["latin"], weight: "400" })

const page = () => {
  return (
    <main
      className={`${outfit.className} w-full max-w-[1440px] p-4 my-8 mx-auto`}
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
          <p className="mt-6 text-recipe-WengeBrown ">
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
              <li>
                <p className="text-recipe-WengeBrown">
                  <strong className="text-recipe-WengeBrown">Total</strong>:
                  Approximately 10 minutes
                </p>
              </li>
              <li>
                <p className="text-recipe-WengeBrown">
                  <strong className="text-recipe-WengeBrown">
                    Preparation
                  </strong>
                  : 5 minutes
                </p>
              </li>
              <li>
                <p className="text-recipe-WengeBrown">
                  <strong className="text-recipe-WengeBrown">Cooking</strong>: 5
                  minutes
                </p>
              </li>
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
            <li>
              <p className="text-recipe-WengeBrown">2-3 large eggs</p>
            </li>
            <li>
              <p className="text-recipe-WengeBrown">Salt to taste</p>
            </li>
            <li>
              <p className="text-recipe-WengeBrown">Pepper to taste</p>
            </li>
            <li>
              <p className="text-recipe-WengeBrown">
                1 tablespoon of butter or oil
              </p>
            </li>
            <li>
              <p className="text-recipe-WengeBrown">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </p>
            </li>
          </ul>
        </div>
        <div className="instruction-container container mx-auto mt-10 pb-12 border-b-[1px] border-recipe-LightGrey">
          <h2
            className={`${youngSerif.className} text-recipe-Nutmeg font-youngSerif text-2xl font-bold`}
          >
            Instructions
          </h2>
          <ol className="list-decimal mt-6 ml-8">
            <li>
              <p className="text-recipe-WengeBrown">
                <strong className="text-recipe-WengeBrown">
                  Beat the eggs
                </strong>
                : In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </p>
            </li>
            <li>
              <p className="text-recipe-WengeBrown">
                <strong className="text-recipe-WengeBrown">Heat the pan</strong>
                : Place a non-stick frying pan over medium heat and add butter
                or oil.
              </p>
            </li>
            <li>
              <p className="text-recipe-WengeBrown">
                <strong className="text-recipe-WengeBrown">
                  Cook the omelette
                </strong>
                : Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </p>
            </li>
            <li>
              <p className="text-recipe-WengeBrown">
                <strong className="text-recipe-WengeBrown">
                  Add fillings (optional)
                </strong>
                : When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </p>
            </li>
            <li>
              <p className="text-recipe-WengeBrown">
                <strong className="text-recipe-WengeBrown">
                  Fold and serve
                </strong>
                : As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </p>
            </li>
            <li>
              <p className="text-recipe-WengeBrown">
                <strong className="text-recipe-WengeBrown">Enjoy</strong>: Serve
                hot, with additional salt and pepper if needed.
              </p>
            </li>
          </ol>
        </div>
        <div className="nutrition-container container mx-auto mt-10">
          <h2
            className={`${youngSerif.className} text-recipe-Nutmeg font-youngSerif text-2xl font-bold`}
          >
            Nutrition
          </h2>
          <div className="details mt-6">
            <p className="text-recipe-WengeBrown">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table className="table-auto mt-6 ml-8 py-2 px-4 border-b-[1px] border-recipe-LightGrey">
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b-[1px] border-recipe-LightGrey text-recipe-WengeBrown">
                    Calories
                  </td>
                  <th className="py-2 px-4 border-b-[1px] border-recipe-LightGrey text-recipe-Nutmeg">
                    277kcal
                  </th>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b-[1px] border-recipe-LightGrey text-recipe-WengeBrown">
                    Carbs
                  </td>
                  <th className="py-2 px-4 border-b-[1px] border-recipe-LightGrey text-recipe-Nutmeg">
                    0g
                  </th>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b-[1px] border-recipe-LightGrey text-recipe-WengeBrown">
                    Protein
                  </td>
                  <th className="py-2 px-4 border-b-[1px] border-recipe-LightGrey text-recipe-Nutmeg">
                    20g
                  </th>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b-[1px] border-recipe-LightGrey text-recipe-WengeBrown">
                    Fat
                  </td>
                  <th className="py-2 px-4 border-b-[1px] border-recipe-LightGrey text-recipe-Nutmeg">
                    22g
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
