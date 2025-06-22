const jwt = require("jsonwebtoken");
const config = require("../config");

const IsUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, config.secret);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = IsUser;
