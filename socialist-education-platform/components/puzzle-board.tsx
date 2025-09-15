"use client"

import { usePuzzle } from "@/lib/puzzle-context"
import { PuzzlePieceComponent } from "./puzzle-piece"

export function PuzzleBoard() {
  const { pieces } = usePuzzle()

  return (
    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
      {pieces.map((piece) => (
        <PuzzlePieceComponent key={piece.id} piece={piece} />
      ))}
    </div>
  )
}
