"use client";
import React, { useState, useEffect } from "react";
import {
  Clock,
  User,
  Tag,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp,
  ArrowRight,
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

const CQ2Blog = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections: Section[] = [
    {
      id: "ho-chi-minh-thought",
      title: "Tư tưởng Hồ Chí Minh về Con người mới XHCN",
      icon: <BookOpen className="w-6 h-6" />,
      image: "/images/tu-tuong-hcm.jpg",
      content: [
        "Ngày 20/6/1960, Chủ tịch Hồ Chí Minh nhấn mạnh: “Muốn xây dựng CNXH, phải có con người XHCN và có tư tưởng XHCN”.",
        "Con người mới XHCN phải vừa có đạo đức cách mạng (“Hồng”), vừa có tri thức, chuyên môn, sáng tạo (“Chuyên”).",
        "Thế hệ trẻ là chủ nhân tương lai cần kết hợp hài hòa lợi ích cá nhân với lợi ích cộng đồng.",
      ],
    },
    {
      id: "youth-perspective",
      title: "Luận bàn từ góc nhìn thế hệ trẻ",
      icon: <Lightbulb className="w-6 h-6" />,
      image: "/images/the-he-tre.jpg",
      content: [
        "“Hồng” – phẩm chất đạo đức: trung thành lý tưởng, trách nhiệm, yêu thương con người.",
        "“Chuyên” – tài năng và sáng tạo: học tập, làm chủ khoa học – công nghệ.",
        "Sự kết hợp “Hồng” và “Chuyên” quyết định giá trị con người, giúp thế hệ trẻ thực sự làm chủ tương lai.",
      ],
    },
    {
      id: "reality-youth",
      title: "Nhận diện lệch chuẩn ở thanh niên hiện nay",
      icon: <TrendingUp className="w-6 h-6" />,
      subsections: [
        {
          title: "Lối sống",
          points: [
            "Một bộ phận chạy theo vật chất, coi nhẹ giá trị đạo đức.",
            "Xu hướng tiêu xài hoang phí, thờ ơ với vấn đề xã hội.",
          ],
        },
        {
          title: "Khát vọng & học tập",
          points: [
            "Khát vọng gắn nhiều với thu nhập cao, môi trường làm việc năng động.",
            "Áp lực từ gia đình khiến nhiều bạn trẻ thiếu hứng thú với ngành học.",
          ],
        },
        {
          title: "Lao động",
          points: [
            "Thiếu động lực, coi thường lao động chân tay.",
            "Ngại khó, ngại khổ, xem nhẹ giá trị của lao động.",
          ],
        },
      ],
    },
    {
      id: "comparison-table",
      title: "Bảng so sánh: Tiêu chí & Biểu hiện",
      icon: <Target className="w-6 h-6" />,
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
                Con người mới xã hội chủ nghĩa
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Nhận diện và xây dựng
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {" "}
                Con người XHCN
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Góc nhìn thế hệ trẻ về tư tưởng Hồ Chí Minh và thực trạng thanh
              niên ngày nay
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>15 phút đọc</span>
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
          {/* Left: Table of contents */}
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

          {/* Right: Content */}
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

                  <div
                    className={`grid ${
                      section.image ? "md:grid-cols-2" : "md:grid-cols-1"
                    } gap-6 items-center`}
                  >
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
                          {section.subsections.map((sub, subIndex) => (
                            <div
                              key={subIndex}
                              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-white/30"
                            >
                              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                                  {String.fromCharCode(97 + subIndex)}
                                </div>
                                {sub.title}
                              </h3>
                              <div className="space-y-3 ml-11">
                                {sub.points.map((point, pointIndex) => (
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

                      {section.id === "comparison-table" && (
                        <div className="overflow-x-auto mt-6">
                          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                              <tr>
                                <th className="px-6 py-3 text-left">
                                  Tiêu chí của Con người mới XHCN
                                </th>
                                <th className="px-6 py-3 text-left">
                                  Biểu hiện ở thanh niên đương đại
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr>
                                <td className="px-6 py-4">
                                  Lý tưởng sống cao đẹp, vì mọi người, đặt lợi
                                  ích tập thể lên trên cá nhân
                                </td>
                                <td className="px-6 py-4">
                                  Lối sống thực dụng, coi trọng vật chất, thờ ơ
                                  với xã hội
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4">
                                  Thống nhất giữa "Đức" và "Tài"
                                </td>
                                <td className="px-6 py-4">
                                  Khát vọng lệch chuẩn, tập trung vào thu nhập
                                  và hình thức
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4">
                                  Hăng hái, cần cù và tôn trọng lao động
                                </td>
                                <td className="px-6 py-4">
                                  Thiếu động lực, coi thường lao động chân tay
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                    {section.image && (
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full rounded-xl shadow-md"
                      />
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
                <p className="text-xl leading-relaxed mb-4">
                  <strong>Thế hệ trẻ hôm nay</strong> vừa là chủ nhân hiện tại,
                  vừa là tương lai của đất nước. Xây dựng con người mới XHCN là
                  nhiệm vụ của mỗi cá nhân và cả cộng đồng.
                </p>

                <div className="space-y-4 text-lg">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p>
                      Kết hợp hài hòa giữa <strong>“Hồng” và “Chuyên”</strong>{" "}
                      để trở thành công dân toàn diện, vừa có đạo đức, vừa có
                      tài năng.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p>
                      Nhận diện và khắc phục <strong>lệch chuẩn</strong> trong
                      lối sống, khát vọng và lao động để không ngừng hoàn thiện
                      bản thân.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p>
                      Góp phần xây dựng một xã hội{" "}
                      <strong>công bằng, văn minh, giàu mạnh</strong> – nơi con
                      người được phát triển toàn diện.
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

export default CQ2Blog;
