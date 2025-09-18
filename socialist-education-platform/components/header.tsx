"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePuzzle } from "@/lib/puzzle-context";
import Link from "next/link";
import { useState } from "react";
import { CheatModeDialog } from "./cheat-mode-dialog";
import Image from "next/image";

export function Header() {
  const { userProgress, toggleCheatMode, resetProgress } = usePuzzle();
  const [showCheatDialog, setShowCheatDialog] = useState(false);

  const handleCheatToggle = () => {
    if (!userProgress.cheatModeEnabled) {
      setShowCheatDialog(true);
    } else {
      toggleCheatMode();
    }
  };

  return (
    <>
      <header className="border-b bg-primary sticky top-0 z-40 font-gilroy ">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">

            <nav className="hidden md:flex items-center gap-6 text-lg">
              <Link href="/" className="text-white uppercase relative group">
                <span className="hover:opacity-80 font-bold">PUZZLE</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/blog"
                className="text-white uppercase relative group"
              >
                <span className="hover:opacity-80 font-bold py-2">THƯ VIỆN</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-1"><Image src={"images/4.png"} width={25} height={25} alt="socialism logo" />
              </div>
              <Link
                href="/"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <h1 className="text-xl font-bold text-white hidden sm:block uppercase">
                  Dân chủ XHCN & Nhà nước XHCN
                </h1>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              {userProgress.cheatModeEnabled && (
                <Badge variant="destructive" className="hidden sm:flex">
                  Cheat Mode
                </Badge>
              )}

              <button
                className="text-white uppercase relative group"
                onClick={handleCheatToggle}
              >
                <span className="hover:opacity-80 font-bold">
                  {userProgress.cheatModeEnabled ? "TẮT CHEAT" : "CHEAT"}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </button>
              <button
                className="text-white uppercase relative group"
                onClick={resetProgress}
              >
                <span className="hover:opacity-80 font-bold">ĐẶT LẠI</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <CheatModeDialog
        isOpen={showCheatDialog}
        onClose={() => setShowCheatDialog(false)}
        onConfirm={() => {
          toggleCheatMode();
          setShowCheatDialog(false);
        }}
      />
    </>
  );
}
