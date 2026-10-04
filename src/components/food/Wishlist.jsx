import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import toast, { Toaster } from 'react-hot-toast'
import {
  ArrowRight,
  Heart,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  UtensilsCrossed,
  Check,
  ArrowLeft
} from 'lucide-react'
import { add, removeFromWishlist, clearWishlist } from '../../store/store'

const Wishlist = () => {
  const dispatch = useDispatch()

  const items = useSelector(state => state.wishlist.items)
  const cartItems = useSelector(state => state.cart.items)

  const formatPrice = price =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Number(price || 0))

  const isInCart = id => cartItems.some(item => item.id === id)

  // Add food to cart with a notification
  const handleAddToCart = item => {
    const alreadyInCart = isInCart(item.id)

    dispatch(add(item))

    toast.success(
      alreadyInCart
        ? `${item.name} quantity updated in your cart!`
        : `${item.name} added to your cart!`
    )
  }

  // Remove one food item from the wishlist
  const handleRemove = item => {
    dispatch(removeFromWishlist(item.id))
    toast.success(`${item.name} removed from your wishlist!`)
  }

  // Clear the complete wishlist
  const handleClearWishlist = () => {
    if (items.length === 0) {
      toast.error('Your wishlist is already empty!')
      return
    }

    dispatch(clearWishlist())
    toast.success('Your wishlist has been cleared!')
  }

  return (
    <main className="min-h-screen bg-[#faf8f2] pb-16 text-[#202b22]">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2500,
          style: {
            borderRadius: '12px',
            background: '#174c37',
            color: '#fff',
            padding: '14px 18px',
            fontSize: '14px'
          }
        }}
      />

      {/* Wishlist Header */}
      <section className="border-b border-[#e9e4d9] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-500">
                <Heart size={14} className="fill-current" />
                YOUR SAVED FAVORITES
              </div>

              <h1 className="mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                My Wishlist
                <span className="ml-3 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#e8efe6] px-2 font-sans text-sm text-[#174c37]">
                  {items.length}
                </span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                Keep your favorite dishes close and add something delicious to
                your cart whenever you're ready.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#174c37] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#103b2a]"
            >
              <UtensilsCrossed size={17} />
              Explore Menu
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-[#e9e4d9] bg-white px-5 py-16 text-center sm:py-20"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#e8efe6] text-[#174c37]">
              <Heart size={36} strokeWidth={1.5} />
            </div>

            <h2 className="mt-6 font-serif text-2xl font-bold sm:text-3xl">
              Your wishlist is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
              Save the dishes you love and find them here whenever you're ready
              to order.
            </p>

            <Link
              to="/menu"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#174c37] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#103b2a]"
            >
              Discover Our Menu
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Wishlist Toolbar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold sm:text-xl">
                  Your favorite dishes
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {items.length} {items.length === 1 ? 'dish' : 'dishes'} saved
                  for later
                </p>
              </div>

              <button
                type="button"
                onClick={handleClearWishlist}
                className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:border-red-200 hover:bg-red-50"
              >
                <Trash2 size={15} />
                Clear Wishlist
              </button>
            </div>

            {/* Food Cards */}
            <motion.div
              layout
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {items.map(item => (
                  <motion.article
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="group overflow-hidden rounded-2xl border border-[#e9e4d9] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#c9d8ca] hover:shadow-lg hover:shadow-[#174c37]/5"
                  >
                    {/* Clickable Food Image */}
                    <div className="relative h-52 overflow-hidden bg-[#f0ede5]">
                      <Link
                        to={`/menu/${item.id}`}
                        aria-label={`View details for ${item.name}`}
                        className="block h-full w-full"
                      >
                        {item.img ? (
                          <img
                            src={item.img}
                            alt={item.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-[#174c37]">
                            <UtensilsCrossed size={42} />
                          </div>
                        )}
                      </Link>

                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm">
                        {item.cat || 'Our Menu'}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleRemove(item)}
                        aria-label={`Remove ${item.name} from wishlist`}
                        title="Remove from wishlist"
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-500 shadow-sm transition hover:bg-red-500 hover:text-white"
                      >
                        <Heart size={17} className="fill-current" />
                      </button>

                      {isInCart(item.id) && (
                        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#174c37] px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                          <Check size={13} />
                          In your cart
                        </span>
                      )}
                    </div>

                    {/* Food Details */}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <Link
                          to={`/menu/${item.id}`}
                          className="min-w-0 flex-1"
                        >
                          <h3 className="line-clamp-2 font-serif text-lg font-bold transition hover:text-[#174c37]">
                            {item.name}
                          </h3>
                        </Link>

                        <span className="shrink-0 text-base font-bold text-[#174c37]">
                          {formatPrice(item.price)}
                        </span>
                      </div>

                      {item.description && (
                        <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
                          {item.description}
                        </p>
                      )}

                      {/* Card Actions */}
                      <div className="mt-5 flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(item)}
                          className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-[#174c37] px-3 py-3 text-sm font-semibold text-white transition hover:bg-[#103b2a] active:scale-[0.98]"
                        >
                          <ShoppingCart size={16} />
                          {isInCart(item.id) ? 'Add Another' : 'Add to Cart'}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleRemove(item)}
                          aria-label={`Delete ${item.name}`}
                          title="Remove from wishlist"
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e9e4d9] text-gray-800 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Bottom Navigation */}
            <div className="mt-10 flex flex-col justify-between gap-4 rounded-2xl border border-[#e9e4d9] bg-white p-5 sm:flex-row sm:items-center sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8efe6] text-[#174c37]">
                  <ShoppingBag size={21} />
                </div>

                <div>
                  <p className="font-bold">Ready to order?</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Your next favorite meal is waiting.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e9e4d9] px-5 py-3 text-sm font-semibold transition hover:border-[#174c37] hover:text-[#174c37]"
                >
                  <ArrowLeft size={16} />
                  Browse Menu
                </Link>

                <Link
                  to="/cart"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#174c37] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#103b2a]"
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
