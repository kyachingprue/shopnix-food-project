import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  Plus,
  Check,
  Clock,
  Flame,
  Star,
  ArrowUpRight,
  ShoppingBag,
  Leaf,
  Heart
} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { add, toggleWishlist } from '../store/store'

export function DishCard({ d }) {
  const dispatch = useDispatch()
  const [added, setAdded] = useState(false)

  const wishlistItems = useSelector(state => state.wishlist?.items ?? [])

  const cartItems = useSelector(state => state.cart?.items ?? [])

  const isWishlisted = wishlistItems.some(item => item.id === d.id)

  const isInCart = cartItems.some(item => item.id === d.id)

  const unavailable = d.available === false

  const handleAddToCart = () => {
    if (unavailable) return

    dispatch(add(d))
    setAdded(true)

    setTimeout(() => setAdded(false), 1200)
  }

  const handleWishlist = () => {
    dispatch(toggleWishlist(d))
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-gray-100 bg-white shadow-[0_8px_30px_rgba(20,40,25,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(20,40,25,0.13)]"
    >
      {/* Food Image */}
      <div className="relative">
        <Link
          to={`/menu/${d.id}`}
          aria-label={`View ${d.name} details`}
          className="relative block h-52 overflow-hidden bg-[#f3f3ed] sm:h-56"
        >
          <img
            src={d.img}
            alt={d.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        </Link>

        {/* Category */}
        {d.cat && (
          <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#174c37] shadow-sm backdrop-blur-md">
            {d.cat}
          </span>
        )}

        {/* Wishlist Button */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          onClick={handleWishlist}
          aria-label={
            isWishlisted
              ? `Remove ${d.name} from wishlist`
              : `Add ${d.name} to wishlist`
          }
          aria-pressed={isWishlisted}
          className={`absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full shadow-lg backdrop-blur-md transition-colors duration-300 ${
            isWishlisted
              ? 'bg-red-500 text-white'
              : 'bg-white/95 text-gray-700 hover:bg-red-50 hover:text-red-500'
          }`}
        >
          <Heart
            size={19}
            fill={isWishlisted ? 'currentColor' : 'none'}
            strokeWidth={2}
          />
        </motion.button>

        {/* Food Tag */}
        {d.tag && (
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
            <Flame size={13} />
            {d.tag}
          </span>
        )}

        {/* Details Link */}
        <Link
          to={`/menu/${d.id}`}
          aria-label={`Explore ${d.name}`}
          className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/95 text-[#174c37] shadow-lg transition-all duration-300 hover:rotate-45 hover:bg-[#174c37] hover:text-white"
        >
          <ArrowUpRight size={19} />
        </Link>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <Link to={`/menu/${d.id}`} className="min-w-0 flex-1">
            <h3 className="line-clamp-1 font-serif text-xl font-bold text-gray-900 transition-colors group-hover:text-[#174c37]">
              {d.name}
            </h3>
          </Link>

          <div className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-sm font-bold text-gray-800">
            <Star size={14} fill="currentColor" className="text-amber-400" />
            {d.rating ?? '4.8'}
          </div>
        </div>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {d.desc ||
            'Freshly prepared with quality ingredients and delicious flavors.'}
        </p>

        {/* Food Information */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
          {d.prepTime && (
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-[#174c37]" />
              {d.prepTime}
            </span>
          )}

          {d.spicy && (
            <span className="inline-flex items-center gap-1.5">
              <Flame size={14} className="text-orange-500" />
              Spicy
            </span>
          )}

          {Array.isArray(d.dietary) && d.dietary.length > 0 && (
            <span className="inline-flex items-center gap-1.5">
              <Leaf size={14} className="text-green-600" />
              {d.dietary[0]}
            </span>
          )}
        </div>

        <div className="my-5 border-t border-dashed border-gray-200" />

        {/* Price and Cart */}
        <div className="mt-auto flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-gray-400">Price</p>
            <p className="mt-0.5 text-2xl font-extrabold tracking-tight text-[#174c37]">
              ${Number(d.price).toFixed(2)}
            </p>
          </div>

          <motion.button
            type="button"
            disabled={unavailable}
            aria-label={
              unavailable ? `${d.name} is unavailable` : `Add ${d.name} to cart`
            }
            whileHover={unavailable ? {} : { scale: 1.04 }}
            whileTap={unavailable ? {} : { scale: 0.94 }}
            onClick={handleAddToCart}
            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition-colors ${
              unavailable
                ? 'cursor-not-allowed bg-gray-200 text-gray-500'
                : added
                  ? 'bg-green-100 text-green-800'
                  : 'bg-[#174c37] text-white shadow-md shadow-green-900/10 hover:bg-[#103b2a]'
            }`}
          >
            {unavailable ? (
              'Unavailable'
            ) : added ? (
              <>
                <Check size={17} />
                Added
              </>
            ) : (
              <>
                <ShoppingBag size={16} />
                {isInCart ? 'Add More' : 'Add'}
                <Plus size={16} />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
