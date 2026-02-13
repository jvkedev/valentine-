"use client";
import { Love_Light, Playfair_Display } from "next/font/google";

const loveLight = Love_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "700"],
});


const Page = () => {
  return (
    <section className="flex flex-col space-y-7 px-5">
      <div className="p-6 bg-[#f3eedc] rounded-2xl shadow-2xl mt-10">
        <h1
          className={`text-4xl font-bold text-center mb-8 ${playfair.className}`}
        >
          Just for You
        </h1>

        <p className={`text-xl leading-relaxed ${loveLight.className}`}>
          <b>My Baby,</b>
        </p>
        <br />
        <p className={`text-xl leading-relaxed ${loveLight.className}`}>
          <i>
            I have to admit it, I need you more than I can explain. Say you love
            me. Say it softly when you’re close, when your touch says more than
            words ever could. Some things in this world can’t be bought, and
            what I feel for you is one of them.
          </i>
        </p>
        <br />
        <p className={`text-xl leading-relaxed ${loveLight.className}`}>
          <i>
            You’re the light that finds me even in the crowd, the spotlight that
            makes my world shine. My love for you isn’t shallow or fleeting. It
            runs deeper than the ocean and stronger with every heartbeat.
          </i>
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
