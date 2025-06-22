import { createContext, useEffect, useState } from "react";
import axiosInstance from "../APIs/axiosInstance";

export const ProjectContext = createContext();

export default function ProjectProvider({ children }) {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axiosInstance.get("/project/getProjects");
        if (res.status === 200) {
          setProjects(res.data.projects);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, [projects]);
  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
}
