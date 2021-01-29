
const Client = require("../Model/Client");

exports.updateClient = async (id, newClient) => {
    return await Client.findByIdAndUpdate({ _id: id }, {
        $set: {
            ...newClient
        }
    })
}

exports.deleteClientById = async (id) => {
    return await Client.findByIdAndDelete(id)

}