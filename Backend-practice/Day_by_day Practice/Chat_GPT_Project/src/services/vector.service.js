// Import the Pinecone library:-
const { Pinecone } = require('@pinecone-database/pinecone');


// Initialize a Pinecone client with your API key
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

// Get the project's Index:-
const chatGptProjectIndex = pc.Index("chat-gpt-project");


// Memory function created:-
async function createMemory({ vectors, metadata, messageId }) {
  await chatGptProjectIndex.upsert([{
    id: messageId,
    values: vectors,
    metadata,
  }]
  )
}

// Query memory function created:-
async function queryMemory({ queryVector, limit = 5, metadata }) {
  const data = await chatGptProjectIndex.query({
    vector: queryVector,
    topK: limit,
    filter: metadata ? { metadata } : undefined,
    includeMetadata: true,
  })
  return data.matches;
}

// Every memory exported:-
module.exports = { createMemory, queryMemory };
