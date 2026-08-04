// Required items:-
const ImageKit = require("imagekit");
const { randomUUID } = require("crypto");


// ImageKit credentials:-
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "test_public_key",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "test_private_key",
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/test",
});

// uploadImage function:-
async function uploadImage({ buffer, folder = "/products" }) {
  const res = await imagekit.upload({
    file: buffer,
    fileName: typeof randomUUID === 'function' ? randomUUID() : Date.now().toString(),
    folder,
  });
  return {
    url: res?.url,
    thumbnail: res?.thumbnailUrl || res?.url,
    id: res?.fileId,
  };
}

module.exports = { imagekit, uploadImage };
