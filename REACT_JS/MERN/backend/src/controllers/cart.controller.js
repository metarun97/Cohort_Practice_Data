/* Imported packages/files */
import cartModel from "../models/cart.model.js";


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
      res.status(201).json({
        message: "Cart created & product added successfully",
      })
    }


    /* Check if product already exists in cart */
    const existingItem = cart.items.find((item) => (items.productId.toString() === productId))

    /* If cart exists then increase quantity of product then else add a new product */
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity })
    }

    /* Save cart in database */
    await cartModel.save()

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
