"use client";

import { useRouter } from "next/navigation";

type Card = {
  id: number;
  video: string;
  title: string;
  result: string;
};

const cards: Card[] = [
  {
    id: 1,
    video: "/videos/dudu_dare.mp4",
    title: "Tap me. I dare you",
    result: "result_1",
  },
  {
    id: 2,
    video: "/videos/dudu_showing.mp4",
    title: "I have something for you…",
    result: "result_2",
  },
  {
    id: 3,
    video: "/videos/dudu_made.mp4",
    title: "Um… I made this for you",
    result: "result_3",
  },
];

const Page = () => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push("/question");
  };

  return (
    <section className="h-screen flex flex-col items-center space-y-5 text-center">
      <h1 className="text-4xl font-bold px-3 mt-4">Something for you</h1>
      <div className="cards">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#ffd6e0] my-3 flex flex-col items-center space-y-3 p-5 rounded-2xl backdrop-blur-3xl"
            onClick={handleCardClick}
          >
            <video
              src={card.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-30"
              preload="auto"
            />
            <h3 className="text-xl">{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
