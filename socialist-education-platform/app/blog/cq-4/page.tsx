"use client";
import React, { useState, useEffect } from "react";
import {
  Clock,
  User,
  Tag,
  BookOpen,
  Target,
  ArrowRight,
  Scale,
  Landmark,
  FileText,
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  image?: string;
  content?: { type: "vs"; left: string; right: string }[];
}

const CQ4Blog = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections: Section[] = [
    {
      id: "power",
      title: "Chủ thể quyền lực",
      icon: <Landmark className="w-6 h-6" />,
      image: "/images/dan-chu-xa-hoi-chu-nghia-studocu.jpg",
      content: [
        {
          type: "vs",
          left: "Dân chủ tư sản (Mỹ): Quyền lực chính trị nằm trong tay nhóm nhỏ giàu có. Năm 2024, 1,87 tỷ USD được huy động cho tranh cử, kèm 1,9 tỷ USD 'tiền đen'. 50 gia đình tỷ phú đầu tư hơn 600 triệu USD vào bầu cử → đại đa số cử tri ít thực quyền.",
          right:
            "Dân chủ XHCN (Việt Nam): Hiến pháp khẳng định 'tất cả quyền lực nhà nước thuộc về nhân dân'. Đại biểu Quốc hội đa dạng, bao gồm công nhân, nông dân, trí thức → quyền lực được thực hiện nhân danh đa số nhân dân lao động.",
        },
      ],
    },
    {
      id: "purpose",
      title: "Mục đích",
      icon: <Scale className="w-6 h-6" />,
      image:
        "/images/phan-biet-so-sanh-dan-chu-xa-hoi-chu-nghia-va-dan-chu-tu-ban.jpg",
      content: [
        {
          type: "vs",
          left: "Dân chủ tư sản: Bảo vệ quyền sở hữu tư nhân và lợi nhuận giai cấp tư sản. 1% người Mỹ giàu nhất nắm 35% tài sản quốc gia (2024). Chính sách thường ưu tiên giảm thuế, trợ cấp người giàu.",
          right:
            "Dân chủ XHCN: Hướng đến công bằng xã hội, phục vụ đa số nhân dân. Việt Nam coi an sinh xã hội là trung tâm, giảm nghèo, bảo hiểm y tế toàn dân, trợ cấp và thuế công bằng để 'không ai bị bỏ lại phía sau'.",
        },
      ],
    },
    {
      id: "substance",
      title: "Tính thực chất",
      icon: <FileText className="w-6 h-6" />,
      image: "/images/tinh-thuc-chat.jpg",
      content: [
        {
          type: "vs",
          left: "Dân chủ tư sản: Hình thức là bầu cử đa đảng, tự do ngôn luận. Nhưng các nhóm lợi ích chi phối chính trị bằng siêu PAC và quảng cáo chính trị → tiếng nói dân thường bị lấn át.",
          right:
            "Dân chủ XHCN: Được quảng bá toàn diện và sâu sắc. Việt Nam thường lấy ý kiến nhân dân vào dự thảo luật lớn (Luật Đất đai, Luật Nhà ở…). Các tổ chức như Mặt trận Tổ quốc, công đoàn, hội nông dân tham gia quản lý xã hội.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero */}
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
              <span className="text-sm font-medium">So sánh dân chủ</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Khác biệt giữa{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                dân chủ XHCN{" "}
              </span>
              và{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                dân chủ tư sản
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Thông qua ví dụ thực tiễn để thấy rõ sự khác nhau về bản chất.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" /> <span>20 phút đọc</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" /> <span>Tác giả: </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* TOC */}
          <aside className="lg:col-span-1 hidden lg:block sticky top-28 self-start">
            <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-white/20">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                Mục lục
              </h2>
              <nav className="space-y-3">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-all text-gray-700"
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
                className="bg-white/95 rounded-2xl shadow-lg border border-white/20 p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      {section.title}
                    </h2>

                    {section.image && (
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full rounded-xl shadow-md mb-6"
                      />
                    )}

                    {section.content?.map((c, i) => (
                      <div
                        key={i}
                        className="grid md:grid-cols-2 gap-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6"
                      >
                        <div>
                          <h3 className="font-bold text-red-600 mb-2">
                            Dân chủ tư sản
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {c.left}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-bold text-green-600 mb-2">
                            Dân chủ XHCN
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {c.right}
                          </p>
                        </div>
                      </div>
                    ))}
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
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-xl leading-relaxed mb-4">
                  Dân chủ tư sản về bản chất phục vụ cho{" "}
                  <b>nhóm thiểu số giàu có</b>, quyền lực và chính sách nghiêng
                  về bảo vệ lợi ích tư bản.
                </p>
                <p className="text-xl leading-relaxed mb-4">
                  Ngược lại, dân chủ XHCN tự nhận là phục vụ{" "}
                  <b>đa số nhân dân lao động</b>, nhấn mạnh công bằng xã hội, an
                  sinh, xóa đói giảm nghèo.
                </p>
                <p className="text-xl leading-relaxed">
                  Tổng hợp lại, dân chủ tư sản thiên về{" "}
                  <b>hình thức và lợi ích thiểu số</b>, trong khi dân chủ XHCN
                  hướng đến <b>quyền làm chủ và lợi ích số đông</b>.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CQ4Blog;
