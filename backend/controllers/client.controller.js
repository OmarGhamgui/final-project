
const Client = require("../Model/Client");
const config = require("config");
const { updateClient, deleteClientById } = require("../services/client.services")
exports.addClient = async (req, res) => {
    const user = req.params.userId;
    const { firstName, lastName, fonction, company, email, phoneNumber } = req.body;
    try {
        const searchAccount = await Client.find({ user }).findOne({ email });
        
        if (searchAccount)
            return res.status(403).json({ msg: "account already exists" });
        const newAccount = new Client({
            user,
            firstName,
            lastName,
            fonction,
            company,
            email,
            phoneNumber
        });

        const savedAccount = await newAccount.save();
        res.json({
            msg: "client added",
            client: savedAccount,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: error.data });
    }
};

exports.editClient = async (req, res) => {
    const id = req.params.clientId
    const { firstName, lastName, fonction, company, email, phoneNumber } = req.body;
    try {
        let client = await Client.findById(id)
        if (!client) {
            return res.status(400).json({ error: "client not found " });
        }
        let newClient = {
            firstName,
            lastName,
            fonction,
            company,
            email,
            phoneNumber
        }
        const clientUpdated = await updateClient(id, newClient)
        return res.status(201).json({
            message: 'client updated',
            client: clientUpdated
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: error.data });
    }
};

exports.deleteClient = async (req, res) => {
    const id = req.params.clientId
    try {
        let client = await Client.findById(id)
        if (!client) {
            return res.status(400).json({ error: "client not found " });
        }
        let deleteRequest = await deleteClientById(id)
        return res.status(200).json({
            message: "client deleted",
            status: 200
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: error.data });
    }
};

exports.getClients = async (req, res) => {
    const user = req.params.userId;
    try {
        const searchAccount = await Client.find({ user });
        if (!searchAccount)
            return res.status(403).json({ msg: "account already exists" });

        res.json({
            msg: "get all clients ",
            client: searchAccount,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: error.data });
    }
};