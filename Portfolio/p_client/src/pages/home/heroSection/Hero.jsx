import React, { useEffect, useRef } from "react";
import Resume from "@assets/files/MdRidoyBabuResume.pdf";
import myPhoto from "@assets/images/myPhoto.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import Typed from "typed.js";
import useUserContext from "@customHooks/useUserContext";
import Shape from "@assets/images/Shape.png";

export default function Hero() {
  const userCont = useUserContext();

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Ridoy Babu",
        "MERN Stack Developer",
        "Web Developer",
        "Java Programmer",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className=" container text-[#C9D1D9] min-h-screen flex items-center px-6 md:px-10 lg:px-20 py-10 m-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center w-full gap-10 lg:gap-0">
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-5 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-400">
            Hello!
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text">
            I'm{" "}
            <span
              ref={el}
              aria-hidden="true"
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-300"
            ></span>
            <span className="sr-only">Ridoy Babu</span>
          </h1>

          <p className="text-gray-400 text-sm/relaxed md:text-base/relaxed ">
            I am proficient in building interactive web applications using the
            MERN stack (MongoDB, Express.js, React, Node.js). I develop and
            design full-stack applications, from RESTful APIs and database
            schemas to responsive frontends and third-party integrations.
          </p>

          <div className="mt-6 z-30 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href={Resume}
              download
              className="px-6 py-3 bg-gray-800 text-gray-200 rounded-full hover:bg-gray-700 transition-colors border border-gray-600 text-center"
            >
              Resume <FontAwesomeIcon icon={faDownload} />
            </a>

            <div>
              <div className="relative mt-4">
                {!userCont.user && (
                  <FontAwesomeIcon
                    icon={faHandPointUp}
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-3xl text-gray-400 animate-bounce"
                  />
                )}

                <Link
                  to={
                    userCont.user
                      ? userCont.user.role !== "admin"
                        ? "/contact"
                        : ""
                      : "/signup"
                  }
                  className={`px-6 py-3 bg-slate-950 text-gray-200 rounded-full hover:bg-gray-800 transition-colors border border-gray-700 text-center ${
                    userCont.user?.role === "admin" ? "hidden" : ""
                  }`}
                >
                  {userCont.user
                    ? userCont.user.role !== "admin"
                      ? "Hire Me"
                      : ""
                    : "Join To Hire"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[80%] lg:h-[80%] rounded-full overflow-hidden ">
            <img
              src={myPhoto}
              loading="lazy"
              alt="Profile"
              className="w-full object-cover transition duration-300 grayscale-50 hover:grayscale-0 hover:scale-105 drop-shadow-[0_0_5px_gray] hover:drop-shadow-[0_0_10px_white]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
