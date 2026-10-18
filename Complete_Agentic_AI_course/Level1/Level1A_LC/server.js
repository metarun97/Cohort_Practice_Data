import express from "express";
import dotenv from "dotenv";
import { ChatGoogle } from "@langchain/google";
import { ChatGroq } from "@langchain/groq";
dotenv.config();


const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

// const ai = new ChatGoogle({
//   model: "gemini-3.5-flash-lite",
//   temperature: 2,
//   maxOutputTokens: 100,
// })

const ai = new ChatGroq({
  model: "openai/gpt-oss-120b",
})

const generateLangchainRes = async (prompt) => {
  const result = await ai.invoke([
    {
      role: "system",
      content: "You are Jarvis my assistant",
    }, {
      role: "human",
      content: prompt,
    }
  ]);

  return result;
}

app.post('/chat', async (req, res) => {

  const { prompt } = req.body;

  const data = await generateLangchainRes(prompt);

  res.status(200).json({
    message: data.content
  })

})

app.listen(port, () => {
  console.log("Server running on Port:", port);
})

