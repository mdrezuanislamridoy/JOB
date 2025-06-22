import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Projects", path: "/projects" },
    { id: 4, name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      navRef.current.querySelectorAll(".nav-link"),
      {
        opacity: 0,
        y: -20,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.in",
        filter: "blur(0)",
      }
    );
  }, []);

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 w-full md:max-w-7xl md:m-auto md:rounded-b-2xl z-50 bg-gray-800/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4" ref={navRef}>
        <div className="flex md:items-center justify-center md:justify-between items-start h-16 flex-col md:flex-row">
          <Link
            to="/"
            className="transform translate-y-[-30px] text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition nav-link"
          >
            <span className="text-indigo-500">R</span>
            <span className="text-blue-400">I</span>
            <span className="text-cyan-400">D</span>
            <span className="text-teal-400">O</span>
            <span className="text-emerald-400">Y</span>
          </Link>

          {/* Hamburger */}
          <div className="md:hidden absolute right-4 top-4 nav-link translate-y-[-30px]">
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-white text-2xl cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          {/* Desktop Links */}
          <div className="space-x-6 hidden md:flex flex-col md:flex-row">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`nav-link  translate-y-[-30px] text-gray-300 hover:text-gray-400 hover:border-b-2 hover:border-gray-400 transition ${
                  location.pathname === link.path
                    ? "text-gray-400 border-b-2 border-gray-400"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 absolute top-16 left-0 w-full shadow-lg backdrop-blur-3xl ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 mt-4 pb-4">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`nav-link text-gray-300 hover:text-gray-400 hover:border-b-2 hover:border-gray-400 transition px-2 py-1 ${
                  location.pathname === link.path
                    ? "text-gray-400 border-b-2 border-gray-400"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
