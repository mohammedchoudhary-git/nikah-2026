"use client";

import { useEffect, useState } from "react";

type WelcomeExperienceProps = {
  name: string;
  onComplete: () => void;
};

const fallingHearts = [
  { left: "4%", delay: "0s", duration: "8s", size: "text-lg", symbol: "♡" },
  { left: "12%", delay: "2.5s", duration: "10s", size: "text-sm", symbol: "♡" },
  { left: "21%", delay: "1s", duration: "7s", size: "text-2xl", symbol: "✦" },
  { left: "30%", delay: "4s", duration: "11s", size: "text-lg", symbol: "♡" },
  { left: "39%", delay: "0.5s", duration: "9s", size: "text-sm", symbol: "♡" },
  { left: "48%", delay: "3s", duration: "8s", size: "text-xl", symbol: "✦" },
  { left: "57%", delay: "1.5s", duration: "10s", size: "text-lg", symbol: "♡" },
  { left: "66%", delay: "5s", duration: "7.5s", size: "text-sm", symbol: "♡" },
  { left: "75%", delay: "2s", duration: "9.5s", size: "text-2xl", symbol: "♡" },
  { left: "84%", delay: "4.5s", duration: "11s", size: "text-lg", symbol: "✦" },
  { left: "92%", delay: "1s", duration: "8.5s", size: "text-sm", symbol: "♡" },
];

const heartBurst = [
  { x: "-80px", y: "-55px", delay: "0ms", symbol: "♡" },
  { x: "75px", y: "-45px", delay: "80ms", symbol: "✦" },
  { x: "-95px", y: "15px", delay: "140ms", symbol: "✦" },
  { x: "95px", y: "25px", delay: "200ms", symbol: "♡" },
  { x: "-60px", y: "65px", delay: "260ms", symbol: "♡" },
  { x: "65px", y: "70px", delay: "320ms", symbol: "✦" },
];

