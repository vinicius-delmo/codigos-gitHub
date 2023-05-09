import { describe, expect, jest } from "@jest/globals";

import productService from '../src/service/products'
import productRepository from '../src/repositories/products'


describe('test products', () => {
    it('should return all products', async () => {
      const mockProducts = [
        {
          id: 1,
          title: 'Product 1',
          price: 10,
          description: 'Description 1',
          category: 'Category 1',
          image: 'Image 1',
          rate: 4.5,
          count: 10,
        },
        {
          id: 2,
          title: 'Product 2',
          price: 20,
          description: 'Description 2',
          category: 'Category 2',
          image: 'Image 2',
          rate: 3.5,
          count: 20,
        },
      ];
  
      jest.spyOn(productRepository, 'selectAllProducts').mockResolvedValueOnce(mockProducts);
  
      const result = await productService.getAllProducts();
  
      expect(result).toEqual(mockProducts.map((product) => ({
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
      })));
    });
    it('should return the product with the given id', async () => {
      const mockProduct = {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        category: 'Category 1',
        image: 'Image 1',
        rate: 4.5,
        count: 10,
      };
      jest.spyOn(productRepository, 'selectProductById').mockResolvedValueOnce([mockProduct]);
  
      const result = await productService.getProductById(1);
  
      expect(result).toEqual({
        id: mockProduct.id,
        title: mockProduct.title,
        price: mockProduct.price,
        description: mockProduct.description,
        category: mockProduct.category,
        image: mockProduct.image,
        rating: {
          rate: mockProduct.rate,
          count: mockProduct.count,
        },
      });
    });
  
    it('should throw an error if the product with the given id is not found', async () => {
      jest.spyOn(productRepository, 'selectProductById').mockResolvedValueOnce([]);
  
      await expect(productService.getProductById(1)).rejects.toThrow('Produto não encontrado');
    });
    it('should insert a new product', async () => {
      const mockProduct = {
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        category: 'Category 1',
        image: 'Image 1',
        rating: {
          rate: 4.5,
          count: 10,
        },
      };
  
      const mockCategoryId = [{ id: 1 }];

      jest.spyOn(productRepository, 'selectProductCategoryId').mockResolvedValueOnce(mockCategoryId);
  
      jest.spyOn(productRepository, 'insertProduct').mockResolvedValueOnce([1]);
  
      const result = await productService.postProduct(mockProduct);
  
      expect(productRepository.selectProductCategoryId).toHaveBeenCalledWith('Category 1');
      expect(productRepository.insertProduct).toHaveBeenCalledWith({
        category_id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        image: 'Image 1',
        rate: 4.5,
        count: 10,
      });
      expect(result).toEqual({
        id: 1,
        category: 'Category 1',
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        image: 'Image 1',
        rating: {
          rate: 4.5,
          count: 10,
        },
      });
    });
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it("should update a product", async () => {
      
      const updatedProduct: any = { id: 1, name: "Updated Product", price: 99.99 };
      jest.spyOn(productRepository, "updateProduct").mockResolvedValueOnce(updatedProduct);
  
      const productToUpdate = { id: 1, name: "Product", price: 49.99 };
      const result = await productService.updateProduct(productToUpdate);

      expect(result).toEqual(productToUpdate);
    });
    it('should delete a product from the database', async () => {
      try{const productId = 123;
        jest.spyOn(productRepository, 'deleteProductFromDB').mockResolvedValueOnce(123);
        const result = await productService.deleteProduct(productId);
        expect(result).toBeUndefined();
        expect(productRepository.deleteProductFromDB).toHaveBeenCalledWith(productId);
      }catch (error: any) {
        expect(error.message).toBe("Produto não encontrado");
      }
    });
    
  });







  