const express = require("express");
const Router = express.Router();
const {
    addbranch
} = require("../controllers/branch.controller")
Router.post("/:userId", addbranch);

module.exports = Router;