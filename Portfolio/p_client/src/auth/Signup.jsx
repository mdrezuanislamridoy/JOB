import React, { useState } from "react";
import AxiosInstance from "../APIs/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import useUserContext from "../customHooks/useUserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
  faUser,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

export default function SignUp() {
  const useUser = useUserContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const Signup = async () => {
      setError("");
      setMessage("");

      if (!email || !password || !name) {
        setError("Please fill in all fields");
        return;
      }

      try {
        const res = await AxiosInstance.post("/auth/signup", {
          name,
          email,
          password,
          role: "user",
        });

        console.log("Signup response:", res.data);
        setMessage(res.data.message);
        setError("");

        useUser.setUser(res.data.user);
        navigate("/");
      } catch (error) {
        console.log("Signup error:", error);
        setMessage("");
        setError(error.response.data.message);
      }
    };

    Signup();
  };

  return (
    <div className=" flex h-screen w-screen items-center justify-center">
      <div className="card w-96 bg-gray-800/70 shadow-2xl rounded-lg">
        <div className="card-body p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Sign Up
          </h2>
          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="text-red-500 h-5 w-5"
                />
                <span className="text-red-500 font-semibold">{error}</span>
              </div>
            </div>
          )}
          {message && (
            <div className="bg-green-500/10 border border-green-500 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-green-500 h-5 w-5"
                />
                <span className="text-green-500 font-semibold">{message}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Name
              </label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="relative">
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Email
              </label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="relative">
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Password
              </label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faLock}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
              Sign Up
            </button>
          </form>
          <div className="mt-6 space-y-4">
            <button className="w-full text-gray-400 hover:text-white text-sm font-medium transition duration-200">
              Forgot password?
            </button>
            <div className="border-t border-gray-700"></div>
            <Link
              to="/login"
              className="block text-center text-gray-400 hover:text-white text-sm font-medium transition duration-200"
            >
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
