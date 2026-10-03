import { motion , AnimatePresence } from "motion/react"
import { Link, NavLink, useLocation } from "react-router"
import { Menu, ShoppingBag, X } from "lucide-react"
import { GiForkKnifeSpoon } from "react-icons/gi"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Btn } from "../Btn"

const links = [
  ['/', 'Home'],
  ['/menu', 'Menu'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
  ['/cart', 'Cart']
]
function Navbar() {
  const [open, setOpen] = useState(false),
    n = useSelector(s => s.cart.items.reduce((a, b) => a + b.qty, 0)),
    { pathname } = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  return (
    <header className="sticky top-0 z-40 bg-deep/95 backdrop-blur text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-3 lg:flex lg:justify-between">
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="justify-self-start lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
        <Link
          to="/"
          className="flex items-center gap-2 justify-self-center font-serif text-xl"
        >
          <GiForkKnifeSpoon className="text-gold" size={26} />
          Shopnix
        </Link>
        <nav className="hidden gap-8 text-sm lg:flex">
          {links.slice(0, 4).map(([t, l]) => (
            <NavLink
              key={t}
              to={t}
              className={({ isActive }) =>
                `relative py-1 transition hover:text-gold ${isActive ? 'text-gold after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-gold' : ''}`
              }
            >
              {l}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4 justify-self-end">
          <Link to="/cart" className="relative" aria-label="Cart">
            <ShoppingBag size={20} />
            {n > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-gold text-[10px] text-deep">
                {n}
              </span>
            )}
          </Link>
          <span className="hidden sm:block">
            <Btn to="/contact">Book a Table</Btn>
          </span>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col items-center gap-4 pb-6 pt-2">
              {links.map(([t, l]) => (
                <Link key={t} to={t} className="hover:text-gold">
                  {l}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar;
