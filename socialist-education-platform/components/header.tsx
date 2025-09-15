"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { usePuzzle } from "@/lib/puzzle-context"
import { RotateCcw, Eye, EyeOff, BookOpen, Home } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { CheatModeDialog } from "./cheat-mode-dialog"

export function Header() {
  const { userProgress, toggleCheatMode, resetProgress } = usePuzzle()
  const [showCheatDialog, setShowCheatDialog] = useState(false)

  const handleCheatToggle = () => {
    if (!userProgress.cheatModeEnabled) {
      setShowCheatDialog(true)
    } else {
      toggleCheatMode()
    }
  }

  return (
    <>
      <header className="border-b bg-card sticky top-0 z-40 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold shadow-md border border-blue-900">
                  XH
                </div>
                <h1 className="text-xl font-bold text-primary hidden sm:block">Giáo Dục Xã Hội Chủ Nghĩa</h1>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Home className="h-4 w-4" />
                  Puzzle
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="ghost" size="sm" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  Thư viện
                </Button>
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              {userProgress.cheatModeEnabled && (
                <Badge variant="destructive" className="hidden sm:flex">
                  Cheat Mode
                </Badge>
              )}

              <Button
                variant={userProgress.cheatModeEnabled ? "destructive" : "outline"}
                size="sm"
                onClick={handleCheatToggle}
                className="gap-2"
              >
                {userProgress.cheatModeEnabled ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="hidden sm:inline">{userProgress.cheatModeEnabled ? "Tắt Cheat" : "Cheat"}</span>
              </Button>

              <Button variant="outline" size="sm" onClick={resetProgress} className="gap-2 bg-transparent">
                <RotateCcw className="h-4 w-4" />
                <span className="hidden sm:inline">Đặt Lại</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <CheatModeDialog
        isOpen={showCheatDialog}
        onClose={() => setShowCheatDialog(false)}
        onConfirm={() => {
          toggleCheatMode()
          setShowCheatDialog(false)
        }}
      />
    </>
  )
}
