"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { usePuzzle } from "@/lib/puzzle-context"
import { Info, BookOpen, Sparkles } from "lucide-react"
import Link from "next/link"

interface UnifiedSection {
  id: string
  title: string
  description: string
  detailedExplanation: string
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  color: string
  bgColor: string
  icon: string
  blogId: string
  keyPoints: string[]
}

export function UnifiedPicture() {
  const { isAllUnlocked } = usePuzzle()
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  const sections: UnifiedSection[] = [
    {
      id: "theory",
      title: "Nền Tảng Lý Luận",
      description: "Chủ nghĩa duy vật biện chứng và duy vật lịch sử tạo nền tảng khoa học vững chắc",
      detailedExplanation:
        "Nền tảng lý luận của chủ nghĩa xã hội khoa học được xây dựng trên hai trụ cột chính: chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử. Đây là cơ sở khoa học giúp chúng ta hiểu được quy luật phát triển của tự nhiên, xã hội và tư duy.",
      position: "top-left",
      color: "text-blue-900",
      bgColor: "bg-blue-600",
      icon: "📚",
      blogId: "foundations",
      keyPoints: [
        "Chủ nghĩa duy vật biện chứng",
        "Chủ nghĩa duy vật lịch sử",
        "Quy luật phát triển xã hội",
        "Phương pháp luận khoa học",
      ],
    },
    {
      id: "struggle",
      title: "Đấu Tranh Giai Cấp",
      description: "Động lực thúc đẩy sự phát triển xã hội và tiến bộ lịch sử",
      detailedExplanation:
        "Đấu tranh giai cấp là động lực cơ bản của sự phát triển xã hội. Giai cấp công nhân, với vai trò tiên phong, có sứ mệnh lịch sử lãnh đạo cách mạng xã hội chủ nghĩa để xóa bỏ chế độ bóc lột và xây dựng xã hội công bằng.",
      position: "top-right",
      color: "text-red-900",
      bgColor: "bg-red-600",
      icon: "✊",
      blogId: "class-struggle",
      keyPoints: [
        "Mâu thuẫn giai cấp",
        "Vai trò giai cấp công nhân",
        "Cách mạng xã hội chủ nghĩa",
        "Xóa bỏ chế độ bóc lột",
      ],
    },
    {
      id: "unity",
      title: "Đoàn Kết Thống Nhất",
      description: "Sức mạnh của sự đoàn kết quốc tế và thống nhất trong đảng",
      detailedExplanation:
        "Đoàn kết quốc tế của giai cấp công nhân và sự thống nhất trong đảng cộng sản là sức mạnh to lớn. Khẩu hiệu 'Toàn thế giới vô sản, hãy đoàn kết lại!' thể hiện tinh thần tương trợ và liên minh trong đấu tranh chung.",
      position: "bottom-left",
      color: "text-purple-900",
      bgColor: "bg-purple-600",
      icon: "🤝",
      blogId: "unity-solidarity",
      keyPoints: ["Đoàn kết quốc tế", "Thống nhất trong đảng", "Liên minh giai cấp", "Mặt trận thống nhất"],
    },
    {
      id: "application",
      title: "Vận Dụng Sáng Tạo",
      description: "Áp dụng linh hoạt vào điều kiện cụ thể của từng quốc gia",
      detailedExplanation:
        "Chủ nghĩa xã hội khoa học không phải là giáo điều cứng nhắc mà cần được vận dụng sáng tạo phù hợp với điều kiện lịch sử, văn hóa và xã hội cụ thể của từng quốc gia. Việt Nam là một ví dụ điển hình về sự vận dụng thành công này.",
      position: "bottom-right",
      color: "text-green-900",
      bgColor: "bg-green-600",
      icon: "🌍",
      blogId: "global-application",
      keyPoints: ["Vận dụng sáng tạo", "Điều kiện cụ thể", "Kinh nghiệm quốc tế", "Mô hình Việt Nam"],
    },
  ]

  const hoveredSectionData = sections.find((s) => s.id === hoveredSection)

  return (
    <div className="relative">
      <Card className={`transition-all duration-500 ${isAllUnlocked ? "puzzle-merge" : ""}`}>
        <CardContent className="p-6">
          {!isAllUnlocked ? (
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold mb-2">Bức Tranh Tổng Thể</h3>
                <p className="text-muted-foreground mb-4">
                  Mở khóa tất cả 4 mảnh ghép để xem bức tranh tổng thể về chủ nghĩa xã hội khoa học
                </p>
                <Badge variant="outline">Cần hoàn thành puzzle</Badge>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white gap-1">
                  <Sparkles className="h-3 w-3" />
                  Bức Tranh Tổng Thể Đã Hoàn Thành
                </Badge>
              </div>

              <div className="relative aspect-square bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 rounded-lg overflow-hidden border-2 border-gradient-to-r from-blue-200 to-purple-200">
                {/* Central Unity Symbol */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-yellow-400">
                    <div className="text-3xl animate-pulse">⚡</div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-dashed border-yellow-400 rounded-full animate-spin" />
                </div>

                {/* Four Sections */}
                {sections.map((section) => (
                  <div
                    key={section.id}
                    className={`absolute w-1/2 h-1/2 ${
                      section.position === "top-left"
                        ? "top-0 left-0 rounded-tl-lg"
                        : section.position === "top-right"
                          ? "top-0 right-0 rounded-tr-lg"
                          : section.position === "bottom-left"
                            ? "bottom-0 left-0 rounded-bl-lg"
                            : "bottom-0 right-0 rounded-br-lg"
                    } cursor-pointer transition-all duration-300 hover:scale-105 hover:z-20 group`}
                    onMouseEnter={() => setHoveredSection(section.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    <div
                      className={`w-full h-full ${section.bgColor} opacity-20 group-hover:opacity-40 transition-all duration-300`}
                    />
                    <div className="absolute inset-4 flex flex-col items-center justify-center text-center">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {section.icon}
                      </div>
                      <h3 className={`font-bold text-sm ${section.color} group-hover:scale-105 transition-transform`}>
                        {section.title}
                      </h3>
                      <div className="w-8 h-0.5 bg-current opacity-50 mt-1 group-hover:w-12 transition-all duration-300" />
                    </div>
                  </div>
                ))}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <line x1="25%" y1="25%" x2="75%" y2="25%" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="25%" y1="25%" x2="25%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" />
                  <line x1="75%" y1="25%" x2="75%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" />
                </svg>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                Di chuột qua các vùng để xem ý nghĩa chi tiết của từng phần
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Detailed Hover Card */}
      {hoveredSectionData && isAllUnlocked && (
        <Card className="absolute top-full left-0 right-0 mt-4 z-30 bg-white/95 backdrop-blur-sm border-2 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{hoveredSectionData.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-xl font-bold text-primary">{hoveredSectionData.title}</h4>
                  <Badge className={`${hoveredSectionData.bgColor} text-white`}>
                    Mảnh {sections.indexOf(hoveredSectionData) + 1}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{hoveredSectionData.detailedExplanation}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-sm mb-2 flex items-center gap-1">
                      <Info className="h-4 w-4" />
                      Điểm chính:
                    </h5>
                    <ul className="space-y-1">
                      {hoveredSectionData.keyPoints.map((point, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-end">
                    <Link href={`/blog/${hoveredSectionData.blogId}`}>
                      <Button className="w-full gap-2">
                        <BookOpen className="h-4 w-4" />
                        Đọc bài viết chi tiết
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
