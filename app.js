const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const mongoose = require("mongoose");
const keys = require("./config/keys");

const app = express();
const PORT = process.env.PORT || 5000;
const userRouter = require("./routes/User");
const postRouter = require("./routes/Post");

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/user", userRouter);
app.use("/api/posts", postRouter);

mongoose.connect(
  keys.MONGO_DB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("DB Connected");
  }
);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
