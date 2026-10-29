import DocumentationCard from "./documentation-card"

export default function GallerySection() {
  const gallerySlots = Array.from({ length: 6 }, (_, index) => ({
    label: `Dokumentasi ${index + 1}`,
    description: "Keterangan dokumentasi akan ditambahkan. Ceritakan kegiatan dan momen yang ditampilkan pada foto ini.",
    imageSrc: "", // Isi dengan path foto, misalnya /images/dokumentasi-1.jpg
  }))

  return (
    <section
      id="gallery"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-[#664305] via-[#8c5e0a] to-[#523503] text-white border-y-4 border-gold-400"
    >
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col items-center mb-14 text-center">
          <h3 className="font-cursive text-3xl text-gold-300">
            Dokumentasi Kegiatan
          </h3>
          <h2 className="font-cinzeldec text-4xl md:text-6xl font-extrabold text-white">
            GET TO KNOW US
          </h2>
        </div>

        {/* Equal landscape frames keep the documentation aligned at every width. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-md md:max-w-none mx-auto">
          {gallerySlots.map((slot, index) => (
            <DocumentationCard
              key={index}
              title={slot.label}
              description={slot.description}
              imageSrc={slot.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
