import { cn } from "@/lib/utils"

interface DecorativeBalloonProps {
  className?: string
  color?: string // Tailwind color class or hex code
  size?: string // Tailwind size class (e.g., "w-24 h-32")
  rotation?: string // Tailwind rotation class (e.g., "rotate-12")
  opacity?: string // Tailwind opacity class (e.g., "opacity-20")
  animation?: string // Tailwind animation class (e.g., "animate-float")
}

export default function DecorativeBalloon({
  className,
  color = "bg-[#C83C94]", // Cerise Pink
  size = "w-24 h-32",
  rotation = "rotate-0",
  opacity = "opacity-30",
  animation = "animate-float",
}: DecorativeBalloonProps) {
  return (
    <div className={cn("absolute", size, rotation, opacity, animation, className)}>
      {/* Balloon body (oval shape) */}
      <div className={cn("w-full h-full rounded-full", color, "shadow-md")}></div>
      {/* Balloon knot */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full transform translate-y-1/2"></div>
      {/* Balloon string */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gray-400"></div>
    </div>
  )
}
