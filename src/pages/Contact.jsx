import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CalendarDays,
  Users,
  ArrowRight,
  CheckCircle2,
  UtensilsCrossed,
  Send
} from 'lucide-react'
import { IMG } from '../data/dishes'
import { Btn } from '../components/Btn'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Our Restaurant',
    detail: '123 Flavor Street, Food District',
    extra: 'Your city, your favorite place'
  },
  {
    icon: Phone,
    title: 'Give Us a Call',
    detail: '+1 (555) 123-4567',
    extra: 'We would love to hear from you',
    href: 'tel:+15551234567'
  },
  {
    icon: Mail,
    title: 'Send Us an Email',
    detail: '[hello@shopnix.com](mailto:hello@shopnix.com)',
    extra: 'We usually respond as soon as possible',
    href: 'mailto:hello@shopnix.com'
  }
]

const openingHours = [
  { day: 'Monday – Friday', time: '11:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '11:00 AM – 11:00 PM' },
  { day: 'Sunday', time: '11:00 AM – 11:00 PM' }
]

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    occasion: 'Casual Dining',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const updateField = event => {
    const { name, value } = event.target

    setForm(previous => ({
      ...previous,
      [name]: value
    }))

    if (submitted) setSubmitted(false)
  }

  const handleSubmit = event => {
    event.preventDefault()

    const bookingDetails = [
      'Shopnix Table Reservation Request',
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Guests: ${form.guests}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Occasion: ${form.occasion}`,
      `Message: ${form.message || 'None'}`
    ].join('\n')

    // Demo only: opens an email draft; no reservation is stored.
    const emailBody = encodeURIComponent(bookingDetails)

    window.location.href = `mailto:hello@shopnix.com?subject=${encodeURIComponent(
      'Table Reservation Request'
    )}&body=${emailBody}`

    setSubmitted(true)
  }

  const today = new Date()
  const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 10)

  return (
    <main className="overflow-hidden bg-[#faf8f2] text-[#202b22]">
      {' '}
      <Helmet>
        {' '}
        <title>Contact & Reservations | Shopnix</title>{' '}
        <meta
          name="description"
          content="Contact Shopnix, find our opening hours, or request a table for your next dining experience."
        />{' '}
      </Helmet>
      {/* HERO */}
      <section className="relative isolate flex min-h-[390px] items-center bg-[#14261b]">
        <div className="absolute inset-0 -z-10">
          <img
            src={IMG.room}
            alt="Warm and welcoming restaurant interior"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102017] via-[#102017]/80 to-[#102017]/20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12"
        >
          <span className="flex items-center gap-3 font-script text-2xl text-[#e7bd63]">
            <span className="h-px w-10 bg-[#e7bd63]" />
            Get in Touch
          </span>

          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Let’s Make Your
            <span className="mt-2 block font-script text-5xl font-normal text-[#e7bd63] sm:text-6xl lg:text-7xl">
              Next Meal Special
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            Have a question, planning a special occasion, or ready to reserve
            your table? We are here to help make your visit memorable.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#reservation"
              className="inline-flex items-center gap-2 rounded-full bg-[#e7bd63] px-6 py-3 font-semibold text-[#172b20] transition hover:bg-white"
            >
              Reserve Your Table
              <ArrowRight size={17} />
            </a>

            <a
              href="#contact-details"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-[#e7bd63] hover:text-[#e7bd63]"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
      {/* CONTACT CARDS */}
      <section
        id="contact-details"
        className="mx-auto grid max-w-7xl gap-5 px-5 py-14 sm:px-8 md:grid-cols-3 lg:px-12 lg:py-20"
      >
        {contactInfo.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-[#e9e4d9] bg-white p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-7"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#e8efe6] text-[#174c37]">
                <Icon size={23} strokeWidth={1.8} />
              </div>

              <h2 className="font-serif text-xl font-bold">{item.title}</h2>

              {item.href ? (
                <a
                  href={item.href}
                  className="mt-3 block break-words text-sm font-semibold text-[#174c37] hover:underline"
                >
                  {item.detail}
                </a>
              ) : (
                <p className="mt-3 text-sm font-semibold text-[#174c37]">
                  {item.detail}
                </p>
              )}

              <p className="mt-2 text-xs leading-5 text-gray-500">
                {item.extra}
              </p>
            </motion.div>
          )
        })}
      </section>
      {/* RESERVATION + HOURS */}
      <section
        id="reservation"
        className="mx-auto grid max-w-7xl items-start gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12 lg:pb-28"
      >
        {/* LEFT COLUMN */}
        <div>
          <span className="font-script text-2xl text-[#b78a35]">
            Your Table Awaits
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Ready for a
            <span className="mt-1 block font-script text-4xl font-normal text-[#b78a35] sm:text-5xl">
              Beautiful Experience?
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Whether it is a quiet dinner, a family gathering, or a celebration
            with friends, we would love to welcome you to Shopnix.
          </p>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] shadow-lg">
            <img
              src={IMG.room}
              alt="Shopnix restaurant dining area"
              className="h-64 w-full object-cover transition duration-700 hover:scale-105 sm:h-80"
            />
          </div>

          {/* OPENING HOURS */}
          <div className="mt-7 rounded-3xl border border-[#e9e4d9] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#e8efe6] text-[#174c37]">
                <Clock size={22} />
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold">Opening Hours</h3>
                <p className="mt-1 text-xs text-gray-500">
                  Plan your next visit
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {openingHours.map(item => (
                <div
                  key={item.day}
                  className="flex flex-wrap justify-between gap-2 border-b border-dashed border-gray-200 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-gray-600">{item.day}</span>
                  <span className="text-sm font-semibold text-[#174c37]">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-5 rounded-xl bg-[#faf8f2] p-3 text-xs leading-5 text-gray-500">
              Hours shown are example content. Update them to match your
              restaurant’s actual schedule.
            </p>
          </div>
        </div>

        {/* RESERVATION FORM */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-[#eee8dc] bg-white p-5 shadow-xl sm:p-8 lg:p-10"
        >
          <div className="mb-8">
            <span className="font-script text-xl text-[#b78a35]">
              Book a Table
            </span>

            <h2 className="mt-2 font-serif text-3xl font-bold">
              Make a Reservation
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Fill in your details and prepare for a lovely dining experience.
            </p>
          </div>

          {submitted && (
            <div
              role="status"
              className="mb-6 flex gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
            >
              <CheckCircle2 className="mt-0.5 shrink-0" size={20} />

              <p>
                Your email application should open with your reservation
                details. Send that email to complete your request. This website
                has not confirmed a booking.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Your Name">
                <input
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
              </FormField>

              <FormField label="Email Address">
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className={inputClass}
                />
              </FormField>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Phone Number">
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="Your contact number"
                  autoComplete="tel"
                  className={inputClass}
                />
              </FormField>

              <FormField label="Number of Guests">
                <div className="relative">
                  <Users
                    size={17}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <select
                    name="guests"
                    value={form.guests}
                    onChange={updateField}
                    className={`${inputClass} pl-11`}
                  >
                    {Array.from({ length: 12 }, (_, index) => index + 1).map(
                      count => (
                        <option key={count} value={count}>
                          {count} {count === 1 ? 'Guest' : 'Guests'}
                        </option>
                      )
                    )}
                    <option value="13+">13+ Guests</option>
                  </select>
                </div>
              </FormField>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Reservation Date">
                <div className="relative">
                  <CalendarDays
                    size={17}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={updateField}
                    min={localToday}
                    required
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </FormField>

              <FormField label="Preferred Time">
                <div className="relative">
                  <Clock
                    size={17}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={updateField}
                    required
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </FormField>
            </div>

            <FormField label="Occasion">
              <select
                name="occasion"
                value={form.occasion}
                onChange={updateField}
                className={inputClass}
              >
                <option>Casual Dining</option>
                <option>Birthday Celebration</option>
                <option>Anniversary</option>
                <option>Family Gathering</option>
                <option>Business Dinner</option>
                <option>Other Special Occasion</option>
              </select>
            </FormField>

            <FormField label="Special Requests (Optional)">
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                rows={3}
                placeholder="Any special arrangements or dietary requests?"
                className={`${inputClass} resize-y`}
              />
            </FormField>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#174c37] px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-[#103b2a] hover:shadow-xl"
            >
              Request a Reservation
              <Send
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <p className="text-center text-xs leading-5 text-gray-400">
              Submitting opens your email application. A reservation is not
              confirmed until the restaurant responds.
            </p>
          </form>
        </motion.div>
      </section>
      {/* BOTTOM CTA */}
      <section className="bg-[#e9eee5] px-5 py-14 text-center sm:px-8 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <UtensilsCrossed size={30} className="mx-auto text-[#174c37]" />

          <p className="mt-4 font-script text-2xl text-[#b78a35]">
            Great Food, Great Company
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
            Your Next Favorite Meal Is Waiting
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Explore our menu and find something delicious for your next visit.
          </p>

          <div className="mt-7 flex justify-center">
            <Btn to="/menu">
              Explore Our Menu <ArrowRight size={17} />
            </Btn>
          </div>
        </div>
      </section>
    </main>
  )
}

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-[#fdfcf9] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#174c37] focus:ring-4 focus:ring-[#174c37]/10'

function FormField({ label, children }) {
  return (
    <label className="block space-y-2">
      {' '}
      <span className="text-sm font-semibold text-gray-700">{label} </span>
      {children}{' '}
    </label>
  )
}
