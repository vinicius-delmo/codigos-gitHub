import { NextFunction, Request, Response } from "express";
import productsServices from "../service/products";

const index = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const allProducts = await productsServices.getAllProducts();
    res.status(200).send(allProducts);
  } catch (error: any) {
    next(error);
  }
};

const show = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const product = await productsServices.getProductById(id);
    res.status(200).send(product);
  } catch (error: any) {
    next(error);
  }
};

const insert = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { title, price, description, category, image, rating } = req.body;
    const newProduct = {
      title,
      price,
      description,
      image,
      rating,
      category,
    };

    const insertedProduct = await productsServices.postProduct(newProduct);

    res.status(201).send(insertedProduct);
  } catch (error: any) {
    next(error);
  }
};

const update = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);

    const data = req.body;

    const product = {
      id,
      ...data,
    };
    const updatedProduct = await productsServices.updateProduct(product);

    res.status(201).send(updatedProduct);
  } catch (error: any) {
    next(error);
  }
};

const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const deleteProduct = await productsServices.deleteProduct(id);
    res.status(200).json({ message: "Product successfully deleted" });
  } catch (error: any) {
    next(error);
  }
};

export default { index, show, insert, update, remove };
