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

  const musicRef = useRef<MusicPlayerHandle>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [screen]);

  return (
    <>
      {screen === "curtain" && (
        <InvitationCurtain
          onOpen={() => {
            // Start music when the guest opens the invitation
            musicRef.current?.startMusic();

            setScreen("bismillah");
          }}
        />
      )}

      {screen === "bismillah" && (
        <BismillahScreen
          onComplete={() => {
            setScreen("nikah-date");
          }}
        />
      )}

      {screen === "nikah-date" && (
        <NikahDateReveal
          onComplete={() => {
            setScreen("couple");
          }}
        />
      )}

      {screen === "couple" && (
        <CoupleReveal
          onComplete={() => {
            setScreen("final");
          }}
        />
      )}

      {screen === "final" && (
        <FinalBlessings
          onComplete={() => {
            // Stop and reset music when the invitation finishes
            musicRef.current?.stopMusic();

            console.log("Wedding invitation completed");
          }}
        />
      )}

      {/* Music stays mounted throughout the entire invitation */}
      <MusicPlayer ref={musicRef} />
    </>
  );
}