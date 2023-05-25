import { Router } from "express";
import categoriesController from "../controllers/categoriesControllers";
import middleware from "../middlewares/dataValidator";

const categories = Router();
const category = Router();

categories.get("/", categoriesController.index);
categories.get("/:id", middleware.idDataValidator, categoriesController.show);
categories.post(
  "/",
  middleware.categoryDataValidator,
  categoriesController.insert
);
categories.put(
  "/:id",
  middleware.idDataValidator,
  middleware.categoryDataValidator,
  categoriesController.update
);
categories.delete(
  "/:id",
  middleware.idDataValidator,
  categoriesController.remove
);

category.get("/:category", categoriesController.showProductsByCategory);

export { categories, category };
