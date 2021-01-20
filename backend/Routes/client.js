const express = require("express");
const {
    clientRules,
    validator
} = require("../Middleware/validator")
const Router = express.Router();
const { addClient, editClient, deleteClient, getClients }= require("../controllers/client.controller");

Router.post("/:userId", clientRules(), validator, addClient);
Router.put("/:clientId", validator, editClient);
Router.delete("/:clientId", validator, deleteClient);
Router.get('/:userId', getClients)
module.exports = Router;