export default function WelcomeExperience({
  name,
  onComplete,
}: WelcomeExperienceProps) {
  const [heartClicked, setHeartClicked] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const handleHeartClick = () => {
    if (!heartClicked) {
      setHeartClicked(true);

      setTimeout(() => {
        setLeaving(true);
      }, 3500);

      setTimeout(() => {
        onComplete();
      }, 4500);
    }
  };

  // Clean up timers if the component leaves before animation finishes
  useEffect(() => {
    return () => {
      // Timers are intentionally managed by the click sequence.
      // Cleanup is handled automatically when the component unmounts.
    };
  }, []);

  return (
    <main
      className={`relative min-h-screen overflow-hidden bg-[#0b211c] text-[#f7efdf] transition-all duration-1000 ${
        leaving ? "scale-110 opacity-0" : "scale-100 opacity-100"
      }`}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9b86b]/10 blur-[120px] transition-all duration-[2000ms] ${
            heartClicked
              ? "scale-125 opacity-100"
              : "scale-75 opacity-30"
          }`}
        />

        <div
          className={`absolute left-1/2 top-[35%] h-[220px] w-[600px] -translate-x-1/2 rounded-full bg-[#c6a15b]/10 blur-[100px] transition-opacity duration-[1800ms] ${
            heartClicked ? "opacity-100" : "opacity-20"
          }`}
        />
      </div>

      {/* Islamic decorative arch */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className={`islamic-arch relative h-[78vh] w-[82vw] max-w-2xl ${
            heartClicked ? "arch-active" : ""
          }`}
        >
          {/* Outer arch */}
          <div className="absolute inset-0 rounded-t-[50%] border border-[#d9b86b]/20" />

          {/* Inner arch */}
          <div className="absolute inset-[14px] rounded-t-[50%] border border-[#d9b86b]/10" />

          {/* Top ornament */}
          <div className="absolute left-1/2 top-[-14px] -translate-x-1/2 text-xl text-[#d9b86b]/60">
            ✦
          </div>

          {/* Side ornaments */}
          <div className="absolute left-[-10px] top-[18%] text-lg text-[#d9b86b]/40">
            ✦
          </div>

          <div className="absolute right-[-10px] top-[18%] text-lg text-[#d9b86b]/40">
            ✦
          </div>

          {/* Lower ornaments */}
          <div className="absolute bottom-[20%] left-[-8px] text-sm text-[#d9b86b]/30">
            ◆
          </div>

          <div className="absolute bottom-[20%] right-[-8px] text-sm text-[#d9b86b]/30">
            ◆
          </div>

          {/* Center light */}
          <div className="absolute left-1/2 top-[10%] h-[8%] w-px -translate-x-1/2 bg-gradient-to-b from-[#d9b86b]/40 to-transparent" />
        </div>
      </div>

      {/* Falling hearts */}
      {heartClicked && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {fallingHearts.map((heart, index) => (
            <span
              key={index}
              className={`absolute -top-10 ${heart.size} ${
                heart.symbol === "✦"
                  ? "text-[#f0d28a]/80"
                  : "text-[#d9b86b]/70"
              }`}
              style={{
                left: heart.left,
                animation: `falling-heart ${heart.duration} linear ${heart.delay} infinite`,
              }}
            >
              {heart.symbol}
            </span>
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          {/* Arabic greeting */}
          <p
            dir="rtl"
            className="animate-fade-in font-serif text-3xl leading-relaxed text-[#d9b86b] sm:text-4xl"
          >
            السَّلَامُ عَلَيْكُمْ
          </p>

          {/* Name + heart */}
          <button
            type="button"
            onClick={handleHeartClick}
            aria-label="Tap the heart to enter"
            className={`animate-name-reveal mt-6 inline-flex items-center gap-2 font-serif text-4xl opacity-0 transition-all duration-300 hover:scale-105 active:scale-90 ${
              heartClicked ? "heart-activated" : ""
            }`}
          >
            <span>{name}</span>

            <span className="relative text-5xl">
              {/* Heart glow */}
              <span
                className={`absolute left-1/2 top-1/2 -z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9b86b]/20 blur-xl transition-all duration-700 ${
                  heartClicked
                    ? "scale-[2.5] opacity-100"
                    : "scale-75 opacity-0"
                }`}
              />

              {/* Main heart */}
              <span className="relative z-10 inline-block drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]">
                🤍
              </span>

              {/* Heart burst */}
              {heartClicked && (
                <span className="pointer-events-none absolute left-1/2 top-1/2">
                  {heartBurst.map((particle, index) => (
                    <span
                      key={index}
                      className="heart-burst-particle absolute text-lg text-[#e1bd70]"
                      style={{
                        "--burst-x": particle.x,
                        "--burst-y": particle.y,
                        animationDelay: particle.delay,
                      } as React.CSSProperties}
                    >
                      {particle.symbol}
                    </span>
                  ))}
                </span>
              )}
            </span>
          </button>

          {/* Tap instruction */}
          {!heartClicked && (
            <p className="animate-instruction mt-5 text-sm tracking-[0.15em] text-[#d9b86b]/75">
              Tap the heart to enter 🤍
            </p>
          )}

          {/* 3D Welcome phrase */}
          {heartClicked && (
            <div className="perspective-1000 relative mt-10">
              {/* Glow behind text */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9b86b]/20 blur-3xl" />

              {/* 3D text */}
              <div className="welcome-3d relative">
                {/* Deep shadow */}
                <p
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-[7px] w-full select-none font-serif text-3xl font-medium text-[#725326]/80 sm:text-4xl"
                >
                  Ahlan wa Sahlan Marhaba
                </p>

                {/* Middle depth */}
                <p
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-[4px] w-full select-none font-serif text-3xl font-medium text-[#a47c38] sm:text-4xl"
                >
                  Ahlan wa Sahlan Marhaba
                </p>

                {/* Main gold face */}
                <p
                  className="animate-message-reveal relative font-serif text-3xl font-medium text-[#e1bd70] sm:text-4xl"
                  style={{
                    textShadow: `
                      0 1px 0 #fff0bd,
                      0 2px 0 #c9a257,
                      0 5px 0 #9b7434,
                      0 8px 20px rgba(198, 161, 91, 0.30)
                    `,
                  }}
                >
                  Ahlan wa Sahlan Marhaba

                  {/* Light sweep */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-[35%] w-[20%] -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 animate-light-sweep"
                  />
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .welcome-3d {
          transform-style: preserve-3d;
          animation: gentle-float 5s ease-in-out infinite;
        }

        .islamic-arch {
          opacity: 0.55;
          animation: arch-glow 5s ease-in-out infinite;
          transition: filter 1.5s ease, opacity 1.5s ease;
        }

        .arch-active {
          opacity: 1;
          filter: drop-shadow(0 0 18px rgba(217, 184, 107, 0.18));
        }

        .heart-activated {
          animation: heart-activate 900ms ease-out;
        }

        .heart-burst-particle {
          left: 0;
          top: 0;
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.2);
          animation: heart-burst 900ms ease-out forwards;
        }

        @keyframes heart-activate {
          0% {
            transform: scale(1);
          }

          25% {
            transform: scale(1.22);
          }

          45% {
            transform: scale(0.9);
          }

          65% {
            transform: scale(1.08);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes heart-burst {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2);
          }

          20% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(
                calc(-50% + var(--burst-x)),
                calc(-50% + var(--burst-y))
              )
              scale(1);
          }
        }

        @keyframes arch-glow {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.015);
          }
        }

        @keyframes falling-heart {
          0% {
            transform: translate3d(0, -10vh, 0) rotate(0deg);
            opacity: 0;
          }

          10% {
            opacity: 0.8;
          }

          50% {
            transform: translate3d(25px, 50vh, 0) rotate(180deg);
            opacity: 0.65;
          }

          100% {
            transform: translate3d(-20px, 115vh, 0) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes name-reveal {
          from {
            opacity: 0;
            transform: scale(0.7);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes instruction {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes message-reveal {
          from {
            opacity: 0;
            transform: perspective(1000px) translateY(20px) scale(0.85)
              rotateX(18deg);
          }

          to {
            opacity: 1;
            transform: perspective(1000px) translateY(0) scale(1)
              rotateX(8deg);
          }
        }

        @keyframes gentle-float {
          0%,
          100% {
            transform: translateY(0) rotateZ(0deg);
          }

          50% {
            transform: translateY(-5px) rotateZ(0.3deg);
          }
        }

        @keyframes light-sweep {
          0% {
            left: -35%;
            opacity: 0;
          }

          15% {
            opacity: 0.8;
          }

          45% {
            opacity: 0.35;
          }

          65% {
            left: 115%;
            opacity: 0;
          }

          100% {
            left: 115%;
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }

        .animate-name-reveal {
          animation: name-reveal 1s ease-out 0.4s forwards;
        }

        .animate-instruction {
          animation: instruction 1s ease-out 1.3s both;
        }

        .animate-message-reveal {
          animation: message-reveal 1s ease-out 0.2s forwards;
        }

        .animate-light-sweep {
          animation: light-sweep 4s ease-in-out 1.2s infinite;
        }
      `}</style>
    </main>
  );
}