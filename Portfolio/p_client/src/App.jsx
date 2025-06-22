import React from "react";
import "./customStyling/fixedColors.css";
import Home from "./pages/home/Home";
import Navbar from "./components/header/Navbar";
import StarsCanvas from "./components/ui/Background";
import useUserContext from "./customHooks/useUserContext";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/Signup";
import PageNotFound from "./components/ErrorPages/PageNotFound";
import Profile from "./pages/profile/Profile";
import Projects from "./pages/Projects/Projects";

export default function App() {
  const useUser = useUserContext();

  return (
    <div className="background paragraphText">
      <StarsCanvas />
      <div className="relative z-20">
        <Navbar />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {useUser.user ? (
            <Route path="/profile" element={<Profile />} />
          ) : null}
          {!useUser.isLoggedIn ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Home />} />
            </>
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}
