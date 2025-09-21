"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import type { PuzzlePiece, UserProgress, Achievement } from "./types";
import { questionsData } from "./data/questions";

interface PuzzleContextType {
  pieces: PuzzlePiece[];
  userProgress: UserProgress;
  unlockPiece: (pieceId: number) => void;
  toggleCheatMode: () => void;
  resetProgress: () => void;
  isAllUnlocked: boolean;
  trackQuestionAnswer: (isCorrect: boolean) => void;
  sessionStartTime: Date | null;
}

const PuzzleContext = createContext<PuzzleContextType | undefined>(undefined);

const initialPieces: PuzzlePiece[] = [
  {
    id: 1,
    title: "Mảnh Ghép Chủ Đề CQ1. Nền sản xuất Việt Nam trong thời kỳ quá độ lên CNXH dưới tác động của Cách mạng công nghiệp 4.0”.",
    description:
      "Trong cuốn Góp phần phê phán khoa kinh tế chính trị học. C. Mác nhấn mạnh: “Cái cối quay bằng tay đưa lại xã hội có lãnh chúa; cái cối xay chạy bằng hơi nước đưa lại xã hội có nhà tư bản công nghiệp.” Đặt vào trong điều kiện của cuộc cách mạng công nghiệp 4.0 hãy phác thảo ra nền sản xuất ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội (để luận chứng rằng nó đặt tiền đề tiến lên một xã hội ưu việt.).",
    color: "knowledge-blue",
    unlocked: false,
    questions: questionsData[1],
    blogId: "cq-1",
  },
  {
    id: 2,
    title: "Mảnh Ghép Chủ Đề CQ2. Tư tưởng Hồ Chí Minh và thực trạng thanh niên trong xây dựng con người XHCN",
    description:
      "Tại Đại hội Đảng bộ thành phố Hà Nội, ngày 20 tháng 6 năm 1960, Chủ tịch Hồ Chí Minh nhấn mạnh: “Muốn xây dựng chủ nghĩa xã hội, phải có con người xã hội chủ nghĩa và có tư tưởng xã hội chủ nghĩa”. 1. Đặt mình vào vị thế là chủ nhân tương lai của đất nước hãy luận bàn về phương diện con người mới xã hội chủ nghĩa. 2. Nhận diện những lệch chuẩn trong suy nghĩ và hành động của giới trẻ hiện nay trong học tập và lao động.",
    color: "revolution-red",
    unlocked: false,
    questions: questionsData[2],
    blogId: "cq-2",
  },
  {
    id: 3,
    title: "Mảnh Ghép Chủ Đề CQ3. Bản chất lịch sử và sự kế thừa phát triển của dân chủ trong tiến trình xã hội",
    description:
      "Vì sao nói dân chủ là một phạm trù lịch sử?",
    color: "unity-purple",
    unlocked: false,
    questions: questionsData[3],
    blogId: "cq-3",
  },
  {
    id: 4,
    title: "Mảnh Ghép Chủ Đề CQ4. Sự khác nhau về bản chất giữa dân chủ XHCN và dân chủ tư sản qua ví dụ thực tiễn",
    description:
      "Thông qua những ví dụ thực tiễn để chứng minh sự khác nhau về bản chất giũa dân chủ xã hội chủ nghĩa và dân chủ tư sản?",
    color: "progress-green",
    unlocked: false,
    questions: questionsData[4],
    blogId: "cq-4",
  },
];

const initialProgress: UserProgress = {
  unlockedPieces: [],
  totalTime: 0,
  cheatModeEnabled: false,
  pieceUnlockTimes: {},
  questionsAnswered: 0,
  correctAnswers: 0,
  streakCount: 0,
  achievements: [],
};

const achievementDefinitions: Omit<Achievement, "unlockedAt">[] = [
  {
    id: "first-unlock",
    title: "Khởi Đầu",
    description: "Mở khóa mảnh ghép đầu tiên",
    icon: "🎯",
    type: "completion",
  },
  {
    id: "half-complete",
    title: "Nửa Chặng Đường",
    description: "Mở khóa 2 mảnh ghép",
    icon: "⚡",
    type: "completion",
  },
  {
    id: "almost-there",
    title: "Gần Đích",
    description: "Mở khóa 3 mảnh ghép",
    icon: "🔥",
    type: "completion",
  },
  {
    id: "master",
    title: "Bậc Thầy",
    description: "Hoàn thành tất cả 4 mảnh ghép",
    icon: "👑",
    type: "completion",
  },
  {
    id: "speed-demon",
    title: "Tốc Độ Ánh Sáng",
    description: "Hoàn thành trong vòng 5 phút",
    icon: "⚡",
    type: "speed",
  },
  {
    id: "perfectionist",
    title: "Hoàn Hảo",
    description: "Trả lời đúng tất cả câu hỏi",
    icon: "💎",
    type: "accuracy",
  },
  {
    id: "explorer",
    title: "Nhà Khám Phá",
    description: "Đọc tất cả bài blog",
    icon: "🗺️",
    type: "exploration",
  },
];

