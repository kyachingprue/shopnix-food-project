import { motion } from 'motion/react'
import { Link } from 'react-router'

export function Btn({ to, children, onClick, dark, className = '' }) {
  const C = to ? Link : 'button'

  return (
    <motion.span
      whileHover={{ y: -3, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="inline-block"
    >
      <C
        {...(to ? { to } : {})}
        onClick={onClick}
        className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold shadow-lg ${
          dark ? 'bg-forest text-white' : 'bg-gold text-deep'
        } ${className}`}
      >
        <span className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/50 transition-all duration-700 group-hover:left-[150%]" />

        <span className="relative flex items-center gap-2">{children}</span>
      </C>
    </motion.span>
  )
}
