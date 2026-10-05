"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export type MusicPlayerHandle = {
  startMusic: () => void;
  stopMusic: () => void;
};

const MusicPlayer = forwardRef<MusicPlayerHandle>(function MusicPlayer(
  _props,
  ref
) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.35;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    startMusic: async () => {
      const audio = audioRef.current;

      if (!audio) return;

      try {
        await audio.play();
      } catch (error) {
        console.error("Music could not start:", error);
      }
    },

    stopMusic: () => {
      const audio = audioRef.current;

      if (!audio) return;

      audio.pause();
      audio.currentTime = 0;
    },
  }));

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error("Music could not start:", error);
      }
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/allah_hu_allah.mp3"
        preload="auto"
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="fixed bottom-5 right-5 z-[100] flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a96e]/40 bg-[#fffaf1]/90 text-[17px] text-[#526b7b] shadow-[0_10px_30px_rgba(80,95,105,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a96e]/60 hover:bg-[#fffaf1] active:scale-95"
      >
        {isPlaying ? "♫" : "♪"}
      </button>
    </>
  );
});

export default MusicPlayer;