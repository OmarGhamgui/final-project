const express = require("express");
const {
  register,
  login,
  getCurrentUser,
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
const jwt = require('jsonwebtoken')

Router.post("/register", registerRules(), validator, register);
Router.post("/login", loginRules(), validator, login);

Router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    name: user.name,
    id: user._id,
  });
});

Router.delete("/deleteUser", async ( req, res)=>{
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
