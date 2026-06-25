/* Imported packages/files */
import categoryModel from "../models/category.model.js"

/* POST Categories controller */
export const createCategories = async (req, res) => {
  const { categories } = req.body;

  try {
    const categoryData = await categoryModel.insertMany(categories);
    res.status(201).json({
      message: "All categories inserted successfully✅",
      data: categoryData,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/* GET Categories controller */
export const getCategories = async (req, res) => {

  try {
    const categories = await categoryModel.find()
    // console.log(categories);

    res.status(200).json({
      message: "All categories fetched successfully✅",
      data: categories,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

