import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const MouseFollower = () => {
  const followerRef = useRef(null)
  const innerRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const follower = followerRef.current
    const inner = innerRef.current
    const label = labelRef.current

    if (!follower || !inner || !label) return

    gsap.set(follower, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      opacity: 0
    })

    const moveX = gsap.quickTo(follower, 'x', {
      duration: 0.45,
      ease: 'power3.out'
    })

    const moveY = gsap.quickTo(follower, 'y', {
      duration: 0.45,
      ease: 'power3.out'
    })

    const handleMouseMove = e => {
      moveX(e.clientX)
      moveY(e.clientY)

      gsap.to(follower, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseOver = e => {
      const target = e.target.closest('[data-cursor]')

      if (!target) {
        resetCursor()
        return
      }

      const type = target.dataset.cursor
      const text = target.dataset.cursorText || ''

      activateCursor(type, text)
    }

    const activateCursor = (type, text) => {
      gsap.killTweensOf([follower, inner, label])

      gsap.to(follower, {
        scale: 1.5,
        duration: 0.4,
        ease: 'back.out(1.7)'
      })

      gsap.to(inner, {
        scale: 1,
        duration: 0.4
      })

      label.textContent = text

      if (type === 'text') {
        gsap.to(inner, {
          width: 80,
          height: 80,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderColor: 'rgba(251, 146, 60, 0.5)',
          duration: 0.4
        })

        gsap.to(label, {
          opacity: 1,
          scale: 1,
          duration: 0.3
        })
      }

      if (type === 'image') {
        gsap.to(inner, {
          width: 105,
          height: 105,
          borderRadius: '50%',
          backgroundColor: 'rgba(251, 146, 60, 0.15)',
          borderColor: 'rgba(251, 146, 60, 0.7)',
          duration: 0.4
        })

        gsap.to(label, {
          opacity: 1,
          scale: 1,
          duration: 0.3
        })
      }

      if (type === 'button') {
        gsap.to(inner, {
          width: 85,
          height: 85,
          borderRadius: '50%',
          backgroundColor: 'rgba(251, 146, 60, 0.2)',
          borderColor: 'rgba(251, 146, 60, 0.8)',
          duration: 0.35
        })

        gsap.to(label, {
          opacity: 1,
          scale: 1,
          duration: 0.3
        })
      }

      if (type === 'cart') {
        gsap.to(inner, {
          width: 95,
          height: 95,
          borderRadius: '50%',
          backgroundColor: 'rgba(34, 197, 94, 0.15)',
          borderColor: 'rgba(34, 197, 94, 0.6)',
          duration: 0.4
        })

        gsap.to(label, {
          opacity: 1,
          scale: 1,
          duration: 0.3
        })
      }
    }

    const resetCursor = () => {
      gsap.to(follower, {
        scale: 1,
        duration: 0.35,
        ease: 'power2.out'
      })

      gsap.to(inner, {
        width: 48,
        height: 48,
        borderRadius: '50%',
        backgroundColor: 'rgba(251, 146, 60, 0.1)',
        borderColor: 'rgba(251, 146, 60, 0.4)',
        duration: 0.35
      })

      gsap.to(label, {
        opacity: 0,
        scale: 0.7,
        duration: 0.2
      })
    }

    const handleMouseLeave = () => {
      gsap.to(follower, {
        scale: 0,
        opacity: 0,
        duration: 0.3
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={followerRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
    >
      {/* Glow */}
      <div className="absolute -inset-4 rounded-full bg-orange-400/20 blur-2xl" />

      {/* Cursor */}
      <div
        ref={innerRef}
        className="relative grid h-12 w-12 place-items-center rounded-full border border-orange-300/40 bg-orange-400/10 backdrop-blur-md"
      >
        {/* Label */}
        <span
          ref={labelRef}
          className="absolute whitespace-nowrap text-[9px] font-bold uppercase tracking-wider text-white opacity-0"
        />

        {/* Dot */}
        <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.9)]" />
      </div>
    </div>
  )
}

export default MouseFollower
