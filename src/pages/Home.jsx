import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { Play, Leaf, ChefHat, Armchair, CalendarCheck } from 'lucide-react'
import { dishes, IMG } from '../data/dishes'
import { Btn } from '../components/Btn'
import { Title } from '../components/Title'
import { DishCard } from '../components/DishCard'
import { Stars } from '../components/Stars'
import { FoodCategory } from '../components/food/FoodCategory'
const feats = [
  [Leaf, 'Fresh Ingredients', 'Sourced daily'],
  [ChefHat, 'Expert Chefs', 'Global experience'],
  [Armchair, 'Cozy Atmosphere', 'Any occasion'],
  [CalendarCheck, 'Online Booking', 'Fast & easy']
]
const reviews = [
  ['Sarah Johnson', "The best dining experience I've had in a long time!"],
  ['Michael Roberts', 'Amazing food and friendly staff. Highly recommended!'],
  ['Emily Carter', "Every dish was a masterpiece. Can't wait to visit again."]
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
            src={IMG.hero}
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
      <FoodCategory/>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Title sub="Must Try">Popular Dishes</Title>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {dishes.slice(0, 4).map(d => (
            <DishCard key={d.id} d={d} />
          ))}
        </div>
      </section>
      <section className="relative bg-deep text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-2">
          <div>
            <Title sub="Our Chef" light>
              Crafted by Passion, Served with Love
            </Title>
            <p className="mb-6 max-w-md text-white/75">
              Our chefs bring years of experience and a love for fine cuisine to
              create dishes that tell a story.
            </p>
            <Btn to="/about">Meet Our Chef</Btn>
          </div>
          <img
            src={IMG.chef}
            alt="Chef"
            className="h-72 w-full rounded-2xl object-cover"
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Title sub="Why Choose Us">What Makes Us Special</Title>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            'Premium Quality Ingredients',
            'Skilled & Experienced Chefs',
            'Beautiful & Cozy Ambience',
            'Excellent Customer Service'
          ].map(t => (
            <motion.div
              key={t}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white p-6 text-center shadow"
            >
              <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-gold/20 text-gold">
                <Leaf />
              </div>
              <p className="text-sm">{t}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Title sub="What Our Guests Say">Customer Reviews</Title>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map(([n, t]) => (
              <div key={n} className="rounded-2xl bg-cream p-6 shadow-sm">
                <b>{n}</b>
                <Stars />
                <p className="mt-3 text-sm text-gray-600">“{t}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>
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
