/* Imported packages/files */
import cartModel from "../models/cart.model.js";

/* AddToCart API controller */
export const addToCart = async (req, res) => {

  try {
    const { productId, quantity } = req.body;

    /* Find the cart in your database */

    let cart = await cartModel.findOne();

    /* If cart doesn't exist, create it */
    if (!cart) {
      cart = await cartModel.create({
        items: [
          {
            productId,
            quantity,
          }
        ]
      })

      /* Cart creation response */
      return res.status(201).json({
        message: "Cart created & product added successfully",
        cart,
      })
    }


    /* Check if product already exists in cart */
    const existingItem = cart.items.find((item) => (item.productId.toString() === productId))

    /* If cart exists then increase quantity of product then else add a new product */
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity })
    }

    /* Save cart in database */
    await cart.save();

    /* Final response */
    res.status(200).json({
      message: "Product added successfully",
      cart,
    })


  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}


/* GetCartData API controller */
export const getCartData = async (req, res) => {
  try {

    /* Find a cart in the database */
    const cart = await cartModel.findOne().populate("items.productId");

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
    })

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
