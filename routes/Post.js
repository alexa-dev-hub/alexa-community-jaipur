const express = require("express");
const postRouter = express.Router();
const path = require("path");
const getPosts = require("./fetchMD");

postRouter.get("/", async (req, res) => {
  const posts = await getPosts();
  res.status(200).json({
    message: { msgBody: "Posts Fetched", msgError: false },
    content: posts,
  });
});

postRouter.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const filePath = `./images/${imageName}`;
  res.sendFile(filePath, { root: __dirname });
});

module.exports = postRouter;
