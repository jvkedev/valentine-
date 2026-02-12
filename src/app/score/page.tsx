"use client";

import React, { useState } from "react";

const videos = [
  { video: "/videos/billie.mp4" },
  { video: "/videos/dudu_100.mp4" },
  { video: "/videos/dudu_infinite.mp4" },
];

const Page = () => {
  const [randomVideo] = useState(() => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    return videos[randomIndex];
  });

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Your Results</h1>

      <video
        src={randomVideo.video}
        autoPlay
        loop
        playsInline
        className="w-full max-w-md rounded-xl"
      />
    </div>
  );
};

export default Page;
