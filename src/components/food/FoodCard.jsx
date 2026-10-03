import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  Plus,
  Star,
  Clock,
  Flame,
  ArrowUpRight,
  Heart,
  Check
} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { add, toggleWishlist } from '../../store/store'

export function FoodCard({ dish }) {
  const dispatch = useDispatch()

  const wishlistItems = useSelector(state => state.wishlist.items)

  const isWishlisted = wishlistItems.some(item => item.id === dish.id)

  const cartItems = useSelector(state => state.cart.items)

  const isInCart = cartItems.some(item => item.id === dish.id)

  const handleWishlist = () => {
    dispatch(toggleWishlist(dish))
  }

  const handleAddToCart = () => {
    dispatch(add(dish))
  }

  return (
    <motion.article
      whileHover={{ y: -7 }}
      transition={{ duration: 0.25 }}
      className="group h-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      {/* Food Image */}{' '}
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

        {/* Image Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {/* Food Tag */}
        {dish.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
            {dish.tag}
          </span>
        )}

        {/* Featured Badge */}
        {dish.featured && (
          <span className="absolute right-14 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-gray-900 shadow-md">
            Featured
          </span>
        )}

        {/* Wishlist Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
          onClick={handleWishlist}
          aria-label={
            isWishlisted
              ? `Remove ${dish.name} from wishlist`
              : `Add ${dish.name} to wishlist`
          }
          aria-pressed={isWishlisted}
          className={`absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full shadow-md backdrop-blur-md transition-colors duration-300 ${
            isWishlisted
              ? 'bg-red-500 text-white'
              : 'bg-white/95 text-gray-700 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart size={19} className={isWishlisted ? 'fill-current' : ''} />
        </motion.button>

        {/* Category */}
        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[#174c37] shadow">
          {dish.cat}
        </span>
      </div>
      {/* Food Information */}
      <div className="flex h-[calc(100%-13rem)] flex-col p-4">
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

        {/* Description */}
        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {dish.desc}
        </p>

        {/* Preparation Time / Spicy */}
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

        {/* Price and Actions */}
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 mt-4">
          <div>
            <span className="text-xs text-gray-400">Price</span>

            <p className="text-xl font-extrabold text-[#174c37]">
              ${Number(dish.price).toFixed(2)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Details */}
            <Link
              to={`/menu/${dish.id}`}
              aria-label={`See ${dish.name} details`}
              className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 text-gray-600 transition hover:border-[#174c37] hover:bg-[#174c37] hover:text-white"
            >
              <ArrowUpRight size={18} />
            </Link>

            {/* Add to Cart */}
            <motion.button
              type="button"
              aria-label={`Add ${dish.name} to cart`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              className={`grid h-10 w-10 place-items-center rounded-full shadow-sm transition ${
                isInCart
                  ? 'bg-[#174c37] text-white hover:bg-[#103a2a]'
                  : 'bg-yellow-500 text-gray-900 hover:bg-yellow-600'
              }`}
            >
              {isInCart ? <Check size={19} /> : <Plus size={19} />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
