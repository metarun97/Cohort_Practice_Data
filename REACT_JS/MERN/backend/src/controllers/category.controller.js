/* Imported packages/files */
import categoryModel from "../models/category.model.js"


/* POST Categories controller */
export const createCategories = async (req, res) => {

  try {
    const { categories } = req.body;

    /* Id categories in not a valid json data array data and also has length zero  */

    if (!Array.isArray(categories) || categories.length === 0) {
      return res.status(400).json({
        message: "Provide valid json that holds any length.",
      })
    }

    /* Now insert category data in the database by all categories */
    const categoryData = await categoryModel.insertMany(categories);

    /* final response */
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

    /*  If categories not exixts in the database */
    if (!categories) {
      return res.status(404).json({
        message: "Categories not found.",
      })
    }

    /* Final response */
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

/* GET Category by slug controller */
export const getCategoryBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    /* Find category by slug name in database */
    const category = await categoryModel.findOne({ slug });
    // console.log(category);

    /* If category not found do this */
    if (!category) {
      return res.status(404).json({
        message: "Category not found.",
      })
    }
    /* final response */
    res.status(200).json({
      message: "Category fetched successfully.",
      data: category,
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }


}
