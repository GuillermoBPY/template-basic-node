const express = require("express");
const router = require("./routes");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  return res.send("WELCOME TO CODE🌌");
});

app.use("/api/v1", router);
module.exports = app;
