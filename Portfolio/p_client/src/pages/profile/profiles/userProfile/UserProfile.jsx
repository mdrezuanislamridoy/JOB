import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaEdit,
  FaTimes,
} from "react-icons/fa";
import useEditProfilePicture from "../profileContent/EditProfilePicture";
import EditUserProfile from "./EditUserProfile";

export default function UserProfile({ user }) {
  const [isEditing, setIsEditing] = useState(false);

  const {
    editImage,
    handleEditImageToggle,
    handleFileChange,
    imagePreview,
    handleImageUpload,
  } = useEditProfilePicture();

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-lg shadow-md">
        <div className="relative">
          <div className="h-48 bg-gray-700 rounded-t-lg"></div>
          <button
            onClick={() => setIsEditing(true)}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-600 hover:bg-gray-500 transition-colors"
          >
            <FaEdit className="w-5 h-5 text-gray-200" />
          </button>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="relative">
              <img
                src={imagePreview || "/default-avatar.png"}
                alt="Admin Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-600"
              />
              <button
                className="absolute bottom-0 right-0 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
                onClick={handleEditImageToggle}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
              {editImage && (
                <div className="absolute top-0 left-0 bg-gray-700 p-2 rounded-lg hover:bg-gray-600">
                  <input
                    type="file"
                    className="p-2 rounded-full bg-slate-800 text-white my-2 cursor-pointer"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <button
                    className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 cursor-pointer"
                    onClick={handleImageUpload}
                  >
                    Change Profile
                  </button>{" "}
                </div>
              )}
            </div>
          </div>
        </div>

        {isEditing ? (
          <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <EditUserProfile user={user} onClose={handleCloseEdit} />
            </div>
          </div>
        ) : (
          <div className="pt-20 pb-8 px-8">
            <h1 className="text-3xl font-bold text-center text-gray-100">
              {user.name}
            </h1>
            <p className="text-center text-gray-300 mt-2">{user.jobTitle}</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-300 w-5 h-5" />
                <span className="text-gray-300">{user.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-300 w-5 h-5" />
                <span className="text-gray-300">{user.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-gray-300 w-5 h-5" />
                <span className="text-gray-300">{user.location}</span>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                About Me
              </h2>
              <p className="text-gray-300 leading-relaxed">{user.about}</p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                Experience
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
