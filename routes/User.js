const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.status(200).json({ message: { msgBody: "Hit User", msgError: false } });
});

module.exports = userRouter;
