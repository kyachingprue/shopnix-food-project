import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'motion/react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Clock,
  CreditCard,
  LockKeyhole,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Trash2,
  Truck,
  Utensils,
  Wallet
} from 'lucide-react'
import { inc, dec, remove, clear } from '../store/store'
import toast from 'react-hot-toast'

const DELIVERY_FEE = 4.99
const FREE_DELIVERY_MINIMUM = 50
const TAX_RATE = 0.05

const PAYMENT_METHODS = [
  {
    id: 'card',
    label: 'Credit / Debit Card',
    description: 'Visa, Mastercard and more',
    icon: CreditCard
  },
  {
    id: 'mobile',
    label: 'Mobile Payment',
    description: 'Connect your preferred mobile wallet',
    icon: Wallet
  },
  {
    id: 'cash',
    label: 'Cash on Delivery',
    description: 'Pay when your order arrives',
    icon: Wallet
  }
]

const money = amount =>
  `$${Number(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`

export function Cart() {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const [coupon, setCoupon] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState('')
  const [couponMessage, setCouponMessage] = useState('')
  const [deliveryType, setDeliveryType] = useState('delivery')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [showCheckout, setShowCheckout] = useState(false)
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  })

  const subtotal = items.reduce(
    (total, item) => total + Number(item.price) * Number(item.qty || 1),
    0
  )

  const deliveryFee =
    deliveryType === 'pickup' || subtotal === 0
      ? 0
      : subtotal >= FREE_DELIVERY_MINIMUM
        ? 0
        : DELIVERY_FEE

  const discount = appliedCoupon === 'WELCOME10' ? subtotal * 0.1 : 0

  const tax = Math.max(0, subtotal - discount) * TAX_RATE
  const total = Math.max(0, subtotal - discount + tax + deliveryFee)
  const itemCount = items.reduce(
    (count, item) => count + Number(item.qty || 1),
    0
  )

  const updateOrderField = event => {
    const { name, value } = event.target
    setOrderForm(previous => ({ ...previous, [name]: value }))
  }

  const applyCoupon = event => {
    event.preventDefault()

    const normalized = coupon.trim().toUpperCase()

    if (normalized === 'WELCOME10' && subtotal > 0) {
      setAppliedCoupon(normalized)
      setCouponMessage('Success! Your 10% demo discount is applied.')
    } else {
      setAppliedCoupon('')
      setCouponMessage('That code is not valid. Try WELCOME10 for the demo.')
    }
  }

  const removeCoupon = () => {
    setAppliedCoupon('')
    setCoupon('')
    setCouponMessage('')
  }

  const handleCheckout = event => {
    event.preventDefault()

    // UI demo only: no order is sent and no payment is processed.
    const orderSummary = {
      customer: orderForm,
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        price: Number(item.price),
        quantity: Number(item.qty || 1)
      })),
      deliveryType,
      paymentMethod,
      subtotal,
      discount,
      tax,
      deliveryFee,
      total
    }

    console.info('Shopnix checkout demo:', orderSummary)

    alert(
      'Checkout UI is ready! Connect your backend and payment gateway before accepting real orders.'
    )
  }

  return (
    <main className="min-h-screen bg-[#faf8f2] px-4 py-10 text-[#202b22] sm:px-6 lg:px-8 lg:py-14">
      {' '}
      <Helmet>
        {' '}
        <title>Your Cart | Shopnix</title>{' '}
        <meta
          name="description"
          content="Review your Shopnix food order and prepare for checkout."
        />{' '}
      </Helmet>
      <div className="mx-auto max-w-7xl">
        {/* PAGE HEADER */}
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="font-script text-2xl text-[#b78a35]">
              Delicious Choices
            </span>

            <h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">
              Your Shopping Cart
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Review your favorites before they reach your table.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold transition hover:border-[#174c37] hover:text-[#174c37]"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
        </div>

        {/* CHECKOUT PROGRESS */}
        <div className="mb-8 flex items-center gap-3 rounded-2xl border border-[#e9e4d9] bg-white p-4 sm:p-5">
          <ProgressStep number="01" label="Your Cart" active />
          <div className="h-px flex-1 bg-gray-200" />
          <ProgressStep number="02" label="Checkout" active={showCheckout} />
          <div className="h-px flex-1 bg-gray-200" />
          <ProgressStep number="03" label="Confirmation" />
        </div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[2rem] border border-[#e9e4d9] bg-white px-5 py-16 text-center shadow-sm sm:py-24"
          >
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#e8efe6] text-[#174c37]">
              <ShoppingBag size={40} strokeWidth={1.5} />
            </div>

            <h2 className="mt-6 font-serif text-3xl font-bold">
              Your cart is waiting
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
              Looks like you haven't discovered your favorites yet. Explore our
              menu and find something delicious.
            </p>

            <div className="mt-7 flex justify-center">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-[#174c37] px-7 py-3.5 font-semibold text-white transition hover:bg-[#103b2a]"
              >
                Explore the Menu
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        ) : (
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_390px]">
            {/* LEFT: CART ITEMS AND CHECKOUT */}
            <div className="min-w-0 space-y-6">
              <section className="overflow-hidden rounded-[1.75rem] border border-[#e9e4d9] bg-white shadow-sm">
                <div className="flex items-center justify-between gap-3 border-b border-gray-100 p-4 sm:p-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold">
                      Your Items
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {itemCount} {itemCount === 1 ? 'item' : 'items'} in your
                      cart
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (items.length === 0) {
                        toast.error('Your cart is already empty!')
                        return
                      }

                      dispatch(clear())
                      toast.success('Your cart has been cleared!', {
                        duration: 2500
                      })
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-50"
                  >
                    <Trash2 size={14} />
                    Clear cart
                  </button>
                </div>

                <div className="divide-y divide-gray-100 px-4 sm:px-6">
                  <AnimatePresence initial={false}>
                    {items.map(item => (
                      <motion.article
                        layout
                        key={item.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{ duration: 0.2 }}
                        className="flex gap-3 py-5 sm:gap-5"
                      >
                        <Link
                          to={`/menu/${item.id}`}
                          className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#f4f0e8] sm:h-28 sm:w-28"
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition duration-500 hover:scale-110"
                          />
                        </Link>

                        <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-center">
                          <div className="min-w-0">
                            <Link to={`/menu/${item.id}`}>
                              <h3 className="line-clamp-2 font-serif text-base font-bold transition hover:text-[#174c37] sm:text-lg">
                                {item.name}
                              </h3>
                            </Link>

                            <p className="mt-1 text-xs text-gray-500">
                              {item.cat || 'Freshly prepared'}
                            </p>

                            <p className="mt-2 font-bold text-[#174c37]">
                              {money(item.price)}
                            </p>
                          </div>

                          <div className="flex items-center justify-between gap-1 md:gap-3 sm:flex-col sm:items-end">
                            <div className="flex items-center gap-1 sm:gap-3 rounded-full border border-gray-200 bg-[#faf8f2] p-1">
                              <button
                                type="button"
                                aria-label={`Decrease ${item.name} quantity`}
                                disabled={Number(item.qty || 1) <= 1}
                                onClick={() => dispatch(dec(item.id))}
                                className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
                              >
                                <Minus size={14} />
                              </button>

                              <span className="min-w-4 text-center text-sm font-bold">
                                {item.qty || 1}
                              </span>

                              <button
                                type="button"
                                aria-label={`Increase ${item.name} quantity`}
                                onClick={() => dispatch(inc(item.id))}
                                className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-white"
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            <div className="flex items-center gap-1 sm:gap-3">
                              <p className="text-sm font-bold text-gray-900">
                                {money(
                                  Number(item.price) * Number(item.qty || 1)
                                )}
                              </p>

                              <button
                                type="button"
                                aria-label={`Remove ${item.name}`}
                                onClick={() => {
                                  dispatch(remove(item.id))

                                  toast.success(
                                    `${item.name} removed from your cart!`,
                                    {
                                      duration: 2500
                                    }
                                  )
                                }}
                                className="grid h-8 w-8 place-items-center rounded-full text-red-400 md:text-gray-700 transition hover:bg-red-50 hover:text-red-500"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="border-t border-gray-100 bg-[#faf8f2] p-4 sm:p-5">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Utensils size={18} className="text-[#174c37]" />
                    <span>Prepared with care, packed for your enjoyment.</span>
                  </div>
                </div>
              </section>

              {/* DELIVERY METHOD */}
              <section className="rounded-[1.75rem] border border-[#e9e4d9] bg-white p-5 shadow-sm sm:p-6">
                <h2 className="font-serif text-2xl font-bold">
                  How would you like your order?
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <DeliveryOption
                    selected={deliveryType === 'delivery'}
                    onClick={() => setDeliveryType('delivery')}
                    icon={<Truck size={22} />}
                    title="Home Delivery"
                    description={
                      subtotal >= FREE_DELIVERY_MINIMUM
                        ? 'Free delivery on this order'
                        : `Delivery fee ${money(DELIVERY_FEE)}`
                    }
                  />

                  <DeliveryOption
                    selected={deliveryType === 'pickup'}
                    onClick={() => setDeliveryType('pickup')}
                    icon={<Utensils size={22} />}
                    title="Restaurant Pickup"
                    description="Collect your order in person"
                  />
                </div>

                {deliveryType === 'delivery' &&
                  subtotal < FREE_DELIVERY_MINIMUM && (
                    <p className="mt-4 rounded-xl bg-[#faf8f2] p-3 text-xs leading-5 text-gray-500">
                      Add {money(FREE_DELIVERY_MINIMUM - subtotal)} more to
                      reach the demo free-delivery threshold.
                    </p>
                  )}
              </section>

              {/* CHECKOUT FORM */}
              {showCheckout && (
                <motion.section
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[1.75rem] border border-[#e9e4d9] bg-white p-5 shadow-sm sm:p-7"
                >
                  <div className="mb-6">
                    <span className="font-script text-xl text-[#b78a35]">
                      Almost there
                    </span>
                    <h2 className="mt-1 font-serif text-2xl font-bold">
                      Checkout Details
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Enter your details to prepare your demo order.
                    </p>
                  </div>

                  <form
                    id="checkout-form"
                    onSubmit={handleCheckout}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full Name">
                        <input
                          name="name"
                          value={orderForm.name}
                          onChange={updateOrderField}
                          required
                          autoComplete="name"
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </Field>

                      <Field label="Email Address">
                        <input
                          name="email"
                          type="email"
                          value={orderForm.email}
                          onChange={updateOrderField}
                          required
                          autoComplete="email"
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <Field label="Phone Number">
                      <input
                        name="phone"
                        type="tel"
                        value={orderForm.phone}
                        onChange={updateOrderField}
                        required
                        autoComplete="tel"
                        placeholder="Your contact number"
                        className={inputClass}
                      />
                    </Field>

                    {deliveryType === 'delivery' && (
                      <Field label="Delivery Address">
                        <textarea
                          name="address"
                          value={orderForm.address}
                          onChange={updateOrderField}
                          required
                          autoComplete="street-address"
                          rows={3}
                          placeholder="Street, area, city..."
                          className={inputClass}
                        />
                      </Field>
                    )}

                    <Field label="Order Notes (Optional)">
                      <textarea
                        name="notes"
                        value={orderForm.notes}
                        onChange={updateOrderField}
                        rows={2}
                        placeholder="Dietary requests or delivery instructions"
                        className={inputClass}
                      />
                    </Field>

                    <div>
                      <h3 className="mb-3 text-sm font-bold text-gray-800">
                        Payment Method
                      </h3>

                      <div className="space-y-3">
                        {PAYMENT_METHODS.map(method => {
                          const Icon = method.icon
                          const selected = paymentMethod === method.id

                          return (
                            <button
                              key={method.id}
                              type="button"
                              onClick={() => setPaymentMethod(method.id)}
                              className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition ${
                                selected
                                  ? 'border-[#174c37] bg-[#e8efe6]/60 ring-2 ring-[#174c37]/10'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div
                                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                                  selected
                                    ? 'bg-[#174c37] text-white'
                                    : 'bg-gray-100 text-gray-600'
                                }`}
                              >
                                <Icon size={21} />
                              </div>

                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-bold text-gray-900">
                                  {method.label}
                                </p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                  {method.description}
                                </p>
                              </div>

                              <span
                                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                                  selected
                                    ? 'border-[#174c37] bg-[#174c37] text-white'
                                    : 'border-gray-300'
                                }`}
                              >
                                {selected && <Check size={12} />}
                              </span>
                            </button>
                          )
                        })}
                      </div>

                      <p className="mt-3 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-800">
                        Payment options are visual placeholders. No payment is
                        collected by this demo.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#174c37] px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-[#103b2a]"
                    >
                      Continue with Demo Checkout
                      <ArrowRight size={17} />
                    </button>
                  </form>
                </motion.section>
              )}
            </div>

            {/* RIGHT: ORDER SUMMARY */}
            <aside className="lg:sticky lg:top-6">
              <div className="overflow-hidden rounded-[1.75rem] border border-[#e9e4d9] bg-white shadow-lg">
                <div className="bg-[#174c37] p-6 text-white sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                      <ShoppingBag size={22} />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl font-bold">
                        Order Summary
                      </h2>
                      <p className="mt-1 text-xs text-white/70">
                        A little something delicious
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 p-5 sm:p-6">
                  <div className="space-y-3">
                    <SummaryRow label="Subtotal" value={money(subtotal)} />

                    {discount > 0 && (
                      <SummaryRow
                        label="Discount"
                        value={`-${money(discount)}`}
                        highlight
                      />
                    )}

                    <SummaryRow
                      label="Delivery"
                      value={deliveryFee === 0 ? 'FREE' : money(deliveryFee)}
                      highlight={deliveryFee === 0}
                    />

                    <SummaryRow label="Estimated tax (5%)" value={money(tax)} />
                  </div>

                  <div className="border-t border-dashed border-gray-200 pt-5">
                    <form onSubmit={applyCoupon} className="space-y-3">
                      <label className="flex items-center gap-2 text-sm font-bold">
                        <Tag size={17} className="text-[#b78a35]" />
                        Have a promo code?
                      </label>

                      <div className="flex gap-2">
                        <input
                          value={coupon}
                          onChange={event => {
                            setCoupon(event.target.value)
                            setCouponMessage('')
                          }}
                          disabled={Boolean(appliedCoupon)}
                          placeholder="Enter code"
                          aria-label="Promo code"
                          className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-[#faf8f2] px-3 py-3 text-sm uppercase outline-none focus:border-[#174c37] disabled:opacity-60"
                        />

                        {appliedCoupon ? (
                          <button
                            type="button"
                            onClick={removeCoupon}
                            className="rounded-xl border border-gray-200 px-3 text-sm font-semibold text-red-500"
                          >
                            Remove
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="rounded-xl bg-[#e8efe6] px-4 text-sm font-bold text-[#174c37] transition hover:bg-[#dce8dc]"
                          >
                            Apply
                          </button>
                        )}
                      </div>

                      {couponMessage && (
                        <p
                          className={`text-xs leading-5 ${
                            appliedCoupon ? 'text-green-700' : 'text-red-500'
                          }`}
                        >
                          {couponMessage}
                        </p>
                      )}

                      <p className="text-xs text-gray-400">
                        Demo coupon: WELCOME10
                      </p>
                    </form>
                  </div>

                  <div className="rounded-2xl bg-[#faf8f2] p-4">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-sm text-gray-500">Total Amount</p>
                        <p className="mt-1 font-serif text-3xl font-bold text-[#174c37]">
                          {money(total)}
                        </p>
                      </div>

                      <span className="pb-1 text-xs text-gray-400">USD</span>
                    </div>
                  </div>

                  {!showCheckout ? (
                    <button
                      type="button"
                      onClick={() => {
                        setShowCheckout(true)
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        })
                      }}
                      className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#174c37] px-5 py-4 font-semibold text-white shadow-md transition hover:bg-[#103b2a]"
                    >
                      Proceed to Checkout
                      <ChevronRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      form="checkout-form"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#174c37] px-5 py-4 font-semibold text-white shadow-md transition hover:bg-[#103b2a]"
                    >
                      Continue with Demo Checkout
                      <ArrowRight size={18} />
                    </button>
                  )}

                  <div className="space-y-3 border-t border-gray-100 pt-5">
                    <TrustItem
                      icon={<LockKeyhole size={16} />}
                      text="Checkout UI prepared for secure integration"
                    />
                    <TrustItem
                      icon={<ShieldCheck size={16} />}
                      text="Payment gateway not connected yet"
                    />
                    <TrustItem
                      icon={<Clock size={16} />}
                      text="Order timing depends on restaurant confirmation"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-[#e9e4d9] bg-white p-5">
                <p className="font-serif text-lg font-bold">
                  Need a little help?
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Have a question about your order? Get in touch with our team.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#174c37] hover:underline"
                >
                  Contact Shopnix
                  <ArrowRight size={15} />
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  )
}

function ProgressStep({ number, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-2 ${active ? 'text-[#174c37]' : 'text-gray-400'}`}
    >
      <span
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold ${
          active ? 'bg-[#174c37] text-white' : 'bg-gray-100 text-gray-500'
        }`}
      >
        {number}{' '}
      </span>{' '}
      <span className="hidden text-xs font-semibold sm:block">
        {label}{' '}
      </span>{' '}
    </div>
  )
}

function DeliveryOption({ selected, onClick, icon, title, description }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
        selected
          ? 'border-[#174c37] bg-[#e8efe6]/50 ring-2 ring-[#174c37]/10'
          : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
          selected ? 'bg-[#174c37] text-white' : 'bg-gray-100 text-gray-600'
        }`}
      >
        {icon}{' '}
      </div>{' '}
      <div className="min-w-0 flex-1">
        {' '}
        <p className="text-sm font-bold text-gray-900">{title}</p>{' '}
        <p className="mt-1 text-xs leading-5 text-gray-500">
          {description}
        </p>{' '}
      </div>
      <span
        className={`mt-1 h-4 w-4 shrink-0 rounded-full border-4 ${
          selected ? 'border-[#174c37]' : 'border-gray-300'
        }`}
      />{' '}
    </button>
  )
}

function SummaryRow({ label, value, highlight = false }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      {' '}
      <span className="text-gray-500">{label}</span>
      <span
        className={`font-semibold ${
          highlight ? 'text-[#174c37]' : 'text-gray-800'
        }`}
      >
        {value}{' '}
      </span>{' '}
    </div>
  )
}

function TrustItem({ icon, text }) {
  return (
    <div className="flex items-start gap-2 text-xs leading-5 text-gray-500">
      {' '}
      <span className="mt-0.5 shrink-0 text-[#174c37]">{icon}</span>{' '}
      <span>{text}</span>{' '}
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="block space-y-2">
      {' '}
      <span className="text-sm font-semibold text-gray-700">{label}</span>
      {children}{' '}
    </label>
  )
}

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-[#faf8f2] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#174c37] focus:ring-4 focus:ring-[#174c37]/10'
