import { useEffect, useRef } from "react";
import myPhoto from "../../../assets/images/myPhoto.png";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const profileImg = useRef(null);
  const profileDetails = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(profileImg.current, {
      x: -500,
      duration: 0.4,
      opacity: 0,
    });
    tl.from(profileDetails.current, {
      x: 500,
      duration: 0.4,
      opacity: 0,
    });
  }, []);
  return (
    <div className="w-full xl:w-7xl m-auto text-cyan-200">
      <div
        ref={heroRef}
        className="flex flex-col justify-center md:justify-between md:flex-row gap-2 my-4 mx-2 "
      >
        <div
          ref={profileImg}
          className="w-[320px] rounded-full border-2  border-cyan-300 overflow-hidden"
        >
          <img src={myPhoto} className="scale-120" />
        </div>
        <div ref={profileDetails}></div>
      </div>
      <div></div>
    </div>
  );
}
