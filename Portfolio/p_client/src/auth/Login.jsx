import React, { useState } from "react";
import AxiosInstance from "../APIs/axiosInstance";
import useUserContext from "../customHooks/useUserContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faCircleExclamation,
  faCircleCheck,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const useUser = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await AxiosInstance.post("/auth/login", {
        email,
        password,
      });

      setMessage(res.data.message);
      setError("");
      useUser.setUser(res.data.user);
      navigate("/");
    } catch (error) {
      setMessage("");
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800/70 p-8 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>
        {error && (
          <div className="bg-red-900/50 border border-red-600 text-red-200 px-4 py-3 rounded relative">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className="w-5 h-5 mr-2"
              />
              <span className="font-medium">{error}</span>
            </div>
          </div>
        )}
        {message && (
          <div className="bg-green-900/50 border border-green-600 text-green-200 px-4 py-3 rounded relative">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCircleCheck} className="w-5 h-5 mr-2" />
              <span className="font-medium">{message}</span>
            </div>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-5 w-5 text-gray-400"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 pl-10 border border-gray-600 placeholder-gray-400 bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="h-5 w-5 text-gray-400"
                  />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 pl-10 border border-gray-600 placeholder-gray-400 bg-gray-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className="h-5 w-5 text-indigo-400 group-hover:text-indigo-300"
                />
              </span>
              Sign in
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-indigo-400 hover:text-indigo-300"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="text-sm">
              <Link
                to="/signup"
                className="font-medium text-indigo-400 hover:text-indigo-300"
              >
                Create new account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
