"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lock, Unlock, BookOpen } from "lucide-react"
import { usePuzzle } from "@/lib/puzzle-context"
import type { PuzzlePiece } from "@/lib/types"
import { QuestionModal } from "./question-modal"
import Link from "next/link"

interface PuzzlePieceProps {
  piece: PuzzlePiece
}

export function PuzzlePieceComponent({ piece }: PuzzlePieceProps) {
  const [showQuestions, setShowQuestions] = useState(false)
  const { userProgress } = usePuzzle()

  const getColorClasses = (color: string) => {
    switch (color) {
      case "knowledge-blue":
        return "bg-blue-100 border-blue-300 text-blue-900 hover:bg-blue-200"
      case "revolution-red":
        return "bg-red-100 border-red-300 text-red-900 hover:bg-red-200"
      case "unity-purple":
        return "bg-purple-100 border-purple-300 text-purple-900 hover:bg-purple-200"
      case "progress-green":
        return "bg-green-100 border-green-300 text-green-900 hover:bg-green-200"
      default:
        return "bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200"
    }
  }

  const getBadgeColor = (color: string) => {
    switch (color) {
      case "knowledge-blue":
        return "bg-blue-600 text-white"
      case "revolution-red":
        return "bg-red-600 text-white"
      case "unity-purple":
        return "bg-purple-600 text-white"
      case "progress-green":
        return "bg-green-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  return (
    <>
      <Card
        className={`relative transition-all duration-300 cursor-pointer ${
          piece.unlocked
            ? `${getColorClasses(piece.color)} puzzle-unlock`
            : "bg-muted border-muted-foreground/20 opacity-60"
        }`}
        onClick={() => !piece.unlocked && setShowQuestions(true)}
      >
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center mb-3">
            {piece.unlocked ? (
              <Unlock className="h-8 w-8 text-current" />
            ) : (
              <Lock className="h-8 w-8 text-muted-foreground" />
            )}
          </div>

          <h3 className="font-semibold text-sm mb-2">{piece.title}</h3>
          <p className="text-xs text-current/80 mb-3">{piece.description}</p>

          <div className="flex flex-col gap-2">
            {piece.unlocked ? (
              <>
                <Badge className={`${getBadgeColor(piece.color)} text-xs`}>Đã Mở Khóa</Badge>
                <Link href={`/blog/${piece.blogId}`}>
                  <Button size="sm" variant="outline" className="w-full gap-1 bg-transparent">
                    <BookOpen className="h-3 w-3" />
                    Đọc Blog
                  </Button>
                </Link>
              </>
            ) : (
              <Button
                size="sm"
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowQuestions(true)
                }}
                disabled={userProgress.cheatModeEnabled}
              >
                Mở Khóa
              </Button>
            )}
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
  )
}
