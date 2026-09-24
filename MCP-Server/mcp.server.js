import { McpServer } from '@modelcontextprotocol/server';
import { StdioServerTransport } from '@modelcontextprotocol/server/stdio';
import * as z from 'zod/v4';


/* Creating MCP Server */
const server = new McpServer({
  name: 'greeting-server',
  version: '1.0.0'
});

/* Register tool to MCP Server */
server.registerTool(
  'add_two_numbers',
  {
    type: "function",
    description: "add two numbers together",
    inputSchema: z.object({
      a: z.number().describe('Describe First number'),
      b: z.number().describe('Describe Second number'),
    })
  }, async ({ a, b }) => {
    return {
      content: [
        { type: "text", text: String(a + b) }
      ]
    }
  }
);


/* Start recieveing addition of two numbers on stdin sending message on stdout */
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main();
