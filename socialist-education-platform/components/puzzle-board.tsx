"use client";

import { usePuzzle } from "@/lib/puzzle-context";
import { PuzzlePieceComponent } from "./puzzle-piece";

export function PuzzleBoard() {
  const { pieces } = usePuzzle();
  const piece1 = pieces[0];
  const piece2 = pieces[1];

  const piece3 = pieces[2];

  const piece4 = pieces[3];

  return (
    <div className="flex flex-col gap-12 py-20">
      <PuzzlePieceComponent key={piece1.id} piece={piece1} rotation={10} />
      <PuzzlePieceComponent key={piece2.id} piece={piece2} rotation={100} />

      <PuzzlePieceComponent key={piece3.id} piece={piece3} rotation={190} />
      <PuzzlePieceComponent key={piece4.id} piece={piece4} rotation={280} />
    </div>
  );
}
