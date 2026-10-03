import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, Quote, Star, Utensils } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sophia Williams',
    role: 'Regular Customer',
    location: 'New York, USA',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    date: 'September 18, 2026',
    review:
      'Absolutely delicious food! The burger was juicy, the fries were perfectly crispy, and everything arrived fresh. Shopnix has become my favorite place to order food.',
    dish: 'Classic Beef Burger',
    color: 'bg-orange-100'
  },
  {
    id: 2,
    name: 'James Anderson',
    role: 'Food Lover',
    location: 'London, UK',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    date: 'September 20, 2026',
    review:
      'The pizza was incredible! Amazing flavors, generous toppings, and quick delivery. The whole ordering experience was smooth and easy. Highly recommended!',
    dish: 'Italian Pepperoni Pizza',
    color: 'bg-rose-100'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Happy Customer',
    location: 'Toronto, Canada',
    avatar: 'https://i.pravatar.cc/150?img=44',
    rating: 5,
    date: 'September 22, 2026',
    review:
      'I love the variety on the menu. The pasta was creamy, flavorful, and beautifully prepared. The packaging was also excellent. I will definitely order again!',
    dish: 'Creamy Alfredo Pasta',
    color: 'bg-purple-100'
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Verified Buyer',
    location: 'Sydney, Australia',
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: 4,
    date: 'September 25, 2026',
    review:
      'Great food and friendly service! I ordered a crispy chicken meal for dinner, and it was delicious. The website is easy to use, and checkout was simple.',
    dish: 'Crispy Chicken Burger',
    color: 'bg-amber-100'
  },
  {
    id: 5,
    name: 'Olivia Martinez',
    role: 'Regular Customer',
    location: 'Barcelona, Spain',
    avatar: 'https://i.pravatar.cc/150?img=49',
    rating: 5,
    date: 'September 27, 2026',
    review:
      'One of the most enjoyable food ordering experiences I have had. The ingredients tasted fresh, the portions were satisfying, and the desserts were fantastic!',
    dish: 'Chocolate Lava Cake',
    color: 'bg-pink-100'
  },
  {
    id: 6,
    name: 'Daniel Wilson',
    role: 'Food Enthusiast',
    location: 'Chicago, USA',
    avatar: 'https://i.pravatar.cc/150?img=13',
    rating: 5,
    date: 'September 29, 2026',
    review:
      'From browsing the menu to enjoying my meal, everything felt effortless. The food was tasty, the presentation was lovely, and the experience exceeded my expectations.',
    dish: 'Grilled Chicken Bowl',
    color: 'bg-green-100'
  }
]

const StarRating = ({ rating }) => (
  <div
    className="flex items-center gap-1"
    aria-label={`${rating} out of 5 stars`}
  >
    {Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={
          index < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
        }
      />
    ))}
  </div>
)

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const [isPaused, setIsPaused] = useState(false)

  const maxIndex = Math.max(0, testimonials.length - cardsPerView)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    updateCardsPerView()

    window.addEventListener('resize', updateCardsPerView)

    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  useEffect(() => {
    setActiveIndex(current => Math.min(current, maxIndex))
  }, [maxIndex])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex(current => (current >= maxIndex ? 0 : current + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused, maxIndex])

  const goNext = () => {
    setActiveIndex(current => (current >= maxIndex ? 0 : current + 1))
  }

  const goPrevious = () => {
    setActiveIndex(current => (current <= 0 ? maxIndex : current - 1))
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#fffaf5] py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative backgrounds */}{' '}
      <div className="pointer-events-none absolute -left-28 top-20 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />{' '}
      <div className="pointer-events-none absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            <Utensils size={16} />
            Customer Stories
          </span>

          <h2 className="font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Real Happiness,
            <span className="block text-orange-500">Served Fresh</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Discover what food lovers are saying about their Shopnix experience.
            Good food tastes even better when it comes with a smile.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 4).map(person => (
                <img
                  key={person.id}
                  src={person.avatar}
                  alt={person.name}
                  loading="lazy"
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1">
                <StarRating rating={5} />
                <span className="text-sm font-bold text-gray-900">4.9/5</span>
              </div>
              <p className="text-xs text-gray-500">
                Sample rating · Demo reviews
              </p>
            </div>
          </div>
        </motion.div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={event => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false)
            }
          }}
        >
          <div className="overflow-hidden px-1 py-2">
            <motion.div
              className="flex"
              animate={{
                x: `-${activeIndex * (100 / cardsPerView)}%`
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 22,
                mass: 0.8
              }}
            >
              {testimonials.map(person => (
                <div
                  key={person.id}
                  className="shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <article className="group flex h-full min-h-[340px] flex-col rounded-3xl border border-orange-100/80 bg-white p-5 shadow-[0_8px_30px_rgba(124,45,18,0.05)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_18px_45px_rgba(124,45,18,0.10)] sm:min-h-[355px] sm:p-7">
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                        <Quote size={23} />
                      </div>

                      <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                        Customer review
                      </span>
                    </div>

                    <StarRating rating={person.rating} />

                    <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-[15px]">
                      “{person.review}”
                    </p>

                    <div className="my-5 h-px bg-gray-100" />

                    <div className="mb-4 inline-flex max-w-full self-start rounded-lg bg-orange-50 px-3 py-2 text-xs font-semibold text-orange-700">
                      <span className="truncate">Enjoyed: {person.dish}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <img
                        src={person.avatar}
                        alt={person.name}
                        loading="lazy"
                        className="h-12 w-12 rounded-full border-2 border-orange-100 object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-bold text-gray-900 sm:text-base">
                          {person.name}
                        </h3>
                        <p className="mt-1 truncate text-xs text-gray-500">
                          {person.role} · {person.location}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-gray-700 shadow-sm transition hover:border-orange-500 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              <ArrowLeft size={19} />
            </button>

            {/* Slide indicators */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 ${
                    activeIndex === index
                      ? 'w-8 bg-orange-500'
                      : 'w-2.5 bg-orange-200 hover:bg-orange-300'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-md shadow-orange-200 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              <ArrowRight size={19} />
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            {isPaused
              ? 'Autoplay paused'
              : 'Sit back and enjoy the stories · Auto-sliding'}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
