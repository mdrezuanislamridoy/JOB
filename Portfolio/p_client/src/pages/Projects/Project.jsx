import React from "react";
import { Link } from "react-router-dom";

export default function Project({ project, index }) {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <div className="space-y-4">
        <div key={index} className="border border-gray-700 p-4 rounded-md">
          <h1 className="text-2xl font-bold">{project.projectName}</h1>
          <p className="text-gray-400 mt-2">{project.projectDescription}</p>
          <div className="h-64 overflow-hidden flex justify-center items-center my-4">
            <img
              src={project.projectImage}
              alt={project.projectName}
              className="w-full h-auto object-cover mt-4 rounded-md"
            />
          </div>
          <Link to={project.projectLink} target="_blank">
            <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md">
              View Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
