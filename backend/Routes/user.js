const express = require("express");
const { register, login, getCurrentUser } = require("../controllers/user.controller");
const { registerRules, validator, loginRules } = require("../Middleware/validator");
const Router = express.Router();

Router.post("/register", registerRules(), validator, register);
Router.post("/login", loginRules(),validator,login);
Router.get("/profile/:id",getCurrentUser)

module.exports = Router;
