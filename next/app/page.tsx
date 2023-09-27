"use client";

import Anchor from "./ui/Anchor";

export default function Home() {
  return (
    <div className="h-screen bg-white">
      <div className="bg-emerald-900 bg-[url('/leaves-optimized.png')] bg-center bg-cover h-[50%] w-screen"></div>
      <div className="flex justify-center items-center flex-col p-12 xl:ml-60 xl:mr-60 md:ml-20 md:mr-20 ml-10 mr-10 -translate-y-[35%] backdrop-blur-xl shadow-lg text-white lg:text-7xl md:text-5xl text-3xl text-center rounded-3xl drop-shadow-lg">
        <h1>
          The best way to kudos{" "}
          <span className="text-emerald-500 block">someone you like!</span>
        </h1>

        <div className="mt-12 flex gap-4">
          <Anchor type="primary" href="/login">
            Get Started
          </Anchor>
          <Anchor type="secondary" href="/about">
            Learn More
          </Anchor>
        </div>
      </div>
    </div>
  );
}
