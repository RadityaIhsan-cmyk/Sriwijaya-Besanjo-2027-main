import type React from "react"
import {
  Cinzel,
  Cinzel_Decorative,
  Great_Vibes,
  Plus_Jakarta_Sans,
} from "next/font/google"
import "./globals.css"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
})

const cinzelDec = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-cinzel-dec",
  display: "swap",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata = {
  title: "Sriwijaya Besanjo 2027 - Antaresta Altiora",
  description:
    "Agenda tahunan HIMAJA UNSRI - Antaresta Altiora: Meniti Asa, Taklukan Cakrawala.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`scroll-smooth ${cinzel.variable} ${cinzelDec.variable} ${greatVibes.variable} ${jakarta.variable}`}
    >
      <body className="royal-sky-bg text-slate-800 font-sans selection:bg-gold-300 selection:text-slate-900 overflow-x-clip">
        {children}
      </body>
    </html>
  )
}
