import { createContext, useEffect, useState } from "react";
import React from "react";
import axiosInstance from "../APIs/axiosInstance";
export const AuthContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await axiosInstance.get("/auth/me");
        setUser(response.data.user);
      } catch (error) {
        setError(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    userData();
  }, []);

  const logout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      setUser(null);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        error,
        setError,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
