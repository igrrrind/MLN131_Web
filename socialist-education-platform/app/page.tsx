import { Header } from "@/components/header"
import { PuzzleBoard } from "@/components/puzzle-board"
import { ProgressTracker } from "@/components/progress-tracker"
import { UnifiedPicture } from "@/components/unified-picture"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">Chủ Nghĩa Xã Hội Khoa Học</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Khám phá và học hỏi về chủ nghĩa xã hội khoa học thông qua hệ thống puzzle tương tác. Mở khóa từng mảnh ghép
            để hiểu sâu hơn về lý thuyết và thực tiễn.
          </p>
        </div>

        <ProgressTracker />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Hệ Thống Puzzle 4 Mảnh</h2>
            <PuzzleBoard />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Bức Tranh Tổng Thể</h2>
            <UnifiedPicture />
          </div>
        </div>
      </main>
    </div>
  )
}
