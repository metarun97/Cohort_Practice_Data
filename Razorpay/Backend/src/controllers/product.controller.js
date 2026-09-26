const productModel = require("../models/product.model")

/* Create a product */
const createProductController = async (req, res) => {
  try {

    const { image, title, description, price: { amount, currency } } = req.body

    const product = await productModel.create({
      image, title, description, price: { amount, currency }
    })


    res.status(201).json({
      message: "Product created successfully",
      product,
    })

  } catch (error) {
    console.log("Error to create product", error);

    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    })
  }
}


/* Get a product */
const getProductController = async (req, res) => {

  try {
    const product = await productModel.findOne();

    res.status(200).json({
      message: "Products Fetched successfully",
      product,
    })

  } catch (error) {
    console.log("Error to fetch products", error);

    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    })
  }
}

module.exports = { createProductController, getProductController };
