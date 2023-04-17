import { Router } from "express";
import productsController from "../controllers/productsControllers";
import { categories, category } from "./categories";
const router: Router = Router();

router.use("/categories", categories);
router.use("/category", category);

router.get("/", productsController.index);
router.get("/:id", productsController.show);
router.post("/", productsController.insert);
router.put("/:id", productsController.update);
router.delete("/:id", productsController.remove);

export { router };
