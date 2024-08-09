"use client";
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
  return (
    <div className="text-4xl md:text-6xl font-bold text-gray-900 h-36">
      <Typewriter
        options={{
          strings: ["Frontend Software Engineer"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
