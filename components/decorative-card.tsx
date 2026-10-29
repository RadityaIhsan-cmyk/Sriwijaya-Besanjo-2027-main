import { cn } from "@/lib/utils"
import { Ticket, Heart } from "lucide-react" // Using Lucide icons for card details

interface DecorativeCardProps {
  className?: string
  baseColor?: string // Tailwind color class or hex code for the card base
  accentColor?: string // Tailwind color class or hex code for accents/border
  size?: string // Tailwind size class (e.g., "w-48 h-32")
  rotation?: string // Tailwind rotation class (e.g., "rotate-12")
  opacity?: string // Tailwind opacity class (e.g., "opacity-20")
  animation?: string // Tailwind animation class (e.g., "animate-pulse")
  type?: "ticket" | "playing-card" // New prop to define card type
}

export default function DecorativeCard({
  className,
  baseColor = "bg-white",
  accentColor = "border-[#F0C75A]",
  size = "w-48 h-32",
  rotation = "rotate-12",
  opacity = "opacity-10",
  animation = "animate-none",
  type = "ticket",
}: DecorativeCardProps) {
  return (
    <div
      className={cn(
        "absolute rounded-xl shadow-lg border-2 flex items-center justify-center overflow-hidden",
        baseColor,
        accentColor,
        size,
        rotation,
        opacity,
        animation,
        className,
      )}
    >
      {type === "ticket" && (
        <>
          <Ticket className="w-1/2 h-1/2 text-[#C83C94] opacity-70" />
          <div className="absolute top-2 left-2 text-xs font-bold text-[#C83C94]">EVENT</div>
          <div className="absolute bottom-2 right-2 text-xs font-bold text-[#F0C75A]">TICKET</div>
        </>
      )}
      {type === "playing-card" && (
        <>
          <Heart className="w-1/3 h-1/3 text-[#C83C94] opacity-70" />
          <div className="absolute top-2 left-2 text-lg font-bold text-[#C83C94]">A</div>
          <div className="absolute bottom-2 right-2 text-lg font-bold text-[#C83C94] rotate-180">A</div>
        </>
      )}
    </div>
  )
}
