const {
  getAll,
} = require("../controllers/users.controllers");
const express = require("express");

const routerName = express.Router();

routerName.route("/").get(getAll);

module.exports = routerName;
