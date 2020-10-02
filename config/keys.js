let MONGO_DB_URI = "";

if (process.env.NODE_ENV === "production") {
  MONGO_DB_URI = process.env.MONGO_DB_URI;
  JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
} else {
  const devkeys = require("./devkeys");
  MONGO_DB_URI = devkeys.MONGO_DB_URI;
  JWT_SECRET_KEY = devkeys.JWT_SECRET_KEY;
}

module.exports = { MONGO_DB_URI, JWT_SECRET_KEY };
