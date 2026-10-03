import { Link, useParams } from 'react-router'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import {
ArrowLeft,
Check,
Clock,
Flame,
Leaf,
Plus,
ShieldAlert,
ShoppingBag,
Star,
Users,
Zap,
} from 'lucide-react'
import { useDispatch } from 'react-redux'
import { dishes } from '../../data/dishes'
import { add } from '../../store/store'


export function FoodCardDetails() {
const { id } = useParams()
const dispatch = useDispatch()

const dish = dishes.find(item => String(item.id) === String(id))

if (!dish) {
return ( <section className="grid min-h-[65vh] place-items-center bg-[#faf8f3] px-4"> <div className="text-center"> <span className="text-6xl">🍽️</span> <h1 className="mt-5 text-2xl font-bold text-gray-900">
Dish not found </h1> <p className="mt-2 text-gray-500">
This dish may have been removed from our menu. </p> <Link
         to="/menu"
         className="mt-6 inline-flex rounded-full bg-[#174c37] px-6 py-3 font-semibold text-white"
       >
Back to Menu </Link> </div> </section>
)
}

const ingredients = dish.ingredients ?? []
const allergens = dish.allergens ?? []
const dietary = dish.dietary ?? []
const nutrition = dish.nutrition ?? {}

return ( <section className="min-h-screen bg-[#faf8f3] px-4 py-8 md:px-8 md:py-12"> <Helmet> <title>{dish.name} | Shopnix</title> <meta name="description" content={dish.desc} /> </Helmet>

  <div className="mx-auto max-w-6xl">
    <Link
      to="/menu"
      className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-[#174c37]"
    >
      <ArrowLeft size={17} />
      Back to Menu
    </Link>

    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative"
      >
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
          <img
            src={dish.img}
            alt={dish.name}
            className="h-[320px] w-full object-cover sm:h-[440px]"
          />
        </div>

        {dish.tag && (
          <span className="absolute left-5 top-5 rounded-full bg-red-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
            {dish.tag}
          </span>
        )}

        <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-lg">
          <Star
            size={18}
            fill="currentColor"
            className="text-amber-400"
          />
          <div>
            <p className="font-bold text-gray-900">
              {dish.rating ?? '4.8'}
            </p>
            <p className="text-xs text-gray-500">
              {dish.reviews ?? 0} reviews
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="py-2"
      >
        <span className="inline-flex rounded-full bg-[#e5eee7] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#174c37]">
          {dish.cat}
        </span>

        <h1 className="mt-5 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
          {dish.name}
        </h1>

        <p className="mt-5 text-base leading-7 text-gray-600">
          {dish.desc}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {dish.prepTime && (
            <InfoBadge icon={<Clock size={16} />}>
              {dish.prepTime}
            </InfoBadge>
          )}

          {dish.calories != null && (
            <InfoBadge icon={<Zap size={16} />}>
              {dish.calories} kcal
            </InfoBadge>
          )}

          {dish.servings != null && (
            <InfoBadge icon={<Users size={16} />}>
              {dish.servings} serving{Number(dish.servings) === 1 ? '' : 's'}
            </InfoBadge>
          )}

          {dish.spicy && (
            <InfoBadge icon={<Flame size={16} />}>
              Spicy
            </InfoBadge>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Price per serving</p>
            <p className="mt-1 text-3xl font-extrabold text-[#174c37]">
              ${Number(dish.price).toFixed(2)}
            </p>
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => dispatch(add(dish))}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#174c37] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#103b2a]"
          >
            <ShoppingBag size={18} />
            Add to Cart
            <Plus size={17} />
          </motion.button>
        </div>

        {dish.available === false && (
          <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-medium text-red-600">
            This dish is currently unavailable.
          </p>
        )}

        {dietary.length > 0 && (
          <div className="mt-6">
            <h2 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
              <Leaf size={18} className="text-green-600" />
              Dietary Information
            </h2>

            <div className="flex flex-wrap gap-2">
              {dietary.map(item => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700"
                >
                  <Check size={13} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-gray-900">
          Ingredients
        </h2>

        {ingredients.length > 0 ? (
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {ingredients.map(item => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <Check
                  size={17}
                  className="mt-0.5 shrink-0 text-green-600"
                />
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-gray-500">
            Ingredient information is not available yet.
          </p>
        )}
      </div>

      <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
          <ShieldAlert size={20} className="text-amber-500" />
          Allergen Information
        </h2>

        {allergens.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {allergens.map(item => (
              <span
                key={item}
                className="rounded-full bg-amber-50 px-3 py-2 text-sm text-amber-800"
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm leading-6 text-gray-500">
            Allergen information has not been provided. Please contact
            the restaurant if you have food allergies.
          </p>
        )}
      </div>
    </div>

    <div className="mt-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold text-gray-900">
        Nutritional Information
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        {dish.calories != null
          ? `Calories: ${dish.calories} kcal`
          : 'Calorie information is not available.'}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <NutritionItem
          label="Protein"
          value={nutrition.protein}
        />
        <NutritionItem
          label="Carbohydrates"
          value={nutrition.carbs}
        />
        <NutritionItem
          label="Fat"
          value={nutrition.fat}
        />
      </div>

      <p className="mt-4 text-xs leading-5 text-gray-400">
        Nutrition values depend on the accuracy of your dish data.
        Verify them before publishing as dietary guidance.
      </p>
    </div>
  </div>
</section>

)
}

function InfoBadge({ icon, children }) {
return ( <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600">
{icon}
{children} </span>
)
}

function NutritionItem({ label, value }) {
return ( <div className="rounded-2xl bg-[#faf8f3] p-4"> <p className="text-sm text-gray-500">{label}</p> <p className="mt-2 text-xl font-bold text-[#174c37]">
{value != null ? `${value} g` : 'Not available'} </p> </div>
)
}
