"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const videos = [
  { video: "/videos/dudu_rose.mp4" },
  { video: "/videos/dudu_reject.mp4" },
  { video: "/videos/dudu_100.mp4" },
  { video: "/videos/dudu_infinite.mp4" },
  { video: "/videos/dudu_poop.mp4" },
];

const text = [
  {
    text: "There’s nothing left without my baby. I’ll love you till the light leaves my eyes. So don’t say you wanna quit.",
  },
  { text: "" },
  // { text: "test_3" },
];

const Page = () => {
  const router = useRouter();

  const [randomVideo] = useState(() => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    return videos[randomIndex];
  });

  const [randomText] = useState(() => {
    const randomIndex = Math.floor(Math.random() * text.length);
    return text[randomIndex];
  });

  return (
    <section className="flex flex-col space-y-7 px-5 mt-10">
      <div className="p-6 bg-[#f3eedc] rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-7 ml-2">Your Gift :)</h1>

        <video
          src={randomVideo.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-md rounded-xl"
        />
        <p className="text-xl font-bold font-mono mt-5">{randomText.text}</p>
      </div>

      <button
        className="text-xl bg-[#D81B60] text-white px-18 py-3 rounded-2xl"
        onClick={() => router.push("/question")}
      >
        Take My Love Quiz
      </button>
    </section>
  );
};

export default Page;
