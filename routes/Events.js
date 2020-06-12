const express = require("express");
const eventsRouter = express.Router();
const path = require("path");

eventsRouter.get("/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const filePath = `./event-images/${imageName}`;
  res.sendFile(filePath, { root: __dirname });
});

module.exports = eventsRouter;
