import { Link, useParams } from 'react-router'
import { motion } from 'motion/react'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  ChefHat,
  Check,
  CircleCheck,
  Heart,
  Sparkles,
  UtensilsCrossed
} from 'lucide-react'

import { FaFacebook as Facebook , FaInstagram as Instagram , FaLinkedin  as Linkedin , FaTwitter as Twitter } from 'react-icons/fa'
import { blogData } from '../../data/dishes'


// ======================================================
// BLOG DETAILS
// ======================================================

export default function BlogDetails() {
  const { id } = useParams()

  const blog = blogData.find(item => item.id === id)

  // ----------------------------------------------------
  // Invalid blog ID
  // ----------------------------------------------------

  if (!blog) {
    return (
      <main className="grid min-h-[70vh] place-items-center bg-[#faf8f2] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg rounded-[2rem] border border-[#e8e2d6] bg-white p-8 text-center shadow-sm"
        >
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e8efe6] text-[#174c37]">
            <UtensilsCrossed size={28} />
          </div>

          <h1 className="mt-5 font-serif text-3xl font-bold">
            Story not found
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            The article you're looking for may have been moved or no longer
            exists.
          </p>

          <Link
            to="/blogs"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#174c37] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#103b2a]"
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </Link>
        </motion.div>
      </main>
    )
  }

  // ----------------------------------------------------
  // Related posts
  // ----------------------------------------------------

  const relatedBlogs = blogData
    .filter(item => item.id !== blog.id)
    .filter(
      item =>
        item.category === blog.category ||
        item.tags.some(tag => blog.tags.includes(tag))
    )
    .slice(0, 3)

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf8f2] text-[#202b22]">
      {/* ==================================================
          TOP NAVIGATION
      ================================================== */}
      <div className="border-b border-[#e8e2d6] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/blogs"
            className="group inline-flex items-center gap-2 text-sm font-bold text-gray-500 transition hover:text-[#174c37]"
          >
            <ArrowLeft
              size={17}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to all stories
          </Link>
        </div>
      </div>

      {/* ==================================================
          ARTICLE HERO
      ================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-14 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full bg-[#e8efe6] px-3 py-1.5 text-xs font-bold text-[#174c37]">
                {blog.category}
              </span>

              <span className="text-gray-300">•</span>

              <span className="text-xs font-semibold text-gray-500">
                {blog.readTime}
              </span>
            </div>

            <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {blog.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              {blog.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[#174c37] text-xs font-bold text-white">
                  {blog.author
                    .split(' ')
                    .map(name => name[0])
                    .join('')
                    .slice(0, 2)}
                </div>

                <span>
                  By <strong className="text-gray-700">{blog.author}</strong>
                </span>
              </div>

              <span className="hidden text-gray-300 sm:block">•</span>

              <span className="flex items-center gap-1.5">
                <CalendarDays size={14} />
                {blog.date}
              </span>

              <span className="hidden text-gray-300 sm:block">•</span>

              <span className="flex items-center gap-1.5">
                <Clock3 size={14} />
                {blog.readTime}
              </span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mt-10 overflow-hidden rounded-[2rem] shadow-2xl shadow-black/10"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-[300px] w-full object-cover sm:h-[430px] lg:h-[580px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
              <span className="rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-[#174c37] backdrop-blur">
                Shopnix Journal
              </span>

              <motion.button
                type="button"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="grid h-11 w-11 place-items-center rounded-full bg-white/95 text-gray-700 shadow-lg backdrop-blur transition hover:text-red-500"
                aria-label="Save article"
              >
                <Heart size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          ARTICLE CONTENT
      ================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* MAIN ARTICLE */}
          <article className="min-w-0">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              className="rounded-[1.75rem] border border-[#e8e2d6] bg-white p-6 shadow-sm sm:p-8 lg:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e8efe6] text-[#174c37]">
                  <Sparkles size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#174c37]">
                    The story
                  </p>

                  <p className="mt-2 text-base font-medium leading-8 text-gray-600">
                    {blog.intro}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Article sections */}
            <div className="mt-8 space-y-8">
              {blog.sections.map((section, index) => (
                <motion.section
                  key={section.heading}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-[1.75rem] border border-[#e8e2d6] bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#174c37] text-sm font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                        {section.heading}
                      </h2>

                      <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                        {section.text}
                      </p>
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Ingredients */}
            {blog.ingredients?.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 rounded-[1.75rem] border border-[#e8e2d6] bg-[#f1eadc] p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#174c37] text-white">
                    <ChefHat size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#174c37]">
                      Kitchen checklist
                    </p>

                    <h2 className="font-serif text-2xl font-bold">
                      What you'll need
                    </h2>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {blog.ingredients.map(ingredient => (
                    <motion.div
                      key={ingredient}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 text-sm text-gray-700"
                    >
                      <Check size={16} className="shrink-0 text-[#174c37]" />
                      {ingredient}
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Pro Tips */}
            {blog.tips?.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 overflow-hidden rounded-[1.75rem] bg-[#174c37] p-6 text-white sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                    <Sparkles size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                      Chef's notes
                    </p>

                    <h2 className="font-serif text-2xl font-bold">
                      Pro tips worth remembering
                    </h2>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {blog.tips.map(tip => (
                    <motion.div
                      key={tip}
                      whileHover={{ x: 5 }}
                      className="flex gap-3 rounded-xl bg-white/8 p-3 text-sm leading-6 text-white/80"
                    >
                      <CircleCheck
                        size={18}
                        className="mt-0.5 shrink-0 text-[#d7b46a]"
                      />
                      {tip}
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Tags + Share */}
            <div className="mt-8 flex flex-col gap-5 rounded-[1.75rem] border border-[#e8e2d6] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f4f1e9] px-3 py-1.5 text-xs font-semibold text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="mr-1 text-xs font-semibold text-gray-400">
                  Share
                </span>

                <ShareButton icon={<Facebook size={15} />} />
                <ShareButton icon={<Instagram size={15} />} />
                <ShareButton icon={<Twitter size={15} />} />
                <ShareButton icon={<Linkedin size={15} />} />
              </div>
            </div>
          </article>

          {/* ==================================================
              SIDEBAR
          ================================================== */}
          <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-[1.75rem] border border-[#e8e2d6] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#174c37] text-sm font-bold text-white">
                  {blog.author
                    .split(' ')
                    .map(name => name[0])
                    .join('')
                    .slice(0, 2)}
                </div>

                <div>
                  <p className="text-xs text-gray-400">Written by</p>
                  <h3 className="font-bold">{blog.author}</h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Food enthusiast, recipe creator, and storyteller sharing
                practical ideas for better everyday meals.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#e8e2d6] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Clock3 size={17} className="text-[#174c37]" />
                <h3 className="font-bold">Article details</h3>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <DetailRow label="Published" value={blog.date} />
                <DetailRow label="Reading time" value={blog.readTime} />
                <DetailRow label="Category" value={blog.category} />
                <DetailRow label="Topics" value={`${blog.tags.length} tags`} />
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-[#174c37] p-6 text-white shadow-lg shadow-[#174c37]/10">
              <ChefHat size={25} />

              <h3 className="mt-4 font-serif text-2xl font-bold">
                Hungry for more?
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/70">
                Discover more delicious stories, recipes, and cooking
                inspiration from Shopnix.
              </p>

              <Link
                to="/blogs"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#174c37] transition hover:bg-[#f5f0e5]"
              >
                More stories
                <ArrowRight size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* ==================================================
          RELATED STORIES
      ================================================== */}
      {relatedBlogs.length > 0 && (
        <section className="border-t border-[#e8e2d6] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-bold text-[#174c37]">
                    Keep exploring
                  </p>

                  <h2 className="mt-1 font-serif text-3xl font-bold">
                    You may also like
                  </h2>
                </div>

                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#174c37]"
                >
                  View all
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {relatedBlogs.map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="group overflow-hidden rounded-[1.5rem] border border-[#e8e2d6] bg-[#faf8f2]"
                  >
                    <Link to={`/blogs/${item.id}`} className="block">
                      <div className="h-48 overflow-hidden">
                        <motion.img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.07 }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>

                      <div className="p-5">
                        <span className="text-xs font-bold text-[#174c37]">
                          {item.category}
                        </span>

                        <h3 className="mt-2 line-clamp-2 font-serif text-xl font-bold transition-colors group-hover:text-[#174c37]">
                          {item.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                          {item.excerpt}
                        </p>

                        <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                          <span className="text-xs text-gray-400">
                            {item.readTime}
                          </span>

                          <span className="flex items-center gap-1 text-sm font-bold text-[#174c37]">
                            Read
                            <ArrowRight
                              size={15}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ==================================================
          FINAL CTA
      ================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[#f1eadc] p-7 text-center sm:p-10">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#174c37] text-white">
            <UtensilsCrossed size={21} />
          </div>

          <h2 className="mt-4 font-serif text-3xl font-bold">
            Ready to discover your next favorite dish?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-500">
            Our menu is full of delicious options inspired by the stories you
            just read.
          </p>

          <Link
            to="/menu"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#174c37] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#103b2a]"
          >
            Explore Menu
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}

// ======================================================
// SMALL COMPONENTS
// ======================================================

function ShareButton({ icon }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      className="grid h-9 w-9 place-items-center rounded-full border border-gray-200 text-gray-500 transition hover:border-[#174c37] hover:bg-[#e8efe6] hover:text-[#174c37]"
    >
      {icon}
    </motion.button>
  )
}

function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
      <span className="text-gray-400">{label}</span>
      <span className="text-right font-semibold text-gray-700">{value}</span>
    </div>
  )
}
