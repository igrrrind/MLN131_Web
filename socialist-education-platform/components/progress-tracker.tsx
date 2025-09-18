"use client"

import { usePuzzle } from "@/lib/puzzle-context"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Clock, Target, Zap, Award } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ProgressTracker() {
  const { userProgress, pieces, isAllUnlocked, sessionStartTime } = usePuzzle()
  const [showAchievements, setShowAchievements] = useState(false)

  const unlockedCount = userProgress.cheatModeEnabled ? 4 : userProgress.unlockedPieces.length
  const progressPercentage = (unlockedCount / 4) * 100

  const getSessionTime = () => {
    if (!sessionStartTime) return 0
    return Math.floor((new Date().getTime() - sessionStartTime.getTime()) / 1000)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const accuracy =
    userProgress.questionsAnswered > 0
      ? Math.round((userProgress.correctAnswers / userProgress.questionsAnswered) * 100)
      : 0

  return (
    <div className="mb-8 space-y-4">
      {/* Main Progress Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Tiến Độ Học Tập</CardTitle>
            {isAllUnlocked && (
              <Badge className="bg-green-600 text-white gap-1">
                <Trophy className="h-3 w-3" />
                Hoàn Thành!
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Mảnh ghép đã mở khóa</span>
              <span className="font-semibold">{unlockedCount} / 4</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pieces.map((piece) => (
              <div key={piece.id} className="text-center">
                <div
                  className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold transition-all duration-300 shadow-sm ${
                    piece.unlocked
                      ? piece.color === "knowledge-blue"
                        ? "bg-primary puzzle-unlock"
                        : piece.color === "revolution-red"
                          ? "bg-red-700 puzzle-unlock"
                          : piece.color === "unity-purple"
                            ? "bg-purple-700 puzzle-unlock"
                            : "bg-green-700 puzzle-unlock"
                      : "bg-gray-500 text-gray-100"
                  }`}
                >
                  {piece.id}
                </div>
                <p className="text-xs text-muted-foreground">{piece.title}</p>
                {piece.unlocked && userProgress.pieceUnlockTimes[piece.id] && (
                  <p className="text-xs text-green-600 font-medium">
                    {new Date(userProgress.pieceUnlockTimes[piece.id]).toLocaleTimeString("vi-VN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">
              {formatTime(isAllUnlocked ? userProgress.totalTime : getSessionTime())}
            </p>
            <p className="text-xs text-muted-foreground">Thời gian</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">{accuracy}%</p>
            <p className="text-xs text-muted-foreground">Độ chính xác</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">{userProgress.streakCount}</p>
            <p className="text-xs text-muted-foreground">Chuỗi đúng</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">{userProgress.achievements.length}</p>
            <p className="text-xs text-muted-foreground">Thành tựu</p>
          </CardContent>
        </Card>
      </div>

      {/* Achievements Section */}
      {userProgress.achievements.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-600" />
                Thành Tựu Đạt Được
              </CardTitle>
              <Button variant="outline" size="sm" onClick={() => setShowAchievements(!showAchievements)}>
                {showAchievements ? "Ẩn" : "Xem tất cả"}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className={`grid gap-3 ${showAchievements ? "md:grid-cols-2" : "grid-cols-1"}`}>
              {(showAchievements ? userProgress.achievements : userProgress.achievements.slice(-2)).map(
                (achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-yellow-700 font-medium">
                        {new Date(achievement.unlockedAt).toLocaleString("vi-VN")}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Cheat Mode Warning */}
      {userProgress.cheatModeEnabled && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4 text-center">
            <Badge variant="destructive" className="mb-2">
              Chế độ Cheat đang bật
            </Badge>
            <p className="text-sm text-red-700">
              Tất cả mảnh ghép đã được mở khóa. Thống kê thời gian và thành tựu sẽ không được tính.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
