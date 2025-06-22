import React, { useEffect } from "react";

export default function CustomCursor() {
  const cuc = React.useRef(null);

  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    top: position.y,
    left: position.x,
    width: "80px",
    height: "80px",
    backgroundColor: "rgba(105, 205, 155, 0.5)",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    filter: "blur(20px)",
    zIndex: 9999,
    transition: "background-color 0.2s ease, transform 0.15s ease",
  };

  return <div ref={cuc} style={cursorStyle}></div>;
}
