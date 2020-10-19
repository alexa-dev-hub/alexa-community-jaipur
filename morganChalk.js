const morgan = require("morgan");
const chalk = require("chalk");

const morganMiddleware = morgan(function (tokens, req, res) {
  return [
    chalk.hex("#34ace0").bold(tokens.method(req, res)),
    chalk.hex("#ffb142").bold(tokens.status(req, res)),
    chalk.hex("#ff5252").bold(tokens.url(req, res)),
    chalk.hex("#2ed573").bold(tokens["response-time"](req, res) + " ms"),
    chalk.hex("#f78fb3").bold("@ " + tokens.date(req, res)),
  ].join(" ");
});

module.exports = morganMiddleware;
