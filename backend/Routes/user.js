const express = require("express");
const {
  register,
  login,
  getCurrentUser,
  updateUser,
} = require("../controllers/user.controller");
const auth = require("../Middleware/auth");
const {
  registerRules,
  validator,
  loginRules,
} = require("../Middleware/validator");
const Router = express.Router();
const config = require("config");
const secretOrKey = config.get("secretOrKey");
const jwt = require('jsonwebtoken');
const User = require("../Model/User");

Router.post("/register", registerRules(), validator, register);
Router.post("/login", loginRules(), validator, login);

Router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    name: user.name,
    id: user._id,
  });
});

Router.delete("/deleteUser/:userId", auth, async (req, res) => {
  try {
    const id = req.params.userId
    let user = await User.findById(id)
    if (!user) {
      res.status(400).json({ error: "user not found" });
    }
    else {
      let deleteRequest = await User.findByIdAndDelete(id)
      return res.status(200).json({
        message: "user deleted",
        status: 200
      })
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

Router.put("/:userId", auth, async (req, res) => {
  const { name, email, phoneNumber } = req.body;
  const id = req.params.userId;

  try {
    let user = await User.findById(id)
    if (!user) {
      return res.status(400).json({ error: "user not found " });
    }
    let newUser = {
      name,
      email, 
      phoneNumber
    }
    await updateUser(id, newUser)
    return res.status(201).json({
      message: 'user updated', 
      user: newUser
    })

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

Router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, secretOrKey);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = Router;
