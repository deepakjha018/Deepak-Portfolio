import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function CursorGlow() {
  const [isPointerDevice, setIsPointerDevice] = useState(false)

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    // Detect whether the device actually has a fine pointer/mouse.
    const checkPointer = () => {
      setIsPointerDevice(
        window.matchMedia("(pointer: fine)").matches
      )
    }

    checkPointer()

    window.addEventListener("resize", checkPointer)

    return () => {
      window.removeEventListener("resize", checkPointer)
    }
  }, [])

  useEffect(() => {
    if (!isPointerDevice) return

    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }
  }, [isPointerDevice])

  if (!isPointerDevice) return null

  return (
    <>
      {/* Outer cursor glow */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          w-20
          h-20
          rounded-full
          pointer-events-none
          z-[999]
          border
          border-cyan-400/40
          shadow-[0_0_40px_rgba(34,211,238,.6)]
        "
        animate={{
          x: position.x - 40,
          y: position.y - 40
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20
        }}
      />

      {/* Cursor center */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          w-3
          h-3
          rounded-full
          pointer-events-none
          z-[1000]
          bg-cyan-300
          shadow-[0_0_20px_#22d3ee]
        "
        animate={{
          x: position.x - 6,
          y: position.y - 6
        }}
        transition={{
          duration: 0.05
        }}
      />
    </>
  )
}

export default CursorGlow