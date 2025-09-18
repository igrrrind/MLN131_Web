import { Header } from "@/components/header"
import { PuzzleBoard } from "@/components/puzzle-board"
import { ProgressTracker } from "@/components/progress-tracker"
import { UnifiedPicture } from "@/components/unified-picture"
import { merriweather } from "@/lib/fonts"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance ${merriweather.className}`}>Chủ Nghĩa Xã Hội Khoa Học</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Khám phá và học hỏi về chủ nghĩa xã hội khoa học thông qua hệ thống puzzle tương tác. Mở khóa từng mảnh ghép
            để hiểu sâu hơn về lý thuyết và thực tiễn.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Image src={"images/dna.png"} height={1200} width={400} alt="dna"/>
          <div>
            <UnifiedPicture />
          </div>
                    <Image src={"images/dna.png"} height={800} width={400} alt="dna"/>

        </div>

        <div className="my-8">
            <h2 className={`text-2xl font-bold text-gray-900 mb-6 text-center ${merriweather.className}`}>Trò Chơi: Khôi phục bức tranh</h2>
            <PuzzleBoard />
          </div>
      </main>
    </div>
  )
}
