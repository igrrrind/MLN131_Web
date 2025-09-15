"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, ArrowRight, Zap } from "lucide-react"
import { usePuzzle } from "@/lib/puzzle-context"
import type { PuzzlePiece } from "@/lib/types"

interface QuestionModalProps {
  piece: PuzzlePiece
  isOpen: boolean
  onClose: () => void
  onComplete: () => void
}

export function QuestionModal({ piece, isOpen, onClose, onComplete }: QuestionModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [questionStartTime, setQuestionStartTime] = useState<Date | null>(null)
  const { unlockPiece, trackQuestionAnswer } = usePuzzle()

  const currentQuestion = piece.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === piece.questions.length - 1
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    const correct = answerIndex === currentQuestion.correctAnswer

    if (correct) {
      setCorrectAnswers((prev) => prev + 1)
    }

    trackQuestionAnswer(correct)
  }

  const handleNext = () => {
    if (isLastQuestion) {
      // Complete the puzzle piece if user got at least 1 correct answer
      if (correctAnswers > 0) {
        unlockPiece(piece.id)
      }
      onComplete()
      resetModal()
    } else {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setQuestionStartTime(new Date())
    }
  }

  const resetModal = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setCorrectAnswers(0)
    setQuestionStartTime(null)
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  useState(() => {
    if (isOpen && !questionStartTime) {
      setQuestionStartTime(new Date())
    }
  })

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            {piece.title}
            <Badge variant="outline" className="ml-auto">
              {currentQuestionIndex + 1} / {piece.questions.length}
            </Badge>
          </DialogTitle>
          <DialogDescription className="flex items-center gap-4">
            <span>
              Câu hỏi {currentQuestionIndex + 1} / {piece.questions.length}
            </span>
            {currentQuestionIndex > 0 && (
              <Badge className="bg-green-100 text-green-800 gap-1">
                <Zap className="h-3 w-3" />
                {Math.round((correctAnswers / (currentQuestionIndex + 1)) * 100)}% chính xác
              </Badge>
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / piece.questions.length) * 100}%` }}
            />
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={
                      selectedAnswer === index
                        ? index === currentQuestion.correctAnswer
                          ? "default"
                          : "destructive"
                        : "outline"
                    }
                    className={`w-full justify-start text-left h-auto p-4 transition-all duration-200 ${
                      !showExplanation ? "hover:scale-[1.02]" : ""
                    }`}
                    onClick={() => !showExplanation && handleAnswerSelect(index)}
                    disabled={showExplanation}
                  >
                    <div className="flex items-center gap-3">
                      {showExplanation && (
                        <>
                          {index === currentQuestion.correctAnswer ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : selectedAnswer === index ? (
                            <XCircle className="h-5 w-5 text-red-600" />
                          ) : null}
                        </>
                      )}
                      <span className="text-sm">{option}</span>
                    </div>
                  </Button>
                ))}
              </div>

              {showExplanation && (
                <div
                  className={`mt-6 p-4 rounded-lg transition-all duration-300 ${
                    isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={isCorrect ? "default" : "destructive"} className="gap-1">
                      {isCorrect ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                      {isCorrect ? "Chính xác!" : "Không chính xác"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {showExplanation && (
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Điểm số: <span className="font-semibold text-green-600">{correctAnswers}</span> /{" "}
                {currentQuestionIndex + 1}
              </div>
              <Button onClick={handleNext} className="gap-2 bg-primary hover:bg-primary/90">
                {isLastQuestion ? "Hoàn thành" : "Câu tiếp theo"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
