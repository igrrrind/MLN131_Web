import type { Question } from "../types"

export const questionsData: Record<number, Question[]> = {
  1: [
    {
      id: "q1-1",
      question: "Chủ nghĩa xã hội khoa học được sáng lập bởi ai?",
      options: ["Karl Marx và Friedrich Engels", "Vladimir Lenin", "Mao Trạch Đông", "Hồ Chí Minh"],
      correctAnswer: 0,
      explanation:
        'Karl Marx và Friedrich Engels là những người sáng lập chủ nghĩa xã hội khoa học thông qua các tác phẩm như "Tuyên ngôn của Đảng Cộng sản" và "Tư bản luận".',
    },
    {
      id: "q1-2",
      question: "Đặc điểm cơ bản của chủ nghĩa xã hội khoa học là gì?",
      options: [
        "Dựa trên khoa học và thực tiễn",
        "Chỉ là lý thuyết suông",
        "Không có cơ sở khoa học",
        "Chỉ áp dụng ở châu Âu",
      ],
      correctAnswer: 0,
      explanation:
        "Chủ nghĩa xã hội khoa học được xây dựng trên nền tảng khoa học, phân tích quy luật phát triển của xã hội và có tính thực tiễn cao.",
    },
  ],
  2: [
    {
      id: "q2-1",
      question: "Đấu tranh giai cấp là động lực của sự phát triển xã hội theo quan điểm nào?",
      options: ["Chủ nghĩa tư bản", "Chủ nghĩa xã hội khoa học", "Chủ nghĩa phong kiến", "Chủ nghĩa đế quốc"],
      correctAnswer: 1,
      explanation:
        "Theo chủ nghĩa xã hội khoa học, đấu tranh giai cấp giữa giai cấp bóc lột và bị bóc lột là động lực cơ bản thúc đẩy sự phát triển của xã hội.",
    },
    {
      id: "q2-2",
      question: "Giai cấp công nhân có vai trò gì trong cách mạng xã hội chủ nghĩa?",
      options: ["Vai trò phụ thuộc", "Vai trò lãnh đạo", "Không có vai trò", "Vai trò cản trở"],
      correctAnswer: 1,
      explanation:
        "Giai cấp công nhân là lực lượng cách mạng tiến bộ nhất, có sứ mệnh lịch sử lãnh đạo cách mạng xã hội chủ nghĩa.",
    },
  ],
  3: [
    {
      id: "q3-1",
      question: "Mục tiêu cuối cùng của chủ nghĩa xã hội khoa học là gì?",
      options: [
        "Xây dựng xã hội không giai cấp",
        "Duy trì giai cấp tư sản",
        "Tăng cường bóc lột",
        "Phát triển tư bản chủ nghĩa",
      ],
      correctAnswer: 0,
      explanation:
        "Mục tiêu cuối cùng là xây dựng xã hội cộng sản - xã hội không có giai cấp, không có bóc lột, mọi người đều bình đẳng và tự do phát triển.",
    },
    {
      id: "q3-2",
      question: "Đoàn kết quốc tế của giai cấp công nhân có ý nghĩa gì?",
      options: ["Không cần thiết", "Rất quan trọng cho cách mạng", "Chỉ là khẩu hiệu", "Gây chia rẽ"],
      correctAnswer: 1,
      explanation:
        "Đoàn kết quốc tế của giai cấp công nhân là sức mạnh to lớn, giúp các dân tộc cùng đấu tranh chống lại chế độ bóc lột và xây dựng xã hội mới.",
    },
  ],
  4: [
    {
      id: "q4-1",
      question: "Chủ nghĩa xã hội khoa học có thể áp dụng ở mọi quốc gia không?",
      options: [
        "Không, chỉ ở châu Âu",
        "Có, nhưng phải phù hợp với điều kiện cụ thể",
        "Không bao giờ",
        "Chỉ ở các nước phát triển",
      ],
      correctAnswer: 1,
      explanation:
        "Chủ nghĩa xã hội khoa học có tính chất phổ biến nhưng phải được vận dụng sáng tạo phù hợp với điều kiện lịch sử, văn hóa và xã hội của từng quốc gia.",
    },
    {
      id: "q4-2",
      question: "Việt Nam đã vận dụng chủ nghĩa xã hội khoa học như thế nào?",
      options: ["Áp dụng máy móc", "Vận dụng sáng tạo với đặc điểm dân tộc", "Không áp dụng", "Chỉ học lý thuyết"],
      correctAnswer: 1,
      explanation:
        "Việt Nam đã vận dụng sáng tạo chủ nghĩa xã hội khoa học, kết hợp với truyền thống dân tộc và điều kiện cụ thể để xây dựng đất nước.",
    },
  ],
}
