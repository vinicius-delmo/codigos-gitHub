const express = require("express");
const app = express();
const Joi = require("joi");

app.use(express.json());

const genres = [
  { id: 1, genre: "comedy" },
  { id: 2, genre: "action" },
  { id: 3, genre: "drama" },
];

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.listen(3001, () => {
  console.log("Aplicação rodando na porta 3001");
});
