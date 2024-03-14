import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div>
      <main className="flex flex-col justify-center w-full m-auto mt-14 max-w-13xl">
        <div>
          <h1 className="p-4 text-xl font-semibold text-primaryOrange sm:text-2xl md:text-3xl sm:pb-10 text-center">
            Skills
          </h1>
        </div>
        <main className="flex flex-row flex-wrap w-11/12 sm:w-9/12 gap-4 m-auto">
          <Marquee
            autoFill
            pauseOnHover
            gradient
            gradientColor="#0e100f"
            speed={30}
          >
            <div className="bg-primaryBlackCard m-1 rounded-xl p-4 cursor-pointer">
              <Image
                src="/html.svg"
                alt="Html"
                width={50}
                height={50}
              />
            </div>
            <div className="bg-primaryBlackCard m-1 rounded-xl p-4 cursor-pointer">
              <Image
                src="/css.svg"
                alt="Css"
                width={50}
                height={50}
              />
            </div>
            <div className="bg-primaryBlackCard m-1 rounded-xl p-4 cursor-pointer">
              <Image
                src="/javascript.svg"
                alt="Html"
                width={50}
                height={50}
              />
            </div>
            <div className="bg-primaryBlackCard m-1 rounded-xl p-4 cursor-pointer">
              <Image
                src="/javascript.svg"
                alt="Html"
                width={50}
                height={50}
              />
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
              HTML
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
              JAVASCRIPT
            </div>
          </Marquee>
          <Marquee
            autoFill
            pauseOnHover
            direction="right"
            speed={30}
          >
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
              TailWindCSS
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
              Next
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
              React
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
              Java
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
              HTML
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
              JAVASCRIPT
            </div>
          </Marquee>
        </main>
      </main>
    </div>
  );
};

export default Skills;
