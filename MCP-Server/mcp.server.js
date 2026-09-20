import { McpServer } from '@modelcontextprotocol/server';
import { StdioServerTransport } from '@modelcontextprotocol/server/stdio';
import * as z from 'zod/v4';


/* MCP server create karna */
const server = new McpServer({
  name: 'greeting-server',
  version: '1.0.0'
});


/* Register tool  to the MCP server */
server.registerTool(
  'greet',
  {
    description: 'Greet someone by name',
    inputSchema: z.object({ name: z.string() })
  },
  async ({ name }) => ({
    content: [{ type: 'text', text: `Hello, ${name}!` }]
  })
);

/* Start recieving greet message on stdin sending message on stdout */
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main();
