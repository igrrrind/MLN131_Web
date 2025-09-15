"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { PuzzlePiece, UserProgress, Achievement } from "./types"
import { questionsData } from "./data/questions"

interface PuzzleContextType {
  pieces: PuzzlePiece[]
  userProgress: UserProgress
  unlockPiece: (pieceId: number) => void
  toggleCheatMode: () => void
  resetProgress: () => void
  isAllUnlocked: boolean
  trackQuestionAnswer: (isCorrect: boolean) => void
  sessionStartTime: Date | null
}

const PuzzleContext = createContext<PuzzleContextType | undefined>(undefined)

const initialPieces: PuzzlePiece[] = [
  {
    id: 1,
    title: "Nền Tảng Lý Luận",
    description: "Cơ sở khoa học của chủ nghĩa xã hội",
    color: "knowledge-blue",
    unlocked: false,
    questions: questionsData[1],
    blogId: "foundations",
  },
  {
    id: 2,
    title: "Đấu Tranh Giai Cấp",
    description: "Động lực phát triển xã hội",
    color: "revolution-red",
    unlocked: false,
    questions: questionsData[2],
    blogId: "class-struggle",
  },
  {
    id: 3,
    title: "Đoàn Kết Thống Nhất",
    description: "Sức mạnh của sự đoàn kết",
    color: "unity-purple",
    unlocked: false,
    questions: questionsData[3],
    blogId: "unity-solidarity",
  },
  {
    id: 4,
    title: "Vận Dụng Sáng Tạo",
    description: "Áp dụng vào thực tiễn",
    color: "progress-green",
    unlocked: false,
    questions: questionsData[4],
    blogId: "global-application",
  },
]

const initialProgress: UserProgress = {
  unlockedPieces: [],
  totalTime: 0,
  cheatModeEnabled: false,
  pieceUnlockTimes: {},
  questionsAnswered: 0,
  correctAnswers: 0,
  streakCount: 0,
  achievements: [],
}

const achievementDefinitions: Omit<Achievement, "unlockedAt">[] = [
  {
    id: "first-unlock",
    title: "Khởi Đầu",
    description: "Mở khóa mảnh ghép đầu tiên",
    icon: "🎯",
    type: "completion",
  },
  {
    id: "half-complete",
    title: "Nửa Chặng Đường",
    description: "Mở khóa 2 mảnh ghép",
    icon: "⚡",
    type: "completion",
  },
  {
    id: "almost-there",
    title: "Gần Đích",
    description: "Mở khóa 3 mảnh ghép",
    icon: "🔥",
    type: "completion",
  },
  {
    id: "master",
    title: "Bậc Thầy",
    description: "Hoàn thành tất cả 4 mảnh ghép",
    icon: "👑",
    type: "completion",
  },
  {
    id: "speed-demon",
    title: "Tốc Độ Ánh Sáng",
    description: "Hoàn thành trong vòng 5 phút",
    icon: "⚡",
    type: "speed",
  },
  {
    id: "perfectionist",
    title: "Hoàn Hảo",
    description: "Trả lời đúng tất cả câu hỏi",
    icon: "💎",
    type: "accuracy",
  },
  {
    id: "explorer",
    title: "Nhà Khám Phá",
    description: "Đọc tất cả bài blog",
    icon: "🗺️",
    type: "exploration",
  },
]

