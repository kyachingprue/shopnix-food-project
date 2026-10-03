import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Heart,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Trash2,
  UtensilsCrossed
} from 'lucide-react'
import {
  add,
  removeFromWishlist,
  clearWishlist
} from '../../store/store'

const Wishlist = () => {
  const dispatch = useDispatch()

  const items = useSelector(state => state.wishlist.items)
  const cartItems = useSelector(state => state.cart.items)

  const totalValue = items.reduce(
    (total, item) => total + Number(item.price || 0),
    0
  )

  const formatPrice = price =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Number(price || 0))

  const isInCart = id => cartItems.some(item => item.id === id)

  const handleAddToCart = item => {
    dispatch(add(item))
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf5] pb-16 text-gray-900">
      {/* Hero */}{' '}
      <section className="relative overflow-hidden bg-[#171717]">
        {' '}
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />{' '}
        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="grid items-center gap-8 md:grid-cols-[1fr_auto]"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-300 sm:text-sm">
                <Heart size={15} className="fill-orange-400" />
                Your personal collection
              </span>

              <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Made with love,
                <span className="block text-orange-400">saved for later.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                All the delicious dishes you love, together in one place. Save
                your favorites and enjoy them whenever the craving strikes.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-400"
                >
                  Explore Menu
                  <ArrowRight size={17} />
                </Link>

                {items.length > 0 && (
                  <button
                    type="button"
                    onClick={() => dispatch(clearWishlist())}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:border-red-400/50 hover:text-red-300"
                  >
                    <Trash2 size={16} />
                    Clear Wishlist
                  </button>
                )}
              </div>
            </div>

            <div className="hidden h-36 w-36 items-center justify-center rounded-full border border-orange-400/20 bg-orange-400/10 md:flex lg:h-44 lg:w-44">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-orange-400/10 lg:h-36 lg:w-36">
                <Heart
                  size={64}
                  strokeWidth={1.3}
                  className="fill-orange-400/15 text-orange-400 lg:h-20 lg:w-20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Wishlist content */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
              <Sparkles size={15} />
              Saved favorites
            </p>

            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              My Wishlist
              <span className="ml-3 inline-flex min-w-8 items-center justify-center rounded-full bg-orange-100 px-2.5 py-1 align-middle font-sans text-sm font-bold text-orange-700">
                {items.length}
              </span>
            </h2>
          </div>

          {items.length > 0 && (
            <p className="text-sm text-gray-500">
              Total saved value:{' '}
              <span className="font-bold text-gray-900">
                {formatPrice(totalValue)}
              </span>
            </p>
          )}
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-orange-100 bg-white px-5 py-14 text-center shadow-sm sm:py-20"
          >
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-50">
              <Heart size={43} strokeWidth={1.5} className="text-orange-400" />
            </div>

            <h3 className="mt-6 font-serif text-2xl font-bold sm:text-3xl">
              Your wishlist is hungry!
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
              You haven't saved any dishes yet. Explore our menu and tap the
              heart on anything that makes your mouth water.
            </p>

            <Link
              to="/menu"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/15 transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              <UtensilsCrossed size={17} />
              Discover Delicious Food
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Food cards */}
            <motion.div
              layout
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {items.map(item => (
                  <motion.article
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92, y: 12 }}
                    transition={{ duration: 0.25 }}
                    className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_8px_28px_rgba(124,45,18,0.04)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_16px_38px_rgba(124,45,18,0.10)]"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-orange-50">
                      {item.img ? (
                        <img
                          src={item.img}
                          alt={item.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-orange-300">
                          <UtensilsCrossed size={48} />
                        </div>
                      )}

                      <div className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-bold text-gray-800 shadow-sm backdrop-blur">
                        {item.cat || 'Favorite'}
                      </div>

                      <button
                        type="button"
                        onClick={() => dispatch(removeFromWishlist(item.id))}
                        aria-label={`Remove ${item.name} from wishlist`}
                        title="Remove from wishlist"
                        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-red-500 shadow-md transition hover:scale-110 hover:bg-red-500 hover:text-white"
                      >
                        <Heart size={19} className="fill-current" />
                      </button>

                      {isInCart(item.id) && (
                        <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-green-600 px-3 py-1.5 text-xs font-bold text-white shadow-md">
                          <Check size={14} />
                          In your cart
                        </div>
                      )}
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="line-clamp-1 font-serif text-lg font-bold text-gray-900">
                          {item.name}
                        </h3>

                        <span className="shrink-0 text-base font-extrabold text-orange-600">
                          {formatPrice(item.price)}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-1.5 text-sm text-gray-500">
                        <Star
                          size={15}
                          className="fill-amber-400 text-amber-400"
                        />
                        <span className="font-semibold text-gray-800">
                          {Number(item.rating ?? 4.8).toFixed(1)}
                        </span>
                        <span>·</span>
                        <span>Customer favorite</span>
                      </div>

                      {item.description && (
                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                          {item.description}
                        </p>
                      )}

                      <div className="mt-5 flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(item)}
                          className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-3 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                        >
                          <ShoppingCart size={17} />
                          {isInCart(item.id) ? 'Add Another' : 'Add to Cart'}
                        </button>

                        <button
                          type="button"
                          onClick={() => dispatch(removeFromWishlist(item.id))}
                          aria-label={`Delete ${item.name}`}
                          title="Remove favorite"
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Bottom actions */}
            <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-orange-100 bg-white p-5 sm:flex-row sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <ShoppingBag size={21} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">
                    Ready for something delicious?
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Your favorite meals are just a click away.
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-orange-300 hover:text-orange-600"
                >
                  <ArrowLeft size={16} />
                  Continue Browsing
                </Link>

                <Link
                  to="/cart"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
                >
                  View Cart
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  )
}

export default Wishlist
