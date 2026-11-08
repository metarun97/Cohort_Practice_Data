import { config } from "dotenv";
config();
import express from 'express';
import { ChatGoogle } from "@langchain/google";


const model = new ChatGoogle("gemini-3.5-flash-lite");


model.invoke("who are you?").then(console.log);
