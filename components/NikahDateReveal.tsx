"use client";

import { Lora } from "next/font/google";
import { useEffect, useState } from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

type NikahDateRevealProps = {
  onComplete: () => void;
  onBack: () => void;
};

export default function NikahDateReveal({
  onComplete,
  onBack,
}: NikahDateRevealProps) {
  const [visible, setVisible] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  useEffect(() => {
    const screenTimer = setTimeout(() => {
      setVisible(true);
    }, 100);

    const dateTimer = setTimeout(() => {
      setShowDate(true);
    }, 450);

    const eventsTimer = setTimeout(() => {
      setShowEvents(true);
    }, 900);

    return () => {
      clearTimeout(screenTimer);
      clearTimeout(dateTimer);
      clearTimeout(eventsTimer);
    };
  }, []);

  const handleContinue = () => {
    setVisible(false);

    setTimeout(() => {
      onComplete();
    }, 850);
  };

  const handleBack = () => {
    setVisible(false);

    setTimeout(() => {
      onBack();
    }, 700);
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
        <div className="absolute left-1/2 top-[-220px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#651b25]/45 blur-[130px]" />

        {/* Bottom left burgundy glow */}
        <div className="absolute bottom-[-180px] left-[-120px] h-[400px] w-[400px] rounded-full bg-[#7c202d]/25 blur-[120px]" />

        {/* Bottom right burgundy glow */}
        <div className="absolute bottom-[-160px] right-[-100px] h-[380px] w-[380px] rounded-full bg-[#3d1118]/35 blur-[120px]" />

        {/* Soft center glow */}
        <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8f2633]/10 blur-[100px]" />
      </div>

      {/* =========================================================
          BORDERS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#c9a96e]/35 sm:inset-6 md:inset-8" />

      <div className="pointer-events-none absolute inset-7 rounded-[1.7rem] border border-[#c9a96e]/10 sm:inset-9 md:inset-12" />

      {/* =========================================================
          DECORATIVE DETAILS
      ========================================================= */}

      <span className="pointer-events-none absolute left-[8%] top-[16%] text-[16px] text-[#c9a96e]/50">
        ✦
      </span>

      <span className="pointer-events-none absolute right-[9%] top-[24%] text-[14px] text-[#c9a96e]/35">
        ♡
      </span>

      <span className="pointer-events-none absolute bottom-[22%] left-[9%] text-[15px] text-[#c9a96e]/40">
        ✦
      </span>

      <span className="pointer-events-none absolute bottom-[13%] right-[9%] text-[16px] text-[#c9a96e]/35">
        ♡
      </span>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 sm:py-14">
        <div className="w-full max-w-2xl text-center">

          {/* =====================================================
              TOP HEADING
          ===================================================== */}

          <div
            className={`transition-all duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <p className="text-[13px] uppercase tracking-[0.3em] text-[#c9a96e]/85 sm:text-[15px]">
              A Day to Remember
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
              DATE
          ===================================================== */}

          <div className="mt-6 sm:mt-8">

            {/* 11 */}
            <div
              className={`transition-all duration-[1200ms] ease-out ${
                showDate
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-8 scale-90 opacity-0"
              }`}
            >
              <p className="font-serif text-[82px] font-medium leading-none tracking-[-0.05em] text-[#f5eee5] sm:text-[120px] md:text-[145px]">
                11
              </p>
            </div>

            {/* November */}
            <div
              className={`mt-2 transition-all duration-1000 sm:mt-3 ${
                showDate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <p className="text-[18px] uppercase tracking-[0.3em] text-[#c9a96e] sm:text-[24px] sm:tracking-[0.42em]">
                November
              </p>
            </div>

            {/* 2026 */}
            <div
              className={`mt-2 transition-all duration-1000 sm:mt-4 ${
                showDate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              <p className="text-[21px] tracking-[0.22em] text-[#f5eee5] sm:text-[28px]">
                2026
              </p>
            </div>

            {/* Divider */}
            <div
              className={`mx-auto mt-5 flex items-center justify-center gap-3 transition-all duration-1000 sm:mt-7 ${
                showDate
                  ? "scale-100 opacity-100"
                  : "scale-75 opacity-0"
              }`}
            >
              <span className="h-px w-10 bg-[#c9a96e]/30 sm:w-16" />

              <span className="text-[11px] text-[#c9a96e] sm:text-[12px]">
                ✦
              </span>

              <span className="h-px w-10 bg-[#c9a96e]/30 sm:w-16" />
            </div>
          </div>

          {/* =====================================================
              NIKAH CARD
          ===================================================== */}

          <div
            className={`mx-auto mt-6 max-w-md transition-all duration-1000 sm:mt-8 ${
              showEvents
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <div className="rounded-[1.6rem] border border-[#c9a96e]/35 bg-[#130b0d]/90 px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:rounded-[2rem] sm:px-10 sm:py-9">

              <p className="text-[14px] uppercase tracking-[0.35em] text-[#c9a96e] sm:text-[16px]">
                Nikah
              </p>

              <div className="mx-auto mt-3 flex items-center justify-center gap-3 sm:mt-4">
                <span className="h-px w-7 bg-[#c9a96e]/25 sm:w-8" />

                <span className="text-[12px] text-[#c9a96e] sm:text-[13px]">
                  ♡
                </span>

                <span className="h-px w-7 bg-[#c9a96e]/25 sm:w-8" />
              </div>

              <p className="mt-4 text-[17px] italic leading-7 text-[#c8b6b0] sm:mt-5 sm:text-[19px]">
                After Namaz-e-Asar
              </p>

              <div className="mt-4 sm:mt-5">
                <p className="text-[20px] font-medium text-[#f5eee5] sm:text-[23px]">
                  Madni Masjid
                </p>

                <p className="mt-1 text-[15px] text-[#a9958c] sm:text-[17px]">
                  Meta
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              MIDDLE HEART DIVIDER
          ===================================================== */}

          <div
            className={`my-4 flex items-center justify-center gap-3 transition-all delay-200 duration-700 sm:my-6 ${
              showEvents
                ? "scale-100 opacity-100"
                : "scale-75 opacity-0"
            }`}
          >
            <span className="h-px w-10 bg-[#c9a96e]/20 sm:w-16" />

            <span className="text-[17px] text-[#c9a96e]/70 sm:text-[19px]">
              ♡
            </span>

            <span className="h-px w-10 bg-[#c9a96e]/20 sm:w-16" />
          </div>

          {/* =====================================================
              WALIMA CARD
          ===================================================== */}

          <div
            className={`mx-auto max-w-md transition-all delay-300 duration-1000 ${
              showEvents
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <div className="rounded-[1.6rem] border border-[#c9a96e]/35 bg-[#130b0d]/90 px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:rounded-[2rem] sm:px-10 sm:py-9">

              <p className="text-[14px] uppercase tracking-[0.35em] text-[#c9a96e] sm:text-[16px]">
                Walima
              </p>

              <div className="mx-auto mt-3 flex items-center justify-center gap-3 sm:mt-4">
                <span className="h-px w-7 bg-[#c9a96e]/25 sm:w-8" />

                <span className="text-[12px] text-[#c9a96e] sm:text-[13px]">
                  ♡
                </span>

                <span className="h-px w-7 bg-[#c9a96e]/25 sm:w-8" />
              </div>

              <p className="mt-4 text-[20px] font-medium text-[#f5eee5] sm:mt-5 sm:text-[25px]">
                12 November 2026
              </p>

              <p className="mt-2 text-[17px] italic leading-7 text-[#c8b6b0] sm:mt-3 sm:text-[19px]">
                After Magrib, Insha&apos;Allah
              </p>

              <div className="mt-4 sm:mt-5">
                <p className="text-[18px] font-medium text-[#f5eee5] sm:text-[21px]">
                  Backyard of my house
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              CLOSING LINE
          ===================================================== */}

          <p
            className={`mx-auto mt-5 max-w-sm text-[15px] italic leading-6 text-[#a9958c] transition-all duration-1000 sm:mt-7 sm:text-[16px] sm:leading-7 ${
              showEvents
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Two blessed moments,
            <br />
            one beautiful beginning.
          </p>

          {/* =====================================================
              NAVIGATION BUTTONS
          ===================================================== */}

          <div
            className={`mx-auto mt-6 flex items-center justify-center gap-3 transition-all duration-700 sm:mt-7 ${
              showEvents
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >

            {/* Back */}
            <button
              type="button"
              onClick={handleBack}
              className="group flex items-center gap-2 rounded-full border border-[#c9a96e]/30 bg-[#130b0d]/70 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#a9958c] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a96e]/55 hover:bg-[#1a0d10] hover:text-[#f5eee5] active:scale-95 sm:px-6"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              <span>Back</span>
            </button>

            {/* Continue */}
            <button
              type="button"
              onClick={handleContinue}
              className="group flex items-center gap-2 rounded-full border border-[#c9a96e]/45 bg-[#130b0d]/85 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-[#c8b6b0] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a96e]/70 hover:bg-[#1a0d10] hover:text-[#f5eee5] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] active:scale-95 sm:px-7"
            >
              <span>Continue</span>

              <span className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          <p
            className={`mt-3 text-lg text-[#c9a96e]/45 transition-opacity duration-700 sm:mt-4 ${
              showEvents ? "opacity-100" : "opacity-0"
            }`}
          >
            ♡
          </p>
        </div>
      </section>
    </main>
  );
}