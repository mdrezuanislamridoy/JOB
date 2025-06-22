import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import useUserContext from "../../customHooks/useUserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const location = useLocation();
  const useUser = useUserContext();
  const links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
  ];

  const setPage = () => {
    setShowNav(false);
    setShowDropdown(false);
  };

  return (
    <div
      className={`h-auto md:h-20  text-white fixed top-0 w-full z-50 ${
        showNav ? "bg-slate-900/90" : "bg-transparent"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center h-full px-4 md:px-10 relative">
        <div className="logo w-full md:w-1/4 text-center md:text-left py-2 md:py-0">
          <h1 className="text-2xl md:text-4xl font-semibold">Dev Ridoy</h1>
        </div>
        <div className="block md:hidden absolute left-3 top-3">
          {!showNav ? (
            <button className="" onClick={() => setShowNav(true)}>
              <FontAwesomeIcon className="text-xl" icon={faBars} />
            </button>
          ) : (
            <button onClick={() => setShowNav(false)}>
              <FontAwesomeIcon icon={faClose} className="text-xl" />
            </button>
          )}
        </div>
        <div
          className={`nav_links flex-col md:flex-row py-4 md:py-0 w-full md:w-2/4 flex flex-wrap justify-center md:justify-between items-center gap-4 my-2 md:my-0 ${
            !showNav ? "hidden md:flex" : "flex"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              onClick={setPage}
              className={`cursor-pointer hover:text-slate-400 border-b-2 ${
                location.pathname === link.link
                  ? "border-slate-400 text-slate-400"
                  : "border-transparent"
              } hover:border-slate-400`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          className={`btn w-full md:w-1/4 flex justify-center md:justify-end py-4 md:py-0 ${
            !showNav ? "hidden md:flex" : "flex"
          }`}
        >
          <div>
            {useUser.user ? (
              <div>
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="bg-blue-950 px-4 py-2 rounded-md hover:bg-slate-800"
                  >
                    {useUser.user.name.split(" ")[0]}
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1">
                      <Link
                        to="/profile"
                        onClick={setPage}
                        className="block px-4 py-2 text-sm hover:bg-slate-700"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={() => {
                          useUser.logout();
                          setPage();
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-slate-700"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={setPage}
                className="bg-slate-700 px-4 py-2 rounded-md hover:bg-slate-800"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
