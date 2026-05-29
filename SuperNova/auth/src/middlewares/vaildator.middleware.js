const { body, validationResult, oneOf } = require("express-validator");

// Middleware to check validation results⬇️
const responseWithValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errs = errors.array();
    // If missing fullName parts, return a consolidated message expected by tests
    const hasFullNameError = errs.some(e => e.path && String(e.path).startsWith('fullName'));
    if (hasFullNameError) {
      return res.status(400).json({ message: 'Full name is required' });
    }

    return res.status(400).json({
      success: false,
      errors: errs,
    });
  }

  next();
};

// register validations⬇️
const registerUserValidations = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Valid email is required"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  body("fullName.firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required"),

  body("fullName.lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required"),

  responseWithValidationErrors,
];

// login validations⬇️
const loginUserValidations = [
  oneOf(
    [
      body("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required"),

      body("email")
        .trim()
        .isEmail()
        .withMessage("Valid email is required"),
    ],
    "Either username or email is required"
  ),

  body("password")
    .notEmpty()
    .withMessage("Password is required"),

  responseWithValidationErrors,
];

// validations for adding user address⬇️
const addUserAddressValidations = [
  body("street")
    .isString()
    .withMessage("Street must be a string")
    .notEmpty()
    .withMessage("Street is required"),

  body("city")
    .isString()
    .withMessage("City must be a string")
    .notEmpty()
    .withMessage("City is required"),

  body("state")
    .optional()
    .isString()
    .withMessage("State must be a string"),

  body("pincode")
    .isNumeric()
    .withMessage("Pincode must be numeric")
    .isLength({ min: 6, max: 6 })
    .withMessage("Pincode must be 6 digits"),

  body("phone")
    .optional()
    .matches(/^\+\d{12}$/)
    .withMessage("Phone must be in format +<countrycode><number>"),

  body("country")
    .optional()
    .isString()
    .withMessage("Country must be a string"),

  body("isDefault")
    .optional()
    .isBoolean()
    .withMessage("isDefault must be a boolean"),
  responseWithValidationErrors,
];

// Export elements⬇️
module.exports = {
  registerUserValidations,
  loginUserValidations,
  addUserAddressValidations,
};
