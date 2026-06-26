/* Imported packages/files */
import productModel from "../models/product.model.js";

/* POST products controller */
export const insertProducts = async (req, res) => {
  try {
    const { products } = req.body;

    if (!Array.isArray(products) || products.length === 0) {

      return res.status(400).json({
        message: "products must be valid json that have some length.",
      })
    }

    const productsData = await productModel.insertMany(products);

    res.status(201).json({
      message: "Products inserted successfully✅",
      data: productsData,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/* GETT products controller */
export const fetchProducts = async (req, res) => {
  try {
    /* Find the products in the database */
    const products = await productModel.find();

    /* If products not found then give message products not found */
    if (!products) {
      return res.status(404).json({
        message: "Products not found."
      })
    }

    res.status(200).json({
      message: "Products fetched successfully✅",
      data: products,
    })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
