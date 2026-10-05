"use client";

import { Lora } from "next/font/google";
import { useEffect, useState } from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

type CoupleRevealProps = {
  onBack: () => void;
  onComplete: () => void;
};

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const NIKAH_DATE = new Date("2026-11-11T00:00:00");

export default function CoupleReveal({
  onBack,
  onComplete,
}: CoupleRevealProps) {
  const [visible, setVisible] = useState(false);
  const [showCouple, setShowCouple] = useState(false);

  const [countdownRevealed, setCountdownRevealed] =
    useState(false);

  const [celebrationKey, setCelebrationKey] = useState(0);

  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /* =========================================================
     SCREEN ENTRANCE
  ========================================================= */

  useEffect(() => {
    const screenTimer = setTimeout(() => {
      setVisible(true);
    }, 100);

    const coupleTimer = setTimeout(() => {
      setShowCouple(true);
    }, 650);

    return () => {
      clearTimeout(screenTimer);
      clearTimeout(coupleTimer);
    };
  }, []);

  /* =========================================================
     COUNTDOWN
  ========================================================= */

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const target = NIKAH_DATE.getTime();

      const difference = target - now;

      if (difference <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    calculateCountdown();

    const countdownTimer = setInterval(
      calculateCountdown,
      1000
    );

    return () => {
      clearInterval(countdownTimer);
    };
  }, []);

  /* =========================================================
     COUNTDOWN REVEAL
  ========================================================= */

  const handleCountdownReveal = () => {
    if (countdownRevealed) return;

    setCountdownRevealed(true);
    setCelebrationKey((key) => key + 1);
  };

  const handleReplayCelebration = () => {
    setCelebrationKey((key) => key + 1);
  };

  /* =========================================================
     BACK → SCREEN 3
  ========================================================= */

  const handleBack = () => {
    setVisible(false);

    setTimeout(() => {
      onBack();
    }, 850);
  };

  /* =========================================================
     CONTINUE → SCREEN 5
  ========================================================= */

  const handleContinue = () => {
    setVisible(false);

    setTimeout(() => {
      onComplete();
    }, 850);
  };

  const formatNumber = (value: number) => {
    return value.toString().padStart(2, "0");
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
        <div className="absolute left-1/2 top-[-190px] h-[430px] w-[430px] -translate-x-1/2 rounded-full bg-[#651b25]/45 blur-[110px]" />

        <div className="absolute bottom-[-180px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#7c202d]/25 blur-[110px]" />

        <div className="absolute bottom-[-160px] right-[-100px] h-[380px] w-[380px] rounded-full bg-[#3d1118]/35 blur-[110px]" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8f2633]/10 blur-[100px]" />
      </div>

      {/* =========================================================
          BORDERS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#c9a96e]/35 sm:inset-6 md:inset-8" />

      <div className="pointer-events-none absolute inset-7 rounded-[1.7rem] border border-[#c9a96e]/10 sm:inset-9 md:inset-12" />

      {/* =========================================================
          DECORATIVE DETAILS
      ========================================================= */}

      <span className="pointer-events-none absolute left-[9%] top-[18%] text-sm text-[#c9a96e]/50">
        ✦
      </span>

      <span className="pointer-events-none absolute right-[9%] top-[27%] text-xs text-[#c9a96e]/35">
        ♡
      </span>

      <span className="pointer-events-none absolute bottom-[25%] left-[10%] text-xs text-[#c9a96e]/40">
        ✦
      </span>

      <span className="pointer-events-none absolute bottom-[15%] right-[9%] text-sm text-[#c9a96e]/35">
        ♡
      </span>

      {/* =========================================================
          CELEBRATION
      ========================================================= */}

      {countdownRevealed && (
        <div
          key={celebrationKey}
          className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
        >
          <span className="firework firework-one">✦</span>
          <span className="firework firework-two">✦</span>
          <span className="firework firework-three">✦</span>

          <span className="confetti confetti-1">✦</span>
          <span className="confetti confetti-2">♡</span>
          <span className="confetti confetti-3">✦</span>
          <span className="confetti confetti-4">♡</span>
          <span className="confetti confetti-5">✦</span>
          <span className="confetti confetti-6">♡</span>
          <span className="confetti confetti-7">✦</span>
          <span className="confetti confetti-8">♡</span>
        </div>
      )}

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-14 sm:px-8 sm:py-16">
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
            <p className="text-[14px] uppercase tracking-[0.32em] text-[#c9a96e]/85 sm:text-[15px]">
              A New Chapter
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#c9a96e]/30 sm:w-16" />

              <span className="text-[13px] text-[#c9a96e]">
                ✦
              </span>

              <span className="h-px w-12 bg-[#c9a96e]/30 sm:w-16" />
            </div>
          </div>

          {/* =====================================================
              COUPLE NAMES
          ===================================================== */}

          <div className="mt-10">

            {/* Mohammed */}

            <div
              className={`transition-all duration-[1100ms] ${
                showCouple
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-[40px] font-medium tracking-wide text-[#f5eee5] sm:text-[48px]">
                Mohammed
              </p>

              <p className="mx-auto mt-3 max-w-sm text-[14px] leading-6 text-[#a9958c] sm:text-[15px]">
                S/O Nizamuddin AbdulRazzak
                <br />
                Choudhary
              </p>
            </div>

            {/* Heart divider */}

            <div
              className={`my-7 flex items-center justify-center gap-4 transition-all delay-200 duration-1000 ${
                showCouple
                  ? "scale-100 opacity-100"
                  : "scale-75 opacity-0"
              }`}
            >
              <span className="h-px w-12 bg-[#c9a96e]/25 sm:w-16" />

              <span className="text-[26px] text-[#c9a96e]">
                ♡
              </span>

              <span className="h-px w-12 bg-[#c9a96e]/25 sm:w-16" />
            </div>

            {/* Bushra */}

            <div
              className={`transition-all delay-300 duration-[1100ms] ${
                showCouple
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-[40px] font-medium tracking-wide text-[#f5eee5] sm:text-[48px]">
                Bushra
              </p>

              <p className="mx-auto mt-3 max-w-sm text-[14px] leading-6 text-[#a9958c] sm:text-[15px]">
                D/O Mo. Anas Ahmed
                <br />
                Nadoliya
              </p>
            </div>
          </div>

          {/* =====================================================
              HEARTFELT MESSAGE
          ===================================================== */}

          <div
            className={`mx-auto mt-9 max-w-lg transition-all delay-500 duration-1000 ${
              showCouple
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <div className="rounded-[2rem] border border-[#c9a96e]/30 bg-[#130b0d]/90 px-7 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:px-10 sm:py-8">

              <p className="text-[21px] italic leading-9 text-[#c8b6b0] sm:text-[24px] sm:leading-10">
                Two hearts, one beautiful journey,
                <br />
                and a lifetime to begin.
              </p>

              <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#c9a96e]/25" />

                <span className="text-[13px] text-[#c9a96e]">
                  ♡
                </span>

                <span className="h-px w-8 bg-[#c9a96e]/25" />
              </div>

              <p className="mt-4 text-[13px] uppercase tracking-[0.2em] text-[#c9a96e]/80">
                A journey written with love &amp; dua
              </p>
            </div>
          </div>

          {/* =====================================================
              COUNTDOWN
          ===================================================== */}

          <div
            className={`mt-9 transition-all delay-700 duration-1000 ${
              showCouple
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <p className="text-[13px] uppercase tracking-[0.28em] text-[#c9a96e]/85 sm:text-[14px]">
              Our Nikah In
            </p>

            {!countdownRevealed ? (
              <button
                type="button"
                onClick={handleCountdownReveal}
                className="group relative mx-auto mt-5 block w-full max-w-md overflow-hidden rounded-[2rem] border border-[#c9a96e]/35 bg-[#130b0d]/90 px-6 py-9 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-[#c9a96e]/55 hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)] active:scale-[0.98]"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100" />

                <div className="relative z-10">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a96e]/35 bg-[#321118] shadow-[0_8px_25px_rgba(201,169,110,0.12)] transition-transform duration-500 group-hover:scale-110">
                    <span className="text-[28px] text-[#c9a96e]">
                      ♡
                    </span>
                  </div>

                  <p className="mt-6 text-[17px] uppercase tracking-[0.25em] text-[#f5eee5] sm:text-[19px]">
                    Press to Reveal
                  </p>

                  <p className="mt-3 text-[14px] italic text-[#a9958c]">
                    A little surprise awaits...
                  </p>

                  <div className="mx-auto mt-6 flex items-center justify-center gap-2">
                    <span className="h-px w-8 bg-[#c9a96e]/25" />

                    <span className="text-[11px] text-[#c9a96e]">
                      ✦
                    </span>

                    <span className="h-px w-8 bg-[#c9a96e]/25" />
                  </div>
                </div>
              </button>
            ) : (
              <div className="relative mx-auto mt-5 max-w-md">

                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[#651b25]/20 blur-2xl" />

                <div className="relative rounded-[2rem] border border-[#c9a96e]/40 bg-[#130b0d]/95 px-4 py-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:px-5 sm:py-7">

                  <div className="mb-5 flex items-center justify-center gap-3">
                    <span className="h-px w-10 bg-[#c9a96e]/25" />

                    <span className="text-[12px] text-[#c9a96e]">
                      ✦
                    </span>

                    <span className="text-[12px] uppercase tracking-[0.22em] text-[#c9a96e]/80">
                      Until Our Nikah
                    </span>

                    <span className="h-px w-10 bg-[#c9a96e]/25" />
                  </div>

                  <div className="grid grid-cols-4 gap-2 sm:gap-3">

                    <div className="rounded-2xl border border-[#c9a96e]/25 bg-[#211014]/80 px-2 py-4 sm:px-3 sm:py-5">
                      <p className="text-[25px] font-medium text-[#f5eee5] sm:text-[31px]">
                        {formatNumber(countdown.days)}
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#a9958c] sm:text-[10px]">
                        Days
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#c9a96e]/25 bg-[#211014]/80 px-2 py-4 sm:px-3 sm:py-5">
                      <p className="text-[25px] font-medium text-[#f5eee5] sm:text-[31px]">
                        {formatNumber(countdown.hours)}
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#a9958c] sm:text-[10px]">
                        Hours
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#c9a96e]/25 bg-[#211014]/80 px-2 py-4 sm:px-3 sm:py-5">
                      <p className="text-[25px] font-medium text-[#f5eee5] sm:text-[31px]">
                        {formatNumber(countdown.minutes)}
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#a9958c] sm:text-[10px]">
                        Minutes
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#c9a96e]/25 bg-[#211014]/80 px-2 py-4 sm:px-3 sm:py-5">
                      <p className="text-[25px] font-medium text-[#f5eee5] sm:text-[31px]">
                        {formatNumber(countdown.seconds)}
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#a9958c] sm:text-[10px]">
                        Seconds
                      </p>
                    </div>

                  </div>

                  <p className="mt-5 text-[14px] italic text-[#a9958c]">
                    Until 11 November 2026
                  </p>

                  <button
                    type="button"
                    onClick={handleReplayCelebration}
                    className="group mx-auto mt-5 flex items-center gap-2 rounded-full border border-[#c9a96e]/25 bg-[#211014]/70 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#a9958c] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a96e]/50 hover:bg-[#2a1318] active:scale-95"
                  >
                    <span className="text-[#c9a96e] transition-transform duration-500 group-hover:rotate-180">
                      ✦
                    </span>

                    <span>Replay</span>
                  </button>

                </div>
              </div>
            )}
          </div>

          {/* =====================================================
              NAVIGATION
          ===================================================== */}

          <div
            className={`mx-auto mt-8 flex items-center justify-center gap-3 transition-all duration-700 ${
              showCouple
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-5 opacity-0"
            }`}
          >

            {/* BACK BUTTON */}

            <button
              type="button"
              onClick={handleBack}
              className="group flex items-center gap-2 rounded-full border border-[#c9a96e]/30 bg-[#130b0d]/80 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#a9958c] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a96e]/55 hover:bg-[#1a0d10] hover:text-[#f5eee5] active:scale-95 sm:px-6"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              <span>Back</span>
            </button>

            {/* CONTINUE BUTTON */}

            <button
              type="button"
              onClick={handleContinue}
              className="group flex items-center gap-2 rounded-full border border-[#c9a96e]/45 bg-[#130b0d]/90 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-[#c8b6b0] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a96e]/70 hover:bg-[#1a0d10] hover:text-[#f5eee5] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] active:scale-95 sm:px-7"
            >
              <span>Continue</span>

              <span className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>

          <p
            className={`mt-4 text-xl text-[#c9a96e]/50 transition-opacity duration-700 ${
              showCouple ? "opacity-100" : "opacity-0"
            }`}
          >
            ♡
          </p>
        </div>
      </section>

      {/* =========================================================
          CELEBRATION ANIMATIONS
      ========================================================= */}

      <style jsx>{`
        .firework {
          position: absolute;
          font-size: 34px;
          color: #c9a96e;
          opacity: 0;
          animation: firework 1.8s ease-out forwards;
          text-shadow:
            0 0 8px rgba(201, 169, 110, 0.8),
            0 0 20px rgba(201, 169, 110, 0.45);
        }

        .firework-one {
          left: 18%;
          top: 28%;
        }

        .firework-two {
          right: 17%;
          top: 32%;
          animation-delay: 0.2s;
        }

        .firework-three {
          left: 50%;
          top: 20%;
          animation-delay: 0.35s;
        }

        .confetti {
          position: absolute;
          top: -30px;
          font-size: 15px;
          color: #c9a96e;
          opacity: 0;
          animation: confettiFall 2.5s ease-out forwards;
        }

        .confetti-1 {
          left: 8%;
          animation-delay: 0.1s;
        }

        .confetti-2 {
          left: 20%;
          animation-delay: 0.35s;
        }

        .confetti-3 {
          left: 33%;
          animation-delay: 0.2s;
        }

        .confetti-4 {
          left: 47%;
          animation-delay: 0.5s;
        }

        .confetti-5 {
          left: 61%;
          animation-delay: 0.15s;
        }

        .confetti-6 {
          left: 73%;
          animation-delay: 0.4s;
        }

        .confetti-7 {
          left: 86%;
          animation-delay: 0.25s;
        }

        .confetti-8 {
          left: 94%;
          animation-delay: 0.55s;
        }

        @keyframes firework {
          0% {
            opacity: 0;
            transform: scale(0.2) rotate(0deg);
          }

          35% {
            opacity: 1;
            transform: scale(1.5) rotate(45deg);
          }

          100% {
            opacity: 0;
            transform: scale(3) rotate(120deg);
          }
        }

        @keyframes confettiFall {
          0% {
            opacity: 0;
            transform: translateY(-30px) rotate(0deg);
          }

          15% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateY(105vh) rotate(360deg);
          }
        }
      `}</style>
    </main>
  );
}