import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Link, NavLink, useLocation } from 'react-router'
import {
  ArrowRight,
  Heart,
  Home,
  Info,
  LogIn,
  Mail,
  Menu,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
  X
} from 'lucide-react'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { useSelector } from 'react-redux'

const links = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/menu', label: 'Our Menu', icon: UtensilsCrossed },
  { to: '/about', label: 'About Us', icon: Info },
  { to: '/contact', label: 'Contact', icon: Mail }
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const cartCount = useSelector(state =>
    state.cart.items.reduce((total, item) => total + item.qty, 0)
  )

  // Connect this to your real wishlist Redux state when available.
  const wishlistCount = useSelector(state => state.wishlist?.items?.length ?? 0)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent background scrolling while the mobile drawer is open.
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = event => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  const linkClass = ({ isActive }) =>
    `relative flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'bg-gold/10 text-gold'
        : 'text-white/75 hover:bg-white/5 hover:text-gold'
    }`

  return (
    <>
      {/* Main Navbar */}{' '}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-deep/95 text-white shadow-lg shadow-black/5 backdrop-blur-xl">
        {' '}
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-gold/40 hover:bg-gold/10 lg:hidden"
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2.5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-deep shadow-lg shadow-gold/10 transition-transform duration-300 group-hover:rotate-[-8deg]">
              <GiForkKnifeSpoon size={25} />
            </span>

            <span className="font-serif text-xl font-bold tracking-tight sm:text-2xl">
              Shopnix
              <span className="text-gold">.</span>
              <span className="mt-0.5 hidden text-[9px] font-normal uppercase tracking-[0.28em] text-white/45 sm:block">
                Food & Flavor
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2.5 text-sm font-medium transition duration-300 ${
                    isActive
                      ? 'bg-gold/10 text-gold'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="shopnix-active-nav"
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold"
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 30
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Wishlist */}
            <Link
              to="/wishlist"
              aria-label={`Wishlist, ${wishlistCount} items`}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-white/10 hover:text-gold"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[9px] font-bold text-deep">
                  {wishlistCount > 99 ? '99+' : wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              aria-label={`Shopping cart, ${cartCount} items`}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-white/10 hover:text-gold"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[9px] font-bold text-deep">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>

            {/* Login / Register */}
            <div className="hidden items-center gap-2 sm:flex">
              <Link
                to="/login"
                className="rounded-full px-3 py-2 text-sm font-semibold text-white/80 transition hover:text-gold"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-bold text-deep shadow-md shadow-gold/10 transition hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Sign Up
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Drawer + Backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark overlay */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 z-50 cursor-default bg-black/65 backdrop-blur-[3px] lg:hidden"
            />

            {/* Left-side sliding drawer */}
            <motion.aside
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 32,
                mass: 0.8
              }}
              className="fixed inset-y-0 left-0 z-[60] flex w-[min(88vw,360px)] flex-col overflow-y-auto border-r border-white/10 bg-deep text-white shadow-2xl lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-deep">
                    <GiForkKnifeSpoon size={27} />
                  </span>

                  <span>
                    <span className="block font-serif text-xl font-bold">
                      Shopnix<span className="text-gold">.</span>
                    </span>
                    <span className="mt-0.5 block text-[10px] uppercase tracking-[0.2em] text-white/45">
                      Food & Flavor
                    </span>
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-300"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Welcome Banner */}
              <div className="mx-4 mt-5 rounded-2xl border border-gold/15 bg-gradient-to-br from-gold/15 via-orange-500/5 to-transparent p-4">
                <div className="mb-2 flex items-center gap-2 text-gold">
                  <Sparkles size={17} />
                  <span className="text-xs font-bold uppercase tracking-[0.15em]">
                    Taste Something Special
                  </span>
                </div>

                <p className="text-sm leading-6 text-white/65">
                  Discover delicious meals made to brighten your day.
                </p>
              </div>

              {/* Routes */}
              <nav
                aria-label="Mobile navigation links"
                className="flex-1 px-4 py-6"
              >
                <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
                  Explore Shopnix
                </p>

                <div className="space-y-1.5">
                  {links.map(({ to, label, icon: Icon }, index) => (
                    <motion.div
                      key={to}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + index * 0.055,
                        duration: 0.25
                      }}
                    >
                      <NavLink
                        to={to}
                        end={to === '/'}
                        onClick={closeMenu}
                        className={linkClass}
                      >
                        {({ isActive }) => (
                          <>
                            <Icon size={19} />
                            <span className="flex-1">{label}</span>
                            {isActive && (
                              <motion.span
                                layoutId="shopnix-drawer-active"
                                className="h-2 w-2 rounded-full bg-gold"
                              />
                            )}
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>

                <p className="mb-3 mt-8 px-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
                  Your Account
                </p>

                <div className="space-y-1.5">
                  <Link
                    to="/wishlist"
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-gold"
                  >
                    <Heart size={19} />
                    <span className="flex-1">My Wishlist</span>
                    {wishlistCount > 0 && (
                      <span className="rounded-full bg-gold/15 px-2 py-0.5 text-xs text-gold">
                        {wishlistCount}
                      </span>
                    )}
                  </Link>

                  <Link
                    to="/cart"
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-gold"
                  >
                    <ShoppingBag size={19} />
                    <span className="flex-1">Shopping Cart</span>
                    {cartCount > 0 && (
                      <span className="rounded-full bg-gold/15 px-2 py-0.5 text-xs text-gold">
                        {cartCount} items
                      </span>
                    )}
                  </Link>
                </div>
              </nav>

              {/* Drawer Footer */}
              <div className="space-y-3 border-t border-white/10 p-5">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-gold/50 hover:text-gold"
                >
                  <LogIn size={18} />
                  Login to Your Account
                </Link>

                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-bold text-deep transition hover:bg-amber-300"
                >
                  Create an Account
                  <ArrowRight size={17} />
                </Link>

                <p className="pt-2 text-center text-[11px] text-white/35">
                  Made with love for food lovers.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
