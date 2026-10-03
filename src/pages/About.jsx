import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Leaf,
  Sparkles,
  Users,
  Star
} from 'lucide-react'
import { IMG } from '../data/dishes'
import { Btn } from '../components/Btn'

const values = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description:
      'We carefully select fresh ingredients to bring natural flavors to every plate.'
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description:
      'Every recipe carries our passion for delicious food and memorable moments.'
  },
  {
    icon: Users,
    title: 'A Place for Everyone',
    description:
      'A welcoming atmosphere where friends, families, and good food come together.'
  }
]

const stats = [
  { number: '50+', label: 'Signature Dishes' },
  { number: '10+', label: 'Years of Passion' },
  { number: '100%', label: 'Made with Care' },
  { number: '5★', label: 'Our Food Philosophy' }
]

export function About() {
  return (
    <main className="overflow-hidden bg-[#faf8f2] text-[#202b22]">
      {' '}
      <Helmet>
        {' '}
        <title>About Us | Shopnix</title>{' '}
        <meta
          name="description"
          content="Discover the story behind Shopnix, our passion for fresh ingredients, delicious food, and memorable dining experiences."
        />{' '}
      </Helmet>
      {/* HERO SECTION */}
      <section className="relative isolate flex min-h-[570px] items-center bg-[#17231b]">
        <div className="absolute inset-0 -z-10">
          <img
            src={IMG.room}
            alt="The warm and welcoming Shopnix dining experience"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111b14] via-[#111b14]/90 to-[#111b14]/25" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-5 inline-flex items-center gap-3 font-script text-2xl text-[#e7bd63]">
              <span className="h-px w-10 bg-[#e7bd63]" />
              Our Story
            </span>

            <h1 className="max-w-xl font-serif text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Good Food Brings
              <span className="mt-2 block font-script text-5xl font-normal text-[#e7bd63] sm:text-6xl lg:text-7xl">
                People Together
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
              At Shopnix, we believe food is more than just a meal. It is a
              story, a celebration, and a reason to come together. Every dish we
              serve is inspired by our love for beautiful flavors and
              unforgettable experiences.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Btn to="/menu">
                Explore Our Menu <ArrowRight size={17} />
              </Btn>

              <a
                href="#our-story"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#e7bd63] hover:text-[#e7bd63]"
              >
                Discover Our Story
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  'photo-1534528741775-53994a69daeb',
                  'photo-1500648767791-00dcc994a43e',
                  'photo-1531123897727-8f129e1688ce'
                ].map(photo => (
                  <img
                    key={photo}
                    src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=100&q=80`}
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-[#17231b] object-cover"
                  />
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#e7bd63]">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} size={13} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-white/70">
                  A little love in every bite
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] border border-[#e7bd63]/40" />

            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=90"
              alt="A beautifully prepared meal made with fresh ingredients"
              className="relative h-[410px] w-full rounded-[2rem] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-6 -left-8 max-w-[230px] rounded-2xl bg-[#fffaf0] p-5 shadow-xl">
              <Sparkles className="mb-2 text-[#b78a35]" size={22} />
              <p className="font-script text-2xl text-[#174c37]">
                Fresh Ingredients,
              </p>
              <p className="font-serif text-lg font-bold text-gray-900">
                Beautiful Flavors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* OUR STORY */}
      <section
        id="our-story"
        className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[3rem] border-l-2 border-t-2 border-[#d4ad5c]" />

          <img
            src={IMG.room}
            alt="Inside the welcoming Shopnix dining space"
            className="relative h-[360px] w-full rounded-[2rem] object-cover shadow-xl sm:h-[440px]"
          />

          <img
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=85"
            alt="Freshly prepared pasta"
            className="absolute -bottom-9 -right-3 h-36 w-40 rounded-2xl border-4 border-[#faf8f2] object-cover shadow-xl sm:-right-8 sm:h-44 sm:w-48"
          />

          <div className="absolute -left-2 bottom-10 -rotate-6 rounded-xl bg-[#e7bd63] px-5 py-3 shadow-lg sm:-left-8">
            <p className="font-script text-xl text-[#174c37]">Made with love</p>
            <p className="text-xs font-semibold text-[#174c37]">
              Served with care
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="pt-5 lg:pt-0"
        >
          <span className="font-script text-2xl text-[#b78a35]">
            A Taste of Our Journey
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            From a Simple Idea
            <span className="mt-2 block font-script text-4xl font-normal text-[#b78a35] sm:text-5xl">
              to Something Special
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
            Shopnix was created around one simple idea: great food should make
            people feel at home. We bring together thoughtful recipes, carefully
            chosen ingredients, and the joy of sharing a table.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            From the first ingredient to the final presentation, we focus on the
            details that turn an everyday meal into a moment worth remembering.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="flex gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#e8efe6] text-[#174c37]">
                <Leaf size={22} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">
                  Honest Ingredients
                </h3>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Thoughtfully selected ingredients and balanced flavors.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f7ecd5] text-[#a97925]">
                <Heart size={22} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">
                  Heartfelt Service
                </h3>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Every guest deserves a warm welcome.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Btn to="/menu">
              Find Your Favorite Dish <ArrowRight size={17} />
            </Btn>
          </div>
        </motion.div>
      </section>
      {/* STATS STRIP */}
      <section className="relative overflow-hidden bg-[#174c37] px-5 py-14 text-white sm:px-8">
        <div className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-3xl font-bold text-[#e7bd63] sm:text-4xl">
                {stat.number}
              </p>
              <p className="mt-2 text-xs tracking-wide text-white/75 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* OUR VALUES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="font-script text-2xl text-[#b78a35]">
            What Makes Us Different
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
            More Than Just a
            <span className="ml-2 font-script font-normal text-[#b78a35]">
              Restaurant
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
            It is the little things that make a meal special: fresh flavors,
            genuine hospitality, and people to share them with.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -7 }}
                className="rounded-3xl border border-[#e9e4d9] bg-white p-7 shadow-sm transition-shadow hover:shadow-xl sm:p-9"
              >
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#e8efe6] text-[#174c37]">
                  <Icon size={27} strokeWidth={1.7} />
                </div>

                <h3 className="font-serif text-xl font-bold">{value.title}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {value.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#174c37]">
                  <span>Our Promise</span>
                  <span className="h-px w-8 bg-[#d4ad5c]" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#172b20]">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=85"
            alt="An inviting restaurant table ready for a memorable meal"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#10251a] via-[#10251a]/90 to-transparent" />

          <div className="relative max-w-2xl px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <span className="font-script text-2xl text-[#e7bd63]">
              Your Table Is Waiting
            </span>

            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Good Food.
              <span className="block font-script text-4xl font-normal text-[#e7bd63] sm:text-5xl">
                Great Memories.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
              Discover your next favorite dish and make your next meal a little
              more memorable with Shopnix.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Btn to="/menu">
                Explore Our Menu <ArrowRight size={17} />
              </Btn>

              <Btn to="/contact" dark>
                Book a Table <ArrowUpRight size={17} />
              </Btn>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
