"use client";
import { Love_Light } from "next/font/google";

const loveLight = Love_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  return (
    <section className="flex flex-col space-y-7 px-5">
      <h1 className="text-4xl font-bold text-center mt-8">A letter for you!</h1>
      <div className="p-6 bg-[#f3eedc] rounded-2xl shadow-2xl">
        <p className={`text-xl leading-relaxed ${loveLight.className}`}>
          <b>My Baby,</b>
        </p>
        <br />
        <p className={`text-xl leading-relaxed ${loveLight.className}`}>
          Thank you for being my person. I want to hold your hand through every
          season of life. You are my home, my comfort, and my safe place. I love
          you more than words can explain. Please never change who you are, and
          don’t ever feel sorry for being yourself. No one could ever replace
          you in my heart. You will always be my number one.
        </p>

        <br />
        <p className={`text-2xl leading-relaxed ${loveLight.className}`}>
          Forever yours.💝
        </p>
      </div>
    </section>
  );
};

export default Page;
