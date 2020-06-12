const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../content//blog-posts");

const getPosts = async () => {
  let postList = [];
  let fileList;
  try {
    fileList = fs.readdirSync(dirPath);
  } catch (error) {
    console.log(error);
  }
  try {
    fileList.sort();
    console.log(fileList);
    fileList.forEach((file, idx) => {
      const fileContent = fs.readFileSync(`${dirPath}/${file}`, "utf8");
      postList.push(fileContent);
    });
  } catch (error) {
    console.log("File Read Error");
  } finally {
    return postList;
  }
};

module.exports = getPosts;
