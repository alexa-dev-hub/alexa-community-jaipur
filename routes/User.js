const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportCongfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const Blog = require("../models/Blog");
const keys = require("../config/keys");
const mongoose = require("mongoose");

const signedToken = (userID) => {
  return JWT.sign(
    {
      iss: "TarunSingh",
      sub: userID,
    },
    keys.JWT_SECRET_KEY,
    { expiresIn: "5h" }
  );
};

userRouter.post("/register", (req, res) => {
  const { username, password, role, fullName, email } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err)
      return res
        .status(500)
        .json({ message: { msgBody: "An Error Occured", msgError: true } });
    if (user)
      return res
        .status(400)
        .json({ message: { msgBody: "Email Taken", msgError: true } });
    else {
      const newUser = new User({
        username,
        password,
        role,
        fullName,
        email,
      });
      newUser.save((err) => {
        if (err)
          return res.status(500).json({
            message: {
              msgBody: "Error While Saving Info on DB",
              msgError: true,
            },
          });
        return res.status(201).json({
          message: {
            msgBody:
              "Account Created Successfully. Please Login with your Credentials",
            msgError: false,
          },
        });
      });
    }
  });
});

userRouter.post(
  "/login",
  passport.authenticate("local", { session: true }),
  (req, res) => {
    const { _id, username, role, fullName, email } = req.user;
    const token = signedToken(_id);
    res.cookie("access_token", token, { httpOnly: true, sameSite: true });
    res.status(200).json({
      isAuthenticated: true,
      user: { username, role, fullName, email },
      message: { msgBody: "Login Succesful", msgError: false },
    });
  }
);

userRouter.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { email: "", role: "" }, success: true });
  }
);

userRouter.get(
  "/authenticated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { username, role, fullName, email } = req.user;
    res.status(200).json({
      isAuthenticated: true,
      user: {
        username,
        role,
        fullName,
        email,
      },
    });
  }
);

userRouter.get("/test", (req, res) => {
  res.status(200).json({ message: { msgBody: "Hit User", msgError: false } });
});

userRouter.post("/", (req, res) => {});

module.exports = userRouter;
