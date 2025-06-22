const express = require("express");
const app = express();
const server = require("http").createServer(app);

const cors = require("cors");
const config = require("../config");
const Project = require("../project/projectModel");
const userRouter = require("../authentication/AuthRoutes");
const cookieParser = require("cookie-parser");
const projectRoute = require("../project/projectRoutes");
const { Server } = require("socket.io");
const { MessageSocket } = require("../Socket/MessageSocket");

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

MessageSocket(io);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", userRouter);
app.use("/api/project", projectRoute);

config.db();

module.exports = { server };
