export interface PuzzlePiece {
  id: number
  title: string
  description: string
  color: string
  unlocked: boolean
  questions: Question[]
  blogId: string
}

export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface BlogPost {
  id: string
  title: string
  description: string
  content: string
  pieceId: number
  readingTime: number
}

export type BlogPostType = BlogPost

export interface UserProgress {
  unlockedPieces: number[]
  completedAt?: Date
  totalTime: number
  cheatModeEnabled: boolean
  sessionStartTime?: Date
  pieceUnlockTimes: Record<number, Date>
  questionsAnswered: number
  correctAnswers: number
  streakCount: number
  achievements: Achievement[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt: Date
  type: "speed" | "accuracy" | "completion" | "exploration"
}
