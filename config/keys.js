require('dotenv').config();
const MONGO_DB_URI = process.env.MONGO_DB_URI;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = { MONGO_DB_URI, JWT_SECRET_KEY };
