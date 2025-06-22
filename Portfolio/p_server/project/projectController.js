const Project = require("./projectModel");
const { cloudinary } = require("../utils/cloudinary");
const fs = require("fs");

const addProject = async (req, res) => {
  try {
    const { projectName, projectDescription, projectLink, duration } = req.body;

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "Project_Image",
    });

    fs.unlinkSync(req.file.path);

    const project = await new Project({
      projectName,
      projectDescription,
      projectImage: result.secure_url,
      projectLink,
      duration,
    });

    await project.save();
    res.send(project);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    if (!projects) {
      res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ message: "Server Error :", error });
  }
};

const getProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findById(id);
    if (!project) {
      res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ message: "Server Error :", error });
  }
};

module.exports = { addProject, getProjects, getProject };
