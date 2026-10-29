"use client"

import { useEffect, useRef } from "react"
import HeroSection from "../hero-section"
import CountdownSection from "./countdown-section"

export default function HeroCountdownStack() {
  const stackRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const countdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stack = stackRef.current
    const hero = heroRef.current
    const countdown = countdownRef.current
    if (!stack || !hero || !countdown) return
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    let navHeight = 0

    const update = () => {
      frame = 0
      // Follow actual scroll, including the existing weighted wheel glide.
      const distance = Math.max(1, window.innerHeight - navHeight)
      const progress = reducedMotion.matches ? 0 : Math.max(0, Math.min(1,
        (window.innerHeight - countdown.getBoundingClientRect().top) / distance))
      const eased = progress * progress * (3 - 2 * progress)
      const shift = Math.min(80, window.innerHeight * 0.1) * eased
      hero.style.setProperty("--hero-scroll-shift", `${-shift}px`)
      hero.style.setProperty("--hero-scroll-blur", `${eased * 8}px`)
    }
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    const navigation = stack.closest("main")?.querySelector("nav")
    const measure = () => {
      navHeight = navigation?.getBoundingClientRect().height ?? 0
      stack.style.setProperty("--stack-nav-height", `${navHeight}px`)
      scheduleUpdate()
    }
    const observer = new ResizeObserver(measure)
    observer.observe(hero)
    observer.observe(stack)
    if (navigation) observer.observe(navigation)
    window.addEventListener("resize", measure)
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    reducedMotion.addEventListener("change", scheduleUpdate)
    measure()
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", scheduleUpdate)
      reducedMotion.removeEventListener("change", scheduleUpdate)
      observer.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [])

  return (
    <div ref={stackRef} className="hero-countdown-stack">
      <div ref={heroRef} className="stack-hero">
        <HeroSection />
      </div>
      <div ref={countdownRef} className="stack-countdown">
        <CountdownSection />
      </div>
    </div>
  )
}
