const express = require("express");
const userRouter = express.Router();

const {
  signup,
  login,
  logout,
  myData,
  getAllUsers,
  updateUser,
  imageUpload,
} = require("./AuthController");
const upload = require("../utils/multer");
const IsUser = require("../middleware/JWT");

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/me", IsUser, myData);
userRouter.get("/users", IsUser, getAllUsers);
userRouter.post("/update", IsUser, updateUser);
userRouter.post("/userProfile", IsUser, upload.single("avatar"), imageUpload);
userRouter.post("/logout", logout);

module.exports = userRouter;
