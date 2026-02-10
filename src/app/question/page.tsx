import React from "react";

const Page = () => {
  return (
    <section className="px-5">
      <h1 className="text-4xl font-bold px-3 mt-4 mb-8">Quiz for you...</h1>
      <div className="bg-[#f09bcec2] my-3 flex flex-col items-center space-y-3 p-5 rounded-2xl backdrop-blur-3xl">
        <h3 className="text-xl font-semibold mt-5">
          Lorem ipsum dolor sit amet consecetur adipisicing elit
        </h3>
        <ul className="text-lg mt-5 w-full">
          <li className="bg-pink-600 mt-5 px-8 py-4 rounded-2xl text-white">Option 1</li>
          <li className="bg-pink-600 mt-5 px-8 py-4 rounded-2xl text-white">Option 2</li>
          <li className="bg-pink-600 mt-5 px-8 py-4 rounded-2xl text-white">Option 3</li>
          <li className="bg-pink-600 mt-5 px-8 py-4 rounded-2xl text-white">Option 4</li>
        </ul>
       </div>
    </section>
  );
};

export default Page;
