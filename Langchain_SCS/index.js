import { config } from "dotenv";
config();
import express, { response } from 'express';
import { ChatGoogle } from "@langchain/google";
import { PromptTemplate } from "@langchain/core/prompts"


const model = new ChatGoogle("gemini-3.5-flash-lite");


const promptTemp = PromptTemplate.fromTemplate(`Explain {topic} in simple terms ELI5,
   make sure includes core concepts and avoid uneccesory jargon
  ,make the answer as concise as possible`);


//* normal model invoked:-
// model.invoke("hey who are you?").then(response => console.log(response.content));

//*  give prompt topic to prompt model before piping it:-
// promptTemp.invoke({ topic: "express" }).then(response => console.log(response.value));

//* piping prompt model and invoked it:-
promptTemp.pipe(model).invoke({ topic: "express" }).then(response => console.log(response.content));
