import { Users, Award, Lightbulb, HeartHandshake, Clock } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="font-cursive text-3xl text-gold-600">Get To Know Us</h3>
          <h2 className="font-cinzel text-4xl md:text-5xl font-extrabold gold-text-gradient mb-4">
            Tentang Kami
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Pelajari lebih lanjut tentang organisasi kami dan event tahunan yang kami selenggarakan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* HIMAJA UNSRI Section */}
          <div className="pillar-card-ultra p-8 md:p-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gold-100 border-2 border-gold-400 shadow-md flex items-center justify-center text-gold-700 text-2xl font-cinzel font-bold">
                HJ
              </div>
            </div>
            <h3 className="font-cinzel text-2xl md:text-3xl font-extrabold text-center text-slate-900 mb-6">
              HIMAJA UNSRI
            </h3>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4 text-justify">
              HIMAJA UNSRI adalah wadah yang menaungi mahasiswa dari Provinsi Jambi yang melanjutkan pendidikannya di Universitas Sriwijaya. HIMAJA UNSRI pernah mengadakan kegiatan seperti Sriwijaya Besanjo, Himaja Cup, Himaja Fest, Donor Darah, Galang Dana, dan masih banyak kegiatan lainnya sebagai bentuk kontribusi untuk Jambi.
            </p>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 text-justify">
              Kegiatan ini juga menjadi ajang untuk membentuk persaudaraan yang kuat antar anggota HIMAJA UNSRI, serta menjadi tempat untuk mengembangkan minat dan bakat para anggotanya.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gold-100 text-gold-800 border border-gold-300">
                <Award className="w-4 h-4 mr-2 text-gold-600" /> Kontribusi Jambi
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gold-100 text-gold-800 border border-gold-300">
                <HeartHandshake className="w-4 h-4 mr-2 text-gold-600" /> Persaudaraan Kuat
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gold-100 text-gold-800 border border-gold-300">
                <Lightbulb className="w-4 h-4 mr-2 text-gold-600" /> Kembangkan Bakat
              </span>
            </div>
          </div>

          {/* SRIWIJAYA BESANJO Section */}
          <div className="pillar-card-ultra p-8 md:p-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-white border-2 border-gold-500 shadow-md flex items-center justify-center text-2xl font-cinzel font-bold">
                SB
              </div>
            </div>
            <h3 className="font-cinzel text-2xl md:text-3xl font-extrabold text-center text-slate-900 mb-6">
              SRIWIJAYA BESANJO
            </h3>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4 text-justify">
              Sriwijaya Besanjo adalah agenda tahunan yang selalu diadakan oleh Himpunan Mahasiswa Jambi di Universitas Sriwijaya. Sriwijaya Besanjo adalah salah satu kegiatan dari HIMAJA untuk memberi informasi, motivasi, serta aspirasi dalam rangka meningkatkan mutu pendidikan khususnya dalam tingkat pendidikan perguruan tinggi.
            </p>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 text-justify">
              Sriwijaya Besanjo juga dipersiapkan untuk menyambut para civitas akademik di Provinsi Jambi agar lebih semangat dalam melanjutkan pendidikan di perguruan tinggi.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gold-100 text-gold-800 border border-gold-300">
                <Clock className="w-4 h-4 mr-2 text-gold-600" /> Agenda Tahunan
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gold-100 text-gold-800 border border-gold-300">
                <Lightbulb className="w-4 h-4 mr-2 text-gold-600" /> Tingkatkan Mutu Pendidikan
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gold-100 text-gold-800 border border-gold-300">
                <Users className="w-4 h-4 mr-2 text-gold-600" /> Sambut Civitas Akademik
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
