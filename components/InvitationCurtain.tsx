"use client";

import { useState } from "react";

type InvitationCurtainProps = {
  onOpen: () => void;
};

export default function InvitationCurtain({
  onOpen,
}: InvitationCurtainProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);

    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef5f7] text-[#334b5c]">
      {/* =========================================================
          SOFT BACKGROUND ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/80 blur-[100px]" />

        <div className="absolute bottom-[-180px] left-[10%] h-[360px] w-[360px] rounded-full bg-[#dcecf2]/80 blur-[100px]" />

        <div className="absolute bottom-[-180px] right-[10%] h-[360px] w-[360px] rounded-full bg-[#f3e5d2]/70 blur-[100px]" />
      </div>

      {/* =========================================================
          OUTER DECORATIVE BORDER
      ========================================================= */}

      <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#c9a96e]/25 sm:inset-6 md:inset-8" />

      {/* =========================================================
          TOP ORNAMENT
      ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-8 z-30 -translate-x-1/2 text-[#c9a96e]/70 sm:top-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#c9a96e]/30 sm:w-16" />

          <span className="text-sm">✦</span>

          <span className="h-px w-10 bg-[#c9a96e]/30 sm:w-16" />
        </div>
      </div>

      {/* =========================================================
          CURTAIN PANELS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 z-20">
        {/* LEFT CURTAIN */}

        <div
          className={`absolute inset-y-0 left-0 w-1/2 origin-left bg-gradient-to-r from-[#eee4d5] via-[#f7f1e7] to-[#e9dfd1] shadow-[10px_0_40px_rgba(90,75,55,0.08)] transition-transform duration-[1800ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isOpening ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {/* Curtain folds */}

          <div className="absolute inset-y-0 right-0 w-[30%] bg-gradient-to-l from-[#d8cbb9]/35 to-transparent" />

          <div className="absolute inset-y-0 left-[15%] w-px bg-white/50" />

          <div className="absolute inset-y-0 left-[32%] w-px bg-[#d4c6b3]/20" />

          <div className="absolute inset-y-0 left-[52%] w-px bg-white/40" />

          <div className="absolute inset-y-0 left-[72%] w-px bg-[#d4c6b3]/15" />
        </div>

        {/* RIGHT CURTAIN */}

        <div
          className={`absolute inset-y-0 right-0 w-1/2 origin-right bg-gradient-to-l from-[#eee4d5] via-[#f7f1e7] to-[#e9dfd1] shadow-[-10px_0_40px_rgba(90,75,55,0.08)] transition-transform duration-[1800ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isOpening ? "translate-x-full" : "translate-x-0"
          }`}
        >
          {/* Curtain folds */}

          <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-[#d8cbb9]/35 to-transparent" />

          <div className="absolute inset-y-0 right-[15%] w-px bg-white/50" />

          <div className="absolute inset-y-0 right-[32%] w-px bg-[#d4c6b3]/20" />

          <div className="absolute inset-y-0 right-[52%] w-px bg-white/40" />

          <div className="absolute inset-y-0 right-[72%] w-px bg-[#d4c6b3]/15" />
        </div>
      </div>

      {/* =========================================================
          MAIN CENTER CONTENT
      ========================================================= */}

      <section className="relative z-30 flex min-h-screen items-center justify-center px-6 py-20 text-center">
        <div
          className={`relative flex w-full max-w-md flex-col items-center transition-all duration-700 ${
            isOpening
              ? "scale-105 opacity-0 blur-sm"
              : "scale-100 opacity-100"
          }`}
        >
          {/* =====================================================
              INVITATION LABEL
          ===================================================== */}

          <p className="font-serif text-[10px] uppercase tracking-[0.45em] text-[#9b896c] sm:text-xs">
            A Wedding Invitation
          </p>

          {/* Decorative ornament */}

          <div className="mt-5 flex items-center gap-3 text-[#c9a96e]/70">
            <span className="h-px w-10 bg-[#c9a96e]/30" />

            <span className="text-xs">✦</span>

            <span className="h-px w-10 bg-[#c9a96e]/30" />
          </div>

          {/* =====================================================
              MAIN INVITATION CARD
          ===================================================== */}

          <div className="relative mt-8 w-full rounded-[2rem] border border-[#c9a96e]/40 bg-[#fffaf1] px-7 py-9 shadow-[0_25px_80px_rgba(80,95,105,0.12)] sm:px-12 sm:py-12">
            {/* Inner decorative border */}

            <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-[#c9a96e]/15" />

            {/* Card heading */}

            <p className="font-serif text-sm italic tracking-wide text-[#71808b]">
              With love &amp; duas
            </p>

            {/* Main message */}

            <div className="mt-6">
              <p className="font-serif text-3xl leading-tight tracking-wide text-[#40596b] sm:text-4xl">
                A beautiful
                <br />
                beginning awaits...
              </p>

              {/* Divider */}

              <div className="mx-auto mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#c9a96e]/35" />

                <span className="text-sm text-[#c9a96e]">♡</span>

                <span className="h-px w-10 bg-[#c9a96e]/35" />
              </div>

              {/* Supporting message */}

              <p className="mx-auto mt-6 max-w-xs font-serif text-sm italic leading-6 text-[#71808b]">
                Two hearts, one beautiful journey,
                <br />
                and a new chapter written with
                <br />
                love, faith &amp; duas.
              </p>
            </div>

            {/* Year */}

            <p className="mt-7 font-serif text-xs uppercase tracking-[0.4em] text-[#9b896c]">
              NIKAH • 2026
            </p>
          </div>

          {/* =====================================================
              KNOT / INVITATION SEAL
              OUTSIDE THE CARD
          ===================================================== */}

          <div className="relative z-40 mt-5 flex flex-col items-center">
            {/* Soft connection shadow */}

            <div className="pointer-events-none absolute -top-2 h-8 w-24 rounded-full bg-[#c9a96e]/10 blur-xl" />

            {/* Knot button */}

            <button
              type="button"
              onClick={handleOpen}
              disabled={isOpening}
              aria-label="Open wedding invitation"
              className="group relative flex h-24 w-24 items-center justify-center rounded-full border border-[#c9a96e]/55 bg-[#f7f0e5] shadow-[0_15px_45px_rgba(95,75,45,0.16)] transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(95,75,45,0.22)] active:scale-95 disabled:cursor-default sm:h-28 sm:w-28"
            >
              {/* Outer ring */}

              <span className="absolute inset-[-7px] rounded-full border border-[#c9a96e]/20 transition-all duration-500 group-hover:scale-110 group-hover:border-[#c9a96e]/35" />

              {/* Second decorative ring */}

              <span className="absolute inset-[-14px] rounded-full border border-[#c9a96e]/10 transition-all duration-700 group-hover:scale-105" />

              {/* Left ribbon loop */}

              <span className="absolute h-10 w-16 rotate-[28deg] rounded-full border-[5px] border-[#c9a96e]/75 transition-transform duration-500 group-hover:rotate-[34deg]" />

              {/* Right ribbon loop */}

              <span className="absolute h-10 w-16 -rotate-[28deg] rounded-full border-[5px] border-[#c9a96e]/75 transition-transform duration-500 group-hover:-rotate-[34deg]" />

              {/* Knot center */}

              <span className="relative z-10 h-8 w-8 rotate-45 rounded-lg border-[5px] border-[#b89452] bg-[#e1c98f] shadow-[0_4px_10px_rgba(95,75,45,0.18)] transition-transform duration-500 group-hover:rotate-[135deg]" />

              {/* Knot highlight */}

              <span className="absolute z-20 h-2 w-2 rounded-full bg-[#fff8e9]" />
            </button>

            {/* Open instruction */}

            <p className="mt-5 font-serif text-xs uppercase tracking-[0.3em] text-[#8f8170]">
              Tap the knot to open
            </p>

            {/* Small heart */}

            <p className="mt-2 text-2xl text-[#c9a96e]/60">♡</p>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM ORNAMENT
      ========================================================= */}

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#c9a96e]/25 sm:w-12" />

          <span className="text-xs text-[#c9a96e]/60">✦</span>

          <span className="h-px w-8 bg-[#c9a96e]/25 sm:w-12" />
        </div>
      </div>
    </main>
  );
}