/* Imported packages/files */
import categoryModel from "../models/category.model.js"

/* POST Categories controller */
export const createCategories = async (req, res) => {
  const categories = req.body;

  try {
    const categoryData = await categoryModel.insertMany(categories);
    res.status(201).json({
      message: "All Categories inserted Successfully✅",
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
  const categoryRes = req.body;
  console.log(categoryRes);
  // try {
  //   const data = req.body;

  //   res.status(200).json({
  //     message: "categories fetched Successfully✅",
  //     categories: data,
  //   })
  // } catch (error) {
  //   res.status(500).json({
  //     message: error.message,
  //   })
  // }
}

