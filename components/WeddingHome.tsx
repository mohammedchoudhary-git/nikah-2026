"use client";

import { Great_Vibes } from "next/font/google";
import { useState } from "react";
import ScratchDateCard from "./ScratchDateCard";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

type WeddingHomeProps = {
  onComplete: () => void;
};

export default function WeddingHome({
  onComplete,
}: WeddingHomeProps) {
  const [leaving, setLeaving] = useState(false);

  const handleDateComplete = () => {
    setLeaving(true);

    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <main
      className={`relative min-h-screen overflow-hidden bg-[#fbf5ea] text-[#173f35] transition-all duration-1000 ${
        leaving ? "scale-110 opacity-0" : "scale-100 opacity-100"
      }`}
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d9b86b]/15 blur-[100px]" />

        <div className="absolute bottom-[-150px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#e7b4b7]/10 blur-[100px]" />
      </div>

      {/* Decorative arch */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="relative mt-8 h-[92vh] w-[92vw] max-w-3xl rounded-t-[50%] border border-[#b58d45]/20 sm:mt-12">
          <div className="absolute inset-[12px] rounded-t-[50%] border border-[#b58d45]/10" />

          {/* Top ornament */}
          <div className="absolute left-1/2 top-[-13px] -translate-x-1/2 text-xl text-[#b58d45]/70">
            ✦
          </div>
        </div>
      </div>

      {/* Main hero */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16 text-center">
        <div className="w-full max-w-3xl">
          {/* Quran verse */}
          <div className="mx-auto mt-8 max-w-xl">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#b58d45]/30" />

              <span className="font-serif text-sm text-[#b58d45]">
                ✦
              </span>

              <span className="h-px w-12 bg-[#b58d45]/30" />
            </div>

            <p
              dir="rtl"
              className="mt-5 font-serif text-3xl leading-[2] text-[#173f35] sm:text-4xl"
            >
              وَخَلَقْنَٰكُمْ أَزْوَٰجًا
            </p>

            <p className="mt-3 font-serif text-sm italic leading-6 text-[#6c7069] sm:text-base">
              “And We created you in pairs.”
            </p>

            <p className="mt-2 font-serif text-xs tracking-[0.2em] text-[#a28b60]">
              QUR&apos;AN 78:8
            </p>
          </div>

          {/* Couple names */}
          <div className="mt-12">
            <p
              className={`${greatVibes.className} text-5xl tracking-tight text-[#173f35] sm:text-7xl md:text-8xl`}
            >
              Mohammed
            </p>

            {/* Pink heart */}
            <div className="my-4 flex items-center justify-center">
              <span className="h-px w-16 bg-[#d9b86b]/30" />

              <span className="mx-5 inline-block animate-heartbeat text-4xl text-[#d98f9a] drop-shadow-[0_0_15px_rgba(217,143,154,0.25)]">
                ♥
              </span>

              <span className="h-px w-16 bg-[#d9b86b]/30" />
            </div>

            <p
              className={`${greatVibes.className} text-5xl tracking-tight text-[#173f35] sm:text-7xl md:text-8xl`}
            >
              Bushra
            </p>
          </div>

          {/* Nikah 2026 */}
          <div className="mt-10">
            <p className="font-serif text-xs font-medium tracking-[0.5em] text-[#a28b60]">
              NIKAH
            </p>

            <p className="mt-1 font-serif text-4xl tracking-[0.15em] text-[#b58d45] sm:text-5xl">
              2026
            </p>
          </div>

          {/* Interactive scratch date card */}
          <ScratchDateCard
            date="11 November 2026"
            onComplete={handleDateComplete}
          />

          {/* Bottom ornament */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#b58d45]/25" />

            <span className="font-serif text-2xl text-[#d98f9a] drop-shadow-[0_0_8px_rgba(217,143,154,0.25)]">
              ♥
            </span>

            <span className="h-px w-16 bg-[#b58d45]/25" />
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }

          15% {
            transform: scale(1.12);
          }

          30% {
            transform: scale(1);
          }

          45% {
            transform: scale(1.08);
          }

          60% {
            transform: scale(1);
          }
        }

        .animate-heartbeat {
          animation: heartbeat 2.5s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}