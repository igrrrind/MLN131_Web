import type { Question } from "../types"

export const questionsData: Record<number, Question[]> = {
  // CQ1
  1: [
    {
      id: "q1-1",
      question: "Theo C. Mác, yếu tố nào quyết định quan hệ sản xuất?",
      options: ["Ý thức xã hội", "Lực lượng sản xuất", "Nhà nước", "Giai cấp thống trị"],
      correctAnswer: 1,
      explanation:
        "Mác nhấn mạnh: lực lượng sản xuất quyết định quan hệ sản xuất và hình thái kinh tế – xã hội.",
    },
    {
      id: "q1-2",
      question: "Trong thời kỳ quá độ ở Việt Nam hiện nay, đặc điểm nổi bật của nền kinh tế là gì?",
      options: [
        "Kinh tế thuần túy nhà nước",
        "Kinh tế thị trường định hướng xã hội chủ nghĩa",
        "Kinh tế tư bản chủ nghĩa",
        "Kinh tế kế hoạch hóa tập trung như trước đổi mới",
      ],
      correctAnswer: 1,
      explanation:
        "Việt Nam đang xây dựng nền kinh tế thị trường định hướng XHCN với đa dạng hình thức sở hữu.",
    },
    {
      id: "q1-3",
      question: "Vai trò của công nghệ 4.0 trong quá trình xây dựng CNXH ở Việt Nam là gì?",
      options: [
        "Chỉ phục vụ giải trí",
        "Tự động hóa, tăng năng suất, minh bạch hóa, hỗ trợ quản lý hiệu quả",
        "Không có tác động",
        "Chỉ gây ra thất nghiệp",
      ],
      correctAnswer: 1,
      explanation:
        "Công nghệ 4.0 như AI, IoT, Big Data giúp nâng cao năng suất, minh bạch hóa và hỗ trợ phát triển xã hội số.",
    },
  ],

  // CQ2
  2: [
    {
      id: "q2-1",
      question: "Theo Hồ Chí Minh, con người mới XHCN phải có phẩm chất gì?",
      options: ["Vừa hồng, vừa chuyên", "Chỉ cần hồng", "Chỉ cần chuyên", "Không cần cả hai"],
      correctAnswer: 0,
      explanation:
        "Hồ Chí Minh nhấn mạnh con người mới phải kết hợp hài hòa giữa phẩm chất đạo đức cách mạng (hồng) và tài năng, chuyên môn (chuyên).",
    },
    {
      id: "q2-2",
      question: "Biểu hiện lệch chuẩn của một bộ phận giới trẻ hiện nay là gì?",
      options: [
        "Sống vì tập thể",
        "Lối sống thực dụng, coi trọng vật chất, thiếu động lực học tập",
        "Hăng hái lao động",
        "Kết hợp hài hòa đức và tài",
      ],
      correctAnswer: 1,
      explanation:
        "Một số bạn trẻ chạy theo vật chất, tiêu xài hoang phí, coi thường lao động chân tay và thiếu động lực học tập.",
    },
  ],

  // CQ3
  3: [
    {
      id: "q3-1",
      question: "Vì sao nói dân chủ là một phạm trù lịch sử?",
      options: [
        "Vì dân chủ luôn tồn tại trong mọi xã hội",
        "Vì dân chủ chỉ có ở chế độ tư bản",
        "Vì dân chủ xuất hiện, tồn tại và biến đổi theo điều kiện lịch sử – xã hội nhất định",
        "Vì dân chủ không thay đổi theo thời gian",
      ],
      correctAnswer: 2,
      explanation:
        "Dân chủ gắn với xã hội có giai cấp, thay đổi theo từng hình thái kinh tế – xã hội, có tính kế thừa và phát triển.",
    },
    {
      id: "q3-2",
      question: "Dân chủ XHCN kế thừa và phát triển điều gì từ các nền dân chủ trước?",
      options: [
        "Không kế thừa gì",
        "Chỉ kế thừa về hình thức bầu cử",
        "Các giá trị tiến bộ, nhưng nâng cao hơn vì phục vụ đa số nhân dân lao động",
        "Kế thừa nguyên xi mô hình dân chủ tư sản",
      ],
      correctAnswer: 2,
      explanation:
        "Dân chủ XHCN kế thừa giá trị tiến bộ của dân chủ trước đó nhưng cao hơn, toàn diện hơn, phục vụ lợi ích số đông.",
    },
  ],

  // CQ4
  4: [
    {
      id: "q4-1",
      question: "Trong dân chủ tư sản, quyền lực chính trị trên thực tế thường thuộc về ai?",
      options: [
        "Nhân dân lao động",
        "Một nhóm nhỏ giới tài phiệt và giàu có",
        "Công nhân và nông dân",
        "Các tổ chức xã hội rộng rãi",
      ],
      correctAnswer: 1,
      explanation:
        "Ví dụ ở Mỹ, các chiến dịch tranh cử được chi phối bởi số tiền khổng lồ từ các tập đoàn và giới tài phiệt.",
    },
    {
      id: "q4-2",
      question: "Mục tiêu của dân chủ xã hội chủ nghĩa là gì?",
      options: [
        "Bảo vệ quyền lợi của thiểu số giàu có",
        "Hướng tới công bằng xã hội, phục vụ lợi ích đa số nhân dân",
        "Giữ vững lợi nhuận tư bản",
        "Giảm thuế cho người giàu",
      ],
      correctAnswer: 1,
      explanation:
        "Dân chủ XHCN đặt trọng tâm vào công bằng xã hội, xóa đói giảm nghèo và đảm bảo an sinh cho đa số nhân dân.",
    },
    {
      id: "q4-3",
      question: "Về tính thực chất, dân chủ XHCN khác dân chủ tư sản ở điểm nào?",
      options: [
        "Nhân dân được tham gia góp ý xây dựng luật pháp và chính sách",
        "Mọi quyền lực thuộc về giới tài phiệt",
        "Chỉ dừng ở bầu cử hình thức",
        "Không có sự tham gia của quần chúng",
      ],
      correctAnswer: 0,
      explanation:
        "Dân chủ XHCN mở rộng thực chất quyền làm chủ của nhân dân thông qua góp ý luật pháp và tham gia quản lý xã hội.",
    },
  ],
}
