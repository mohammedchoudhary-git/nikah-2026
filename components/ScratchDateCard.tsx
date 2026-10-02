"use client";

import { useEffect, useRef, useState } from "react";

type ScratchDateCardProps = {
  date: string;
  onComplete: () => void;
};

export default function ScratchDateCard({
  date,
  onComplete,
}: ScratchDateCardProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isDrawing = useRef(false);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const [revealed, setRevealed] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!popupOpen) return;

    transitionTimerRef.current = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, [popupOpen, onComplete]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const card = cardRef.current;

    if (!canvas || !card) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const setupCanvas = () => {
      const rect = card.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      /*
       * Scratch surface
       */
      const gradient = ctx.createLinearGradient(
        0,
        0,
        rect.width,
        rect.height
      );

      gradient.addColorStop(0, "#c9a45b");
      gradient.addColorStop(0.5, "#e2c47f");
      gradient.addColorStop(1, "#c9a45b");

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      /*
       * Scratch surface text
       */
      ctx.fillStyle = "#fff8e8";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.font = "600 13px serif";

      ctx.fillText(
        "SCRATCH TO REVEAL",
        rect.width / 2,
        rect.height / 2 - 14
      );

      ctx.font = "24px serif";

      ctx.fillText(
        "✦  ♡  ✦",
        rect.width / 2,
        rect.height / 2 + 17
      );
    };

    setupCanvas();

    window.addEventListener("resize", setupCanvas);

    return () => {
      window.removeEventListener("resize", setupCanvas);
    };
  }, []);

  /*
   * Scratch the surface
   */
  const scratch = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;

    if (!canvas || revealed) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    /*
     * Erase the gold surface
     */
    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();

    /*
     * Add a slightly softer scratch trail
     */
    ctx.beginPath();
    ctx.arc(x, y, 34, 0, Math.PI * 2);
    ctx.globalAlpha = 0.15;
    ctx.fill();

    ctx.globalAlpha = 1;

    calculateScratchProgress();
  };

  /*
   * Calculate how much of the card has been scratched
   */
  const calculateScratchProgress = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const imageData = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    );

    let transparentPixels = 0;
    let checkedPixels = 0;

    /*
     * Check every 4th pixel for performance.
     */
    for (let i = 3; i < imageData.data.length; i += 16) {
      checkedPixels++;

      if (imageData.data[i] < 80) {
        transparentPixels++;
      }
    }

    if (checkedPixels === 0) return;

    const percentage = Math.round(
      (transparentPixels / checkedPixels) * 100
    );

    const safePercentage = Math.min(100, percentage);

    setProgress(safePercentage);

    /*
     * Reveal after approximately 48% is scratched
     */
    if (safePercentage >= 48) {
      setRevealed(true);
      setPopupOpen(true);
    }
  };

  /*
   * Pointer starts scratching
   */
  const handlePointerDown = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    if (revealed) return;

    isDrawing.current = true;

    event.currentTarget.setPointerCapture(event.pointerId);

    scratch(event);
  };

  /*
   * Pointer moves while scratching
   */
  const handlePointerMove = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    if (!isDrawing.current || revealed) return;

    scratch(event);
  };

  /*
   * Pointer finishes
   */
  const handlePointerUp = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    isDrawing.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  /*
   * Pointer leaves / gets cancelled
   */
  const handlePointerCancel = () => {
    isDrawing.current = false;
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-sm">
      {/* Scratch card container */}
      <div
        className={`rounded-3xl border border-[#b58d45]/25 bg-white/50 p-6 shadow-[0_20px_60px_rgba(91,70,30,0.08)] backdrop-blur-sm transition-all duration-700 ${
          revealed
            ? "scale-[0.97] opacity-80"
            : "scale-100 opacity-100"
        }`}
      >
        {/* Card heading */}
        <p className="font-serif text-xs font-medium uppercase tracking-[0.25em] text-[#a28b60]">
          A little secret
        </p>

        <p className="mt-3 font-serif text-xl text-[#173f35]">
          Scratch to reveal our date
        </p>

        {/* Scratch area */}
        <div
          ref={cardRef}
          className="relative mt-5 h-24 overflow-hidden rounded-2xl border border-[#d9b86b]/40 bg-[#fffaf0]"
        >
          {/* Date hidden underneath */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-serif text-[10px] uppercase tracking-[0.3em] text-[#a28b60]">
              Our Nikah
            </p>

            <p className="mt-1 font-serif text-2xl text-[#173f35]">
              {date}
            </p>
          </div>

          {/* Actual scratch canvas */}
          {!revealed && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full touch-none select-none"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
            />
          )}
        </div>

        {/* Instruction */}
        {!revealed && (
          <div className="mt-4">
            <p className="font-serif text-sm italic text-[#8c7350]">
              Our special date awaits you...
            </p>

            {/* Progress indicator */}
            <div className="mx-auto mt-3 h-1 w-24 overflow-hidden rounded-full bg-[#d9b86b]/15">
              <div
                className="h-full rounded-full bg-[#c6a15b] transition-all duration-200"
                style={{
                  width: `${Math.min(progress * 2, 100)}%`,
                }}
              />
            </div>

            <p className="mt-2 font-serif text-[10px] uppercase tracking-[0.2em] text-[#a28b60]/70">
              Keep scratching ✨
            </p>
          </div>
        )}

        {/* After scratch */}
        {revealed && (
          <div className="mt-4">
            <p className="font-serif text-sm italic text-[#8c7350]">
              ✦ Our special day ✦
            </p>
          </div>
        )}
      </div>

      {/* Date reveal popup */}
      {popupOpen && (
        <div className="animate-date-popup fixed inset-0 z-50 flex items-center justify-center bg-[#173f35]/35 px-6 backdrop-blur-sm">
          <div className="animate-date-card relative w-full max-w-sm rounded-[2rem] border border-[#d9b86b]/50 bg-[#fffaf0] px-8 py-10 text-center shadow-[0_30px_100px_rgba(23,63,53,0.25)]">
            {/* Decorative corners */}
            <span className="absolute left-5 top-5 font-serif text-sm text-[#c6a15b]">
              ✦
            </span>

            <span className="absolute right-5 top-5 font-serif text-sm text-[#c6a15b]">
              ✦
            </span>

            <span className="absolute bottom-5 left-5 font-serif text-sm text-[#c6a15b]">
              ✦
            </span>

            <span className="absolute bottom-5 right-5 font-serif text-sm text-[#c6a15b]">
              ✦
            </span>

            {/* Heading */}
            <p className="font-serif text-xs uppercase tracking-[0.35em] text-[#a28b60]">
              The date is revealed
            </p>

            {/* Heart divider */}
            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#c6a15b]/40" />

              <span className="animate-popup-heart font-serif text-xl text-[#d98f9a]">
                ♥
              </span>

              <span className="h-px w-10 bg-[#c6a15b]/40" />
            </div>

            {/* Date */}
            <p className="mt-6 font-serif text-4xl text-[#173f35] sm:text-5xl">
              {date}
            </p>

            {/* Message */}
            <p className="mt-4 font-serif text-base italic text-[#7b756a]">
              A day we will remember forever.
            </p>

            {/* Bottom decoration */}
            <div className="mt-7 font-serif text-xl text-[#c6a15b]">
              ✦ ♡ ✦
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes date-popup {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }

        @keyframes date-card {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.85) rotateX(12deg);
          }

          60% {
            opacity: 1;
            transform: translateY(-5px) scale(1.02) rotateX(0deg);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
          }
        }

        @keyframes popup-heart {
          0% {
            transform: scale(1);
          }

          30% {
            transform: scale(1.3);
          }

          60% {
            transform: scale(0.95);
          }

          100% {
            transform: scale(1);
          }
        }

        .animate-date-popup {
          animation: date-popup 500ms ease-out forwards;
        }

        .animate-date-card {
          animation: date-card 700ms cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .animate-popup-heart {
          animation: popup-heart 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}