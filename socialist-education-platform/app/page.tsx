import { Header } from "@/components/header"
import { PuzzleBoard } from "@/components/puzzle-board"
import { ProgressTracker } from "@/components/progress-tracker"
import { UnifiedPicture } from "@/components/unified-picture"
import { merriweather } from "@/lib/fonts"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full relative h-48 md:h-72 lg:h-96">
        <Image
          src={'/images/workers.png'}
          alt="workers rising up"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full"
        />
      </div>
      <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance uppercase leading-snug ${merriweather.className}`}>dân chủ xã hội chủ nghĩa & xây dựng Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
        Khám phá và học hỏi về chủ nghĩa xã hội khoa học thông qua hệ thống puzzle tương tác. Mở khóa từng mảnh ghép
        để hiểu sâu hơn về lý thuyết và thực tiễn.
        </p>
      </div>

      <div className="relative">
        {/* Background DNA images */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10">
            <Image src={"/images/dna.png"} height={1200} width={400} alt="dna background left" priority />
          </div>
          <div className="absolute -right-20 bottom-1/2 -translate-y-1/2 opacity-10">
            <Image src={"/images/dna.png"} height={800} width={400} alt="dna background right" priority />
          </div>

          <div className="absolute right-0 top-40 -translate-y-1/2 ">
            <Image src={"/images/marx.png"} height={300} width={300} alt="dna background right" priority />
          </div>

          <div className="absolute left-0 top-80">
            <Image src={"/images/uncleho.png"} height={300} width={300} alt="dna background right" priority />
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <div className="flex justify-center items-center mb-12">
            <UnifiedPicture />
          </div>

          <div className="my-20 mt-40">
            <h2 className={`text-4xl md:text-6xl  font-bold text-gray-900 uppercase mb-6 text-center ${merriweather.className}`}>Trò Chơi: Khôi phục bức tranh</h2>
            <PuzzleBoard />
          </div>

      
        </div>
      </div>
      </main>
      <div className=" flex justify-center mt-40 bg-primary py-40">
            <Image src={"/images/lenin.png"} height={800} width={400} alt="dna background right" priority />
          </div>
    </div>
  )
}
