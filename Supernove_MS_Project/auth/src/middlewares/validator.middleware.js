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
  body("role")
    .optional()
    .isIn(["user", "seller"])
    .withMessage("Role must be either 'user' or 'seller'"),
  respondWithVelidationErrors,
];

// Validations for register user :-
const loginUserValidation = [
  body("email")
    .optional()
    .isEmail()
    .withMessage("Invalid email address"),
  body("username")
    .optional()
    .isString("")
    .withMessage("username must be a string"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be 6 characters long"),
  (req, res, next) => {
    if (!req.body.email && !req.body.username) {
      return res.status(400).json({ errors: [{ message: "Either username or either email is require for login" }] })
    }
    respondWithVelidationErrors(req, res, next)
  }
];

// Validations for register user :-
const addUserAddressValidations = [
  body("street")
    .isString()
    .withMessage("street must be string")
    .notEmpty()
    .withMessage("street must be required"),
  body("city")
    .isString()
    .withMessage("city must be string")
    .notEmpty()
    .withMessage("city must be required"),
  body("state")
    .isString()
    .withMessage("state must be string")
    .notEmpty()
    .withMessage("state must be required"),
  body("pincode")
    .isString()
    .withMessage("pincode must be string")
    .notEmpty()
    .withMessage("pincode must be required")
    .isLength({ min: 6, max: 6 })
    .withMessage("pincode must be 6 digits long")
    .matches(/^\d{6}$/)
    .withMessage("pincode must contain only digits"),
  body("country")
    .isString()
    .withMessage("country must be string")
    .notEmpty()
    .withMessage("country must be required"),
  body("isDefault")
    .optional()
    .isBoolean()
    .withMessage("isDefault must be a boolean"),
  respondWithVelidationErrors,
];


// Exported items:-
module.exports = { registerUserValidation, loginUserValidation, addUserAddressValidations };
