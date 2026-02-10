"use client";

import React, { useState } from "react";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    localStorage.setItem("quizResult", option);
  };

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <section className="px-5">
      <h1 className="text-4xl font-bold px-3 mt-4 mb-8">Quiz for you...</h1>
      <div className="bg-[#f09bcec2] my-3 flex flex-col items-center space-y-3 p-5 rounded-2xl backdrop-blur-3xl">
        <h3 className="text-xl font-semibold mt-5">
          Lorem ipsum dolor sit amet consecetur adipisicing elit
        </h3>
        <ul className="text-lg mt-5 w-full">
          {options.map((option) => (
            <li
              key={option}
              className={`mt-5 px-8 py-4 rounded-2xl text-white ${
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
