"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import gift from "../../public/gift.svg";

type Step = {
  video: string;
  title: string;
  text: string;
  button?: {
    label: string;
    href: string;
  };
};

const noSteps: Step[] = [
  {
    video: "/videos/dudu.mp4",
    title: "Will you be mine🥹?",
    text: "Life is an incredible journey, and I want to spend every single second of it with you.",
  },
  {
    video: "/videos/dudu_walk.mp4",
    title: "Think again😭",
    text: "Are you really sure? Because my heart is already choosing you 💔",
  },
  {
    video: "/videos/dudu_sad.mp4",
    title: "Are you sure😡?",
    text: "This decision is serious… someone here is getting emotionally attached 🥺",
  },
  {
    video: "/videos/dudu_weeping.mp4",
    title: "Please wait😢🙏",
    text: "I promise endless laughs, care, and a whole lot of love 💕",
  },
  {
    video: "/videos/dudu_cry.mp4",
    title: "Last Chance😭❤️",
    text: "Say yes, and I’ll make sure you never regret it 🌈",
  },
  {
    video: "/videos/cute_cat.mp4",
    title: "See This🥱",
    text: "There's no other option",
  },
];

const yesSteps: Step[] = [
  {
    video: "/videos/dudu_love.mp4",
    title: "Happy Valentine Day Baby!💍",
    text: "Every second with you is a celebration. You are the spark that makes my world so much brighter!",
    button: {
      label: "SEE MY GIFTS",
      href: "/card",
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
    <section className="h-screen flex flex-col items-center space-y-5 pt-32 text-center">
      <video
        src={currentStep.video}
        autoPlay
        loop
        muted
        playsInline
        className="w-37.5 h-auto"
        preload="auto"
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
          className="bg-[#F72585] rounded-3xl px-12 py-4 text-2xl text-white mt-4 flex gap-3"
        >
          {currentStep.button.label}
          <Image src={gift} alt={gift} />
        </button>
      )}
    </section>
  );
};

export default Page;
