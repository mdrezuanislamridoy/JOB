import useUserContext from "../../customHooks/useUserContext";
import AdminProfile from "./profiles/adminProfile/AdminProfile";
import UserProfile from "./profiles/userProfile/UserProfile";

export default function Profile() {
  const useUser = useUserContext();
  return (
    <div>
      {useUser.user.role === "admin" ? (
        <AdminProfile user={useUser.user} />
      ) : (
        <UserProfile user={useUser.user} />
      )}
    </div>
  );
}
