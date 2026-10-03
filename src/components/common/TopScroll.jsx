import { ArrowUp } from "lucide-react"
import { motion , AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"

function TopScroll() {
  const [s, setS] = useState(false)
  useEffect(() => {
    const f = () => setS(scrollY > 500)
    addEventListener('scroll', f)
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <AnimatePresence>
      {s && (
        <motion.button
          aria-label="Back to top"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          whileHover={{ y: -4, scale: 1.1 }}
          onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gold text-deep shadow-xl"
        >
          <ArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default TopScroll;
