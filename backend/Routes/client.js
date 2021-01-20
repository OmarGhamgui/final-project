const express = require("express");
const {
    clientRules,
    validator
} = require("../Middleware/validator")
const Router = express.Router();
const { addClient, editClient, deleteClient }= require("../controllers/client.controller");


//add client
Router.post("/", clientRules(), validator, addClient);
Router.put("/:clientId", validator, editClient);
Router.delete("/:clientId", validator, deleteClient);

module.exports = Router;