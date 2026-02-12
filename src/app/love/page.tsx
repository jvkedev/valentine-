"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoveBar() {
  const router = useRouter();

  const [loveScore, setLoveScore] = useState<number | "infinite" | null>(() => {
    if (typeof window === "undefined") return null;

    const stored = localStorage.getItem("loveScore");
    if (!stored) return null;

    return stored === "infinite" ? "infinite" : Number(stored);
  });

  const checked = loveScore !== null;

  const generateLove = () => {
    if (checked) return;

    const isInfinite = Math.random() < 0.5;
    const result = isInfinite
      ? "infinite"
      : Math.floor(Math.random() * 31) + 70;
    setLoveScore(result);
  };

  const getMessage = (score: number | "infinite") => {
    if (score === "infinite") {
      return {
        message: "This love is limitless",
        video: "/videos/dudu_infinite.mp4",
      };
    }
    if (score === 100) {
      return {
        message: "Perfect love",
        video: "/videos/dudu_100.mp4",
      };
    }

    return {
      message: "Almost perfect love",
      video: "/videos/dudu_90.mp4",
    };
  };

  return (
    <section className="flex flex-col items-center gap-6 p-6">
      <h1 className="text-4xl font-bold text-center">How much you love me?</h1>
      {!checked && (
        <>
          <video
            src="/videos/dudu_test.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            width={180}
          />
          <button
            onClick={generateLove}
            className="bg-pink-600 text-white px-6 py-3 rounded-xl"
          >
            Test Our Love %
          </button>
        </>
      )}

      {loveScore !== null &&
        (() => {
          const result = getMessage(loveScore);

          return (
            <>
              <video
                src={result.video}
                autoPlay
                muted
                loop
                playsInline
                width={200}
              />
              <p className="text-2xl font-semibold text-center">
                {result.message}
              </p>
              <div className="w-72 bg-gray-300 rounded-full h-10 overflow-hidden">
                {loveScore === "infinite" ? (
                  <div className="h-full bg-red-600 flex items-center justify-center text-white font-bold">
                    ∞ Love
                  </div>
                ) : (
                  <div
                    className="h-full bg-red-500 flex items-center justify-center text-white font-bold transition-all duration-500"
                    style={{ width: `${loveScore}%` }}
                  >
                    {loveScore}%
                  </div>
                )}
              </div>
            </>
          );
        })()}

      {checked && (
        <>
          <button
            onClick={() => router.push("/result")}
            className="text-xl bg-[#D81B60] text-white px-18 py-3 rounded-2xl"
          >
            Ti amo
          </button>
          <p className="text-[20px] text-center font-mono font-bold">
            <i>See what you wanna see, but all i see is you right now</i>
          </p>
        </>
      )}
    </section>
  );
}
