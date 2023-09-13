const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/characters", routes);
server.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

module.exports = server;