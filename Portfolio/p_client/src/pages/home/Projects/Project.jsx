import { Link } from "react-router-dom";

export default function Project({ projects }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects &&
          projects.slice(0, 6).map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.projectImage}
                  alt={project.projectName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 ">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {project.projectName}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.projectDescription}
                </p>
                <Link
                  target="_black"
                  to={project.projectLink}
                  className=" block cursor-pointer"
                >
                  <button className="w-full bg-slate-600 hover:bg-slate-700 cursor-pointer text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
