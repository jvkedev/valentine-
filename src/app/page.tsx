"use client";

import { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import dudu from "../../public/dudu.gif";
import dudu_walk from "../../public/dudu_walk.gif";
import dudu_sad from "../../public/dudu_sad.gif";
import dudu_weeping from "../../public/dudu_weeping.gif";
import dudu_cry from "../../public/dudu_cry.gif";
import cute_cat from "../../public/cute-cat.gif";
import dudu_love from "../../public/dudu_love.gif";

type Step = {
  image: StaticImageData;
  title: string;
  text: string;
  button?: {
    label: string;
    href: string;
  };
};

const noSteps: Step[] = [
  {
    image: dudu,
    title: "Will you be mine🥹?",
    text: "Life is an incredible journey, and I want to spend every single second of it with you.",
  },
  {
    image: dudu_walk,
    title: "Think again😭",
    text: "Are you really sure? Because my heart is already choosing you 💔",
  },
  {
    image: dudu_sad,
    title: "Are you sure😡?",
    text: "This decision is serious… someone here is getting emotionally attached 🥺",
  },
  {
    image: dudu_weeping,
    title: "Please wait😢🙏",
    text: "I promise endless laughs, care, and a whole lot of love 💕",
  },
  {
    image: dudu_cry,
    title: "Last Chance😭❤️",
    text: "Say yes, and I’ll make sure you never regret it 🌈",
  },
  {
    image: cute_cat,
    title: "See This🥱",
    text: "There's no other option",
  },
];

const yesSteps: Step[] = [
  {
    image: dudu_love,
    title: "Happy Valentine Day Baby!💍",
    text: "Every second with you is a celebration. You are the spark that makes my world so much brighter!",
    button: {
      label: "Fine...",
      href: "/surprise",
    },
  },
];

const Page = () => {
  const router = useRouter();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const [step, setStep] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);

  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

  const xRandom = gsap.utils.random(-200, 100, 10, true);
  const yRandom = gsap.utils.random(-300, 200, 10, true);

  const currentSteps = yesClicked ? yesSteps : noSteps;
  const currentStep = currentSteps[step];

  const handleNoClick = () => {
    if (step < noSteps.length - 1) {
      setStep((prev) => prev + 1);
    }
    setXValue(xRandom());
    setYValue(yRandom());
  };

  const handleYesClick = () => {
    setYesClicked(true);
    setStep(0);
  };

  useGSAP(
    () => {
      if (!btnRef.current) return;
      gsap.to(btnRef.current, {
        x: xValue,
        y: yValue,
        duration: 0.7,
        ease: "power2.out",
      });
    },
    { dependencies: [xValue, yValue] },
  );

  return (
    <section className="bg-[#d983b7] h-screen flex flex-col items-center space-y-5 pt-32 text-center">
      <Image
        src={currentStep.image}
        alt="cute"
        width={150}
        priority={yesClicked}
      />

      <h1 className="text-4xl font-bold px-3">{currentStep.title}</h1>

      <p className="px-5 text-xl font-sans">{currentStep.text}</p>

      {!yesClicked && (
        <div className="flex space-x-5 text-2xl text-white">
          <button
            onClick={handleYesClick}
            className="bg-red-600 rounded-3xl px-10 py-3"
          >
            YES
          </button>

          {step < noSteps.length - 1 && (
            <button
              ref={btnRef}
              className="bg-blue-600 rounded-3xl px-10 py-3"
              onClick={handleNoClick}
            >
              NO
            </button>
          )}
        </div>
      )}

      {/* Custom button for YES step */}
      {yesClicked && currentStep.button && (
        <button
          onClick={() => router.push(currentStep.button!.href)}
          className="bg-green-600 rounded-3xl px-12 py-4 text-2xl text-white mt-4"
        >
          {currentStep.button.label}
        </button>
      )}
    </section>
  );
};

export default Page;
