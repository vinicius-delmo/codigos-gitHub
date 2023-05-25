import { describe, expect, jest } from "@jest/globals";

import categoryService from '../src/service/categories'
import categoryRepository from '../src/repositories/categories'
import productRepository from '../src/repositories/products'
import { Category } from "../src/types/index";

describe('test categories', () => {
    afterEach(() => {
        jest.restoreAllMocks();
      });
    it('should return an array of category names', async () => {
      const mockCategories = [
        { id: 1, name: 'category1' },
        { id: 2, name: 'category2' },
      ];
      jest.spyOn(categoryRepository, 'selectAllCategoriesNames').mockResolvedValueOnce(mockCategories);
  
      const result = await categoryService.getCategoriesNames();
  
      expect(result).toEqual(['category1', 'category2']);
    });

   
    it("should return category by id", async () => {
        const categoryMock: Category = {
          id: 1,
          name: "TestCategory",
        };
  
        jest
          .spyOn(categoryRepository, "selectCategoryById")
          .mockResolvedValueOnce([categoryMock]);
  
        const result = await categoryService.getCategoryById(1);
        expect(result).toEqual(categoryMock);
      });
      afterEach(() => {
        jest.resetAllMocks();
      });
    
      it("should create a category successfully", async () => {
        jest.spyOn(categoryRepository, "selectCategoryByName").mockResolvedValueOnce([]);
        jest.spyOn(categoryRepository, "insertCategory").mockResolvedValueOnce([1]);
      
        const result = await categoryService.createCategory("New Category");
        expect(result).toEqual({ id: 1, name: "New Category" });
      });
      afterEach(() => {
        jest.restoreAllMocks();
      });
    
      it("should update a category", async () => {
        const id = 1;
        const name = "Updated Category";
        jest.spyOn(categoryRepository, "selectCategoryByName").mockResolvedValueOnce([]);
        jest.spyOn(categoryRepository, "updateCategory").mockResolvedValueOnce(1);
    
        await expect(categoryService.putCategory(name, id)).resolves.toEqual({ id, name });
      });
      it('should remove a category when it exists', async () => {
        const categoryId = 1;
        jest.spyOn(categoryRepository, 'deleteCategory').mockResolvedValueOnce(1);
    
        const result = await categoryService.removeCategory(categoryId);
    
        expect(categoryRepository.deleteCategory).toHaveBeenCalledWith(categoryId);
        expect(result).toEqual({ message: 'Categoria Deletada' });
      });
      afterEach(() => {
        jest.restoreAllMocks();
      });
    
      it("should return formatted products for a valid category", async () => {
        jest.spyOn(productRepository, "selectProductCategoryId").mockResolvedValueOnce([{ id: 1 }]);
        jest.spyOn(categoryRepository, "selectProductsByCategory").mockResolvedValueOnce([{ 
          id: 1,
          title: "Product 1",
          price: 10.0,
          description: "A product",
          category: "Category",
          image: "image.png",
          rate: 4.5,
          count: 10
        }]);
    
        const expected = [{
          id: 1,
          title: "Product 1",
          price: 10.0,
          description: "A product",
          category: "Category",
          image: "image.png",
          rating: {
            rate: 4.5,
            count: 10,
          },
        }];
    
        const result = await categoryService.getProductsByCategory("Category");
        expect(result).toEqual(expected);
      });
    
      it("should throw an error for a non-existing category", async () => {
        jest.spyOn(productRepository, "selectProductCategoryId").mockResolvedValueOnce([]);
        
        await expect(categoryService.getProductsByCategory("Category")).rejects.toThrow("Categoria não existe");
      });
  });
