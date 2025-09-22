"use client"

import { usePuzzle } from "@/lib/puzzle-context"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

// Define size constants
const sm = "175px"
const md = "336px"

export function UnifiedPicture() {
  const { pieces, userProgress } = usePuzzle()

  // Map puzzle pieces to their respective object positions for quadrants
  const objectPositions = {
    1: "puzzle1",
    2: "puzzle2",
    3: "puzzle3",
    4: "puzzle4",
  }

  return (
    <div
      className="relative aspect-square min-w-[350px] max-w-[350px] sm:min-w-2xl sm:max-w-2xl mx-auto w-full"
      style={
        {
          "--s": sm, // Default size for small screens
          "--s-sm": sm, // Explicitly for small screens
          "--s-md": md, // For medium screens and above
        } as React.CSSProperties
      }
    >
      {/* Decorative Frame */}
      <motion.div
        className="absolute inset-0 border-8 rounded-lg shadow-xl bg-amber-100/20 -m-4 max-w-[700px] max-h-[700px]"
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Image Container */}
      <div className="relative w-full h-full rounded-lg max-w-[672px] max-h-[672px] overflow-hidden ">
        {/* Base Image (Blurred Background) */}
        <motion.div className="absolute inset-0">
          <Image
            src="/images/puzzle.jpeg"
            alt="Complete puzzle"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Puzzle Pieces Grid */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 max-w-[672px] max-h-[672px]">
          {pieces.map((piece) => {
            const isUnlocked = userProgress.unlockedPieces.includes(piece.id)
            const pos = objectPositions[piece.id as keyof typeof objectPositions]

            return (
              <motion.div
                key={piece.id}
                className={cn(
                  "relative overflow-hidden rounded cursor-pointer w-full scale-[100%]",
                  !isUnlocked && pos
                )}
              >
                {/* Overlay for locked pieces */}
                {!isUnlocked && (
                  <motion.div
                    className={cn(
                      "absolute inset-0 bg-gray-900 border-gray-900 flex items-center justify-center"
                    )}
                  >
                    <motion.div
                      className="text-white text-center"
                      initial={{ y: 0 }}
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="text-3xl mb-2 font-serif"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        Mảnh {piece.id}
                      </motion.div>
                      <div className="text-sm">Hãy Review CQ{piece.id}</div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}