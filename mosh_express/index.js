import express from "express";
const app = express();

import genres from "./routes/genres.js";

app.use(express.json());
app.use("/api/genres", genres);

app.listen(3001, () => {
  console.log("Aplicação rodando na porta 3001");
});
