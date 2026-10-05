"use client";

import { useEffect, useRef, useState } from "react";

import InvitationCurtain from "../components/InvitationCurtain";
import BismillahScreen from "../components/BismillahScreen";
import NikahDateReveal from "../components/NikahDateReveal";
import CoupleReveal from "../components/CoupleReveal";
import FinalBlessings from "../components/FinalBlessings";

import MusicPlayer, {
  MusicPlayerHandle,
} from "../components/MusicPlayer";

type Screen =
  | "curtain"
  | "bismillah"
  | "nikah-date"
  | "couple"
  | "final";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("curtain");
  const [transitioning, setTransitioning] = useState(false);

  const musicRef = useRef<MusicPlayerHandle>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [screen]);

  const handleOpenInvitation = () => {
    if (transitioning) return;

    // Start wedding music when invitation is opened
    musicRef.current?.startMusic();

    setTransitioning(true);

    // Slow blur transition into Screen 2
    setTimeout(() => {
      setScreen("bismillah");
    }, 850);

    setTimeout(() => {
      setTransitioning(false);
    }, 1800);
  };

  return (
    <>
      {/* SCREEN 1 — INVITATION */}
      {screen === "curtain" && (
        <InvitationCurtain onOpen={handleOpenInvitation} />
      )}

      {/* SCREEN 2 — BISMILLAH */}
      {screen === "bismillah" && (
        <BismillahScreen
          onComplete={() => {
            setScreen("nikah-date");
          }}
        />
      )}

      {/* SCREEN 3 — NIKAH + WALIMA */}
      {screen === "nikah-date" && (
        <NikahDateReveal
          onBack={() => {
            setScreen("bismillah");
          }}
          onComplete={() => {
            setScreen("couple");
          }}
        />
      )}

      {/* SCREEN 4 — COUPLE + COUNTDOWN */}
      {screen === "couple" && (
        <CoupleReveal
          onBack={() => {
            setScreen("nikah-date");
          }}
          onComplete={() => {
            setScreen("final");
          }}
        />
      )}

      {/* SCREEN 5 — FINAL BLESSINGS */}
      {screen === "final" && (
        <FinalBlessings
          onBack={() => {
            setScreen("couple");
          }}
          onComplete={() => {
            // Stop music when the invitation is finished
            musicRef.current?.stopMusic();

            console.log("Wedding invitation completed");
          }}
        />
      )}

      {/* SLOW BLUR TRANSITION */}
      <div
        className={`pointer-events-none fixed inset-0 z-[200] bg-black/5 transition-all duration-[1800ms] ease-in-out ${
          transitioning
            ? "backdrop-blur-[18px] opacity-100"
            : "backdrop-blur-0 opacity-0"
        }`}
      />

      {/* MUSIC */}
      <MusicPlayer ref={musicRef} />
    </>
  );
}