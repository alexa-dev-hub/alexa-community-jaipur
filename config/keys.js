let MONGO_DB_URI = "";

if (process.env.NODE_ENV === "production") {
  MONGO_DB_URI = process.env.MONGO_DB_URI;
} else {
  const devkeys = require("./devkeys");
  MONGO_DB_URI = devkeys.MONGO_DB_URI;
}

module.exports = { MONGO_DB_URI };
