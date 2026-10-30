import dotenv from "dotenv";
import express from "express";
dotenv.config();


const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
 res.send("Server is ready!");
})
app.get("/api/jokes", (req, res) => {
 const jokes = [
  {
   id: 1,
   joke: "Why did the developer go broke? Because he used up all his cache!"
  },
  {
   id: 2,
   joke: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
   id: 3,
   joke: "Why was the JavaScript developer sad? Because he didn't know how to null his feelings!"
  },
  {
   id: 4,
   joke: "Why did the computer get cold? Because it left its Windows open!"
  },
  {
   id: 5,
   joke: "What is a programmer's favorite place? The Foo Bar!"
  }
 ];
 res.send(jokes);
})


app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
})
