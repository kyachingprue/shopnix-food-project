import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowUpRight, UtensilsCrossed } from 'lucide-react'
import { cats } from '../../data/dishes'


const categoryInfo = {
  Appetizers: {
    description: 'Start your meal with delicious bites.',
    image:
      'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=900&q=85',
    accent: 'from-orange-500/70'
  },
  'Main Course': {
    description: 'Satisfying meals made with love.',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',
    accent: 'from-emerald-700/80'
  },
  Pizza: {
    description: 'Freshly baked, cheesy perfection.',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85',
    accent: 'from-red-600/80'
  },
  Pasta: {
    description: 'Italian comfort in every bite.',
    image:
      'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    accent: 'from-amber-700/80'
  },
  Desserts: {
    description: 'Sweet treats for every craving.',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85',
    accent: 'from-pink-600/75'
  },
  Drinks: {
    description: 'Refresh yourself with every sip.',
    image:
      'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    accent: 'from-cyan-700/75'
  },
  Burgers: {
    description: 'Juicy burgers packed with flavor.',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
    accent: 'from-yellow-700/80'
  },
  Seafood: {
    description: 'Fresh seafood, beautifully prepared.',
    image:
      'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=85',
    accent: 'from-blue-700/80'
  }
}

export function FoodCategory() {
  const categories = cats.filter(category => category !== 'All')

  return (
    <section className="overflow-hidden bg-[#faf8f3] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {' '}
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}{' '}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end lg:mb-14">
          {' '}
          <div>
            {' '}
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#e8efe9] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#174c37]">
              {' '}
              <UtensilsCrossed size={14} />
              Discover Your Taste{' '}
            </span>
            <h2 className="font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Explore Our <span className="text-[#b88a35]">Categories</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              From irresistible appetizers to delightful desserts, discover
              something delicious for every craving.
            </p>
          </div>
          <Link
            to="/menu"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#174c37]/20 px-5 py-3 text-sm font-semibold text-[#174c37] transition hover:bg-[#174c37] hover:text-white"
          >
            View All Dishes
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
        {/* Category cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const info = categoryInfo[category]

            if (!info) return null

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 4) * 0.08
                }}
              >
                <Link
                  to={`/menu?category=${encodeURIComponent(category)}`}
                  aria-label={`Explore ${category} dishes`}
                  className="group relative block h-[280px] overflow-hidden rounded-[1.75rem] bg-gray-200 shadow-sm sm:h-[310px]"
                >
                  <img
                    src={info.image}
                    alt={category}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${info.accent} via-black/10 to-black/5 opacity-90 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-full border border-white/40 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                        {String(index + 1).padStart(2, '0')} /{' '}
                        {String(categories.length).padStart(2, '0')}
                      </span>

                      <motion.span
                        whileHover={{ rotate: 45 }}
                        className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#174c37] transition-colors group-hover:bg-[#e7bd63]"
                      >
                        <ArrowUpRight size={20} />
                      </motion.span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                      {category}
                    </h3>

                    <p className="mt-2 max-w-[240px] text-sm leading-6 text-white/85">
                      {info.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                      <span>Explore Category</span>
                      <span className="h-px w-8 bg-white/80 transition-all duration-300 group-hover:w-14" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
