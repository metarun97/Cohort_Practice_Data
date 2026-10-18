import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
dotenv.config();


const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})



/* Saara content jab load ho jayega response me de dega */

// const main = async () => {
//   const response = await ai.models.generateContent({
//     model: "gemini-3.5-flash-lite",
//     contents: "what is Javascript?",
//   })

//   console.log(response.text);
// }

// main();

/* Saara content na load hote hue jese jese chunk tokens me ata jaye print krke de dega */
// const main = async () => {
//   const responseStream = await ai.models.generateContentStream({
//     model: "gemini-3.5-flash-lite",
//     contents: "What is React?",
//   })

//   for await (let chunk of responseStream) {
//     console.log(chunk.text);
//   }
// }

// main();

const generateAiResponse = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: prompt,
  })
  return response.text;
}

/* Chat API for chatbot */
app.post("/chat", async (req, res) => {

  const { prompt } = req.body;

  const data = await generateAiResponse(prompt);

  res.status(200).json({
    aiResponse: data
  })
})




app.listen(port, () => {
  console.log("Server running on Port:", port);
})

