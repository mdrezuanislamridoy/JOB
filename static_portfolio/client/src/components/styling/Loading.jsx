import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Loading() {
  const loadingView = useRef(null);

  const text = "Dev_Ridoy";

  useEffect(() => {
    const letters = loadingView.current.querySelectorAll("span");

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.fromTo(
      letters,
      {
        opacity: 0,
        y: 10,
        filter: "blur(4px)",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.2,
        filter: "blur(0)",
        ease: "power2.out",
      }
    ).to(letters, {
      opacity: 0,
      y: -10,
      filter: "blur(4px)",
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.in",
    });
  }, []);

  return (
    <h1
      ref={loadingView}
      className="text-white text-9xl font-bold text-center flex items-center min-h-screen w-full bg-slate-950  justify-center "
    >
      {text.split("").map((letter, index) => (
        <span key={index} className="inline-block whitespace-pre">
          {letter}
        </span>
      ))}
    </h1>
  );
}