export function PuzzleProvider({ children }: { children: React.ReactNode }) {
  const [pieces, setPieces] = useState<PuzzlePiece[]>(initialPieces);
  const [userProgress, setUserProgress] =
    useState<UserProgress>(initialProgress);
  const [sessionStartTime, setSessionStartTime] = useState<Date | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("socialist-education-progress");
    if (saved) {
      const progress = JSON.parse(saved);
      setUserProgress(progress);

      setPieces((prev) =>
        prev.map((piece) => ({
          ...piece,
          unlocked:
            progress.unlockedPieces.includes(piece.id) ||
            progress.cheatModeEnabled,
        }))
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "socialist-education-progress",
      JSON.stringify(userProgress)
    );
  }, [userProgress]);

  const unlockPiece = (pieceId: number) => {
    if (!userProgress.unlockedPieces.includes(pieceId)) {
      const now = new Date();
      const newProgress = {
        ...userProgress,
        unlockedPieces: [...userProgress.unlockedPieces, pieceId],
        pieceUnlockTimes: {
          ...userProgress.pieceUnlockTimes,
          [pieceId]: now,
        },
      };

      if (newProgress.unlockedPieces.length === 4) {
        newProgress.completedAt = now;

        if (sessionStartTime) {
          newProgress.totalTime = Math.floor(
            (now.getTime() - sessionStartTime.getTime()) / 1000
          );
        }
      }

      const newAchievements = checkAchievements(newProgress);
      newProgress.achievements = [
        ...userProgress.achievements,
        ...newAchievements,
      ];

      setUserProgress(newProgress);
      setPieces((prev) =>
        prev.map((piece) =>
          piece.id === pieceId ? { ...piece, unlocked: true } : piece
        )
      );
    }
  };

  const checkAchievements = (progress: UserProgress): Achievement[] => {
    const newAchievements: Achievement[] = [];
    const existingIds = progress.achievements.map((a) => a.id);

    achievementDefinitions.forEach((def) => {
      if (existingIds.includes(def.id)) return;

      let shouldUnlock = false;

      switch (def.id) {
        case "first-unlock":
          shouldUnlock = progress.unlockedPieces.length >= 1;
          break;
        case "half-complete":
          shouldUnlock = progress.unlockedPieces.length >= 2;
          break;
        case "almost-there":
          shouldUnlock = progress.unlockedPieces.length >= 3;
          break;
        case "master":
          shouldUnlock = progress.unlockedPieces.length >= 4;
          break;
        case "speed-demon":
          shouldUnlock =
            progress.totalTime > 0 &&
            progress.totalTime <= 300 &&
            progress.unlockedPieces.length === 4;
          break;
        case "perfectionist":
          shouldUnlock =
            progress.questionsAnswered > 0 &&
            progress.correctAnswers === progress.questionsAnswered;
          break;
      }

      if (shouldUnlock) {
        newAchievements.push({
          ...def,
          unlockedAt: new Date(),
        });
      }
    });

    return newAchievements;
  };

  const trackQuestionAnswer = (isCorrect: boolean) => {
    setUserProgress((prev) => ({
      ...prev,
      questionsAnswered: prev.questionsAnswered + 1,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      streakCount: isCorrect ? prev.streakCount + 1 : 0,
    }));
  };

  useEffect(() => {
    if (
      !sessionStartTime &&
      userProgress.unlockedPieces.length === 0 &&
      !userProgress.cheatModeEnabled
    ) {
      setSessionStartTime(new Date());
    }
  }, [
    sessionStartTime,
    userProgress.unlockedPieces.length,
    userProgress.cheatModeEnabled,
  ]);

  const toggleCheatMode = () => {
    const newCheatMode = !userProgress.cheatModeEnabled;
    setUserProgress((prev) => ({ ...prev, cheatModeEnabled: newCheatMode }));
    setPieces((prev) =>
      prev.map((piece) => ({
        ...piece,
        unlocked:
          newCheatMode || userProgress.unlockedPieces.includes(piece.id),
      }))
    );
  };

  const resetProgress = () => {
    const resetProgress = initialProgress;
    setUserProgress(resetProgress);
    setPieces(initialPieces);
    setSessionStartTime(null);
    localStorage.removeItem("socialist-education-progress");
  };

  const isAllUnlocked =
    userProgress.unlockedPieces.length === 4 || userProgress.cheatModeEnabled;

  return (
    <PuzzleContext.Provider
      value={{
        pieces,
        userProgress,
        unlockPiece,
        toggleCheatMode,
        resetProgress,
        isAllUnlocked,
        trackQuestionAnswer,
        sessionStartTime,
      }}
    >
      {children}
    </PuzzleContext.Provider>
  );
}

export function usePuzzle() {
  const context = useContext(PuzzleContext);
  if (context === undefined) {
    throw new Error("usePuzzle must be used within a PuzzleProvider");
  }
  return context;
}
