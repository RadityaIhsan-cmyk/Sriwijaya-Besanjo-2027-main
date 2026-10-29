import Link from "next/link"

interface TicketCardProps {
  title: string
  subtitle: string
  type: string
  price: string
  linkTo: string
  featured?: boolean
}

const TicketCard = ({
  title,
  subtitle,
  type,
  price,
  linkTo,
  featured = false,
}: TicketCardProps) => (
  <div
    className={`${
      featured ? "pillar-card-ultra featured-card-tri" : "pillar-card-ultra"
    } p-6 md:p-8 flex flex-col items-center text-center h-full`}
  >
    <h3 className="font-cinzel font-black text-3xl md:text-4xl text-slate-900 mb-2">
      {title}
    </h3>
    <h4 className="font-cinzel text-sm md:text-base font-extrabold tracking-widest text-gold-700 mb-4">
      {subtitle}
    </h4>
    <p className="text-sm md:text-base text-slate-600 mb-4 flex-grow">{type}</p>
    <div className="w-full border-t-2 border-dashed border-gold-300 mb-6"></div>
    <p className="font-cinzel text-3xl md:text-4xl font-extrabold gold-text-gradient mb-8">
      {price}
    </p>
    <Link
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3.5 rounded-full btn-gold-royal text-xs md:text-sm"
    >
      GET TICKET
    </Link>
  </div>
)

export default function TicketingSection() {
  const utbkOnlyTickets: TicketCardProps[] = [
    {
      title: "EKA",
      subtitle: "ANTARESTA ALTIORA",
      type: "Tiket Individu (1 Orang)",
      price: "Rp 65.000,-",
      linkTo: "https://forms.gle/gUSWfwzQXnZeLWvi8",
    },
    {
      title: "TRI",
      subtitle: "ANTARESTA ALTIORA",
      type: "Bundling Bertiga (3 Orang)",
      price: "Rp 180.000,-",
      linkTo: "https://forms.gle/zvjXxJeCP9Xwnqay6",
      featured: true,
    },
    {
      title: "PANCA",
      subtitle: "ANTARESTA ALTIORA",
      type: "Bundling Rombongan (5 Orang)",
      price: "Rp 290.000,-",
      linkTo: "https://forms.gle/uHwGPkQmLHy4EDs66",
    },
  ]

  const utbkSkdTickets: TicketCardProps[] = [
    {
      title: "EKA",
      subtitle: "UTBK + SKD",
      type: "Paket Lengkap 1 Peserta",
      price: "Rp 70.000,-",
      linkTo: "https://forms.gle/jo8eSBiebPEYLVuk9",
    },
    {
      title: "TRI",
      subtitle: "UTBK + SKD",
      type: "Paket Lengkap 3 Peserta",
      price: "Rp 195.000,-",
      linkTo: "https://forms.gle/65xnorfvAPSsnXJn6",
      featured: true,
    },
  ]

  return (
    <section id="ticketing-section" className="py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        {/* Section 1: UTBK ONLY */}
        <div className="text-center mb-14">
          <h3 className="font-cursive text-3xl text-gold-600">
            Pilih Paket Terbaikmu
          </h3>
          <h2 className="font-cinzel text-4xl md:text-6xl font-extrabold gold-text-gradient">
            UTBK ONLY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {utbkOnlyTickets.map((ticket) => (
            <TicketCard key={ticket.title} {...ticket} />
          ))}
        </div>

        {/* Section 2: TICKET UTBK + SKD */}
        <div className="mt-20">
          <h2 className="font-cinzel text-3xl md:text-5xl font-extrabold text-center gold-text-gradient mb-12">
            TICKET UTBK + SKD
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {utbkSkdTickets.map((ticket) => (
              <TicketCard key={ticket.title} {...ticket} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
