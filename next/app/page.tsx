"use client";

import Anchor from "./ui/Anchor";

export default function Home() {
  return (
    <div className="h-screen bg-white">
      <div className="bg-[url('/leaves.jpg')] bg-center bg-cover h-[50%] w-screen"></div>
      <div className="flex justify-center items-center flex-col p-12 xl:ml-60 xl:mr-60 md:ml-20 md:mr-20 ml-10 mr-10 -translate-y-2/4 backdrop-blur-xl shadow-lg text-white lg:text-7xl md:text-5xl text-3xl text-center rounded-3xl">
        <h1>
          The best way to kudos{" "}
          <span className="text-red-500 block">someone you like!</span>
        </h1>

        <div className="mt-12 flex gap-4">
          <Anchor type="primary" label="Get Started" />
          <Anchor type="secondary" label="Learn More" />
        </div>
      </div>
    </div>
  );
}
