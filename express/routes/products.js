import express from "express";
const app = express();
import { products } from "../database/db.js";

app.use(express.json());

app.get("/items", (req, res) => {
  res.send(products);
});

app.post("/items", (req, res) => {
  const product = {
    id: products.length + 1,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
  };
  products.push(product);
  res.send(product);
});

app.get("/items/:id", (req, res) => {
  const product = products.find((c) => c.id === parseInt(req.params.id));
  if (!product)
    return res.status(404).send("The product with the given id was nos found");
  res.send(product);
});

app.delete("/items/:id", (req, res) => {
  const product = products.find((c) => c.id === parseInt(req.params.id));
  if (!product)
    return res.status(404).send("The product with the given id was nos found");
  const index = products.indexOf(product);
  products.splice(index, 1);
  res.send(product);
});

app.put("/items/:id", (req, res) => {
  const product = products.find((c) => c.id === parseInt(req.params.id));
  (product.name = req.body.name),
    (product.description = req.body.description),
    (product.price = req.body.price);
  (product.quantity = req.body.quantity), res.send(product);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
