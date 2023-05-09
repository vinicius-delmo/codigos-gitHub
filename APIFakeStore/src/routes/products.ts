import { Router } from "express";
import productsController from "../controllers/productsControllers";
import { categories, category } from "./categories";
import middleware from "../middlewares/dataValidator";
const router: Router = Router();

router.use("/categories", categories);
router.use("/category", category);

router.get("/", productsController.index);
router.get("/:id", middleware.idDataValidator, productsController.show);
router.post("/", middleware.productDataValidator, productsController.insert);
router.put(
  "/:id",
  middleware.idDataValidator,
  middleware.productDataValidator,
  productsController.update
);
router.patch(
  "/:id",
  middleware.idDataValidator,
  middleware.productDataUpdateValidator,
  productsController.update
);
router.delete("/:id", middleware.idDataValidator, productsController.remove);

export { router };
