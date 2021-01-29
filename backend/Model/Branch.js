const mongoose = require("mongoose");
const branchSchema = mongoose.Schema({
    branchName: { type: String, required: true },
    local: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },


});

module.exports = Branch = mongoose.model('Branch', branchSchema);