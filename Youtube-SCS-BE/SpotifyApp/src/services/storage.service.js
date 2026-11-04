const { ImageKit } = require("@imagekit/nodejs");


/* ImageKit instance created */
const imageKitClient = new ImageKit({
 privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})


/* Upload a music file on imageKit cloudstrorage provider */
const uploadFile = async (file) => {
 const result = await imageKitClient.files.upload({
  file,
  fileName: "music_" + Date.now(),
  folder: "Youtube-SCS-BE/music",
 })
 return result;
}

module.exports = { uploadFile };








