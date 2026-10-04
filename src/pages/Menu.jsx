import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'motion/react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { dishes, cats } from '../data/dishes'
import { Title } from '../components/Title'
import { FoodCard } from '../components/food/FoodCard'
import { useSearchParams } from 'react-router'

export function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [category, setCategory] = useState(
    searchParams.get('category') || 'All'
  )

  const [search, setSearch] = useState('')

  useEffect(() => {
    const urlCategory = searchParams.get('category') || 'All'

    setCategory(cats.includes(urlCategory) ? urlCategory : 'All')
  }, [searchParams])

  const filteredDishes = dishes.filter(dish => {
    const matchesCategory = category === 'All' || dish.cat === category

    const matchesSearch =
      dish.name.toLowerCase().includes(search.toLowerCase()) ||
      dish.desc.toLowerCase().includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <section className="min-h-screen bg-[#faf8f3] px-4 py-12 md:px-8">
      {' '}
      <Helmet>
        {' '}
        <title>Our Menu | Shopnix</title>{' '}
        <meta
          name="description"
          content="Explore delicious meals, discover your favorites, and order fresh food."
        />{' '}
      </Helmet>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Title sub="Fresh From Our Kitchen">Explore Our Menu</Title>

            <p className="-mt-5 mb-6 max-w-xl text-sm leading-6 text-gray-500">
              Discover delicious dishes prepared with care. Find something
              special for your next meal.
            </p>
          </div>

          <div className="mb-8 flex w-full items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 shadow-sm md:mb-10 md:w-80">
            <Search size={18} className="shrink-0 text-gray-400" />

            <input
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search delicious food..."
              aria-label="Search dishes"
              className="w-full bg-transparent text-sm outline-none"
            />

            <SlidersHorizontal size={17} className="shrink-0 text-gray-400" />
          </div>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-3">
          {cats.map(item => (
            <motion.button
              key={item}
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={() => {
                setCategory(item)

                if (item === 'All') {
                  setSearchParams({})
                } else {
                  setSearchParams({ category: item })
                }
              }}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition ${
                category === item
                  ? 'bg-[#174c37] text-white shadow-md'
                  : 'border border-gray-200 bg-white text-gray-600 hover:border-[#174c37] hover:text-[#174c37]'
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing{' '}
            <span className="font-semibold text-gray-800">
              {filteredDishes.length}
            </span>{' '}
            dishes
          </p>

          <span className="text-xs text-gray-400">{category}</span>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-2 sm:gap-4 lg:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredDishes.map(dish => (
              <motion.div
                key={dish.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <FoodCard dish={dish} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDishes.length === 0 && (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-20 text-center">
            <span className="text-5xl">🍽️</span>

            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              No dishes found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch('')
                setCategory('All')
              }}
              className="mt-5 rounded-full bg-[#174c37] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#103b2a]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
