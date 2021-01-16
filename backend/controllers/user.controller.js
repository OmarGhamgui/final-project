const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Model/User");
const config = require("config");
const secretOrKey = config.get("secretOrKey");

exports.register = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  try {
    const searchAccount = await User.findOne({ email }).select("-password");
    if (searchAccount)
      return res.status(503).json({ msg: "account already exists" });
    const newAccount = new User({
      name,
      email,
      password,
      phoneNumber,
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newAccount.password = hash;
    await newAccount.save();
    const payload = {
      user: {
        id: newAccount._id,
      },
    };
    jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ msg : "inscription réussite" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "mail non trouvé" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(403).json({ msg: "mot de passe erroné " });
    const payload = {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
    };

    jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token, user: payload.user });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};

exports.getCurrentUser = async (req,res) =>{
   User.findOne({_id:req.params.id},(err,data)=>{
    if (err) {console.log(err)} else res.send(data)
  })
}