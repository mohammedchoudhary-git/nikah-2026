"use client";

import { Lora } from "next/font/google";
import { useEffect, useState } from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

type WeddingEventsProps = {
  onComplete: () => void;
};

export default function WeddingEvents({
  onComplete,
}: WeddingEventsProps) {
  const [visible, setVisible] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  useEffect(() => {
    const screenTimer = setTimeout(() => {
      setVisible(true);
    }, 100);

    const eventsTimer = setTimeout(() => {
      setShowEvents(true);
    }, 500);

    return () => {
      clearTimeout(screenTimer);
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
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-190px] h-[430px] w-[430px] -translate-x-1/2 rounded-full bg-white/90 blur-[110px]" />

        <div className="absolute bottom-[-180px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#dcecf2]/80 blur-[110px]" />

        <div className="absolute bottom-[-160px] right-[-100px] h-[380px] w-[380px] rounded-full bg-[#f1e3d0]/75 blur-[110px]" />

        <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45 blur-[90px]" />
      </div>

      {/* Outer border */}
      <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#c9a96e]/20 sm:inset-6 md:inset-8" />

      {/* Decorative details */}
      <span className="pointer-events-none absolute left-[9%] top-[18%] text-sm text-[#c9a96e]/30">
        ✦
      </span>

      <span className="pointer-events-none absolute right-[9%] top-[28%] text-xs text-[#c9a96e]/25">
        ♡
      </span>

      <span className="pointer-events-none absolute bottom-[25%] left-[10%] text-xs text-[#c9a96e]/25">
        ✦
      </span>

      <span className="pointer-events-none absolute bottom-[17%] right-[9%] text-sm text-[#c9a96e]/30">
        ♡
      </span>

      {/* Main content */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-14 sm:px-8 sm:py-16">
        <div className="w-full max-w-2xl text-center">

          {/* Heading */}
          <div
            className={`transition-all duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <p className="text-[14px] uppercase tracking-[0.32em] text-[#9b896c] sm:text-[15px]">
              Our Celebrations
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#c9a96e]/30 sm:w-16" />

              <span className="text-[13px] text-[#c9a96e]">
                ✦
              </span>

              <span className="h-px w-12 bg-[#c9a96e]/30 sm:w-16" />
            </div>

            <h1 className="mt-6 text-[30px] font-medium text-[#40596b] sm:text-[36px]">
              Two Beautiful Days
            </h1>

            <p className="mx-auto mt-3 max-w-md text-[16px] italic leading-7 text-[#71808b] sm:text-[17px]">
              With gratitude to Allah, we invite you
              <br className="hidden sm:block" />
              to share these blessed moments with us.
            </p>
          </div>

          {/* Events */}
          <div className="mt-9 space-y-5">

            {/* Nikah */}
            <div
              className={`transition-all duration-1000 ${
                showEvents
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="rounded-[2rem] border border-[#c9a96e]/30 bg-[#fffaf1]/95 px-7 py-8 shadow-[0_20px_60px_rgba(80,95,105,0.07)] sm:px-10 sm:py-9">

                <p className="text-[15px] uppercase tracking-[0.4em] text-[#9b896c]">
                  Nikah
                </p>

                <div className="mt-5">
                  <p className="text-[28px] font-medium text-[#40596b] sm:text-[32px]">
                    11 November 2026
                  </p>

                  <p className="mt-3 text-[17px] italic text-[#526b7b] sm:text-[18px]">
                    After Namaz-e-Asar
                  </p>
                </div>

                <div className="mx-auto mt-6 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#c9a96e]/20" />
                  <span className="text-[11px] text-[#c9a96e]">
                    ✦
                  </span>
                  <span className="h-px w-10 bg-[#c9a96e]/20" />
                </div>

                <div className="mt-5">
                  <p className="text-[21px] font-medium text-[#40596b]">
                    Madni Masjid
                  </p>

                  <p className="mt-1 text-[16px] text-[#71808b]">
                    Meta
                  </p>
                </div>
              </div>
            </div>

            {/* Heart divider */}
            <div
              className={`flex items-center justify-center gap-3 transition-all delay-200 duration-700 ${
                showEvents
                  ? "scale-100 opacity-100"
                  : "scale-75 opacity-0"
              }`}
            >
              <span className="h-px w-12 bg-[#c9a96e]/20" />

              <span className="text-[18px] text-[#c9a96e]/70">
                ♡
              </span>

              <span className="h-px w-12 bg-[#c9a96e]/20" />
            </div>

            {/* Walima */}
            <div
              className={`transition-all delay-300 duration-1000 ${
                showEvents
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="rounded-[2rem] border border-[#c9a96e]/30 bg-[#fffaf1]/95 px-7 py-8 shadow-[0_20px_60px_rgba(80,95,105,0.07)] sm:px-10 sm:py-9">

                <p className="text-[15px] uppercase tracking-[0.4em] text-[#9b896c]">
                  Walima
                </p>

                <div className="mt-5">
                  <p className="text-[28px] font-medium text-[#40596b] sm:text-[32px]">
                    12 November 2026
                  </p>

                  <p className="mt-3 text-[17px] italic text-[#526b7b] sm:text-[18px]">
                    After Magrib, Insha&apos;Allah
                  </p>
                </div>

                <div className="mx-auto mt-6 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#c9a96e]/20" />
                  <span className="text-[11px] text-[#c9a96e]">
                    ✦
                  </span>
                  <span className="h-px w-10 bg-[#c9a96e]/20" />
                </div>

                <div className="mt-5">
                  <p className="text-[19px] font-medium text-[#40596b] sm:text-[21px]">
                    Backyard of my house
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Continue */}
          <button
            type="button"
            onClick={handleContinue}
            className={`group mx-auto mt-8 flex items-center gap-3 rounded-full border border-[#c9a96e]/40 bg-[#fffaf1]/90 px-7 py-3 text-[12px] uppercase tracking-[0.25em] text-[#526b7b] shadow-[0_10px_30px_rgba(80,95,105,0.06)] transition-all duration-700 hover:-translate-y-1 hover:border-[#c9a96e]/60 hover:bg-[#fffaf1] hover:shadow-[0_15px_40px_rgba(80,95,105,0.1)] active:scale-95 ${
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