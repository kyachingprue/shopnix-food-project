import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Search,
  ChefHat,
  Sparkles,
  BookOpen,
  TrendingUp,
  UtensilsCrossed
} from 'lucide-react'
import { blogData } from '../data/dishes'

// ======================================================
// SMALL COMPONENTS
// ======================================================

const categories = [
  'All',
  'Healthy Living',
  'Cooking Tips',
  'Breakfast',
  'Food Guide',
  'Inspiration'
]

function CategoryButton({ category, active, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
        active
          ? 'bg-[#174c37] text-white shadow-md shadow-[#174c37]/10'
          : 'border border-[#e8e2d6] bg-white text-gray-600 hover:border-[#174c37]/30 hover:text-[#174c37]'
      }`}
    >
      {category}
    </motion.button>
  )
}

function BlogCard({ blog, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.06, 0.3)
      }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[1.5rem] border border-[#e8e2d6] bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#174c37]/10"
    >
      <Link to={`/blogs/${blog.id}`} className="block">
        <div className="relative h-64 overflow-hidden bg-[#eee9df]">
          <motion.img
            src={blog.image}
            alt={blog.title}
            loading="lazy"
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#174c37] shadow-sm backdrop-blur">
              {blog.category}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-3 text-xs font-medium text-white">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={13} />
              {blog.date}
            </span>

            <span className="flex items-center gap-1.5">
              <Clock3 size={13} />
              {blog.readTime}
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap gap-2">
            {blog.tags.slice(0, 2).map(tag => (
              <span
                key={tag}
                className="rounded-full bg-[#f4f1e9] px-2.5 py-1 text-[11px] font-semibold text-gray-500"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h3 className="mt-4 font-serif text-xl font-bold leading-tight text-[#202b22] transition-colors duration-300 group-hover:text-[#174c37] sm:text-2xl">
            {blog.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
            {blog.excerpt}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
            <div>
              <p className="text-xs text-gray-400">Written by</p>
              <p className="mt-0.5 text-sm font-bold text-gray-700">
                {blog.author}
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#174c37]">
              Read story
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

// ======================================================
// BLOGS PAGE
// ======================================================

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const featuredBlog = blogData.find(blog => blog.featured)

  const filteredBlogs = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return blogData.filter(blog => {
      const matchesCategory =
        activeCategory === 'All' || blog.category === activeCategory

      const matchesSearch =
        !normalizedSearch ||
        blog.title.toLowerCase().includes(normalizedSearch) ||
        blog.excerpt.toLowerCase().includes(normalizedSearch) ||
        blog.category.toLowerCase().includes(normalizedSearch) ||
        blog.tags.some(tag => tag.toLowerCase().includes(normalizedSearch))

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf8f2] text-[#202b22]">
      {/* ==================================================
          HERO
      ================================================== */}
      <section className="relative overflow-hidden border-b border-[#e8e2d6] bg-white">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#e8efe6] blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#f4ead7] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#e8efe6] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#174c37]">
              <BookOpen size={14} />
              The Shopnix Journal
            </div>

            <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Stories, recipes &
              <span className="block text-[#174c37]">
                delicious inspiration.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Discover practical cooking tips, healthy food ideas, seasonal
              inspiration, and stories from the world of good food.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          FEATURED ARTICLE
      ================================================== */}
      {featuredBlog && (
        <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[2rem] bg-[#174c37] shadow-xl shadow-[#174c37]/10"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[330px] overflow-hidden lg:min-h-[500px]">
                <motion.img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-[#174c37]/30 lg:bg-gradient-to-r lg:from-transparent lg:to-[#174c37]/20" />

                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-bold text-[#174c37] shadow-lg">
                    <Sparkles size={14} />
                    Featured Story
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 text-white sm:p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-white/65">
                  <span>{featuredBlog.category}</span>
                  <span>•</span>
                  <span>{featuredBlog.readTime}</span>
                </div>

                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  {featuredBlog.title}
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  {featuredBlog.excerpt}
                </p>

                <div className="mt-7">
                  <Link
                    to={`/blogs/${featuredBlog.id}`}
                    className="group/button inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#174c37] transition hover:bg-[#f7f3e9]"
                  >
                    Explore the story
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover/button:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* ==================================================
          FILTER / SEARCH
      ================================================== */}
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#174c37]">
              <TrendingUp size={18} />
              <span className="text-sm font-bold">Fresh from our kitchen</span>
            </div>

            <h2 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
              Latest stories
            </h2>
          </div>

          <div className="relative w-full lg:max-w-sm">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="search"
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder="Search recipes, tips..."
              className="w-full rounded-full border border-[#e5dfd2] bg-white py-3.5 pl-11 pr-5 text-sm outline-none transition focus:border-[#174c37] focus:ring-4 focus:ring-[#174c37]/10"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(category => (
            <CategoryButton
              key={category}
              category={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
      </section>

      {/* ==================================================
          BLOG GRID
      ================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {filteredBlogs.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[2rem] border border-[#e8e2d6] bg-white px-5 py-20 text-center"
          >
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e8efe6] text-[#174c37]">
              <Search size={28} />
            </div>

            <h3 className="mt-5 font-serif text-2xl font-bold">
              No stories found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              Try another search keyword or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch('')
                setActiveCategory('All')
              }}
              className="mt-6 rounded-full bg-[#174c37] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#103b2a]"
            >
              View all stories
            </button>
          </motion.div>
        )}
      </section>

      {/* ==================================================
          NEWSLETTER
      ================================================== */}
      <section className="border-t border-[#e8e2d6] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] bg-[#f1eadc] p-7 sm:p-10 lg:p-14"
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/50 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-[#174c37]">
                  <ChefHat size={19} />
                  <span className="text-sm font-bold">From our kitchen</span>
                </div>

                <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
                  Fresh stories, delicious ideas.
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Get our latest recipes, cooking inspiration, and food stories
                  delivered straight to your inbox.
                </p>
              </div>

              <form
                onSubmit={event => event.preventDefault()}
                className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-full border border-white bg-white px-5 py-3.5 text-sm outline-none focus:border-[#174c37]"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#174c37] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#103b2a]"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          BOTTOM CTA
      ================================================== */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 rounded-[1.75rem] border border-[#e8e2d6] bg-white p-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e8efe6] text-[#174c37]">
              <UtensilsCrossed size={21} />
            </div>

            <div>
              <p className="font-bold">Hungry for something delicious?</p>
              <p className="mt-1 text-sm text-gray-500">
                Explore today's menu and discover your next favorite dish.
              </p>
            </div>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-[#174c37] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#103b2a]"
          >
            Explore Menu
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
