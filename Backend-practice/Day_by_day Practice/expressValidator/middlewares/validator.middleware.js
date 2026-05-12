const { body, query, param, validationResult } = require("express-validator");


function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), })
  }
  next();
}


const registerValidationRules = [
  body("username")
    // .optional()                 // Agar username nahi aya to validate nahi karo.
    .isString().withMessage("username should be a string.")
    .isLength({ min: 3 }).withMessage("username must be 3 character long."),
  // body("email")
  // .isEmail().withMessage("Invalid email format."),
  body("email")
    .custom((value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        throw new Error("Invalid email format");
      }
      return true;                 // error ayega success k liye true kia gya return
    }),
  body("password")
    .isLength({ min: 6 }).withMessage("password must be 6 character long."),
  validate
]

module.exports = { registerValidationRules };
