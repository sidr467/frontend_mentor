import Image from "next/image"

const page = () => {
  return (
    <main>
      <div class="container mx-auto p-4">
        <Image
          src="/recipe-page/image-omelette.jpeg"
          alt="Delicious omelette on a plate"
          width="1000"
          height="1000"
        />
        <h1 class="title main-heading text-4xl mt-10 font-bold">
          Simple Omelette Recipe
        </h1>
        <p class="intro mt-6">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
      <div class="prep-container bg-pink-100 container mx-auto p-8 rounded-xl mt-2">
        <h2 class="sub_heading text-xl font-bold text-rose-800">
          Preparation time
        </h2>
        <div class="prep-list ml-8 mt-6">
          <ul class="list-disc">
            <li>
              <p>
                <strong>Total</strong>: Approximately 10 minutes
              </p>
            </li>
            <li>
              <p>
                <strong>Preparation</strong>: 5 minutes
              </p>
            </li>
            <li>
              <p>
                <strong>Cooking</strong>: 5 minutes
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="ingredients-container container mx-auto mt-10 hr">
        <h2 class="main-heading text-2xl font-bold">Ingredients</h2>
        <ul class="list-disc ml-8 mt-6">
          <li>
            <p>2-3 large eggs</p>
          </li>
          <li>
            <p>Salt to taste</p>
          </li>
          <li>
            <p>Pepper to taste</p>
          </li>
          <li>
            <p>1 tablespoon of butter or oil</p>
          </li>
          <li>
            <p>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </p>
          </li>
        </ul>
      </div>
      <div class="instruction-container container mx-auto mt-10 hr">
        <h2 class="main-heading text-2xl font-bold">Instructions</h2>
        <ol class="list-decimal mt-6 ml-8">
          <li>
            <p>
              <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a
              pinch of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </p>
          </li>
          <li>
            <p>
              <strong>Heat the pan</strong>: Place a non-stick frying pan over
              medium heat and add butter or oil.
            </p>
          </li>
          <li>
            <p>
              <strong>Cook the omelette</strong>: Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </p>
          </li>
          <li>
            <p>
              <strong>Add fillings (optional)</strong>: When the eggs begin to
              set at the edges but are still slightly runny in the middle,
              sprinkle your chosen fillings over one half of the omelette.
            </p>
          </li>
          <li>
            <p>
              <strong>Fold and serve</strong>: As the omelette continues to
              cook, carefully lift one edge and fold it over the fillings. Let
              it cook for another minute, then slide it onto a plate.
            </p>
          </li>
          <li>
            <p>
              <strong>Enjoy</strong>: Serve hot, with additional salt and pepper
              if needed.
            </p>
          </li>
        </ol>
      </div>
      <div class="nutrition-container container mx-auto mt-10">
        <h2 class="main-heading text-2xl font-bold">Nutrition</h2>
        <div class="details mt-6">
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table class="table-auto mt-6 ml-8">
            <tbody>
              <tr>
                <td>Calories</td>
                <th>277kcal</th>
              </tr>
              <tr>
                <td>Carbs</td>
                <th>0g</th>
              </tr>
              <tr>
                <td>Protein</td>
                <th>20g</th>
              </tr>
              <tr>
                <td>Fat</td>
                <th>22g</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default page
