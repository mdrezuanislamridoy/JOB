const upload = require("../utils/multer");
const { addProject, getProjects, getProject } = require("./projectController");

const projectRoute = require("express").Router();

projectRoute.post("/addProject", upload.single("projectImage"), addProject);
projectRoute.get("/getProjects", getProjects);
projectRoute.get("/getProject/:id", getProject);

module.exports = projectRoute;
