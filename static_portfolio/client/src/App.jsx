import React from "react";
import Homepage from "./pages/Home/Homepage";
import CustomCursor from "./components/styling/CustomCursor";
import Loading from "./components/styling/Loading";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter } from "react-router-dom";
import gsap from "gsap";

export default function App() {
  const [loading, setLoading] = React.useState(true);

  const tl = gsap.timeline();

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-screen h-screen cursor-none relative bg-slate-900">
      <BrowserRouter>
        <CustomCursor></CustomCursor>
        <Navbar tl={tl}></Navbar>
        <br />
        <br />
        <br />
        <Homepage />
      </BrowserRouter>
    </div>
  );
}
