import { useContext } from "react";
import { ProjectContext } from "../context/ProjectProvider";

const useProject = () => {
  const project = useContext(ProjectContext);
  return project;
};
export default useProject;
