const mongoose = require("mongoose");
const clientSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    fonction: { type: String, required: true },
    company: { type: String },
    email: {type: String, required: true},
    phoneNumber: String,
});

module.exports = Client = mongoose.model('Client', clientSchema);