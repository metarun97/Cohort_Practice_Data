/* Required elements */
const productModel = require("../models/product.model");


/* Create product controller */
const createProduct = async (req, res) => {
  try {
    const { title, description, price, currency, seller } = req.body;
    const images = [];

    if (req.file) {
      const uploadRes = await imageKitService.uploadFile(req.file.buffer, req.file.originalname);
      images.push({
        url: uploadRes.url,
        thumbnail: uploadRes.thumbnail,
        id: uploadRes.fileId,
      });
    }

    const productObj = {
      title,
      description,
      price: {
        ammount: Number(price),
        currency: currency || "INR",
      },
      seller: seller || null,
      images,
    };

    const created = await productModel.create(productObj);
    return res.status(201).json(created);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}


module.exports = { createProduct };
