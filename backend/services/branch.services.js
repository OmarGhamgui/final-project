const Branch = require("../Model/Branch");

exports.updateBranch = async (id, newBranch) => {
    return await Branch.findByIdAndUpdate({ _id: id }, {
        $set: {
            ...newBranch
        }
    })
}