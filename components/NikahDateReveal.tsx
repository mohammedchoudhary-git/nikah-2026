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
};

export default function NikahDateReveal({
  onComplete,
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
    }, 500);

    const eventsTimer = setTimeout(() => {
      setShowEvents(true);
    }, 1100);

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

  return (
    <main
      className={`${lora.className} relative min-h-screen overflow-hidden bg-[#f3f8f9] text-[#40596b] transition-all duration-1000 ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-5 scale-[0.98] opacity-0"
      }`}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-190px] h-[430px] w-[430px] -translate-x-1/2 rounded-full bg-white/90 blur-[110px]" />

        <div className="absolute bottom-[-180px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#dcecf2]/80 blur-[110px]" />

        <div className="absolute bottom-[-160px] right-[-100px] h-[380px] w-[380px] rounded-full bg-[#f1e3d0]/75 blur-[110px]" />

        <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45 blur-[90px]" />
      </div>

      {/* =====================================================
          OUTER BORDER
      ===================================================== */}

      <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#c9a96e]/20 sm:inset-6 md:inset-8" />

      {/* =====================================================
          DECORATIVE DETAILS
      ===================================================== */}

      <span className="pointer-events-none absolute left-[9%] top-[15%] text-sm text-[#c9a96e]/30">
        ✦
      </span>

      <span className="pointer-events-none absolute right-[9%] top-[25%] text-xs text-[#c9a96e]/25">
        ♡
      </span>

      <span className="pointer-events-none absolute bottom-[22%] left-[10%] text-xs text-[#c9a96e]/25">
        ✦
      </span>

      <span className="pointer-events-none absolute bottom-[14%] right-[9%] text-sm text-[#c9a96e]/30">
        ♡
      </span>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-14 sm:px-8 sm:py-16">
        <div className="w-full max-w-2xl text-center">

          {/* =================================================
              HEADING
          ================================================= */}

          <div
            className={`transition-all duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <p className="text-[14px] uppercase tracking-[0.32em] text-[#9b896c] sm:text-[15px]">
              A Day to Remember
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#c9a96e]/30 sm:w-16" />

              <span className="text-[13px] text-[#c9a96e]">
                ✦
              </span>

              <span className="h-px w-12 bg-[#c9a96e]/30 sm:w-16" />
            </div>
          </div>

          {/* =================================================
              MAIN DATE
          ================================================= */}

          <div className="mt-8">

            {/* 11 */}

            <div
              className={`transition-all duration-[1200ms] ease-out ${
                showDate
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-10 scale-90 opacity-0"
              }`}
            >
              <p className="font-serif text-[100px] font-medium leading-none tracking-[-0.05em] text-[#40596b] sm:text-[125px] md:text-[145px]">
                11
              </p>
            </div>

            {/* November */}

            <div
              className={`mt-3 transition-all duration-1000 ${
                showDate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <p className="text-[20px] uppercase tracking-[0.36em] text-[#9b896c] sm:text-[24px] sm:tracking-[0.42em]">
                November
              </p>
            </div>

            {/* 2026 */}

            <div
              className={`mt-4 transition-all duration-1000 ${
                showDate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <p className="text-[24px] tracking-[0.25em] text-[#40596b] sm:text-[28px]">
                2026
              </p>
            </div>

            {/* Divider */}

            <div
              className={`mx-auto mt-7 flex items-center justify-center gap-3 transition-all duration-1000 ${
                showDate
                  ? "scale-100 opacity-100"
                  : "scale-75 opacity-0"
              }`}
            >
              <span className="h-px w-12 bg-[#c9a96e]/30 sm:w-16" />

              <span className="text-[12px] text-[#c9a96e]">
                ✦
              </span>

              <span className="h-px w-12 bg-[#c9a96e]/30 sm:w-16" />
            </div>
          </div>

          {/* =================================================
              NIKAH
          ================================================= */}

          <div
            className={`mx-auto mt-8 max-w-md transition-all duration-1000 ${
              showEvents
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="rounded-[2rem] border border-[#c9a96e]/30 bg-[#fffaf1]/95 px-7 py-8 shadow-[0_20px_60px_rgba(80,95,105,0.07)] sm:px-10 sm:py-9">

              <p className="text-[15px] uppercase tracking-[0.4em] text-[#9b896c] sm:text-[16px]">
                Nikah
              </p>

              <div className="mx-auto mt-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#c9a96e]/25" />

                <span className="text-[13px] text-[#c9a96e]">
                  ♡
                </span>

                <span className="h-px w-8 bg-[#c9a96e]/25" />
              </div>

              <p className="mt-5 text-[18px] italic leading-7 text-[#526b7b] sm:text-[19px]">
                After Namaz-e-Asar
              </p>

              <div className="mt-5">
                <p className="text-[21px] font-medium text-[#40596b] sm:text-[23px]">
                  Madni Masjid
                </p>

                <p className="mt-1 text-[16px] text-[#71808b] sm:text-[17px]">
                  Meta
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              EVENT DIVIDER
          ================================================= */}

          <div
            className={`my-6 flex items-center justify-center gap-3 transition-all delay-200 duration-700 ${
              showEvents
                ? "scale-100 opacity-100"
                : "scale-75 opacity-0"
            }`}
          >
            <span className="h-px w-12 bg-[#c9a96e]/20 sm:w-16" />

            <span className="text-[18px] text-[#c9a96e]/70">
              ♡
            </span>

            <span className="h-px w-12 bg-[#c9a96e]/20 sm:w-16" />
          </div>

          {/* =================================================
              WALIMA
          ================================================= */}

          <div
            className={`mx-auto max-w-md transition-all delay-300 duration-1000 ${
              showEvents
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="rounded-[2rem] border border-[#c9a96e]/30 bg-[#fffaf1]/95 px-7 py-8 shadow-[0_20px_60px_rgba(80,95,105,0.07)] sm:px-10 sm:py-9">

              <p className="text-[15px] uppercase tracking-[0.4em] text-[#9b896c] sm:text-[16px]">
                Walima
              </p>

              <div className="mx-auto mt-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#c9a96e]/25" />

                <span className="text-[13px] text-[#c9a96e]">
                  ♡
                </span>

                <span className="h-px w-8 bg-[#c9a96e]/25" />
              </div>

              <p className="mt-5 text-[22px] font-medium text-[#40596b] sm:text-[25px]">
                12 November 2026
              </p>

              <p className="mt-3 text-[18px] italic leading-7 text-[#526b7b] sm:text-[19px]">
                After Magrib, Insha&apos;Allah
              </p>

              <div className="mt-5">
                <p className="text-[19px] font-medium text-[#40596b] sm:text-[21px]">
                  Backyard of my house
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              MESSAGE
          ================================================= */}

          <p
            className={`mx-auto mt-7 max-w-sm text-[16px] italic leading-7 text-[#71808b] transition-all duration-1000 ${
              showEvents
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Two blessed moments,
            <br />
            one beautiful beginning.
          </p>

          {/* =================================================
              CONTINUE
          ================================================= */}

          <button
            type="button"
            onClick={handleContinue}
            className={`group mx-auto mt-7 flex items-center gap-3 rounded-full border border-[#c9a96e]/40 bg-[#fffaf1]/90 px-7 py-3 text-[12px] uppercase tracking-[0.25em] text-[#526b7b] shadow-[0_10px_30px_rgba(80,95,105,0.06)] transition-all duration-700 hover:-translate-y-1 hover:border-[#c9a96e]/60 hover:bg-[#fffaf1] hover:shadow-[0_15px_40px_rgba(80,95,105,0.1)] active:scale-95 ${
              showEvents
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-5 opacity-0"
            }`}
          >
            <span>Continue</span>

            <span className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <p
            className={`mt-4 text-xl text-[#c9a96e]/50 transition-opacity duration-700 ${
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