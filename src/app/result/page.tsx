import { Love_Light } from "next/font/google";

const loveLight = Love_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  return (
    <section className="flex flex-col space-y-4 px-5">
      <h1 className="text-4xl font-bold text-center mt-5">A letter for you!</h1>
      <div className="p-6 bg-[#f3eedc] rounded-2xl shadow-2xl">
        <p className={`text-xl leading-relaxed ${loveLight.className}`}>
          <b>My Baby,</b>
        </p>
        <br />
        <p className={`text-xl leading-relaxed ${loveLight.className}`}>
          Thank you for being my person. I want to hold your hand through every
          season of life. You are my home. You are my everything, and i love you
          so so much. Be the same as you are and no sorry for irritating you. No
          one can replace you from my heart, you are always be my no.1 .
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
