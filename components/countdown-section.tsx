"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock } from "lucide-react"

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2027-01-25T08:00:00").getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)
    return () => clearInterval(timer)
  }, [])

  const CountdownCard = ({ value, label }: { value: number; label: string }) => (
    <div className="relative group">
      <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-gold-300 transition-all duration-300 transform group-hover:scale-105 text-center">
        <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 font-cinzel gold-text-gradient">
          {value.toString().padStart(2, "0")}
        </div>
        <div className="text-gold-800 font-bold text-sm md:text-base uppercase tracking-wider font-cinzel">
          {label}
        </div>
      </div>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold-300 rounded-full opacity-80"></div>
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gold-500 rounded-full opacity-60"></div>
    </div>
  )

  return (
    <section
      id="countdown"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-[#7a5207] via-[#9c6b12] to-[#5e3d04] text-white border-y-4 border-gold-400"
    >
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-12">
          {/* Main Title */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Clock className="w-8 h-8 md:w-10 md:h-10 text-gold-300 animate-pulse" />
            <h2 className="font-cinzeldec text-3xl md:text-5xl text-white font-extrabold tracking-wider">
              MENUJU MAIN EVENT
            </h2>
            <Clock className="w-8 h-8 md:w-10 md:h-10 text-gold-300 animate-pulse" />
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-12">
            <CountdownCard value={timeLeft.days} label="Hari" />
            <CountdownCard value={timeLeft.hours} label="Jam" />
            <CountdownCard value={timeLeft.minutes} label="Menit" />
            <CountdownCard value={timeLeft.seconds} label="Detik" />
          </div>

          {/* Event Location and Date */}
          <div className="flex items-center justify-center gap-3 bg-white/15 rounded-full px-8 py-4 border border-white/20 max-w-md mx-auto">
            <Calendar className="w-6 h-6 text-gold-300" />
            <span className="text-white text-lg md:text-xl font-semibold font-cinzel">
              Jambi, 25 Januari 2027
            </span>
          </div>

          {/* Additional Info */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6 text-white/90">
            <div className="flex items-center gap-2 bg-white/15 rounded-full px-6 py-3 border border-white/15">
              <div className="w-2 h-2 bg-gold-300 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base font-medium">Event Spektakuler</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 rounded-full px-6 py-3 border border-white/15">
              <div className="w-2 h-2 bg-gold-300 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base font-medium">Pengalaman Tak Terlupakan</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 rounded-full px-6 py-3 border border-white/15">
              <div className="w-2 h-2 bg-gold-300 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base font-medium">Jangan Sampai Terlewat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
      </div>
    </section>
  )
}
