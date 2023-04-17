import { Router } from "express";
import categoriesController from "../controllers/categoriesControllers";

const categories = Router();
const category = Router();
categories.get("/", categoriesController.index);
categories.get("/:id", categoriesController.show);
categories.post("/", categoriesController.insert);
categories.put("/:id", categoriesController.update);
categories.delete("/:id", categoriesController.remove);
category.get("/:category", categoriesController.showProducts);

export { categories, category };
