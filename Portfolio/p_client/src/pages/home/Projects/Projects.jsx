import Project from "./Project";
import useProject from "../../../customHooks/useProject";

export default function Projects() {
  const useProjects = useProject();

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold  text-gray-100 mb-8">My Projects</h2>
      <hr className="w-20 border-b-2 border-slate-500 mb-8" />
      <Project projects={useProjects.projects} />
    </div>
  );
}
