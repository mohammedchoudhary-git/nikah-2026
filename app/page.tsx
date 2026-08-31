"use client";
import { useState } from "react";
import { guests } from "../data/guests";

export default function Home() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCheck = () => {
    const isGuest = guests.some(
      (guest) => guest.toLowerCase() === name.trim().toLowerCase()
    );

    if (isGuest) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fbf7ee] via-[#f7efdf] to-[#ead8b5] text-[#123c32]">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#fffdf7]/70 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#c6a15b]/15 blur-3xl" />
      </div>

      {/* Islamic arch */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[92%] w-[92%] -translate-x-1/2 rounded-b-[48%] border-x border-b border-[#b58d45]/20 sm:w-[82%] md:w-[72%]" />

      {/* Background hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden text-[#b58d45]/30">
        <span className="absolute left-[7%] top-[18%] text-lg">♡</span>
        <span className="absolute right-[8%] top-[24%] text-2xl">♡</span>
        <span className="absolute left-[10%] top-[42%] text-sm">♡</span>
        <span className="absolute right-[11%] top-[48%] text-lg">♡</span>
        <span className="absolute left-[7%] bottom-[24%] text-2xl">♡</span>
        <span className="absolute right-[8%] bottom-[20%] text-xl">♡</span>
        <span className="absolute left-[23%] bottom-[9%] text-sm">♡</span>
        <span className="absolute right-[24%] bottom-[11%] text-sm">♡</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center px-6 pb-8 pt-14 text-center sm:px-8 sm:pt-16">

        {/* Bismillah */}
        <p
          dir="rtl"
          className="text-center text-4xl font-serif leading-relaxed text-[#b58d45] sm:text-5xl md:text-6xl"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        {/* Main divider */}
        <div className="mt-5 flex w-full max-w-xs items-center justify-center gap-3">
          <span className="h-px flex-1 bg-[#b58d45]/50" />
          <span className="text-lg text-[#c6a15b]">✦</span>
          <span className="h-px flex-1 bg-[#b58d45]/50" />
        </div>

        {/* Heading */}
        <h1 className="mt-8 font-serif text-4xl font-medium tracking-tight text-[#123c32] sm:mt-10 sm:text-5xl md:text-6xl">
          Before I let you in...
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-md text-base leading-7 text-[#5f625d] sm:text-lg">
          I need to make sure you're actually invited. 👀
        </p>

        {/* Name section */}
        <div className="mt-9 w-full max-w-lg sm:mt-11">

          <label
            htmlFor="name"
            className="font-serif text-xl text-[#123c32] sm:text-2xl"
          >
            What's your name?
          </label>

          {/* Small divider */}
          <div className="mx-auto mt-2 flex w-28 items-center justify-center gap-2">
            <span className="h-px flex-1 bg-[#c6a15b]/50" />
            <span className="text-xs text-[#c6a15b]">◆</span>
            <span className="h-px flex-1 bg-[#c6a15b]/50" />
          </div>

          {/* Input */}
          <div className="relative mt-4">
            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl text-[#c6a15b]">
              ♡
            </span>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="h-16 w-full rounded-2xl border border-[#c6a15b]/60 bg-[#fffdf8]/90 px-14 text-center font-serif text-lg text-[#123c32] shadow-[0_8px_30px_rgba(91,70,30,0.08)] outline-none placeholder:text-[#8b887f] focus:border-[#b58d45] focus:ring-4 focus:ring-[#c6a15b]/10"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={handleCheck}
            className="mt-4 flex h-16 w-full items-center justify-center gap-3 rounded-2xl border border-[#d9b86b] bg-[#123c32] px-6 font-serif text-lg text-[#fffdf8] shadow-[0_10px_30px_rgba(18,60,50,0.18)] transition duration-300 hover:bg-[#1e5547] active:scale-[0.99]"
          >
            <span className="text-2xl text-[#e2bf73]">⌕</span>
            <span>Let me check...</span>
          </button>
        </div>


        {status === "success" && (
          <p className="mt-6 text-lg font-serif text-[#123c32]">
            Welcome, {name}! 🎉
          </p>
        )}

        {status === "error" && (
          <p className="mt-6 text-lg font-serif text-[#8b3a3a]">
            Hmm... I don't remember inviting you. 🤨
          </p>
        )}
        {/* Bottom message */}
        <div className="mt-12 pt-4">
          <p className="text-xs font-medium tracking-[0.25em] text-[#9a8967] uppercase sm:text-sm">
            A little surprise awaits you
          </p>

          <p className="mt-2 text-3xl text-[#c6a15b]/80">♡</p>
        </div>
      </div>
    </main>
  );
}