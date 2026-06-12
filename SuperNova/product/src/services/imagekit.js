// Minimal ImageKit wrapper. In tests it returns a fake response.
if (process.env.NODE_ENV === 'test') {
  module.exports = {
    uploadFile: async (buffer, filename) => {
      return {
        url: 'http://test/image.jpg',
        thumbnail: 'http://test/thumb.jpg',
        fileId: 'test-file-id',
      };
    },
  };
} else {
  try {
    const ImageKit = require('imagekit');
    const imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    });

    module.exports = {
      uploadFile: async (buffer, filename) => {
        const base64 = buffer.toString('base64');
        const response = await imagekit.upload({
          file: `data:image/jpeg;base64,${base64}`,
          fileName: filename,
        });

        return {
          url: response.url,
          thumbnail: (response.thumbnail && response.thumbnail.url) || response.url,
          fileId: response.fileId || response.name,
        };
      },
    };
  } catch (err) {
    module.exports = {
      uploadFile: async () => {
        throw new Error(
          "ImageKit SDK not installed or failed to load. Install 'imagekit' or set NODE_ENV=test for tests."
        );
      },
    };
  }
}
