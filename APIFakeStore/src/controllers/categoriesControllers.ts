import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";
import { Category, Name } from "../types/index";

const knexInstance = knex(config);

const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories: Category[] = await knexInstance("categories").select(
      "name"
    );
    const categoryNames: string[] = categories.map((category) => category.name);
    res.status(200).json(categoryNames);
  } catch (error) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const product = await knexInstance("categories").select("*").where({ id });
    if (!product.length) throw new Error("Essa categoria não existe");

    res.status(200).json(product);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name }: Name = req.body;

    const id: number[] = await knexInstance("categories").insert({
      name,
    });

    res.status(201).json({ id: id[0], name });
  } catch (error: any) {
    res.send(error);
  }
};

const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const { name }: Name = req.body;
    const updatedData: Category = { name };

    const product = await knexInstance("categories")
      .update(updatedData)
      .where({ id });

    res.status(201).json({ id: id[0], name });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};
const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const category = await knexInstance("categories").delete().where({ id });

    if (!category) throw new Error("Essa categoria não existe");

    res.status(200).json({ msg: "Categoria deletada" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const showProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const category: string = req.params.category;
    const findCategory: Category[] = await knexInstance("categories")
      .select("id")
      .where({ name: category });
    if (!findCategory[0]) {
      throw new Error(`Categoria não existe!`);
    }
    const productsFromCategory = await knexInstance("products")
      .select(
        "products.id",
        "products.title",
        "products.price",
        "products.description",
        "categories.name as category",
        "products.image",
        "products.rate",
        "products.count"
      )

      .join("categories", "categories.id", "=", "products.category_id")
      .where({ "products.category_id": findCategory[0].id });

    const formatedProducts = productsFromCategory.map((product) => ({
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

    res.status(200).send(formatedProducts);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { index, show, insert, update, remove, showProducts };
