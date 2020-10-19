const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportCongfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const keys = require("../config/keys");

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
  const { name, password, role, email } = req.body;
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
        name,
        password,
        role,
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
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, name, role, email } = req.user;
      const token = signedToken(_id);
      res.cookie("access_token", token, { httpOnly: false, sameSite: "none" });
      res.status(200).json({
        isAuthenticated: true,
        user: { name, role, email },
        message: { msgBody: "Login Succesful", msgError: false },
      });
    }
  }
);

userRouter.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { email: "", role: "", name: "" }, success: true });
  }
);

userRouter.get(
  "/authenticated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { name, role, email } = req.user;
    res.status(200).json({
      isAuthenticated: true,
      user: {
        name,
        role,
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
