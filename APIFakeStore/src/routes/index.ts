import { router as productsRoutes } from "./products";
import { authRouter as authRouter, authLogin } from "./auth";
import { Router } from "express";

const router: Router = Router();
router.use("/products", productsRoutes);
router.use("/register", authRouter);
router.use("/login", authLogin);

export { router };