export function PuzzleProvider({ children }: { children: React.ReactNode }) {
  const [pieces, setPieces] = useState<PuzzlePiece[]>(initialPieces)
  const [userProgress, setUserProgress] = useState<UserProgress>(initialProgress)
  const [sessionStartTime, setSessionStartTime] = useState<Date | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("socialist-education-progress")
    if (saved) {
      const progress = JSON.parse(saved)
      setUserProgress(progress)

      setPieces((prev) =>
        prev.map((piece) => ({
          ...piece,
          unlocked: progress.unlockedPieces.includes(piece.id) || progress.cheatModeEnabled,
        })),
      )
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("socialist-education-progress", JSON.stringify(userProgress))
  }, [userProgress])

  const unlockPiece = (pieceId: number) => {
    if (!userProgress.unlockedPieces.includes(pieceId)) {
      const now = new Date()
      const newProgress = {
        ...userProgress,
        unlockedPieces: [...userProgress.unlockedPieces, pieceId],
        pieceUnlockTimes: {
          ...userProgress.pieceUnlockTimes,
          [pieceId]: now,
        },
      }

      if (newProgress.unlockedPieces.length === 4) {
        newProgress.completedAt = now

        if (sessionStartTime) {
          newProgress.totalTime = Math.floor((now.getTime() - sessionStartTime.getTime()) / 1000)
        }
      }

      const newAchievements = checkAchievements(newProgress)
      newProgress.achievements = [...userProgress.achievements, ...newAchievements]

      setUserProgress(newProgress)
      setPieces((prev) => prev.map((piece) => (piece.id === pieceId ? { ...piece, unlocked: true } : piece)))
    }
  }

  const checkAchievements = (progress: UserProgress): Achievement[] => {
    const newAchievements: Achievement[] = []
    const existingIds = progress.achievements.map((a) => a.id)

    achievementDefinitions.forEach((def) => {
      if (existingIds.includes(def.id)) return

      let shouldUnlock = false

      switch (def.id) {
        case "first-unlock":
          shouldUnlock = progress.unlockedPieces.length >= 1
          break
        case "half-complete":
          shouldUnlock = progress.unlockedPieces.length >= 2
          break
        case "almost-there":
          shouldUnlock = progress.unlockedPieces.length >= 3
          break
        case "master":
          shouldUnlock = progress.unlockedPieces.length >= 4
          break
        case "speed-demon":
          shouldUnlock = progress.totalTime > 0 && progress.totalTime <= 300 && progress.unlockedPieces.length === 4
          break
        case "perfectionist":
          shouldUnlock = progress.questionsAnswered > 0 && progress.correctAnswers === progress.questionsAnswered
          break
      }

      if (shouldUnlock) {
        newAchievements.push({
          ...def,
          unlockedAt: new Date(),
        })
      }
    })

    return newAchievements
  }

  const trackQuestionAnswer = (isCorrect: boolean) => {
    setUserProgress((prev) => ({
      ...prev,
      questionsAnswered: prev.questionsAnswered + 1,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      streakCount: isCorrect ? prev.streakCount + 1 : 0,
    }))
  }

  useEffect(() => {
    if (!sessionStartTime && userProgress.unlockedPieces.length === 0 && !userProgress.cheatModeEnabled) {
      setSessionStartTime(new Date())
    }
  }, [sessionStartTime, userProgress.unlockedPieces.length, userProgress.cheatModeEnabled])

  const toggleCheatMode = () => {
    const newCheatMode = !userProgress.cheatModeEnabled
    setUserProgress((prev) => ({ ...prev, cheatModeEnabled: newCheatMode }))
    setPieces((prev) =>
      prev.map((piece) => ({ ...piece, unlocked: newCheatMode || userProgress.unlockedPieces.includes(piece.id) })),
    )
  }

  const resetProgress = () => {
    const resetProgress = initialProgress
    setUserProgress(resetProgress)
    setPieces(initialPieces)
    setSessionStartTime(null)
    localStorage.removeItem("socialist-education-progress")
  }

  const isAllUnlocked = userProgress.unlockedPieces.length === 4 || userProgress.cheatModeEnabled

  return (
    <PuzzleContext.Provider
      value={{
        pieces,
        userProgress,
        unlockPiece,
        toggleCheatMode,
        resetProgress,
        isAllUnlocked,
        trackQuestionAnswer,
        sessionStartTime,
      }}
    >
      {children}
    </PuzzleContext.Provider>
  )
}

export function usePuzzle() {
  const context = useContext(PuzzleContext)
  if (context === undefined) {
    throw new Error("usePuzzle must be used within a PuzzleProvider")
  }
  return context
}
