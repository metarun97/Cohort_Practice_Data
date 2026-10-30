import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { ChatGoogle } from "@langchain/google";
import { tool } from "langchain";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { z } from "zod";
import { MessagesAnnotation, StateGraph } from "@langchain/langgraph";
import { MongoDBSaver } from "@langchain/langgraph-checkpoint-mongodb";

dotenv.config();


const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;


// const checkpointer = new MemorySaver();

const client = new MongoClient(process?.env?.MONGO_CLIENT);
const checkpointer = new MongoDBSaver({ client });


/* -----Custom Tool 1 ----- */
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

/* -----Custom Tool 2 ----- */
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

/* Tools array */
const tools = [tool1, tool2];

/* Model used */
const model = new ChatGoogle("gemini-3.5-flash-lite").bindTools(tools);


/* Creating toolNode */
const toolNode = new ToolNode(tools);

/* Creating agentNode */
const agentNode = async (state) => {
  const result = await model.invoke(state.messages)
  return {
    messages: [result]
  }
}

/* Should continue node after conditionalEdges */
const shouldContinue = async (state) => {
  // console.log(state);
  if (state.messages[state.messages.length - 1].tool_calls.length > 0) {
    return "toolNode"
  } else {
    return "__end__"
  }
}


/* Creating graph */
const graph = new StateGraph(MessagesAnnotation)
  .addNode("agentNode", agentNode)
  .addNode("toolNode", toolNode)
  /* Connecting star to agentNode by edges */
  .addEdge("__start__", "agentNode")
  /* Connecting agentNode to toolNode by edges if tool present  */
  .addConditionalEdges("agentNode", shouldContinue)
  /* Reverse toolNode as agentNode */
  .addEdge("toolNode", "agentNode")
  /* Now compile your graph*/
  .compile({ checkpointer })

/* Chat api */
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  const result = await graph.invoke(
    {
      messages: [
        {
          role: "user",
          content: prompt,
        }
      ]
    },
    {
      configurable: { thread_id: "2" }
    }
  )

  // console.log(result.messages);
  res.json(result.messages[result.messages.length - 1].content)

})


/* Server started */
app.listen(port, () => {
  console.log("Server running on Port:", port);
})



