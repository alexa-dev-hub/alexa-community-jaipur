// Importing Dependencies.
const express = require("express");
const morganMiddleware = require("./morganChalk");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");

//Initialise Express App
const app = express();
const PORT = process.env.PORT || 5000;

//import Routers
const userRouter = require("./routes/User");
const postRouter = require("./routes/Post");
const eventsRouter = require("./routes/Events");

// Initailise
app.use(cookieParser());
app.use(express.json());
app.use(morganMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

//Set Routers
app.use("/api/user", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/events", eventsRouter);

// Connect to DB
mongoose.connect(
  keys.MONGO_DB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("MongoDB Connected");
  }
);

app.use("/api/test", (req, res) => {
  res
    .status(200)
    .json({ message: "You Reached Alexa-DEV-Hub Server.", msgError: false });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
