import { motion } from 'motion/react'
import { Link } from 'react-router'
import { Plus } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { add } from '../store/store'

export function DishCard({ d }) {
  const dp = useDispatch()

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-md"
    >
      <Link
        to={`/menu/${d.id}`}
        className="relative block h-44 overflow-hidden"
      >
        <img
          src={d.img}
          alt={d.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {d.tag && (
          <span className="absolute left-2 top-2 rounded bg-red-600 px-2 py-0.5 text-[11px] text-white">
            {d.tag}
          </span>
        )}
      </Link>

      <div className="p-4">
        <h3 className="font-serif text-lg">{d.name}</h3>

        <p className="text-xs text-gray-500">{d.desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <b>${d.price}.00</b>

          <motion.button
            type="button"
            aria-label={`Add ${d.name}`}
            whileHover={{ rotate: 90, scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => dp(add(d))}
            className="grid h-8 w-8 place-items-center rounded-full bg-gold text-deep"
          >
            <Plus size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
