import { Product, ProductFromDB } from "../types/index";
import knex from "knex";
import { Knex } from "knex";
import config from "../../knexfile";

const knexInstance: Knex = knex(config);

const selectAllProducts = () =>
  knexInstance("products")
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

const selectProductById = (id: number) =>
  knexInstance("products")
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

const selectProductCategoryId = async (category: any) =>
  await knexInstance("categories").select("id").where({ name: category });

const insertProduct = (product: Product) =>
  knexInstance("products").insert(product);

const updateProduct = (product: Product) =>
  knexInstance("products").update(product).where({ id: product.id });

const deleteProduct = (id: number) =>
  knexInstance("products").delete().where({ id });

export default {
  selectAllProducts,
  selectProductById,
  selectProductCategoryId,
  insertProduct,
  updateProduct,
  deleteProduct,
};
