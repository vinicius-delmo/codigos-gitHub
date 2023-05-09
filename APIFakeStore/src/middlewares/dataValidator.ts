import { NextFunction, Request, Response } from "express";
import { object, string, number } from "yup";

const productDataValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productData = req.body;
    const productSchema = object({
      title: string().required("Title is required"),
      price: number().required("Price is required"),
      description: string().required("Description is required"),
      category: string().required("Category is required"),
      image: string().required("Image is required"),
      rating: object({
        rate: number().required("Rate is required"),
        count: number().required("Count is required"),
      }).required("Rating is required"),
    });
    await productSchema.validate(productData);
    next();
  } catch (error) {
    next(error);
  }
};

const productDataUpdateValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productData = req.body;
    const productSchema = object({
      title: string().typeError("Title must be a text"),
      price: number().typeError("Price must be a number"),
      description: string().typeError("Description must be a text"),
      category: string().typeError("Category must be a text"),
      image: string().typeError("Image must be text"),
      rating: object({
        rate: number().typeError("Rate must be a number"),
        count: number().typeError("Count must be a number"),
      }).typeError("Rating needs to be an object"),
    });
    await productSchema.validate(productData, { strict: true });
    next();
  } catch (error) {
    next(error);
  }
};

export const idDataValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const paramsData = { id: parseInt(req.params.id) };

    const paramsSchema = object({
      id: number()
        .typeError("Id must be a number")
        .required("Id is required"),
    });

    await paramsSchema.validate(paramsData);

    next();
  } catch (error) {
    next(error);
  }
};

const categoryDataValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryData = req.body;
    const categorySchema = object({
      name: string().required("Category name is required"),
    });
    await categorySchema.validate(categoryData);
    next();
  } catch (error) {
    next(error);
  }
};

export default {
  productDataValidator,
  idDataValidator,
  categoryDataValidator,
  productDataUpdateValidator,
};
