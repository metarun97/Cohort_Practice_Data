import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import { ChatGoogle } from '@langchain/google';
import { TavilySearch } from "@langchain/tavily";
import { createAgent, tool } from "langchain";
import z from "zod";

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

/* -----BuiltIn Tool----- */
// const tool1 = new TavilySearch({
//   maxResults: 5,
//   topic: "general",
// });


/* -----Custom Tool----- */
const tool1 = tool(
  ({ email, content }) => {
    return `send successfully to ${email} and ${content} content also send!`
  },
  {
    name: "sendEmailTool",
    description: "use this tool to send email",
    schema: z.object({
      email: z.string(),
      content: z.string()
    })
  }
)


/* -----Custom Tool----- */
const tool2 = tool(
  ({ a, b }) => {
    return `addition of ${a} & ${b} is 7`
  }, {
  name: "addition_tool",
  description: "Use this tool for addition for two numbers",
  schema: z.object({
    a: z.number(),
    b: z.number(),
  })
}
)

/* Langchain */
const model = new ChatGoogle("gemini-3.5-flash-lite");

app.post("/chat", async (req, res) => {

  const { prompt } = req.body;

  // const result = await model.invoke(prompt);
  const agent = createAgent({
    model,
    tools: [
      // tool1
      tool1
      , tool2],
  })

  const result = await agent.invoke({
    messages: [
      {
        role: "user",
        content: prompt
      }
    ]
  })

  // console.log(result.messages[result.messages.length - 1].content);
  const agentRes = result.messages[result.messages.length - 1].content;

  res.status(200).json({
    message: agentRes
  })

})


app.listen(port, () => [
  console.log("Server running on Port:", port)
])



