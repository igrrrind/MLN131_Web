"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Unlock } from "lucide-react";
import { usePuzzle } from "@/lib/puzzle-context";
import type { PuzzlePiece } from "@/lib/types";
import { QuestionModal } from "./question-modal";
import Link from "next/link";
import Image from "next/image";
import { merriweather } from "@/lib/fonts";

interface PuzzlePieceProps {
  piece: PuzzlePiece;
  rotation?: number; // Rotation angle in degrees
}

export function PuzzlePieceComponent({
  piece,
  rotation = 0,
}: PuzzlePieceProps) {
  const [showQuestions, setShowQuestions] = useState(false);
  const { userProgress } = usePuzzle();

  const isUnlocked = userProgress.unlockedPieces.includes(piece.id);

  return (
    <>
      <Card
        className="relative bg-transparent border-none hover:shadow-none shadow-none overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
        // onClick={() => !isUnlocked && setShowQuestions(true)}
      >
        <CardContent className="p-4 w-full">
          <div className="flex gap-4">
            {/* Left side - Image */}
            <div className="relative w-[300px] h-[300px] flex-shrink-0">
              <Image
                src="/images/3.png"
                alt={piece.title}
                width={280}
                height={280}
                className="rounded-lg object-cover"
                style={{ transform: `rotate(${rotation}deg)` }}
              />
            </div>

            {/* Right side - Content */}
            <div className="flex-1">
              <h3
                className={`font-semibold text-xl  mb-2 ${merriweather.className}`}
              >
                {piece.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{piece.description}</p>

              {/* Unlock button */}
              <div className="space-y-2">
                <Button
                  size="sm"
                  variant={isUnlocked ? "outline" : "default"}
                  onClick={(e) => {
                    e.stopPropagation();
                    !isUnlocked && setShowQuestions(true);
                  }}
                  disabled={userProgress.cheatModeEnabled}
                  className="w-full !h-16 text-base"
                >
                  {isUnlocked ? (
                    <Unlock className="h-4 w-4 mr-2" />
                  ) : (
                    <Lock className="h-4 w-4 mr-2" />
                  )}
                  {isUnlocked ? "Đã Mở Khóa" : "Giải Mã"}
                </Button>

                {/* Blog link */}

                <Link
                  href={`/blog/${piece.blogId}`}
                  className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 text-lg py-6 group"
                >
                  <span>Tìm hiểu để giải mã</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <QuestionModal
        piece={piece}
        isOpen={showQuestions}
        onClose={() => setShowQuestions(false)}
        onComplete={() => setShowQuestions(false)}
      />
    </>
  );
}
