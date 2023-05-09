import categoriesRepository from "../repositories/categories";
import productRepository from "../repositories/products";
import { Category } from "../types";

const getCategoriesNames = async () => {
  const categories: Category[] =
    await categoriesRepository.selectAllCategoriesNames();
  const categoriesNames = categories.map((category: Category) => category.name);
  return categoriesNames;
};

const getCategoryById = async (id: number) => {
  try {
    const category = await categoriesRepository.selectCategoryById(id);
    if (!category.length) {
      throw new Error("Category not found");
    }
    return category[0];
  } catch (error: any) {
    return { erro: error.message || error };
  }
};

const createCategory = async (name: string) => {
  try {
    const searchCategoryByName = await categoriesRepository.selectCategoryByName(
      name
    );
    if (!searchCategoryByName.length) {
      const createdCategoryId = await categoriesRepository.insertCategory(name);
      return { id: createdCategoryId[0], name };
    }
    throw new Error("Category already exists");
  } catch (error: any) {
    return { erro: error.message || error };
  }
};

const putCategory = async (name: string, id: number) => {
  try {
    const searchCategoryByName = await categoriesRepository.selectCategoryByName(
      name
    );
    if (!searchCategoryByName.length) {
      const updatedCategory = await categoriesRepository.updateCategory(name, id);
      if (!updatedCategory) throw new Error("Category not found");
      return { id, name };
    }
    throw new Error("Category already exists");
  } catch (error: any) {
    return { erro: error.message || error };
  }
};

const removeCategory = async (id: number) => {
  try {
    const deletedCategory = await categoriesRepository.deleteCategory(id);
    if (!deletedCategory) throw new Error("Category does not exist");
    return { message: "Category deleted" };
  } catch (error: any) {
    return { erro: error.message || error };
  }
};

const getProductsByCategory = async (categoryName: string) => {
  const id = await productRepository.selectProductCategoryId(categoryName);

  if (id.length === 0) {
    throw new Error("Category does not exist");
  }

  const products = await categoriesRepository.selectProductsByCategory(
    id[0].id
  );

  const formattedProducts = products.map((product) => {
    return {
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
    };
  });

  return formattedProducts;
};


export default {
  getCategoriesNames,
  getCategoryById,
  createCategory,
  putCategory,
  removeCategory,
  getProductsByCategory,
};