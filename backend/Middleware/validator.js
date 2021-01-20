const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("name", "this field is required").notEmpty(),
  check("email", "this should be a valid email").isEmail(),
  check("email", "this field is required").notEmpty(),
  check("password", "this field should be at least 8 characters").isLength({
    min: 8,
  }),
]; 

exports.loginRules = ()=>[
  check('email',"this should be a valid email").isEmail(),
  check('password',"Type your password").notEmpty()
]

exports.validator = (req,res,next)=>{
    const errors = validationResult(req)    
    errors.isEmpty() ? next() : res.status(400).json({msg:errors.array()})
}

exports.clientRules =()=>[
  check("firstName", "this field is required").notEmpty(),
  check("lastName", "this field is required").notEmpty(),
  check("email", "this should be a valid email").isEmail(),
  check("email", "this field is required").notEmpty()
]