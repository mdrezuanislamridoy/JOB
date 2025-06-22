import React, { useState } from "react";
import axiosInstance from "../../../../../APIs/axiosInstance";

export default function AddProject({ setAddingPost }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    projectLink: "",
    duration: "",
    projectImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "projectImage") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("projectName", formData.projectName);
    data.append("projectDescription", formData.projectDescription);
    data.append("projectLink", formData.projectLink);
    data.append("duration", formData.duration);
    if (formData.projectImage) {
      data.append("projectImage", formData.projectImage);
    }

    try {
      const response = await axiosInstance.post("/project/addProject", data);
      console.log("Project added successfully:", response.data);
      setAddingPost(false);
      formData.projectName = "";
      formData.projectDescription = "";
      formData.duration = "";
      formData.projectLink = "";
      formData.projectImage = null;
    } catch (error) {
      console.error("Error adding project:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="projectName"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Project Title:
          </label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            placeholder="Enter your title here"
            value={formData.projectName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="projectDescription"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Project Description:
          </label>
          <input
            type="text"
            name="projectDescription"
            id="projectDescription"
            placeholder="Enter your desc here"
            value={formData.projectDescription}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="projectLink"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Project Link:
          </label>
          <input
            type="text"
            name="projectLink"
            id="projectLink"
            placeholder="Enter your project link here"
            value={formData.projectLink}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Project Duration:
          </label>
          <input
            type="text"
            name="duration"
            id="duration"
            placeholder="Enter your project duration here"
            value={formData.duration}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="projectImage"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Project Image:
          </label>
          <input
            type="file"
            accept="image/*"
            name="projectImage"
            id="projectImage"
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-gray-200 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? "Adding..." : "Add Project"}
        </button>
      </form>
    </div>
  );
}
