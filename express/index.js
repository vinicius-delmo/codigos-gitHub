import express from "express";
const app = express();
import product from "./routes/products.js";

app.use(express.json());
app.use("/items", product);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
