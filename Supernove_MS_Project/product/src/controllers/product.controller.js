// Requied items:-
const { default: mongoose } = require("mongoose");
const productModel = require("../models/product.model");
const { uploadImage } = require("../service/imagekit.service");

/* Create a product by seller */
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

    // If title and price not given:-
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

/* Get all products */
const getProducts = async (req, res) => {

  try {
    const { q, minprice, maxprice, skip = 0, limit = 20 } = req.query;

    // Initialize filter data:-
    const filter = {}

    // If query found:-
    if (q) {
      filter.$text = { $search: q }
    }

    // If minprice found:-
    if (minprice) {
      filter["price.amount"] = { ...filter["price.amount"], $gte: Number(minprice) }
    }

    // If maxprice found:-
    if (maxprice) {
      filter["price.amount"] = { ...filter["price.amount"], $lte: Number(maxprice) }
    }

    // find products:-
    const products = await productModel.find(filter).skip(Number(skip)).limit(Math.min(Number(limit)), 20);

    // final response:-
    res.status(200).json({
      message: "products fetched successfully",
      data: products,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }

}

/* Get a single product by id */
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    // find product in database by id:-
    const product = await productModel.findById(id);

    // if product not found:-
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      })
    }

    // Final response:-
    res.status(200).json({
      message: "Product fetched successfully",
      product: product,
    })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/* Update a single product it's id */
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // If id doesn't valdi:-
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid product id",
      })
    }

    // Find product on the behalf of id and seller:-
    const product = await productModel.findOne({
      _id: id,
      seller: req.user.id,
    })

    // If product not found:-
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      })
    }

    // Allowed updates:-
    const allowedUpdates = ["title", "description", "price"];

    // Update product fields:-
    for (const key of Object.keys(req.body)) {
      if (allowedUpdates.includes(key)) {
        if (key === "price" && typeof req.body.price === "object") {
          if (req.body.price.amount !== undefined) {
            product.price.amount = req.body.price.amount;
          } if (req.body.price.currency !== undefined) {
            product.price.currency = req.body.price.currency;
          }
        } else {
          product[key] = req.body[key];
        }
      }
    }

    // Save the updated product:-
    await product.save();

    res.status(200).json({
      message: "Product updated successfully",
      product,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/* Delete a single product it's id */
const deleteProduct = async (req, res) => {

  try {
    const { id } = req.params;

    // If id doesn't valid:-
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid product Id",
      })
    }
    // Find product on the behalf of id:-
    const product = await productModel.findOne({
      _id: id,
    })

    //  If product not found:-
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      })
    }

    // Check if the product belongs to the seller:-
    if (product.seller.toString() !== req.user.id) {
      return res.status(403).json({
        message: "forbidden: You cand delete only your own product",
      })
    }

    // Delete the product:-
    await productModel.findOneAndDelete({
      _id: id
    })
    // Final response:-
    res.status(200).json({
      message: "Product deleted successfully",
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/* Get products for the authenticated seller */
const getSellerProducts = async (req, res) => {
  try {
    const sellerId = req.user.id;

    const products = await productModel.find({ seller: sellerId });

    res.status(200).json({
      message: "Seller products fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getSellerProducts,
};
