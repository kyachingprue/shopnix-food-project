import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { Play, Leaf, ChefHat, Armchair, CalendarCheck, Sparkles, ArrowRight, Star, HeartHandshake } from 'lucide-react'
import { dishes, IMG } from '../data/dishes'
import { Btn } from '../components/Btn'
import { Title } from '../components/Title'
import { DishCard } from '../components/DishCard'
import { FoodCategory } from '../components/food/FoodCategory'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router'


const feats = [
  [Leaf, 'Fresh Ingredients', 'Sourced daily'],
  [ChefHat, 'Expert Chefs', 'Global experience'],
  [Armchair, 'Cozy Atmosphere', 'Any occasion'],
  [CalendarCheck, 'Online Booking', 'Fast & easy']
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shopnix Restaurant | Exceptional Food for Every Moment</title>
        <meta
          name="description"
          content="Fresh ingredients, bold flavors and a cozy atmosphere."
        />
      </Helmet>
      <section className="bg-deep text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-script text-2xl text-gold">
              Good Food • Great Vibes • Always
            </p>
            <h1 className="mt-2 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Exceptional Food for <em className="text-gold">Every Moment</em>
            </h1>
            <p className="mt-5 max-w-md text-white/80">
              At Antixor we serve more than just food — we serve experiences.
              Fresh ingredients, bold flavors and a cozy atmosphere, all in one
              place.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Btn to="/menu">Explore Our Menu</Btn>
              <Btn to="/about" dark className="!bg-white/10">
                <Play size={14} />
                Watch Our Story
              </Btn>
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Grilled steak"
            className="mx-auto aspect-square w-full max-w-md rounded-full border-8 border-white/10 object-cover shadow-2xl"
          />
        </div>
        <div className="border-t border-white/10 bg-forest">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-5 lg:grid-cols-4">
            {feats.map(([I, a, b]) => (
              <div key={a} className="flex items-center gap-3">
                <I className="text-gold" />
                <div className="text-xs">
                  <b className="block text-sm">{a}</b>
                  {b}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FoodCategory />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Title sub="Must Try">Popular Dishes</Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-4">
          {dishes.slice(0, 4).map(d => (
            <DishCard key={d.id} d={d} />
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden bg-deep py-20 text-white md:py-28">
        {/* Decorative Background */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            {/* Small Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_10px_#fb923c]" />
              <span className="text-sm font-medium text-white/80">
                Meet Our Culinary Expert
              </span>
            </div>

            <Title sub="Our Chef" light>
              Crafted by Passion,
              <br />
              <span className="text-orange-400">Served with Love</span>
            </Title>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/65 md:text-lg">
              Behind every delicious plate is a story of passion, creativity,
              and dedication. Our chefs combine years of experience with fresh
              ingredients to create unforgettable flavors for you.
            </p>

            {/* Chef Stats */}
            <div className="my-8 grid max-w-lg grid-cols-3 divide-x divide-white/10">
              <div className="pr-4">
                <h3 className="text-2xl font-bold md:text-3xl">15+</h3>
                <p className="mt-1 text-xs text-white/50 md:text-sm">
                  Years Experience
                </p>
              </div>

              <div className="px-4">
                <h3 className="text-2xl font-bold md:text-3xl">50+</h3>
                <p className="mt-1 text-xs text-white/50 md:text-sm">
                  Signature Dishes
                </p>
              </div>

              <div className="pl-4">
                <h3 className="text-2xl font-bold md:text-3xl">4.9</h3>
                <p className="mt-1 text-xs text-white/50 md:text-sm">
                  Guest Rating
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Btn to="/about">Meet Our Chef</Btn>

              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-orange-400/50 hover:bg-white/5 hover:text-white"
              >
                Explore Menu
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Chef Image */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Decorative Frame */}
            <div className="absolute -inset-3 rounded-[2rem] border border-orange-400/10" />

            <div className="relative overflow-hidden rounded-[1.5rem]">
              <img
                src={IMG.chef}
                alt="Our professional chef preparing delicious food"
                className="h-[380px] w-full object-cover transition duration-700 hover:scale-105 md:h-[480px]"
              />

              {/* Image Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Chef Label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-300">
                    Executive Chef
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">
                    Passion on Every Plate
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-400 text-black">
                  <ChefHat size={20} />
                </div>
              </div>
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-xl backdrop-blur-xl sm:block md:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-400/15 text-orange-400">
                  <Sparkles size={20} />
                </div>

                <div>
                  <p className="text-xs text-white/50">Our Promise</p>
                  <p className="text-sm font-semibold">Fresh & Delicious</p>
                </div>
              </div>
            </div>

            {/* Decorative Dot */}
            <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-orange-400/20 bg-orange-400/5 blur-[1px]" />
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
        {/* Background Decorations */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4">
          {/* Section Heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Title sub="Why Choose Us">What Makes Us Special</Title>

            <p className="mt-4 text-sm leading-6 text-slate-500 md:text-base">
              From carefully selected ingredients to exceptional service, we
              make every dining experience memorable.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '01',
                title: 'Premium Ingredients',
                description:
                  'We carefully select fresh, high-quality ingredients to create delicious food.',
                icon: <Leaf size={25} />,
                color: 'emerald'
              },
              {
                number: '02',
                title: 'Expert Chefs',
                description:
                  'Our experienced chefs combine creativity, passion, and authentic flavors.',
                icon: <ChefHat size={25} />,
                color: 'orange'
              },
              {
                number: '03',
                title: 'Cozy Ambience',
                description:
                  'Enjoy a warm, elegant, and relaxing atmosphere designed for every occasion.',
                icon: <Sparkles size={25} />,
                color: 'purple'
              },
              {
                number: '04',
                title: 'Excellent Service',
                description:
                  'Our friendly team is always ready to make your experience truly special.',
                icon: <HeartHandshake size={25} />,
                color: 'rose'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                    ease: 'easeOut'
                  }
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:border-transparent hover:shadow-2xl"
              >
                {/* Hover Glow */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-orange-400/10 blur-2xl transition-all duration-500 group-hover:scale-[2.5] group-hover:bg-orange-400/20" />

                {/* Number */}
                <div className="absolute right-6 top-5 text-4xl font-black text-slate-100 transition-colors duration-500 group-hover:text-orange-100">
                  {item.number}
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{
                      rotate: [0, -8, 8, -5, 0],
                      scale: 1.08
                    }}
                    transition={{ duration: 0.5 }}
                    className="grid h-16 w-16 place-items-center rounded-2xl bg-orange-50 text-orange-500 shadow-sm transition-all duration-500 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/25"
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mb-3 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-orange-500">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-400 transition-all duration-500 group-hover:translate-x-1 group-hover:text-orange-500">
                  <span>Discover More</span>

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  />
                </div>

                {/* Bottom Animated Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-400 to-amber-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Trust Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm sm:flex-row"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(item => (
                <div
                  key={item}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-slate-200 text-xs font-bold text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center gap-1 sm:justify-start">
                {[1, 2, 3, 4, 5].map(item => (
                  <Star
                    key={item}
                    size={15}
                    fill="currentColor"
                    className="text-amber-400"
                  />
                ))}
              </div>

              <p className="mt-1 text-sm text-slate-500">
                Trusted by{' '}
                <span className="font-semibold text-slate-800">5,000+</span>{' '}
                happy food lovers
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Testimonials />
      <section className="bg-forest py-14 text-center text-white">
        <h2 className="font-serif text-3xl">Ready for a Great Meal?</h2>
        <p className="mb-6 mt-2 text-white/75">
          Reserve your table now and enjoy an unforgettable dining experience.
        </p>
        <Btn to="/contact">Book a Table</Btn>
      </section>
    </>
  )
}
