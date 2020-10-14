const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
