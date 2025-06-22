import { useContext } from "react";
import { AuthContext } from "../context/UserProvider";

export default function useUserContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
