import { cn } from "@/lib/utils"

interface DecorativeConfettiProps {
  className?: string
  colors?: string[] // Array of Tailwind color classes or hex codes
  size?: string // Tailwind size class for individual pieces (e.g., "w-2 h-2")
  count?: number // Number of confetti pieces
  animation?: string // Tailwind animation class (e.g., "animate-pulse")
  opacity?: string // Tailwind opacity class (e.g., "opacity-50")
}

export default function DecorativeConfetti({
  className,
  colors = ["bg-[#C83C94]", "bg-[#F0C75A]", "bg-white"],
  size = "w-2 h-2",
  count = 10,
  animation = "animate-pulse",
  opacity = "opacity-50",
}: DecorativeConfettiProps) {
  return (
    <div className={cn("absolute pointer-events-none", className)}>
      {Array.from({ length: count }).map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        const randomDelay = `${Math.random() * 2}s` // Random delay for animation
        const randomRotation = `rotate(${Math.random() * 360}deg)` // Random rotation
        const randomShape = Math.random() > 0.5 ? "rounded-full" : "rounded-sm" // Random shape (circle or square)

        return (
          <div
            key={i}
            className={cn(
              "absolute",
              size,
              randomColor,
              randomShape,
              opacity,
              animation,
              "transition-transform duration-1000",
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `${randomRotation} scale(${0.5 + Math.random() * 0.5})`, // Random scale
              animationDelay: randomDelay,
            }}
          />
        )
      })}
    </div>
  )
}
