const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  return res.send("WELCOME TO CODE🌌");
});

module.exports = app;
