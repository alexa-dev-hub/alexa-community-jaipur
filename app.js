const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 5000;

const userRouter = require("./routes/User");
const postRouter = require("./routes/Post");
const eventsRouter = require("./routes/Events");

app.use(express.json());
app.use(morgan("tiny"));
app.use(passport.initialize());

app.use("/api/user", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/events", eventsRouter);

mongoose.connect(
  keys.MONGO_DB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("DB Connected");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
