/* Imported packages/files */
import cartModel from "../models/cart.model.js";

/* AddToCart API controller */
export const addToCart = async (req, res) => {

  try {


  } catch (error) {

  }

}


/* GetCartData API controller */
export const getCartData = async (req, res) => {
  try {

    /* Find a cart in the database */
    const cart = await cartModel.findOne().populate("items.product");

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
