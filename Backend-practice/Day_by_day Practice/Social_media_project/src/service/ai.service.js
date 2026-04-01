// Require items:-
const { GoogleGenAI } = require("@google/genai");


// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

// GenerateContent function created:-
async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: contents,
    config: {
      systemInstruction: `
       You are an expert in genaration captions for images,
       You generate single caption for the image,
       Your caption shoult be short and consize,
       You use hashtags and emogis in caption,
      `
    }
  });
  return response.text;
}

// GenerateContent function exported:-
module.exports = generateCaption;
