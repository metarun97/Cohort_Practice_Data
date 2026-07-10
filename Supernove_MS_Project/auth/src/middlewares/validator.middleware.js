// Required items:-
const { body, validationResult } = require("express-validator");


// Respond of velidation errors:-
const respondWithVelidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next();
}

// Validations for register user :-
const registerUserValidation = [
  body("username")
    .isString("")
    .withMessage("username must be a string")
    .isLength({ min: 3 })
    .withMessage("username must be atleast 3 characters long"),
  body("email")
    .isString("")
    .withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be 6 characters long"),
  body("fullName.firstName")
    .isString()
    .withMessage("firstName must be a string")
    .notEmpty()
    .withMessage("firstName is required"),
  body("fullName.lastName")
    .isString()
    .withMessage("lastName must be a string")
    .notEmpty()
    .withMessage("lastName is required"),
  respondWithVelidationErrors,
];

// Exported items:-
module.exports = { registerUserValidation };
