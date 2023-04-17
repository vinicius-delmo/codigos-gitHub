import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";
import { Products, ProductFromDB } from "../types/index";

const knexInstance = knex(config);

const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: Products[] = await knexInstance("products")
      .select(
        "products.id",
        "products.title",
        "products.price",
        "products.description",
        "products.image",
        "categories.name as category ",
        "products.rate",
        "products.count"
      )
      .join("categories", "categories.id", "=", "products.category_id");

    const formatedProducts: ProductFromDB[] = products.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: {
        rate: product.rate,
        count: product.count,
      },
    }));

    res.send(formatedProducts);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const products: Products[] = await knexInstance("products")
      .select(
        "products.id",
        "products.title",
        "products.price",
        "products.description",
        "products.image",
        "categories.name as category ",
        "products.rate",
        "products.count"
      )
      .join("categories", "categories.id", "=", "products.category_id")
      .where({ "products.id": id });
    if (!products.length) throw new Error("Esse produto não existe");

    const formatedProducts: ProductFromDB[] = products.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: {
        rate: product.rate,
        count: product.count,
      },
    }));

    res.status(200).json(formatedProducts[0]);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      title,
      price,
      description,
      category,
      image,
      rating,
    }: ProductFromDB = req.body;
    const { rate, count } = rating;

    const findCategory = await knexInstance("categories")
      .select("id")
      .where({ name: category });

    const categoryId = findCategory[0].id;

    const id: number[] = await knexInstance("products").insert({
      title,
      price,
      category_id: categoryId,
      description,
      image,
      rate,
      count,
    });

    const product = {
      id: id[0],
      title,
      price,
      description,
      category,
      image,
      rating: {
        rate,
        count,
      },
    };
    res.status(201).send(product);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const { title, price, description, category, image, rating } = req.body;
    const { rate, count } = rating;
    const findCategory = await knexInstance("categories")
      .select("id")
      .where({ name: category });

    const categoryId = findCategory[0].id;
    const updatedProduct = {
      title,
      price,
      category_id: categoryId,
      description,
      image,
      rate: rating.rate,
      count: rating.count,
    };

    const product = await knexInstance("products")
      .update(updatedProduct)
      .where({ id });

    res.status(200).json({
      id,
      title,
      price,
      category,
      description,
      image,
      rating: {
        rate,
        count,
      },
    });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const product = await knexInstance("products").delete().where({ id });

    if (!product) throw new Error("Esse produto não existe");

    res.status(200).json({ msg: "Produto deletado" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { index, show, insert, update, remove };
