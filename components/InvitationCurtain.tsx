
"use client";

import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

type InvitationCurtainProps = {
  onOpen: () => void;
};

export default function InvitationCurtain({
  onOpen,
}: InvitationCurtainProps) {
  return (
    <main
      className={`${lora.className} relative min-h-screen overflow-hidden bg-[#090708] text-[#f5eee5]`}
    >
      {/* Background atmosphere — reduced blur for mobile */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#651b25]/45 blur-[70px]" />

        <div className="absolute bottom-[-180px] left-[-120px] h-[430px] w-[430px] rounded-full bg-[#7c202d]/25 blur-[65px]" />

        <div className="absolute bottom-[-160px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#3d1118]/35 blur-[65px]" />

        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8f2633]/10 blur-[60px]" />
      </div>

      {/* Elegant borders */}
      <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#c9a96e]/35 sm:inset-6 md:inset-8" />

      <div className="pointer-events-none absolute inset-7 rounded-[1.7rem] border border-[#c9a96e]/10 sm:inset-9 md:inset-12" />

      {/* Decorative details */}
      <span className="pointer-events-none absolute left-[9%] top-[17%] text-[19px] text-[#c9a96e]/55">
        ✦
      </span>

      <span className="pointer-events-none absolute right-[9%] top-[25%] text-[15px] text-[#c9a96e]/40">
        ♡
      </span>

      <span className="pointer-events-none absolute bottom-[24%] left-[10%] text-[15px] text-[#c9a96e]/35">
        ✦
      </span>

      <span className="pointer-events-none absolute bottom-[15%] right-[9%] text-[19px] text-[#c9a96e]/45">
        ♡
      </span>

      {/* Main content */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-14 sm:px-8">
        <div className="flex w-full max-w-lg flex-col items-center text-center">
          {/* Invitation card */}
          <div className="relative w-full overflow-hidden rounded-[2rem] border border-[#c9a96e]/45 bg-gradient-to-b from-[#1b1013]/95 via-[#120b0d]/95 to-[#0c0809]/95 px-7 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.55)] sm:px-10 sm:py-12">
            {/* Card glow — reduced blur */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-[#8f2633]/20 blur-[40px]" />

            {/* Top decoration */}
            <div className="relative flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#c9a96e]/35 sm:w-14" />
              <span className="text-[17px] text-[#c9a96e]">✦</span>
              <span className="h-px w-10 bg-[#c9a96e]/35 sm:w-14" />
            </div>

            {/* Invitation label */}
            <p className="relative mt-7 text-[17px] uppercase tracking-[0.32em] text-[#c9a96e]/80 sm:text-[18px]">
              You&apos;re Invited
            </p>

            {/* Main heading */}
            <h1 className="relative mt-5 text-[34px] font-medium leading-tight text-[#f7efe7] sm:text-[39px]">
              A beautiful beginning
              <br />
              awaits...
            </h1>

            {/* Description */}
            <p className="relative mx-auto mt-5 max-w-sm text-[20px] italic leading-8 text-[#c8b6b0] sm:text-[21px]">
              An evening of love, family,
              <br />
              blessings &amp; dua.
            </p>

            {/* Middle divider */}
            <div className="relative mx-auto mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c9a96e]/30" />
              <span className="text-[16px] text-[#c9a96e]">♡</span>
              <span className="h-px w-8 bg-[#c9a96e]/30" />
            </div>

            {/* Closing line */}
            <p className="relative mt-6 text-[18px] uppercase tracking-[0.22em] text-[#a9958c]">
              A Celebration of Love &amp; Dua
            </p>
          </div>

          {/* Open invitation section */}
          <div className="relative mt-10 flex flex-col items-center">
            <p className="text-[16px] uppercase tracking-[0.28em] text-[#a9958c]">
              Open the invitation
            </p>

            {/* Knot / Open button */}
            <button
              type="button"
              onClick={onOpen}
              aria-label="Open wedding invitation"
              className="group relative mt-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#c9a96e]/60 bg-[#130b0d] shadow-[0_15px_50px_rgba(0,0,0,0.45),0_0_35px_rgba(201,169,110,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#c9a96e] hover:shadow-[0_20px_60px_rgba(0,0,0,0.55),0_0_45px_rgba(201,169,110,0.16)] active:scale-95"
            >
              <span className="absolute inset-2 rounded-full border border-[#c9a96e]/15 transition-all duration-500 group-hover:scale-105 group-hover:border-[#c9a96e]/30" />

              <span className="relative text-[32px] text-[#c9a96e]">
                ♡
              </span>
            </button>

            <p className="mt-4 text-[17px] italic text-[#887772]">
              Tap to begin
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}