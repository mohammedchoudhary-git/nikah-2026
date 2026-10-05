"use client";

import { Lora } from "next/font/google";
import { useEffect, useState } from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

type BismillahScreenProps = {
  onComplete: () => void;
};

export default function BismillahScreen({
  onComplete,
}: BismillahScreenProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => {
      clearTimeout(enterTimer);
    };
  }, []);

  const handleContinue = () => {
    setVisible(false);

    setTimeout(() => {
      onComplete();
    }, 900);
  };

  return (
    <main
      className={`${lora.className} relative min-h-screen overflow-hidden bg-[#090708] text-[#f5eee5] transition-all duration-1000 ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-5 scale-[0.98] opacity-0"
      }`}
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top burgundy glow */}
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#651b25]/45 blur-[130px]" />

        {/* Bottom-left burgundy glow */}
        <div className="absolute bottom-[-180px] left-[-120px] h-[430px] w-[430px] rounded-full bg-[#7c202d]/25 blur-[120px]" />

        {/* Bottom-right dark burgundy glow */}
        <div className="absolute bottom-[-160px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#3d1118]/35 blur-[120px]" />

        {/* Center soft glow */}
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8f2633]/10 blur-[110px]" />
      </div>

      {/* Outer gold border */}
      <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#c9a96e]/35 sm:inset-6 md:inset-8" />

      {/* Inner subtle border */}
      <div className="pointer-events-none absolute inset-7 rounded-[1.7rem] border border-[#c9a96e]/10 sm:inset-9 md:inset-12" />

      {/* Decorative details */}
      <span className="pointer-events-none absolute left-[8%] top-[22%] text-[17px] text-[#c9a96e]/55">
        ✦
      </span>

      <span className="pointer-events-none absolute right-[9%] top-[31%] text-[15px] text-[#c9a96e]/40">
        ♡
      </span>

      <span className="pointer-events-none absolute bottom-[24%] left-[10%] text-[15px] text-[#c9a96e]/40">
        ✦
      </span>

      <span className="pointer-events-none absolute bottom-[18%] right-[9%] text-[17px] text-[#c9a96e]/45">
        ♡
      </span>

      {/* Main content */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-14 text-center sm:px-8 sm:py-16">
        <div className="w-full max-w-2xl">

          {/* Heading */}
          <p className="text-[14px] uppercase tracking-[0.3em] text-[#c9a96e]/85 sm:text-[15px]">
            In the Name of Allah
          </p>

          {/* Bismillah */}
          <div className="mt-8">
            <p
              dir="rtl"
              className="font-serif text-[31px] leading-[2] text-[#f5eee5] sm:text-[38px] md:text-[44px]"
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>

            <div className="mx-auto mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#c9a96e]/35 sm:w-16" />

              <span className="text-[14px] text-[#c9a96e]">
                ✦
              </span>

              <span className="h-px w-12 bg-[#c9a96e]/35 sm:w-16" />
            </div>
          </div>

          {/* English meaning */}
          <p className="mx-auto mt-7 max-w-xl text-[18px] italic leading-8 text-[#c8b6b0] sm:text-[19px]">
            In the name of Allah, the Most Beneficent
            <br className="sm:hidden" /> and the Most Merciful.
          </p>

          {/* Qur'an verse */}
          <div className="mx-auto mt-9 max-w-xl rounded-[2rem] border border-[#c9a96e]/35 bg-[#130b0d]/85 px-7 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:px-10 sm:py-9">

            <p
              dir="rtl"
              className="font-serif text-[28px] leading-[2] text-[#f5eee5] sm:text-[32px]"
            >
              وَخَلَقْنَٰكُمْ أَزْوَٰجًا
            </p>

            <p className="mt-5 text-[17px] italic leading-7 text-[#c8b6b0] sm:text-[19px]">
              “We created you in pairs.”
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c9a96e]/25" />

              <span className="text-[13px] uppercase tracking-[0.22em] text-[#c9a96e]/80 sm:text-[14px]">
                Qur&apos;an 78:8
              </span>

              <span className="h-px w-8 bg-[#c9a96e]/25" />
            </div>
          </div>

          {/* Larger wedding logo */}
          <div className="mt-9 flex flex-col items-center">
            <img
              src="/logo.png"
              alt="Wedding logo"
              className="h-auto w-[140px] object-contain sm:w-[175px] md:w-[195px]"
            />
          </div>

          {/* Year */}
          <div className="mt-7">
            <p className="text-[40px] font-medium tracking-[0.18em] text-[#f5eee5] sm:text-[46px]">
              2026
            </p>

            <div className="mx-auto mt-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#c9a96e]/25" />

              <span className="text-[12px] text-[#c9a96e]">
                ✦
              </span>

              <span className="h-px w-10 bg-[#c9a96e]/25" />
            </div>

            <p className="mt-4 text-[14px] uppercase tracking-[0.18em] text-[#c8b6b0] sm:text-[15px]">
              1 Jamadul Al-Thani 1448 AH
            </p>
          </div>

          {/* Continue */}
          <button
            type="button"
            onClick={handleContinue}
            className="group mx-auto mt-9 flex items-center gap-3 rounded-full border border-[#c9a96e]/45 bg-[#130b0d]/80 px-7 py-3 text-[12px] uppercase tracking-[0.25em] text-[#c8b6b0] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-[#c9a96e]/70 hover:bg-[#1a0d10] hover:text-[#f5eee5] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] active:scale-95"
          >
            <span>Continue</span>

            <span className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <p className="mt-4 text-xl text-[#c9a96e]/50">
            ♡
          </p>
        </div>
      </section>
    </main>
  );
}