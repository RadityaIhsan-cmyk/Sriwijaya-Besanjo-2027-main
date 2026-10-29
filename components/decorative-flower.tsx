import { cn } from "@/lib/utils"

interface DecorativeFlowerProps {
  className?: string
  petalColor?: string // Tailwind color class or hex code for petals
  centerColor?: string // Tailwind color class or hex code for center
  size?: string // Tailwind size class (e.g., "w-24 h-24")
  animation?: string // Tailwind animation class (e.g., "animate-spin")
  opacity?: string // Tailwind opacity class (e.g., "opacity-20")
}

export default function DecorativeFlower({
  className,
  petalColor = "bg-[#E85BB8]", // Lighter pink
  centerColor = "bg-[#F0C75A]", // Gold
  size = "w-24 h-24",
  animation = "animate-none",
  opacity = "opacity-30", // Increased default opacity for better visibility
}: DecorativeFlowerProps) {
  // Array of rotation degrees for petals to form a full flower
  const petalRotations = Array.from({ length: 12 }, (_, i) => i * (360 / 12)) // 12 petals for a fuller look

  return (
    <div className={cn("absolute flex items-center justify-center", size, animation, opacity, className)}>
      {/* Petals */}
      {petalRotations.map((deg, index) => (
        <div
          key={index}
          className={cn(
            "absolute w-1/2 h-1/4 rounded-full", // Oval shape for petals
            petalColor,
            "shadow-sm", // Subtle shadow for depth
          )}
          style={{
            transform: `rotate(${deg}deg) translateY(-50%)`, // Rotate and move outwards from center
            transformOrigin: "center bottom", // Rotate from the bottom center of the petal
            top: "50%", // Position at the center of the parent
            left: "25%", // Adjust to center the petal's origin relative to its parent
          }}
        />
      ))}
      {/* Center of the flower */}
      <div className={cn("absolute w-1/3 h-1/3 rounded-full", centerColor, "shadow-inner")}></div>
    </div>
  )
}
