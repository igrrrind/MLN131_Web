"use client";
import React, { useState, useEffect } from "react";
import { Clock, User, Tag, ArrowRight, BookOpen, Target } from "lucide-react";

interface Subsection {
  title: string;
  points: string[];
  image?: string; // thêm field ảnh cho subsection
}

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content?: string[];
  subsections?: Subsection[];
}

const CQ3Blog = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections: Section[] = [
    {
      id: "history",
      title: "Dân chủ là phạm trù lịch sử",
      icon: <BookOpen className="w-6 h-6" />,
      subsections: [
        {
          title: "Xuất hiện và tồn tại gắn với xã hội có giai cấp",
          image: "/images/dan-chu.jpg",
          points: [
            "Khi xã hội cộng sản nguyên thủy tan rã, giai cấp và nhà nước ra đời thì dân chủ mới xuất hiện như một hình thức tổ chức chính trị.",
            "Trong xã hội nguyên thủy chưa có giai cấp, chưa có nhà nước nên chưa có dân chủ theo nghĩa chính trị.",
          ],
        },
        {
          title:
            "Mang tính lịch sử – thay đổi theo từng hình thái kinh tế - xã hội",
          image: "/images/lich-su-dan-chu.jpg",
          points: [
            "Mỗi kiểu nhà nước (chiếm hữu nô lệ, phong kiến, tư sản, XHCN) có một nền dân chủ tương ứng.",
            "Ví dụ: dân chủ chủ nô, dân chủ tư sản, dân chủ XHCN… khác nhau về bản chất, phạm vi và đối tượng phục vụ.",
          ],
        },
        {
          title: "Có tính kế thừa và phát triển",
          image: "/images/dan-chu-ke-thua-phat-trien.jpeg",
          points: [
            "Dân chủ không bất biến; nó vận động cùng với sự phát triển của lực lượng sản xuất, quan hệ giai cấp và đấu tranh xã hội.",
            "Dân chủ XHCN kế thừa những giá trị tiến bộ của các nền dân chủ trước nhưng cao hơn, rộng mở hơn vì phục vụ đa số nhân dân lao động.",
          ],
        },
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
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
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
              Dân chủ là{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                phạm trù lịch sử
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Phân tích đặc điểm, tính lịch sử, kế thừa và phát triển của dân
              chủ
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>10 phút đọc</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Tác giả: </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of contents */}
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
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3 space-y-8">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex-shrink-0">
                    {section.icon}
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                      {section.title}
                    </h2>

                    {section.subsections && (
                      <div className="grid grid-cols-1 gap-6">
                        {section.subsections.map((subsection, subIndex) => (
                          <div
                            key={subIndex}
                            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-white/30"
                          >
                            {/* ảnh subsection */}
                            {subsection.image && (
                              <img
                                src={subsection.image}
                                alt={subsection.title}
                                className="w-full mb-4 rounded-lg shadow-md"
                              />
                            )}

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
                </div>
              </section>
            ))}

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-blue-800 to-purple-700 rounded-2xl shadow-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 mr-4 text-yellow-400" />
                <h2 className="text-3xl font-bold">🎯 Kết luận</h2>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-lg leading-relaxed">
                  Dân chủ là một phạm trù lịch sử vì nó chỉ nảy sinh, tồn tại và
                  biến đổi trong những điều kiện lịch sử – xã hội nhất định,
                  phát triển từ thấp đến cao, từ chưa hoàn thiện đến hoàn thiện
                  gắn liền với sự tồn tại và phát triển của giai cấp, nhà nước,
                  và hình thái kinh tế - xã hội.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CQ3Blog;
