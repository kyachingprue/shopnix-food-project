import { Star } from 'lucide-react'

export const Stars = () => (
  <span className="flex text-gold">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} fill="currentColor" />
    ))}
  </span>
)
