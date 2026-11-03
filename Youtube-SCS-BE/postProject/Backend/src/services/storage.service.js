const ImageKit = require("@imagekit/nodejs");


const imageKit = new ImageKit({
 privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})


/* Upload image to imageKit Cloud Storage Provider */
const uploadImage = async (buffer) => {

 const result = await imageKit.files.upload({
  file: buffer.toString("base64"),
  fileName: 'image.jpg',
 })
 return result;
}

module.exports = uploadImage;
