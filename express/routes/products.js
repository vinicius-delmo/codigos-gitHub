import express from "express";
const router = express.Router();
import { products } from "../database/db.js";

router.get("/", (req, res) => {
  res.send(products);
});

router.post("/", (req, res) => {
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

router.get("/:id", (req, res) => {
  const product = products.find((c) => c.id === parseInt(req.params.id));
  if (!product)
    return res.status(404).send("The product with the given id was nos found");
  res.send(product);
});

router.delete("/:id", (req, res) => {
  const product = products.find((c) => c.id === parseInt(req.params.id));
  if (!product)
    return res.status(404).send("The product with the given id was nos found");
  const index = products.indexOf(product);
  products.splice(index, 1);
  res.send(product);
});

router.put("/:id", (req, res) => {
  const product = products.find((c) => c.id === parseInt(req.params.id));
  (product.name = req.body.name),
    (product.description = req.body.description),
    (product.price = req.body.price);
  (product.quantity = req.body.quantity), res.send(product);
});

export default router;
