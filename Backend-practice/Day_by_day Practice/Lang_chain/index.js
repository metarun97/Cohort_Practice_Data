import { config } from "dotenv";

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";

config();


const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GEMINI_API_KEY
})


const promptTemp = PromptTemplate.fromTemplate(`
Explain {topic} in very simple way like ELI5,
make sure to includes core concepts and avoid unnecessary jargons
make the answer as concise as possible
  `)



// promptTemp.invoke({ topic: "express" }).then(response => {
//   console.log(response.value);
// });

promptTemp.pipe(model).invoke({ topic: "express" }).then(response => {
  console.log(response.content);
});
