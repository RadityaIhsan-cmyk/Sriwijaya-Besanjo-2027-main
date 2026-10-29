"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Apa itu Sriwijaya Besanjo?",
    answer:
      "Sriwijaya Besanjo adalah agenda tahunan HIMAJA UNSRI untuk memberikan informasi, motivasi, dan aspirasi terkait pendidikan tinggi, khususnya bagi calon mahasiswa yang ingin melanjutkan pendidikan di Universitas Sriwijaya.",
  },
  {
    question: "Siapa saja yang bisa mengikuti acara ini?",
    answer:
      "Acara ini terbuka untuk seluruh civitas akademik di Provinsi Jambi, khususnya calon mahasiswa yang ingin melanjutkan pendidikan di Universitas Sriwijaya.",
  },
  {
    question: "Kapan dan di mana acara ini akan dilaksanakan?",
    answer:
      "Acara utama akan dilaksanakan pada Januari 2027 di Jambi. Detail lokasi dan tanggal pasti akan diumumkan lebih lanjut melalui media sosial dan website resmi kami.",
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Pendaftaran dapat dilakukan melalui tombol 'GET TICKET' yang tersedia di bagian Ticketing pada halaman ini. Pilih jenis tiket yang sesuai dengan kebutuhan Anda.",
  },
  {
    question: "Apakah ada bintang tamu spesial?",
    answer:
      "Ya, kami menghadirkan bintang tamu spesial Amadeo Yesa, 3rd Winner CoC Season 2 dan peraih skor UTBK tertinggi tahun 2023 di Indonesia.",
  },
  {
    question: "Apa manfaat mengikuti Sriwijaya Besanjo?",
    answer:
      "Anda akan mendapatkan informasi lengkap tentang kehidupan perkuliahan di UNSRI, motivasi berharga dari para alumni, serta kesempatan membangun jaringan dengan mahasiswa Jambi lainnya.",
  },
  {
    question: "Apakah ada sesi tanya jawab dengan alumni?",
    answer:
      "Tentu saja! Kami menyediakan sesi khusus di mana Anda bisa langsung bertanya dan berdiskusi dengan para alumni HIMAJA UNSRI.",
  },
  {
    question: "Bagaimana jika saya memiliki pertanyaan lain?",
    answer:
      "Jangan ragu untuk menghubungi kami melalui kontak WhatsApp atau email yang tersedia di bagian bawah halaman ini.",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <HelpCircle className="w-8 h-8 text-gold-600 animate-bounce" />
            <h2 className="font-cinzel text-4xl md:text-5xl font-extrabold gold-text-gradient">
              FAQ
            </h2>
            <HelpCircle className="w-8 h-8 text-gold-600 animate-bounce" />
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan yang sering diajukan tentang Sriwijaya Besanjo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem
                value={`item-${index}`}
                className="pillar-card-ultra px-5 py-1 border-none"
              >
                <AccordionTrigger className="font-cinzel text-left text-sm md:text-base font-bold text-slate-800 hover:text-gold-700 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-sm leading-relaxed pt-2 border-t border-gold-200">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}
