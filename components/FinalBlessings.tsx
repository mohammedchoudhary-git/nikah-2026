"use client";

import { Lora } from "next/font/google";
import { useEffect, useState } from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

type FinalBlessingsProps = {
  onBack: () => void;
  onComplete: () => void;
};

export default function FinalBlessings({
  onBack,
  onComplete,
}: FinalBlessingsProps) {
  const [visible, setVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [closing, setClosing] = useState(false);

  /* =========================================================
     SCREEN ENTRANCE
  ========================================================= */

  useEffect(() => {
    const screenTimer = setTimeout(() => {
      setVisible(true);
    }, 100);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 650);

    return () => {
      clearTimeout(screenTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  /* =========================================================
     BACK → SCREEN 4
  ========================================================= */

  const handleBack = () => {
    if (closing) return;

    setVisible(false);

    setTimeout(() => {
      onBack();
    }, 850);
  };

  /* =========================================================
     FINISH
  ========================================================= */

  const handleFinish = () => {
    if (closing) return;

    setClosing(true);

    setTimeout(() => {
      onComplete();
    }, 1800);
  };

  return (
    <main
      className={`${lora.className} relative min-h-screen overflow-hidden bg-[#090708] text-[#f5eee5] transition-all duration-1000 ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-5 scale-[0.98] opacity-0"
      }`}
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top burgundy glow */}
        <div className="absolute left-1/2 top-[-200px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#651b25]/45 blur-[125px]" />

        {/* Bottom left burgundy glow */}
        <div className="absolute bottom-[-190px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[#7c202d]/25 blur-[120px]" />

        {/* Bottom right burgundy glow */}
        <div className="absolute bottom-[-170px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#3d1118]/35 blur-[120px]" />

        {/* Center soft glow */}
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8f2633]/10 blur-[105px]" />
      </div>

      {/* =========================================================
          BORDERS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#c9a96e]/35 sm:inset-6 md:inset-8" />

      <div className="pointer-events-none absolute inset-7 rounded-[1.7rem] border border-[#c9a96e]/10 sm:inset-9 md:inset-12" />

      {/* =========================================================
          DECORATIVE DETAILS
      ========================================================= */}

      <span className="pointer-events-none absolute left-[8%] top-[20%] text-[16px] text-[#c9a96e]/50">
        ✦
      </span>

      <span className="pointer-events-none absolute right-[9%] top-[28%] text-[14px] text-[#c9a96e]/35">
        ♡
      </span>

      <span className="pointer-events-none absolute bottom-[22%] left-[9%] text-[15px] text-[#c9a96e]/40">
        ♡
      </span>

      <span className="pointer-events-none absolute bottom-[15%] right-[9%] text-[16px] text-[#c9a96e]/40">
        ✦
      </span>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-8 sm:px-8 sm:py-14">
        <div className="w-full max-w-2xl text-center">

          {/* =====================================================
              HEADING
          ===================================================== */}

          <div
            className={`transition-all duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <p className="text-[13px] uppercase tracking-[0.3em] text-[#c9a96e]/85 sm:text-[15px]">
              With Love &amp; Dua
            </p>

            <div className="mx-auto mt-4 flex items-center justify-center gap-3 sm:mt-5">
              <span className="h-px w-10 bg-[#c9a96e]/30 sm:w-16" />

              <span className="text-[12px] text-[#c9a96e] sm:text-[13px]">
                ✦
              </span>

              <span className="h-px w-10 bg-[#c9a96e]/30 sm:w-16" />
            </div>
          </div>

          {/* =====================================================
              HEARTFELT MESSAGE
          ===================================================== */}

          <div
            className={`mx-auto mt-7 max-w-lg transition-all duration-[1100ms] sm:mt-12 ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="rounded-[1.7rem] border border-[#c9a96e]/30 bg-[#130b0d]/90 px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:rounded-[2rem] sm:px-10 sm:py-10">

              <p className="text-[18px] italic leading-7 text-[#c8b6b0] sm:text-[22px] sm:leading-10">
                As we begin this beautiful new
                <br className="hidden sm:block" />
                chapter of our lives, your presence
                <br className="hidden sm:block" />
                and blessings mean a lot to us.
              </p>

              <div className="mx-auto mt-5 flex items-center justify-center gap-3 sm:mt-7">
                <span className="h-px w-8 bg-[#c9a96e]/25" />

                <span className="text-[13px] text-[#c9a96e]">
                  ♡
                </span>

                <span className="h-px w-8 bg-[#c9a96e]/25" />
              </div>

              <p className="mt-4 text-[16px] font-medium text-[#f5eee5] sm:mt-6 sm:text-[19px]">
                Please keep us in your duas
              </p>
            </div>
          </div>

          {/* =====================================================
              FAMILY BLESSINGS
          ===================================================== */}

          <div
            className={`mt-7 transition-all delay-300 duration-[1100ms] sm:mt-10 ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-[12px] uppercase tracking-[0.25em] text-[#c9a96e]/80 sm:text-[14px] sm:tracking-[0.28em]">
              With the blessings of our families
            </p>

            <div className="mx-auto mt-4 flex items-center justify-center gap-3 sm:mt-5">
              <span className="h-px w-9 bg-[#c9a96e]/25 sm:w-14" />

              <span className="text-[12px] text-[#c9a96e]">
                ✦
              </span>

              <span className="h-px w-9 bg-[#c9a96e]/25 sm:w-14" />
            </div>

            <p className="mt-4 text-[21px] font-medium tracking-wide text-[#f5eee5] sm:mt-5 sm:text-[26px]">
              Nizamuddin Choudhary
            </p>

            <p className="mt-1 text-[15px] text-[#a9958c] sm:text-[17px]">
              and family
            </p>
          </div>

          {/* =====================================================
              FINAL HEART DIVIDER
          ===================================================== */}

          <div
            className={`mt-7 transition-all delay-500 duration-1000 sm:mt-12 ${
              showContent
                ? "scale-100 opacity-100"
                : "scale-75 opacity-0"
            }`}
          >
            <div className="mx-auto flex items-center justify-center gap-4">
              <span className="h-px w-14 bg-[#c9a96e]/20 sm:w-20" />

              <span className="text-[23px] text-[#c9a96e]/75 sm:text-[24px]">
                ♡
              </span>

              <span className="h-px w-14 bg-[#c9a96e]/20 sm:w-20" />
            </div>
          </div>

          {/* =====================================================
              NAVIGATION
          ===================================================== */}

          <div
            className={`mx-auto mt-6 flex items-center justify-center gap-3 transition-all duration-700 sm:mt-8 ${
              showContent
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-5 opacity-0"
            }`}
          >

            {/* BACK */}

            <button
              type="button"
              onClick={handleBack}
              disabled={closing}
              className="group flex items-center gap-2 rounded-full border border-[#c9a96e]/30 bg-[#130b0d]/80 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#a9958c] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a96e]/55 hover:bg-[#1a0d10] hover:text-[#f5eee5] active:scale-95 disabled:pointer-events-none disabled:opacity-50 sm:px-6"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              <span>Back</span>
            </button>

            {/* FINISH */}

            <button
              type="button"
              onClick={handleFinish}
              disabled={closing}
              className="group flex items-center gap-2 rounded-full border border-[#c9a96e]/45 bg-[#130b0d]/90 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-[#c8b6b0] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a96e]/70 hover:bg-[#1a0d10] hover:text-[#f5eee5] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] active:scale-95 disabled:pointer-events-none disabled:opacity-50 sm:px-7"
            >
              <span>{closing ? "Closing..." : "Finish"}</span>

              <span className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

          <p
            className={`mt-3 text-lg text-[#c9a96e]/45 transition-opacity duration-700 sm:mt-4 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            ♡
          </p>
        </div>
      </section>

      {/* =========================================================
          CLOSING CURTAINS
          FINISH → INVITATION CLOSES
      ========================================================= */}

      <div
        className={`pointer-events-none fixed inset-y-0 left-0 z-50 w-1/2 bg-[#090708] transition-transform duration-[1800ms] ease-in-out ${
          closing ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute right-0 top-0 h-full w-px bg-[#c9a96e]/35" />

        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#651b25]/20 to-transparent" />
      </div>

      <div
        className={`pointer-events-none fixed inset-y-0 right-0 z-50 w-1/2 bg-[#090708] transition-transform duration-[1800ms] ease-in-out ${
          closing ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute left-0 top-0 h-full w-px bg-[#c9a96e]/35" />

        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#651b25]/20 to-transparent" />
      </div>
    </main>
  );
}