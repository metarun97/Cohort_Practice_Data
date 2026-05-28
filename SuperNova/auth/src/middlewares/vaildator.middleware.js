const { body, validationResult, oneOf } = require('express-validator');

// Register validators using express-validator chains. Use dot-notation
// (`fullName.firstName`, `fullName.lastName`) so nested fields are validated.
const registerUserValidations = [
  body('username').trim().notEmpty().withMessage('Username is required'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('fullName.firstName').trim().notEmpty().withMessage('Full name is required'),
  body('fullName.lastName').trim().notEmpty().withMessage('Full name is required'),
  // Final middleware to collect validation errors and respond
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return the first validation message to keep responses concise
      return res.status(400).json({ message: errors.array()[0].msg });
    }
    next();
  }
];

// Login validators: require `password` and either `username` or `email`
const loginUserValidations = [
  oneOf([
    body('username').trim().notEmpty(),
    body('email').trim().isEmail()
  ], 'Either username or email is required'),
  body('password').notEmpty().withMessage('Missing credentials'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }
    next();
  }
];

// Export validators⬇️
module.exports = {
  registerUserValidations,
  loginUserValidations,
};
