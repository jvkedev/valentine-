"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

import dudu_dare from "../../../public/dudu_dare.gif";
import dudu_showing from "../../../public/dudu_showing.gif";
import dudu_made from "../../../public/dudu_made.gif";

type Card = {
  id: number;
  image: StaticImageData;
  title: string;
  result: string;
};

const cards: Card[] = [
  {
    id: 1,
    image: dudu_dare,
    title: "Tap me. I dare you",
    result: "result_1",
  },
  {
    id: 2,
    image: dudu_showing,
    title: "I have something for you…",
    result: "result_2",
  },
  {
    id: 3,
    image: dudu_made,
    title: "Um… I made this for you",
    result: "result_3",
  },
];

const Page = () => {
  const router = useRouter();

  const handleCardClick = (card: Card) => {
    localStorage.setItem("SelectedCard", JSON.stringify(card));
    router.push("/question");
  };

  return (
    <section className="h-screen flex flex-col items-center space-y-5 text-center">
      <h1 className="text-4xl font-bold px-3 mt-4">Something for you</h1>
      <div className="cards">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#f09bcec2] my-3 flex flex-col items-center space-y-3 p-5 rounded-2xl backdrop-blur-3xl"
            onClick={() => handleCardClick(card)}
          >
            <Image src={card.image} alt={card.title} width={120} />
            <h3 className="text-xl">{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
