"use client"

import { useEffect, useRef } from "react"
import type { HTMLAttributes, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type AnimatedContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  distance?: number
  direction?: "vertical" | "horizontal"
  reverse?: boolean
  duration?: number
  ease?: string
  initialOpacity?: number
  animateOpacity?: boolean
  scale?: number
  threshold?: number
  delay?: number
  stagger?: number
  trigger?: "scroll" | "mount"
}

/** Reveal a section as it enters the viewport. Respects reduced-motion preferences. */
export default function AnimatedContent({
  children,
  distance = 42,
  direction = "vertical",
  reverse = false,
  duration = 0.85,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.12,
  delay = 0,
  stagger = 0,
  trigger = "scroll",
  className = "",
  ...props
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) {
      gsap.set(element, { x: 0, y: 0, scale: 1, opacity: 1, visibility: "visible" })
      return
    }

    const axis = direction === "horizontal" ? "x" : "y"
    const offset = reverse ? -distance : distance
    const start = `${(1 - threshold) * 100}%`
    const targets = stagger ? Array.from(element.children) : element

    const context = gsap.context(() => {
      gsap.set(targets, {
        [axis]: offset,
        scale,
        opacity: animateOpacity ? initialOpacity : 1,
      })

      gsap.to(targets, {
        [axis]: 0,
        scale: 1,
        opacity: 1,
        duration,
        ease,
        delay,
        stagger,
        clearProps: "transform,opacity",
        ...(trigger === "scroll" && {
          scrollTrigger: {
            trigger: element,
            start: `top ${start}`,
            once: true,
          },
        }),
      })
    }, element)

    return () => context.revert()
  }, [animateOpacity, delay, direction, distance, duration, ease, initialOpacity, reverse, scale, stagger, threshold, trigger])

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
}
