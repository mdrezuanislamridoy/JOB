import React from "react";
import Hero from "./heroSection/Hero";
import Projects from "./Projects/Projects";

export default function Home() {
  return (
    <div className="relative z-10 ">
      <Hero />
      <Projects />
    </div>
  );
}
