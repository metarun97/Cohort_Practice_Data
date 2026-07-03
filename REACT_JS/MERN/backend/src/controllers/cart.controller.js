/* Imported packages/files */
import cartModel from "../models/cart.model.js";
import productModel from './../models/product.model.js';

/* AddToCart API controller */
export const addToCart = async (req, res) => {

  try {
    const { productId, quantity } = req.body;

    /* Find product bi productId */
    const product = await productModel.findById(productId);

    /* If product not available */
    if (!product) {
      return res.status(404).json({
        message: "Product not found.",
      })
    }

    /* Find cart in database */
    let cart = await cartModel.findOne();

    /* If cart not available then create a empty cart  */
    if (!cart) {
      cart = await cartModel.create({
        items: []
      })
    }

    /* Find index of a item in cart */
    const itemIndex = cart.items.findIndex((item) => (item.productId.toString() === productId))


    /* If index any found */
    if (itemIndex > -1) {
      const newQuantity = cart.items[itemIndex].quantity + quantity;

      /* If newQuantity is more then stock limit */
      if (newQuantity > product.stock) {
        return res.status(400).json({
          message: "Stock limit exceeded"
        })
      }
      cart.items[itemIndex].quantity = newQuantity;
    } else {
      /* If quantity is more then stock limit */
      if (quantity > product.stock) {
        return res.status(400).json({
          message: "Stock limit exceeded"
        })
      }
      cart.items.push({
        productId, quantity,
      })
    }
    /* Save the cart data */
    await cart.save();

    /* Final response */
    res.status(200).json({
      message: "Product added to cart",
      cart,
    })




  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

/* GetCartData API controller */
export const getCartData = async (req, res) => {
  try {

    /* Find a cart in the database */
    const cart = await cartModel.findOne().populate("items.productId");


    const totalPrice = cart.items.reduce((total, item) => {
      return total + item.productId.price * item.quantity;
    }, 0);

    /* if cart not found in the database */
    if (!cart) {
      return res.status(404).json({
        message: "Cart not found.",
      })
    }

    /* Final response */
    res.status(200).json({
      message: "Cart fetched successfully",
      cart,
      totalPrice,
    })

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

/* Delete a product API controller */
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    /* finc cart in the database */
    const cart = await cartModel.findOne();

    /* Cart not found */
    if (!cart) {
      return res.status(404).json({
        message: "Cart not found."
      })
    }

    /* Remove item by producId and save in cart */
    cart.items = cart.items.filter((item) => item.productId.toString() !== productId);

    /* Save cart data */
    await cart.save()

    /* Final response */
    res.status(200).json({
      message: "Product deleted successfully.",
      cart,
    }
    )
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

/* Delete all cart items API controller */
export const clearCart = async (req, res) => {
  try {
    const cart = await cartModel.findOne();

    /* Cart not found */
    if (!cart) {
      return res.status(404).json({
        message: "Cart not found.",
      })
    }

    /* Make cart empty */
    cart.items = [];

    /* Save cart in database */
    await cart.save();

    /* Final response */
    res.status(200).json({
      message: "Cart cleared successfully.",
      cart,
    })
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}


