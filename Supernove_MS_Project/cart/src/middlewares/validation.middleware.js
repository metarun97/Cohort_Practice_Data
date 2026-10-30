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

const normalizeQuantity = (value, req) => {
  const qty = req.body.quantity ?? req.body.qty ?? value;
  const parsedQty = Number(qty);

  if (qty == null || !Number.isInteger(parsedQty) || parsedQty < 1) {
    throw new Error('Quantity must be a positive integer');
  }

  return true;
};

// validateAddToCartItem:-
const validateAddItemToCart = [
  body('productId')
    .isString()
    .withMessage('Product ID is required')
    .custom(value => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Invalid product ID format"),
  body(['quantity', 'qty'])
    .custom((value, { req }) => normalizeQuantity(value, req))
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

  body(['qty', 'quantity'])
    .custom((value, { req }) => normalizeQuantity(value, req))
    .withMessage('Quantity must be at least 1'),

  validationResultData,
];

module.exports = { validateAddItemToCart, validateUpdateCartItem };
