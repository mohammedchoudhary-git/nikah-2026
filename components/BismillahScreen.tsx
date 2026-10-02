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
      className={`${lora.className} relative min-h-screen overflow-hidden bg-[#f3f8f9] text-[#40596b] transition-all duration-1000 ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-5 scale-[0.98] opacity-0"
      }`}
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[430px] w-[430px] -translate-x-1/2 rounded-full bg-white/90 blur-[110px]" />

        <div className="absolute bottom-[-180px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#dcecf2]/75 blur-[110px]" />

        <div className="absolute bottom-[-160px] right-[-80px] h-[360px] w-[360px] rounded-full bg-[#f1e3d0]/70 blur-[110px]" />
      </div>

      {/* =========================================================
          OUTER BORDER
      ========================================================= */}

      <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#c9a96e]/20 sm:inset-6 md:inset-8" />

      {/* =========================================================
          SUBTLE DECORATIONS
      ========================================================= */}

      <div className="pointer-events-none absolute left-[8%] top-[22%] text-sm text-[#c9a96e]/30">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[9%] top-[31%] text-xs text-[#c9a96e]/25">
        ♡
      </div>

      <div className="pointer-events-none absolute bottom-[24%] left-[10%] text-xs text-[#c9a96e]/25">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[18%] right-[9%] text-sm text-[#c9a96e]/30">
        ♡
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-14 text-center sm:px-8 sm:py-16">
        <div className="w-full max-w-2xl">

          {/* =====================================================
              TOP LABEL
          ===================================================== */}

          <p className="text-[14px] uppercase tracking-[0.3em] sm:text-[15px] text-[#9b896c] sm:text-[14px]">
            In the Name of Allah
          </p>

          {/* =====================================================
              BISMILLAH
          ===================================================== */}

          <div className="mt-8">
            <p
              dir="rtl"
              className="font-serif text-[30px] leading-[2] text-[#40596b] sm:text-[37px] md:text-[43px]"
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>

            <div className="mx-auto mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#c9a96e]/30 sm:w-16" />

              <span className="text-[13px] text-[#c9a96e]">✦</span>

              <span className="h-px w-12 bg-[#c9a96e]/30 sm:w-16" />
            </div>
          </div>

          {/* =====================================================
              TRANSLATION
          ===================================================== */}

          <p className="mx-auto mt-7 max-w-xl text-[18px] italic leading-8 text-[#71808b] sm:text-[19px]">
            In the name of Allah, the Most Beneficent
            <br className="sm:hidden" /> and the Most Merciful.
          </p>

          {/* =====================================================
              QURAN VERSE
          ===================================================== */}

          <div className="mx-auto mt-9 max-w-xl rounded-[2rem] border border-[#c9a96e]/25 bg-[#fffaf1]/90 px-7 py-7 shadow-[0_20px_60px_rgba(80,95,105,0.07)] sm:px-10 sm:py-9">
            <p
              dir="rtl"
              className="font-serif text-[27px] leading-[2] text-[#40596b] sm:text-[31px]"
            >
              وَخَلَقْنَٰكُمْ أَزْوَٰجًا
            </p>

            <p className="mt-5 text-[17px] italic leading-7 text-[#526b7b] sm:text-[19px]">
              “We created you in pairs.”
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c9a96e]/25" />

              <span className="text-[13px] uppercase tracking-[0.22em] text-[#9b896c] sm:text-[14px]">
                Qur&apos;an 78:8
              </span>

              <span className="h-px w-8 bg-[#c9a96e]/25" />
            </div>
          </div>

          {/* =====================================================
              PERSONAL LOGO
          ===================================================== */}

          <div className="mt-9 flex flex-col items-center">
            <img
              src="/logo.png"
              alt="Mohammed and Bushra wedding logo"
              className="h-auto w-[120px] object-contain sm:w-[145px]"
            />

            <p className="mt-4 text-[13px] uppercase tracking-[0.25em] text-[#9b896c] sm:text-[14px]">
              Mohammed &amp; Bushra
            </p>
          </div>

          {/* =====================================================
              YEAR
          ===================================================== */}

          <div className="mt-7">
            <p className="text-[40px] font-medium tracking-[0.18em] text-[#40596b] sm:text-[46px]">
              2026
            </p>

            <div className="mx-auto mt-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#c9a96e]/25" />

              <span className="text-[11px] text-[#c9a96e]">
                ✦
              </span>

              <span className="h-px w-10 bg-[#c9a96e]/25" />
            </div>

            {/* =================================================
                HIJRI DATE
            ================================================= */}

            <p className="mt-4 text-[14px] uppercase tracking-[0.18em] text-[#9b896c] sm:text-[15px]">
              1 Jamadul Al-Thani 1448 AH
            </p>
          </div>

          {/* =====================================================
              CONTINUE
          ===================================================== */}

          <button
            type="button"
            onClick={handleContinue}
            className="group mx-auto mt-9 flex items-center gap-3 rounded-full border border-[#c9a96e]/40 bg-[#fffaf1]/80 px-7 py-3 text-[12px] uppercase tracking-[0.25em] text-[#526b7b] shadow-[0_10px_30px_rgba(80,95,105,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-[#c9a96e]/60 hover:bg-[#fffaf1] hover:shadow-[0_15px_40px_rgba(80,95,105,0.1)] active:scale-95"
          >
            <span>Continue</span>

            <span className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          {/* Bottom heart */}

          <p className="mt-4 text-xl text-[#c9a96e]/50">
            ♡
          </p>
        </div>
      </section>
    </main>
  );
}