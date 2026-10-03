import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Plus, Star, Clock, Flame, ArrowUpRight } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { add } from '../../store/store'


export function FoodCard({ dish }) {
  const dispatch = useDispatch()

  return (
    <motion.article
      whileHover={{ y: -7 }}
      transition={{ duration: 0.25 }}
      className="group h-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      {' '}
      <div className="relative overflow-hidden">
        <Link
          to={`/menu/${dish.id}`}
          aria-label={`View details for ${dish.name}`}
          className="block"
        >
          {' '}
          <img
            src={dish.img}
            alt={dish.name}
            loading="lazy"
            className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />{' '}
        </Link>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {dish.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
            {dish.tag}
          </span>
        )}

        {dish.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-gray-900 shadow-md">
            Featured
          </span>
        )}

        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[#174c37] shadow">
          {dish.cat}
        </span>
      </div>
      <div className="flex flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <Link to={`/menu/${dish.id}`} className="min-w-0">
            <h3 className="line-clamp-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-[#174c37]">
              {dish.name}
            </h3>
          </Link>

          <div className="flex shrink-0 items-center gap-1 text-sm">
            <Star size={15} fill="currentColor" className="text-amber-400" />
            <span className="font-semibold text-gray-700">
              {dish.rating ?? '4.8'}
            </span>
          </div>
        </div>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {dish.desc}
        </p>

        <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
          {dish.prepTime && (
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {dish.prepTime}
            </span>
          )}

          {dish.spicy && (
            <span className="flex items-center gap-1">
              <Flame size={14} className="text-orange-500" />
              Spicy
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <span className="text-xs text-gray-400">Price</span>
            <p className="text-xl font-extrabold text-[#174c37]">
              ${Number(dish.price).toFixed(2)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/menu/${dish.id}`}
              aria-label={`See ${dish.name} details`}
              className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 text-gray-600 transition hover:border-[#174c37] hover:bg-[#174c37] hover:text-white"
            >
              <ArrowUpRight size={18} />
            </Link>

            <motion.button
              type="button"
              aria-label={`Add ${dish.name} to cart`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(add(dish))}
              className="grid h-10 w-10 place-items-center rounded-full bg-yellow-500 text-gray-900 shadow-sm transition hover:bg-yellow-600 "
            >
              <Plus size={19} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
