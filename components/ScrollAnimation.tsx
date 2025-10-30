import React, { useEffect, useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in'
  delay?: number
  className?: string
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (elementRef.current) {
              elementRef.current.classList.add('animate-' + animation)
            }
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [animation, delay])

  return (
    <div
      ref={elementRef}
      className={`opacity-0 ${className}`}
    >
      {children}
    </div>
  )
}

