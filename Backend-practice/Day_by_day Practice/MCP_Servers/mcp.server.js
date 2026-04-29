import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import * as z from 'zod/v4';

// server created:-
const server = new McpServer({ name: 'demo-server', version: '1.0.0' });

// tool created:-
server.registerTool("addTwoNumbers", {
  title: "Add two numbers",
  description: "Add two numbers together",
  inputSchema: {
    a: z.number().describe("This is first number"),
    b: z.number().describe("This is second number"),
  }
},
  async ({ a, b }) => {
    return {
      content: [{ type: "text", text: String(a + b) }]
    }
  })

// transport created:-
const transport = new StdioServerTransport();
await server.connect(transport);


