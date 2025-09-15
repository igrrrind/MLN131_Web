"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Clock, BookOpen, Share2 } from "lucide-react"
import { usePuzzle } from "@/lib/puzzle-context"
import type { BlogPostType } from "@/lib/types"
import Link from "next/link"
import { useState } from "react"

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPostComponent({ post }: BlogPostProps) {
  const { pieces, userProgress } = usePuzzle()
  const [copied, setCopied] = useState(false)

  const piece = pieces.find((p) => p.id === post.pieceId)
  const isUnlocked = userProgress.unlockedPieces.includes(post.pieceId) || userProgress.cheatModeEnabled

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

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  // Convert markdown-like content to JSX
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n")
    const elements: React.ReactNode[] = []
    let currentSection: React.ReactNode[] = []

    lines.forEach((line, index) => {
      if (line.startsWith("# ")) {
        if (currentSection.length > 0) {
          elements.push(<div key={`section-${elements.length}`}>{currentSection}</div>)
          currentSection = []
        }
        elements.push(
          <h1 key={`h1-${index}`} className="text-3xl font-bold text-primary mb-6">
            {line.substring(2)}
          </h1>,
        )
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={`h2-${index}`} className="text-2xl font-semibold text-foreground mb-4 mt-8">
            {line.substring(3)}
          </h2>,
        )
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={`h3-${index}`} className="text-xl font-medium text-foreground mb-3 mt-6">
            {line.substring(4)}
          </h3>,
        )
      } else if (line.startsWith("- ")) {
        currentSection.push(
          <li key={`li-${index}`} className="text-muted-foreground mb-1">
            {line.substring(2)}
          </li>,
        )
      } else if (line.trim() === "") {
        if (currentSection.length > 0) {
          elements.push(
            <ul key={`ul-${elements.length}`} className="list-disc list-inside mb-4 space-y-1">
              {currentSection}
            </ul>,
          )
          currentSection = []
        }
      } else if (line.trim() !== "") {
        elements.push(
          <p key={`p-${index}`} className="text-foreground mb-4 leading-relaxed">
            {line}
          </p>,
        )
      }
    })

    if (currentSection.length > 0) {
      elements.push(
        <ul key={`ul-final`} className="list-disc list-inside mb-4 space-y-1">
          {currentSection}
        </ul>,
      )
    }

    return elements
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="/blog">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              Quay lại Thư viện
            </Button>
          </Link>

          <Button variant="outline" onClick={handleShare} className="gap-2 bg-transparent">
            <Share2 className="h-4 w-4" />
            {copied ? "Đã sao chép!" : "Chia sẻ"}
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4 text-balance">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-6 text-pretty">{post.description}</p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Badge className={`${getBadgeColor(post.pieceId)} text-white`}>
              {piece?.title || `Mảnh ${post.pieceId}`}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {post.readingTime} phút đọc
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              Có thể đọc tự do
            </div>
          </div>
        </div>

        {isUnlocked && (
          <div className="mb-6 text-center">
            <Badge className="bg-green-600 text-white">Đã mở khóa thông qua puzzle!</Badge>
          </div>
        )}
      </div>

      <Card>
        <CardContent className="p-8">
          <article className="prose prose-lg max-w-none">
            <div className="space-y-4">{renderContent(post.content)}</div>
          </article>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Link href="/">
          <Button className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Quay về Puzzle chính
          </Button>
        </Link>
      </div>
    </main>
  )
}

export { BlogPostComponent as BlogPost }
