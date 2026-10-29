import { Phone, Mail, ChevronRight } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="bg-[#FAF3E0] py-16 text-slate-800 border-t-4 border-gold-500 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="w-20 h-20 rounded-full border-4 border-gold-500 bg-white shadow-md flex items-center justify-center font-cinzel font-extrabold text-2xl text-gold-700">
              SB
            </div>
            <h3 className="font-cinzel font-extrabold text-xl text-gold-800 text-center md:text-left">
              SRIWIJAYA BESANJO
            </h3>
            <p className="text-sm text-center md:text-left text-slate-600">
              Meningkatkan mutu pendidikan dan mempererat persaudaraan.
            </p>
          </div>

          {/* Kolom 2: Alamat */}
          <div className="space-y-4">
            <h3 className="font-cinzel font-extrabold text-xl text-gold-800">
              Alamat
            </h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-gold-700 mb-1">Kampus Utama</h4>
                <p className="leading-relaxed">
                  Jl. Raya Palembang-Prabumulih KM. 32, Indralaya Indah, Kec. Indralaya, Kabupaten Ogan Ilir, Sumatera Selatan (30862)
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gold-700 mb-1">Sekretariat</h4>
                <p className="leading-relaxed">
                  Perumahan Golden Premier, Kec. Indralaya Utara, Kab. Ogan Ilir, Sumatera Selatan (30662)
                </p>
              </div>
            </div>
          </div>

          {/* Kolom 3: Kontak */}
          <div className="space-y-4">
            <h3 className="font-cinzel font-extrabold text-xl text-gold-800">
              Kontak
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-700 mt-1" />
                <div>
                  <h4 className="font-bold text-gold-700 mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/6285709880781"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-700 hover:text-gold-600 transition-colors"
                  >
                    +62 857-0988-0781 (Juliana Imama)
                  </a>
                  <a
                    href="https://wa.me/6289652017370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-700 hover:text-gold-600 transition-colors"
                  >
                    +62 896-5201-7370 (Rachma Aulya Furqany)
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-700 mt-1" />
                <div>
                  <h4 className="font-bold text-gold-700 mb-1">Email</h4>
                  <a
                    href="mailto:sriwijayabesanjo@gmail.com"
                    className="text-slate-700 hover:text-gold-600 transition-colors"
                  >
                    sriwijayabesanjo@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom 4: Navigasi */}
          <div className="space-y-4">
            <h3 className="font-cinzel font-extrabold text-xl text-gold-800">
              Navigasi
            </h3>
            <div className="space-y-2.5 text-sm">
              <a
                href="#beranda"
                className="flex items-center gap-2 text-slate-700 hover:text-gold-600"
              >
                <ChevronRight className="w-4 h-4 text-gold-600" /> Beranda
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 text-slate-700 hover:text-gold-600"
              >
                <ChevronRight className="w-4 h-4 text-gold-600" /> About
              </a>
              <a
                href="#guest-star"
                className="flex items-center gap-2 text-slate-700 hover:text-gold-600"
              >
                <ChevronRight className="w-4 h-4 text-gold-600" /> Guest Star
              </a>
              <a
                href="#ticketing-section"
                className="flex items-center gap-2 text-slate-700 hover:text-gold-600"
              >
                <ChevronRight className="w-4 h-4 text-gold-600" /> Get Ticket
              </a>
              <a
                href="#gallery"
                className="flex items-center gap-2 text-slate-700 hover:text-gold-600"
              >
                <ChevronRight className="w-4 h-4 text-gold-600" /> Gallery
              </a>
            </div>
          </div>

          {/* Kolom 5: Pra-Event */}
          <div className="space-y-4">
            <h3 className="font-cinzel font-extrabold text-xl text-gold-800">
              Pra-Event
            </h3>
            <div className="space-y-2.5 text-sm text-slate-700">
              <p>Konser Amal</p>
              <p>Essay Competition</p>
              <p>Videografi Competition</p>
              <p>Himaja Goes to School</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-8 border-t border-gold-300 text-center text-sm text-slate-600">
          &copy; 2027 Sriwijaya Besanjo - Antaresta Altiora. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
