import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function TextAnimationTest() {
  const textRef = useRef(null);

  const text = "Welcome to my website";

  useGSAP(() => {
    const letters = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      {
        opacity: 1,
        y: 10,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        filter: "blur(0px)",
        ease: "power2.out",
      }
    );
  });

  return (
    <div style={{ fontSize: "3rem", fontWeight: "bold" }} ref={textRef}>
      {text.split("").map((char, index) => (
        <span key={index} className="whitespace-pre inline-block">
          {char}
        </span>
      ))}
    </div>
  );
}
