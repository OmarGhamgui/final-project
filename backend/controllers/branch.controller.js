
const Branch = require("../Model/Branch");
const config = require("config");
const { updateBranch } = require("../services/branch.services");

exports.addbranch = async (req, res) => {
    const user = req.params.userId;
    const { branchName, local } = req.body;
    try {
        const newBranch = new Branch({
            user,
            branchName,
            local,
        });

        const savedBranch = await newBranch.save();
        res.json({
            msg: "branch added",
            branch: savedBranch,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: error.data });
    }
};

exports.editBranch = async (req, res) => {
    const user = req.params.userId;
    const { branchName, local } = req.body;
    try {
        const newBranch = new Branch({
            user,
            branchName,
            local,
        });

        const savedBranch = await updateBranch(user, newBranch)
        res.json({
            msg: "branch updated",
            branch: savedBranch,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: error.data });
    }
};

