import { cn } from "@/lib/utils"

interface DecorativeRibbonProps {
  className?: string
  color?: string // Tailwind color class or hex code
  width?: string // Tailwind width class (e.g., "w-32")
  height?: string // Tailwind height class (e.g., "h-4")
  rotation?: string // Tailwind rotation class (e.g., "rotate-45")
  opacity?: string // Tailwind opacity class (e.g., "opacity-40")
  animation?: string // Tailwind animation class (e.g., "animate-float")
}

export default function DecorativeRibbon({
  className,
  color = "bg-[#F0C75A]", // Gold
  width = "w-32",
  height = "h-4",
  rotation = "rotate-45",
  opacity = "opacity-40",
  animation = "animate-float",
}: DecorativeRibbonProps) {
  return (
    <div
      className={cn("absolute rounded-full shadow-sm", color, width, height, rotation, opacity, animation, className)}
    ></div>
  )
}
