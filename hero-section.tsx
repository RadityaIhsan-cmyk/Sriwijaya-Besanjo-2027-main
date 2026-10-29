"use client"

import { useState, useEffect } from "react"
import { Crown, Landmark } from "lucide-react"

const rotatingTexts = [
  "Antaresta Altiora",
  "Sriwijaya Besanjo 2027",
  "Meniti Asa, Taklukan Cakrawala",
]

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let timeout: ReturnType<typeof setTimeout> | undefined
    const interval = setInterval(() => {
      setIsVisible(false)
      timeout = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
        setIsVisible(true)
      }, 300)
    }, 4000)

    return () => {
      clearInterval(interval)
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  return (
    <section
      id="beranda"
      className="relative overflow-hidden flex items-center"
    >
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gold-400 rounded-full opacity-15 blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gold-500 rounded-full opacity-15 blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold-300 rounded-full opacity-20 blur-lg animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-gold-400 shadow-sm">
              <Crown className="w-4 h-4 text-gold-600" />
              <span className="text-xs font-bold text-gold-800 uppercase tracking-widest">
                HIMAJA UNSRI Present
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="font-cursive text-4xl md:text-5xl text-gold-700">
                Come Join Us In
              </p>
              <h1
                className="grid items-center font-cinzeldec font-extrabold uppercase"
                aria-label="Antaresta Altiora — Sriwijaya Besanjo 2027 — Membuka Gerbang Menyambut Peluang"
              >
                {rotatingTexts.map((text, index) => (
                  <span
                    key={text}
                    aria-hidden="true"
                    className={`col-start-1 row-start-1 block min-w-0 break-words gold-text-gradient transition-[opacity,transform] duration-300 motion-reduce:transition-none ${
                      text.length > 24
                        ? "text-[clamp(1.5rem,3.4vw,3rem)] leading-tight"
                        : "scalable-title"
                    } ${
                      index === currentTextIndex && isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    {text}
                  </span>
                ))}
              </h1>
            </div>

            {/* Call to Action Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <a
                href="#ticketing-section"
                className="btn-gold-royal py-4 px-8 rounded-full text-sm text-center"
              >
                Daftar Sekarang
              </a>
            </div>

            {/* Event Info */}
            <div className="flex flex-wrap gap-6 text-gold-800 pt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                <span className="text-sm md:text-base font-semibold">
                  Kegiatan Unik
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                <span className="text-sm md:text-base font-semibold">
                  Petualangan Seru
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                <span className="text-sm md:text-base font-semibold">
                  Pengalaman Berkesan
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Mascot / Emblem Card Placeholder (Tanpa Foto/Aset AI) */}
          <div className="flex justify-center lg:justify-end pt-8 lg:pt-0">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] rounded-3xl pillar-card-ultra border-4 border-gold-400/60 shadow-xl flex flex-col items-center justify-center p-8 text-center animate-float">
              <div className="w-24 h-24 rounded-full bg-gold-100 border-2 border-gold-400 flex items-center justify-center text-gold-600 mb-5 shadow-inner">
                <Landmark className="w-12 h-12" />
              </div>
              <span className="text-xs font-cinzel tracking-[0.2em] uppercase text-gold-700 font-bold mb-1">
                Official Theme Emblem
              </span>
              <h3 className="font-cinzeldec font-extrabold text-2xl text-slate-900 mb-2">
                ANTARESTA ALTIORA
              </h3>
              <p className="font-cursive text-2xl text-gold-700">
                &ldquo;Meniti Asa, Taklukan Cakrawala&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
