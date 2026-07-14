const { body, validationResult } = require("express-validator");


const handleValidationErrors = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: "Errors in validation", errors })
  }

  next();
}


const createProductValidators = [
  body("title")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("title is required"),
  body("description")
    .isString()
    .withMessage("description must be string")
    .trim()
    .optional()
    .isLength({ max: 500 })
    .withMessage("description must be less then 500 characters"),
  body("amount")
    .notEmpty()
    .withMessage("amount is required")
    .bail()
    .isFloat({ gt: 0 })
    .withMessage("amount must be a number > 0"),
  body("currency")
    .optional()
    .isIn(["INR", "USD"])
    .withMessage("price currency must be USD or INR"),
  handleValidationErrors,
]

// exported items:-
module.exports = { createProductValidators }
