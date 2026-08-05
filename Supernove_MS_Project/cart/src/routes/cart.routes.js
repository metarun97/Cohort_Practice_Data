// Required items:-
const express = require("express");
const cartController = require("../controllers/cart.controller");
const createAuthMiddleware = require('../middlewares/auth.middleware');
const validation = require("../middlewares/validation.middleware");

// router created:-
const router = express.Router();


/* getCart endpoint (/api/cart/item) */
router.get("/",
  createAuthMiddleware(["seller"]),
  cartController.getCart);


/* addItemToCart endpoint (/api/cart/item) */
router.post("/item",
  validation.validateAddItemToCart,
  createAuthMiddleware(["seller"]),
  cartController.addItemToCart);

/* updateCartItem endpoint (/api/cart/item/:productId) */
router.patch("/item/:productId",
  createAuthMiddleware(["seller"]),
  validation.validateUpdateCartItem,
  cartController.updateCartItem);

/* deleteItemFromCart endpoint (/api/cart/item/:productId) */
router.delete("/item/:productId",
  createAuthMiddleware(["seller"]),
  cartController.deleteItemFromCart
)

/* clearCart endpoint (/api/cart/) */
router.delete("/",
  createAuthMiddleware(["seller"]),
  cartController.clearCart
)

module.exports = router;
