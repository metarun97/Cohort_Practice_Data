const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

// Generate content function:-
async function generateResponse(content) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: content,
  });
  return response.text
}

// Generate content function:-
async function generateVector(content) {
  const response = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: content,
    config: {
      outputDimensionality: 768,
    }
  })

  if (!response.embeddings || response.embeddings.length === 0) {
    console.log("❌ No embeddings returned:", response);
    return null;
  }
  return response?.embeddings[0].values;
}


module.exports = { generateResponse, generateVector };


