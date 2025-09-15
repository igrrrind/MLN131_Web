"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Lock, Unlock } from "lucide-react"
import { blogPosts } from "@/lib/data/blog-posts"
import { usePuzzle } from "@/lib/puzzle-context"
import Link from "next/link"

export function BlogList() {
  const { pieces, userProgress } = usePuzzle()

  const getBadgeColor = (pieceId: number) => {
    const piece = pieces.find((p) => p.id === pieceId)
    if (!piece) return "bg-gray-600"

    switch (piece.color) {
      case "knowledge-blue":
        return "bg-blue-600"
      case "revolution-red":
        return "bg-red-600"
      case "unity-purple":
        return "bg-purple-600"
      case "progress-green":
        return "bg-green-600"
      default:
        return "bg-gray-600"
    }
  }

  const isPieceUnlocked = (pieceId: number) => {
    return userProgress.unlockedPieces.includes(pieceId) || userProgress.cheatModeEnabled
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {blogPosts.map((post) => {
        const piece = pieces.find((p) => p.id === post.pieceId)
        const isUnlocked = isPieceUnlocked(post.pieceId)

        return (
          <Card key={post.id} className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-sm">{post.description}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  {isUnlocked ? (
                    <Unlock className="h-5 w-5 text-green-600" />
                  ) : (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Badge className={`${getBadgeColor(post.pieceId)} text-white text-xs`}>
                    {piece?.title || `Mảnh ${post.pieceId}`}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {post.readingTime} phút
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {isUnlocked
                    ? "Bài viết này đã được mở khóa thông qua puzzle hoặc có thể đọc tự do."
                    : "Bài viết có thể đọc tự do mà không cần mở khóa puzzle."}
                </p>

                <Link href={`/blog/${post.id}`}>
                  <Button className="w-full gap-2">
                    <BookOpen className="h-4 w-4" />
                    Đọc Bài Viết
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
