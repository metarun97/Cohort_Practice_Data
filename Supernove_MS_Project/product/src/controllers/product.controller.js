// Requied items:-
const productModel = require("../models/product.model");
const { uploadImage } = require("../service/imagekit.service");

const createProduct = async (req, res) => {
  try {
    const { title, description, amount, currency = "INR" } = req.body;
    // console.log(req.body)

    // Get user from the authMiddleware:-
    const seller = req.user.id;

    // Give price data to product:-
    const price = {
      amount: Number(amount),
      currency: currency,
    }

    if (!title || !price) {
      return res.status(400).json({ error: "Title,price fields required" });
    }

    // Upload images in the images array by imagekit:-
    const images = await Promise.all((req.files || []).map(file => uploadImage({ buffer: file.buffer })));


    // Create a product:-
    const product = await productModel.create({
      title,
      description,
      price,
      seller,
      images,
    });
    // Final response:-
    res.status(201).json({
      message: "Product created successfully.",
      data: product,
    })

  } catch (error) {
    console.error("Create product error: ", error)
    return res.status(500).json({
      message: "Internal Server error"
    });
  }
}


module.exports = { createProduct };
