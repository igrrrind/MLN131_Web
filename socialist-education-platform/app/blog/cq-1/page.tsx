"use client";
import React, { useState, useEffect } from "react";
import {
  Clock,
  User,
  Tag,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";

interface Subsection {
  title: string;
  points: string[];
}

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  image?: string;
  content?: string[];
  subsections?: Subsection[];
}

interface Props {
  sections: Section[];
}

const CQ1Blog = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      id: "marx-thought",
      title: "Liên hệ tư tưởng của C. Mác",
      icon: <BookOpen className="w-6 h-6" />,
      image: "/images/Karl-Marx.webp",
      content: [
        'Mác muốn nhấn mạnh: lực lượng sản xuất ("cái cối quay bằng tay…") quyết định quan hệ sản xuất (QHSX) và hình thái kinh tế – xã hội.',
        "Công cụ sản xuất thay đổi → phương thức sản xuất thay đổi → kéo theo sự thay đổi của xã hội.",
        "Thời CMCN 4.0, công nghệ số, trí tuệ nhân tạo, dữ liệu lớn, IoT, tự động hóa… là lực lượng sản xuất mới, đặt nền tảng cho quan hệ sản xuất xã hội chủ nghĩa hiện đại.",
      ],
    },
    {
      id: "vietnam-production",
      title: "Nền sản xuất ở Việt Nam trong thời kỳ quá độ",
      icon: <TrendingUp className="w-6 h-6" />,
      subsections: [
        {
          title: "Đặc điểm",
          points: [
            "Đa dạng hình thức sở hữu: tồn tại sở hữu nhà nước, sở hữu tập thể, đồng thời có sở hữu tư nhân, vốn đầu tư nước ngoài trong khuôn khổ pháp luật.",
            "Nền kinh tế thị trường định hướng XHCN",
            "Ứng dụng công nghệ 4.0 mạnh mẽ trong các lĩnh vực: sản xuất công nghiệp, nông nghiệp thông minh, dịch vụ số, thương mại điện tử…",
            "Chuyển đổi số quốc gia: xây dựng chính phủ số, kinh tế số, xã hội số.",
          ],
        },
        {
          title: "Vai trò của lực lượng sản xuất mới",
          points: [
            "Tự động hóa, AI, robot thay thế lao động giản đơn → giải phóng sức lao động, nâng cao năng suất.",
            "Dữ liệu lớn (Big Data), IoT, Blockchain → minh bạch, quản lý hiệu quả, hạn chế tham nhũng, lãng phí.",
            "Kinh tế tri thức → lấy sáng tạo, khoa học – công nghệ, nhân lực chất lượng cao làm động lực chính.",
          ],
        },
        {
          title: "Quan hệ sản xuất trong thời kỳ quá độ",
          points: [
            "Nhà nước XHCN định hướng, điều tiết để phân phối công bằng hơn, hạn chế phân hóa giàu nghèo.",
            "Người lao động vừa là chủ thể sáng tạo, vừa là người thụ hưởng thành quả (thông qua chính sách an sinh, phúc lợi, chia sẻ lợi ích từ tăng trưởng).",
            "Hình thành các mô hình sở hữu mới: kinh tế số cộng đồng, hợp tác xã công nghệ, doanh nghiệp khởi nghiệp sáng tạo gắn với lợi ích xã hội.",
          ],
        },
      ],
    },
    {
      id: "future-foundation",
      title: "Tiền đề cho xã hội ưu việt trong tương lai",
      image: "/images/tien-de-cho-tuong-lai.jpg",
      icon: <Lightbulb className="w-6 h-6" />,
      content: [
        "Năng suất lao động vượt trội → của cải xã hội dồi dào.",
        "Trí tuệ nhân tạo + kinh tế tri thức → con người có nhiều điều kiện phát triển toàn diện.",
        "Công bằng xã hội: Nhờ vai trò quản lý của Nhà nước XHCN, thành quả tăng trưởng không rơi vào tay thiểu số như CNTB, mà được phân phối để nâng cao đời sống đại bộ phận nhân dân.",
        "Dân chủ mở rộng: công nghệ số hỗ trợ minh bạch hóa thông tin, nhân dân có thể tham gia quản lý xã hội dễ dàng hơn.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Tag className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">
                Chủ nghĩa xã hội khoa học
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Nền sản xuất Việt Nam trong thời kỳ
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {" "}
                quá độ lên CNXH
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Phân tích về vai trò của Cách mạng Công nghiệp 4.0 trong việc xây
              dựng nền sản xuất xã hội chủ nghĩa hiện đại
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>20 phút đọc</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Tác giả: </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left: Table of contents (sticky) */}
          <aside className="lg:col-span-1 hidden lg:block sticky top-28 self-start">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                Mục lục
              </h2>
              <nav className="space-y-3">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 text-gray-700"
                  >
                    <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-3">
                      {s.icon}
                    </div>
                    <div className="flex-1 text-sm font-medium">{s.title}</div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </nav>

              <div className="mt-6 text-sm text-gray-500">
                Lưu ý: toàn bộ nội dung được hiển thị (không cần mở rộng).
              </div>
            </div>
          </aside>

          {/* Right: Content */}
          <main className="lg:col-span-3 space-y-8">
            {sections.map((section: Section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex-shrink-0">
                    {section.icon}
                  </div>

                  {section.image ? (
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                          {section.title}
                        </h2>

                        {section.content && (
                          <div className="space-y-6 mb-6">
                            {section.content.map((item, index) => (
                              <div key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {section.subsections && (
                          <div className="grid grid-cols-1 gap-6">
                            {section.subsections.map((subsection, subIndex) => (
                              <div
                                key={subIndex}
                                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-white/30"
                              >
                                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                                    {String.fromCharCode(97 + subIndex)}
                                  </div>
                                  {subsection.title}
                                </h3>
                                <div className="space-y-3 ml-11">
                                  {subsection.points.map(
                                    (point, pointIndex) => (
                                      <div
                                        key={pointIndex}
                                        className="flex items-start"
                                      >
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                        <p className="text-gray-700 leading-relaxed">
                                          {point}
                                        </p>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full rounded-xl shadow-md"
                      />
                    </div>
                  ) : (
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {section.title}
                      </h2>

                      {section.content && (
                        <div className="space-y-6 mb-6">
                          {section.content.map((item, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                              <p className="text-gray-700 leading-relaxed text-lg">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.subsections && (
                        <div className="grid grid-cols-1 gap-6">
                          {section.subsections.map((subsection, subIndex) => (
                            <div
                              key={subIndex}
                              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-white/30"
                            >
                              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                                  {String.fromCharCode(97 + subIndex)}
                                </div>
                                {subsection.title}
                              </h3>
                              <div className="space-y-3 ml-11">
                                {subsection.points.map((point, pointIndex) => (
                                  <div
                                    key={pointIndex}
                                    className="flex items-start"
                                  >
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                                    <p className="text-gray-700 leading-relaxed">
                                      {point}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-blue-800 to-purple-700 rounded-2xl shadow-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 mr-4 text-yellow-400" />
                <h2 className="text-3xl font-bold">🎯 Kết luận luận chứng</h2>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-xl leading-relaxed mb-4">
                  <strong>
                    Trong bối cảnh CMCN 4.0, nền sản xuất ở Việt Nam thời kỳ quá
                    độ lên CNXH:
                  </strong>
                </p>

                <div className="space-y-4 text-lg">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p>
                      <strong>Vừa mang tính quá độ</strong> (đa dạng sở hữu,
                      kinh tế thị trường),
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p>
                      <strong>
                        Vừa đặt cơ sở vật chất – kỹ thuật hiện đại
                      </strong>{" "}
                      để xây dựng nền sản xuất XHCN ưu việt: năng suất cao, công
                      bằng xã hội, con người được giải phóng toàn diện.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CQ1Blog;
