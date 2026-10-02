"use client";

import { Lora } from "next/font/google";
import { useEffect, useState } from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

type FinalBlessingsProps = {
  onComplete: () => void;
};

export default function FinalBlessings({
  onComplete,
}: FinalBlessingsProps) {
  const [visible, setVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [closing, setClosing] = useState(false);

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

  const handleFinish = () => {
    setClosing(true);

    setTimeout(() => {
      onComplete();
    }, 1800);
  };

  return (
    <main
      className={`${lora.className} relative min-h-screen overflow-hidden bg-[#f3f8f9] text-[#40596b] transition-all duration-1000 ${visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-5 scale-[0.98] opacity-0"
        }`}
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-190px] h-[430px] w-[430px] -translate-x-1/2 rounded-full bg-white/90 blur-[110px]" />

        <div className="absolute bottom-[-180px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#dcecf2]/80 blur-[110px]" />

        <div className="absolute bottom-[-160px] right-[-100px] h-[380px] w-[380px] rounded-full bg-[#f1e3d0]/75 blur-[110px]" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-[100px]" />
      </div>

      {/* Elegant border */}
      <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#c9a96e]/20 sm:inset-6 md:inset-8" />

      {/* Decorative details */}
      <span className="pointer-events-none absolute left-[9%] top-[20%] text-sm text-[#c9a96e]/30">
        ✦
      </span>

      <span className="pointer-events-none absolute right-[9%] top-[29%] text-xs text-[#c9a96e]/25">
        ♡
      </span>

      <span className="pointer-events-none absolute bottom-[23%] left-[10%] text-xs text-[#c9a96e]/25">
        ♡
      </span>

      <span className="pointer-events-none absolute bottom-[16%] right-[9%] text-sm text-[#c9a96e]/30">
        ✦
      </span>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-14 sm:px-8 sm:py-16">
        <div className="w-full max-w-2xl text-center">

          {/* Heading */}
          <div
            className={`transition-all duration-1000 ${visible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
              }`}
          >
            <p className="text-[14px] uppercase tracking-[0.32em] text-[#9b896c] sm:text-[15px]">
              With Love &amp; Dua
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#c9a96e]/30 sm:w-16" />

              <span className="text-[13px] text-[#c9a96e]">
                ✦
              </span>

              <span className="h-px w-12 bg-[#c9a96e]/30 sm:w-16" />
            </div>
          </div>

          {/* Heartfelt message */}
          <div
            className={`mx-auto mt-12 max-w-lg transition-all duration-[1100ms] ${showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
              }`}
          >
            <div className="rounded-[2rem] border border-[#c9a96e]/25 bg-[#fffaf1]/90 px-7 py-8 shadow-[0_20px_60px_rgba(80,95,105,0.06)] sm:px-10 sm:py-10">

              <p className="text-[19px] italic leading-9 text-[#526b7b] sm:text-[22px] sm:leading-10">
                As we begin this beautiful new chapter of our lives, your presence and
                blessings mean a lot to us.
              </p>

              <div className="mx-auto mt-7 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#c9a96e]/25" />

                <span className="text-[13px] text-[#c9a96e]">
                  ♡
                </span>

                <span className="h-px w-8 bg-[#c9a96e]/25" />
              </div>

              <p className="mt-6 text-[17px] font-medium text-[#40596b] sm:text-[19px]">
                Please keep us in your duas
              </p>
            </div>
          </div>

          {/* Family blessing */}
          <div
            className={`mt-10 transition-all delay-300 duration-[1100ms] ${showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
              }`}
          >
            <p className="text-[13px] uppercase tracking-[0.28em] text-[#9b896c] sm:text-[14px]">
              With the blessings of our families
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#c9a96e]/25 sm:w-14" />

              <span className="text-[12px] text-[#c9a96e]">
                ✦
              </span>

              <span className="h-px w-10 bg-[#c9a96e]/25 sm:w-14" />
            </div>

            <p className="mt-5 text-[22px] font-medium tracking-wide text-[#40596b] sm:text-[26px]">
              Nizamuddin Choudhary
            </p>

            <p className="mt-1 text-[16px] text-[#71808b] sm:text-[17px]">
              and family
            </p>
          </div>

          {/* Final heart */}
          <div
            className={`mt-12 transition-all delay-500 duration-1000 ${showContent
                ? "scale-100 opacity-100"
                : "scale-75 opacity-0"
              }`}
          >
            <div className="mx-auto flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-[#c9a96e]/20 sm:w-20" />

              <span className="text-[24px] text-[#c9a96e]/70">
                ♡
              </span>

              <span className="h-px w-16 bg-[#c9a96e]/20 sm:w-20" />
            </div>
          </div>

          {/* Finish button */}
          <button
            type="button"
            onClick={handleFinish}
            disabled={closing}
            className={`group mx-auto mt-8 flex items-center gap-3 rounded-full border border-[#c9a96e]/40 bg-[#fffaf1]/90 px-7 py-3 text-[12px] uppercase tracking-[0.25em] text-[#526b7b] shadow-[0_10px_30px_rgba(80,95,105,0.06)] transition-all duration-700 hover:-translate-y-1 hover:border-[#c9a96e]/60 hover:bg-[#fffaf1] hover:shadow-[0_15px_40px_rgba(80,95,105,0.1)] active:scale-95 ${showContent
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-5 opacity-0"
              }`}
          >
            <span>Finish</span>

            <span className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <p
            className={`mt-4 text-xl text-[#c9a96e]/50 transition-opacity duration-700 ${showContent ? "opacity-100" : "opacity-0"
              }`}
          >
            ♡
          </p>
        </div>
      </section>

      {/* Closing curtains */}
      <div
        className={`pointer-events-none fixed inset-y-0 left-0 z-50 w-1/2 bg-[#eef5f7] transition-transform duration-[1800ms] ease-in-out ${closing ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="absolute right-0 top-0 h-full w-px bg-[#c9a96e]/30" />
      </div>

      <div
        className={`pointer-events-none fixed inset-y-0 right-0 z-50 w-1/2 bg-[#eef5f7] transition-transform duration-[1800ms] ease-in-out ${closing ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="absolute left-0 top-0 h-full w-px bg-[#c9a96e]/30" />
      </div>
    </main>
  );
}