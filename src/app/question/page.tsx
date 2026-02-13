"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    router.push("/love");
  };

  const options = [
    "On Mars",
    "In your heart",
    "In our memories",
    "Both B and C",
  ];

  return (
    <section className="px-5-">
      <h1 className="text-4xl font-bold px-3 mt-4 mb-8">Quiz for you...</h1>
      <div className="bg-[#f1eeee50] my-3 flex flex-col items-center space-y-3 p-5 rounded-2xl backdrop-blur-3xl">
        <h3 className="text-xl font-semibold mt-5">
          {`Where do i plan to spend the rest of my life?`}
        </h3>
        <ul className="text-lg mt-5 w-full">
          {options.map((option) => (
            <li
              key={option}
              className={`mt-5 px-8 py-4 rounded-2xl text-white text-center ${
                selectedOption === option ? "bg-pink-800" : "bg-pink-600"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
