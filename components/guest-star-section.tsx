import { GraduationCap } from "lucide-react"

const guestStar = {
  id: 1,
  name: "Amadeo Yesa",
  profession:
    "3rd Winner Clash of Champions Season 2 by Ruangguru (2025), Highest UTBK-SNBT Score in Indonesia (2023)",
  summary:
    "Amadeo Yesa merupakan seorang mahasiswa S1 Teknik Informatika di Institut Teknologi Sepuluh Nopember (ITS) Surabaya, lahir pada 25 Juni 2005, yang memiliki rekam jejak prestasi akademik yang sangat impresif, termasuk meraih Skor UTBK-SNBT Tertinggi di Indonesia pada tahun 2023, menjadi Juara 3 Clash of Champions Season 2 oleh Ruangguru (2025), serta memenangkan Medali Perak dalam National Science Olympiad in Chemistry (OSN) tahun 2022, di mana ia juga meraih Juara 1 NITRON UM dan Juara 5 National Logic Competition ITS.",
  profileUrl: "https://www.instagram.com/amadeo_yesa",
}

export default function GuestStarSection() {
  return (
    <section
      id="guest-star"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-amber-100/60 via-gold-100/50 to-amber-50/60 border-y border-gold-300"
    >
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-14">
          <h3 className="font-cursive text-3xl text-gold-700">Bintang Tamu Spesial</h3>
          <h2 className="font-cinzel text-4xl md:text-5xl font-extrabold gold-text-gradient mb-3">
            OUR GUEST STAR
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Bersiaplah untuk penampilan yang paling dinanti!
          </p>
        </div>

        {/* Guest Star Card */}
        <div className="pillar-card-ultra p-8 md:p-12 flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Left Placeholder Frame (Tanpa Foto/Aset AI) */}
          <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-2xl border-4 border-gold-400 bg-gradient-to-br from-amber-50 to-gold-200/70 shadow-xl flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-white/90 border border-gold-400 flex items-center justify-center text-gold-600 mb-4 shadow-sm">
              <GraduationCap className="w-10 h-10" />
            </div>
            <span className="font-cinzel font-bold text-sm text-gold-800 tracking-wider uppercase">
              Guest Star Profile
            </span>
            <span className="text-xs text-slate-500 mt-1">
              Slot Foto Bintang Tamu
            </span>
          </div>

          {/* Right Text Content */}
          <div className="flex-grow text-center lg:text-left space-y-6 w-full">
            {/* Name and Profession Card */}
            <div className="bg-white/90 rounded-2xl p-6 shadow-md border-2 border-gold-300">
              <h3 className="font-cinzel font-extrabold text-2xl md:text-3xl text-gold-800 mb-2">
                {guestStar.name}
              </h3>
              <p className="text-slate-700 text-sm md:text-base font-semibold">
                {guestStar.profession}
              </p>
            </div>

            {/* Summary Card */}
            <div className="bg-white/90 rounded-2xl p-6 shadow-md border-2 border-gold-300">
              <h4 className="font-cinzel font-extrabold text-xl text-gold-800 mb-3">
                SUMMARY
              </h4>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify">
                {guestStar.summary}
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="pt-2">
              <a
                href={guestStar.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-gold-royal py-3.5 px-8 rounded-full text-xs md:text-sm"
              >
                Lihat Profil Lengkap
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
