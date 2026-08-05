// Required items:-
const cartModel = require("../models/cart.model");


// getCart controller:-
const getCart = async (req, res) => {
  try {
    const user = req.user;
    const cart = await cartModel.findOne({ user: user._id });

    if (!cart) {
      return res.status(200).json({
        items: [],
        totals: {
          itemCount: 0,
          subtotal: 0,
          tax: 0,
          total: 0,
        },
      });
    }

    const items = cart.items;
    const subtotal = items.reduce((sum, item) => sum + (item.quantity * (item.price ?? 0)), 0);
    const tax = 0;

    res.status(200).json({
      items,
      totals: {
        itemCount: items.length,
        subtotal,
        tax,
        total: subtotal + tax,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// addItemToCart controller:-
const addItemToCart = async (req, res) => {
  try {
    const { productId, qty } = req.body;

    const user = req.user;

    let cart = await cartModel.findOne({ user: user._id })

    if (!cart) {
      cart = new cartModel({ user: user._id, items: [] })
    }

    const existingCratIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

    if (existingCratIndex >= 0) {
      cart.items[existingCratIndex].quantity += qty;
    } else {
      cart.items.push({ productId, quantity: qty });
    }

    await cart.save();

    res.status(201).json({
      message: "Item added to cart",
      cart,
    })



  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

// updateCartItem controller:-
const updateCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const qty = req.body.qty ?? req.body.quantity;

    if (qty == null || typeof qty !== 'number' || qty < 1) {
      return res.status(400).json({ message: 'Invalid quantity' });
    }

    const user = req.user;

    const cart = await cartModel.findOne({ user: user._id });

    if (!cart) {
      return res.status(404).json({
        message: 'Cart not found'
      });
    }

    const existingIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

    if (existingIndex < 0) {
      return res.status(404).json({
        message: 'Item not found in cart'
      });
    }

    cart.items[existingIndex].quantity = qty;

    await cart.save();

    return res.status(200).json({
      message: 'Item updated in cart',
      cart
    }
    );

  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }

}

// deleteItemFromCart controller:-
const deleteItemFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const user = req.user;

    const cart = await cartModel.findOne({ user: user._id });

    if (!cart) {
      return res.status(404).json({
        message: 'Cart not found'
      });
    }

    const existingIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

    if (existingIndex < 0) {
      return res.status(404).json({
        message: 'Item not found in cart'
      });
    }

    cart.items.splice(existingIndex, 1);

    await cart.save();

    return res.status(200).json({
      message: 'Item removed from cart',
      cart
    });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
}

// clearCart controller:-
const clearCart = async (req, res) => {
  try {
    const user = req.user;

    // remove the entire cart document for the user
    await cartModel.findOneAndDelete({ user: user._id });

    return res.status(200).json({
      message: 'Cart cleared'
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Server error'
    });
  }
}

module.exports =
{
  addItemToCart,
  updateCartItem,
  getCart,
  deleteItemFromCart,
  clearCart
};
