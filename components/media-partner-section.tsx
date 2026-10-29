"use client"

import { Star } from "lucide-react"

const mediaPartners = [
  "Media Partner 1",
  "Media Partner 2",
  "Media Partner 3",
  "Media Partner 4",
  "Media Partner 5",
  "Media Partner 6",
  "Media Partner 7",
  "Media Partner 8",
  "Media Partner 9",
  "Media Partner 10",
  "Media Partner 11",
  "Media Partner 12",
  "Media Partner 13",
  "Media Partner 14",
  "Media Partner 15",
  "Media Partner 16",
  "Sponsor 1",
  "Sponsor 2",
  "Sponsor 3",
  "Sponsor 4",
]

export default function MediaPartnerSection() {
  return (
    <section
      id="media-partner"
      className="py-20 bg-gradient-to-b from-amber-50/90 to-amber-100/70 border-t-2 border-gold-300 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Star className="w-7 h-7 text-gold-500 animate-spin-slow" />
            <h2 className="font-cinzel text-3xl md:text-5xl font-extrabold gold-text-gradient">
              MEDIA PARTNER &amp; SPONSOR
            </h2>
            <Star className="w-7 h-7 text-gold-500 animate-spin-slow" />
          </div>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Terima kasih kepada semua media partner dan sponsor yang telah mendukung acara kami!
          </p>
        </div>

        {/* Marquee Container (Tanpa Foto/Aset AI) */}
        <div className="py-8 px-4 bg-white/75 rounded-2xl border-2 border-gold-400/60 shadow-lg marquee-wrapper">
          <div className="animate-marquee gap-4 items-center">
            {[...mediaPartners, ...mediaPartners].map((name, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 mx-2 rounded-xl bg-white border border-gold-300 shadow-sm flex items-center justify-center px-3 text-center"
              >
                <span className="font-cinzel font-bold text-xs text-gold-800">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
