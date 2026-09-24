import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';
import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';

let tools = [];

// const weatherFunctionDeclaration = {
//   type: 'function',
//   name: 'get_current_temperature',
//   description: 'Gets the current temperature for a given location.',
//   parameters: {
//     type: 'object',
//     properties: {
//       location: {
//         type: 'string',
//         description: 'The city name, e.g. San Francisco',
//       },
//     },
//     required: ['location'],
//   },
// };


/* Gemini Instance created */
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
})



/*  Transport creation  */
const transport = new StdioClientTransport({
  command: "node",
  args: ["mcp.server.js"],
})

/* Client created */
const client = new Client({
  name: "My-first-client",
  version: "1.0.0"
})

await client.connect(transport);

/* Tools defined creation  */
const response = await client.listTools();
console.log(response);

response.tools.forEach(async (tool) => {
  tools.push({
    type: "function",
    name: tool.name,
    description: tool.description,
    parameters: {
      type: "object",
      properties: tool.inputSchema.properties,
      required: tool.inputSchema.required || [],
    }
  })

  /* AI response */
  const aiResponse = await ai.interactions.create({
    model: "gemini-3.6-flash",
    input: "Add 100 and 34",
    tools: tools,
  })

  const functionCall = aiResponse.steps.find(
    (step) => step.type === "function_call"
  );

  console.log("AI Response", functionCall.arguments, functionCall.name);

  /* AI response */
  const toolRes = await client.callTool({
    name: functionCall.name,
    arguments: functionCall.arguments,
  })
  console.log("Tool Response", toolRes);
})







