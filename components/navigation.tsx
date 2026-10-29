"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Beranda", href: "#beranda" },
    { label: "About", href: "#about" },
    { label: "Guest Star", href: "#guest-star" },
    { label: "Ticketing", href: "#ticketing-section" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Media Partner", href: "#media-partner" },
  ]

  return (
    <nav
      className={`px-6 py-4 sticky top-0 z-50 transition-all duration-300 border-b border-gold-300/60 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white/75 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo Section (Tanpa Foto/Aset AI - Siap Diisi Logo Lokal) */}
        <a href="#beranda" className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div
              className="w-10 h-10 rounded-full bg-gold-50 border border-gold-400 flex items-center justify-center text-gold-700 font-cinzel font-bold text-xs shadow-sm"
              title="Logo HIMAJA"
            >
              HJ
            </div>
            <div
              className="w-10 h-10 rounded-full bg-gold-50 border border-gold-400 flex items-center justify-center text-gold-700 font-cinzel font-bold text-xs shadow-sm"
              title="Logo Rangkayo"
            >
              RK
            </div>
            <div
              className="w-10 h-10 rounded-full bg-gold-50 border border-gold-400 flex items-center justify-center text-gold-700 font-cinzel font-bold text-xs shadow-sm"
              title="Logo Sriwijaya Besanjo"
            >
              SB
            </div>
            <div
              className="hidden sm:flex w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-white border border-gold-500 items-center justify-center font-cinzel font-bold text-xs shadow-sm"
              title="Logo Antaresta Altiora"
            >
              AA
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel font-extrabold text-xs sm:text-sm tracking-wider text-gold-800 leading-tight">
              SRIWIJAYA BESANJO
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-600">
              ANTARESTA ALTIORA 2027
            </span>
          </div>
        </a>

        {/* Navigation Menu - Desktop */}
        <div className="hidden md:flex items-center space-x-7 font-cinzel text-xs font-bold tracking-wider">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-800 hover:text-gold-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="text-gold-800 hover:text-gold-600 w-10 h-10 rounded-full border border-gold-300 flex items-center justify-center bg-white/80"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gold-300 shadow-lg py-5">
          <div className="flex flex-col items-center space-y-4 font-cinzel font-bold text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={toggleMobileMenu}
                className="text-slate-800 hover:text-gold-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
