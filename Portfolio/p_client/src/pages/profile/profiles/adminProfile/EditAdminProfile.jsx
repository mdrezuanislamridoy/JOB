import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../APIs/axiosInstance";
import useUserContext from "../../../../customHooks/useUserContext";

export default function EditAdminProfile({ user, handleEditToggle }) {
  const useUser = useUserContext();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/update", formData);
      if (response.status === 200) {
        alert("Profile updated successfully!");
        useUser.setUser(response.data.user);
      }
      useUser.setUser;
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
    handleEditToggle();
  };
  return (
    <div>
      <div className="bg-gray-700 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={formData?.name}
              className="w-full bg-gray-800 rounded-lg p-3 text-white"
              onChange={handleChange}
              name="name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="text"
              defaultValue={formData?.phone}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded-lg p-3 text-white"
              name="phone"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              defaultValue={formData?.address}
              onChange={handleChange}
              className="w-full bg-gray-800 rounded-lg p-3 text-white"
              name="address"
            />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={handleEditToggle}
              className="bg-gray-600 hover:bg-gray-500 px-6 py-2 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
