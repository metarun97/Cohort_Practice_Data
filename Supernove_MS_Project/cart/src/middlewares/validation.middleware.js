// Required items:-
const { body, param, validationResult } = require('express-validator');
const { default: mongoose } = require('mongoose');

// Middleware to validate request body for adding item to cart:-
const validationResultData = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// validateAddToCartItem:-
const validateAddItemToCart = [
  body('productId')
    .isString()
    .withMessage('Product ID is required')
    .custom(value => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Invalid product ID format"),
  body('quantity')
    .isInt({ gt: 1 })
    .withMessage('Quantity must be a positive integer'),
  validationResultData
];

// validateUpdateCartItem:-
const validateUpdateCartItem = [
  param('productId')
    .isString()
    .withMessage('Product ID is required')
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage('Invalid Product ID format'),

  body('qty')
    .isInt({ min: 1 })
    .withMessage('Quantity must be at least 1'),

  validationResultData,
];

module.exports = { validateAddItemToCart, validateUpdateCartItem };
