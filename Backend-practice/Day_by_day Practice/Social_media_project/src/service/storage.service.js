// Required items:-
const ImageKit = require("imagekit");

// imagekit object that use public and private keys & urlEndpoint:-
const imageKit = new ImageKit({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
  urlEndpoint: process.env.URL_ENDPOINT,
});

// Uploadfile function created:-
async function uploadFile(file, filename) {

  const response = await imageKit.upload({
    file: file,
    fileName: filename,
    folder:"Mini_sm_Project"
  })
  return response;
}


// Uploadfile function exported:-
module.exports = uploadFile;
