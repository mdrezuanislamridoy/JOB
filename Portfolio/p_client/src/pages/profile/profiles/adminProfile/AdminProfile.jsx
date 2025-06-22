import React, { useState } from "react";
import AddProject from "./projectSection/AddProject";
import EditAdminProfile from "./EditAdminProfile";
import useEditProfilePicture from "../profileContent/EditProfilePicture";

export default function AdminProfile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [addPost, setAddingPost] = useState(false);
  const {
    editImage,
    handleEditImageToggle,
    handleFileChange,
    imagePreview,
    handleImageUpload,
  } = useEditProfilePicture();

  const handleEditToggle = async () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800/50 rounded-xl shadow-2xl p-10">
          <div className="flex items-center space-x-8 mb-10">
            <div className="relative">
              <img
                src={imagePreview || "/default-avatar.png"}
                alt="Admin Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-600 shadow-lg"
              />
              <button
                className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition-all shadow-md"
                onClick={handleEditImageToggle}
              >
                <svg
                  className="w-5 h-5 text-white"
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
                <div className="absolute top-0 left-0 bg-gray-700 p-4 rounded-lg shadow-lg">
                  <input
                    type="file"
                    className="p-2 rounded-lg bg-gray-800 text-white my-2 cursor-pointer w-full"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <button
                    className="bg-blue-600 p-2 rounded-lg hover:bg-blue-500 w-full text-white transition-all"
                    onClick={handleImageUpload}
                  >
                    Change Profile
                  </button>
                </div>
              )}
            </div>
            <div className="flex justify-between items-start flex-1">
              <div>
                <h1 className="text-4xl font-bold text-blue-400">
                  {user?.name || "Admin Name"}
                </h1>
                <p className="text-gray-400 text-lg">Software Developer</p>
                <div className="flex items-center mt-3 space-x-4">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm shadow-md">
                    ADMIN
                  </span>
                  <span className="bg-green-600 px-3 py-1 rounded-full text-sm shadow-md">
                    Active
                  </span>
                </div>
              </div>
              <button
                onClick={handleEditToggle}
                className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors shadow-md"
              >
                {isEditing ? (
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {isEditing ? (
            <EditAdminProfile
              user={user}
              setIsEditing={setIsEditing}
              handleEditToggle={handleEditToggle}
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gray-700 rounded-xl p-8 mb-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 text-blue-400">
                    Overview
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-gray-400 text-sm mb-2">
                        Total Users
                      </h3>
                      <p className="text-3xl font-bold text-white">1,234</p>
                      <span className="text-green-500 text-sm">
                        +12% from last month
                      </span>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-gray-400 text-sm mb-2">
                        System Uptime
                      </h3>
                      <p className="text-3xl font-bold text-white">99.9%</p>
                      <span className="text-blue-500 text-sm">
                        Last 30 days
                      </span>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-gray-400 text-sm mb-2">
                        Active Projects
                      </h3>
                      <p className="text-3xl font-bold text-white">45</p>
                      <span className="text-yellow-500 text-sm">
                        In progress
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 text-blue-400">
                    Recent Activity
                  </h2>
                  <div className="space-y-6">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md"
                      >
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">
                            System Update Completed
                          </h3>
                          <p className="text-gray-400 text-sm">2 hours ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-700 rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 text-blue-400">
                    Personal Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-400 text-sm">Email</label>
                      <p className="font-medium text-white">
                        {user?.email || "admin@example.com"}
                      </p>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Role</label>
                      <p className="font-medium text-white">
                        {user?.role || "Super Admin"}
                      </p>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Join Date</label>
                      <p className="font-medium text-white">
                        {user?.joinedAt
                          ? new Date(user.joinedAt).toLocaleDateString(
                              "en-US",
                              { month: "long", day: "numeric", year: "numeric" }
                            )
                          : "January 1, 2023"}
                      </p>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Phone</label>
                      <p className="font-medium text-white">
                        {user?.phone || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Location</label>
                      <p className="font-medium text-white">
                        {user?.location || "Not specified"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 text-blue-400">
                    Quick Actions
                  </h2>
                  <div className="space-y-3">
                    <button className="w-full bg-gray-800 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition duration-200 flex items-center justify-between shadow-md">
                      System Settings
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                    <button className="w-full bg-gray-800 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition duration-200 flex items-center justify-between shadow-md">
                      User Management
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                    <button className="w-full bg-gray-800 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition duration-200 flex items-center justify-between shadow-md">
                      View Logs
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" my-4">
        <div className="w-48 mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Add Project</h2>
          <button
            onClick={() => setAddingPost(!addPost)}
            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all shadow-md "
          >
            {addPost ? "Cancel" : "Add a New Project"}
          </button>
        </div>
        <div className="mt-4">
          {addPost ? (
            <AddProject addPost={addPost} setAddingPost={setAddingPost} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
