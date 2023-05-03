import categoriesRepository from "../repositories/categories";
import { Category } from "../types";

const getCategoriesNames = async () => {
  const categories: Category[] =
    await categoriesRepository.selectAllCategoriesNames();
  const categoriesArray = categories.map((category: Category) => category.name);
  return categoriesArray;
};

const getCategoryById = async (id: number) => {
  try {
    const category = await categoriesRepository.selectCategoryById(id);
    if (!category.length) {
      throw new Error("Categoria não encontrada");
    }
    return category[0];
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
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
    throw new Error("Categoria não existe");
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
  }
};

const putCategory = async (name: string, id: number) => {
  try {
    const searchCategoryByName = await categoriesRepository.selectCategoryByName(
      name
    );
    if (!searchCategoryByName.length) {
      const updatedCategory = await categoriesRepository.updateCategory(name, id);
      if (!updatedCategory) throw new Error("Could not update category");
      return { id, name };
    }
    throw new Error("Category name already exists");
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
  }
};

const removeCategory = async (id: number) => {
  try {
    const deletedCategory = await categoriesRepository.deleteCategory(id);
    if (!deletedCategory) throw new Error("Category does not exist");
    return { message: "Category deleted" };
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
  }
};

export default {
  getCategoriesNames,
  getCategoryById,
  createCategory,
  putCategory,
  removeCategory,
};