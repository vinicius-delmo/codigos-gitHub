import productRepository from "../repositories/products";
import { ProductFromDB, Category, Product } from "../types/index";

const getAllProducts = async () => {
    const products = await productRepository.selectAllProducts();
    const formatedProducts = products.map((product) => ({
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
    return formatedProducts;
  } 

const getProductById = async (id: number) => {
    const product = await productRepository.selectProductById(id);
    const formatedProducts = product.map((product) => ({
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
    if (!product.length) throw new Error("Produto não encontrado");
    return formatedProducts[0];
  } 

const postProduct = async (product: ProductFromDB) => {

    const { category, rating, ...data } = product;

    const categoryId = await productRepository.selectProductCategoryId(category);
    if (!categoryId[0].id) throw new Error("Categoria não encontrada");
    const formatedProduct = {
      ...data,
      category_id: categoryId[0].id,
      rate: rating.rate,
      count: rating.count,
    };
    return productRepository.insertProduct(formatedProduct);
  } 
  
  const updateProduct = async (product: any) => {
    const { category, rating, id, ...data } = product;
  
    const selectedCategory = await productRepository.selectProductCategoryId(
      category
    );
    const categoryId: number | undefined = selectedCategory[0].id;
  
    if (!categoryId) {
      throw new Error("Categoria não encontrada");
    }
  
    const productToInsert = {
      id,
      category_id: categoryId,
      ...data,
      ...rating,
    };
    const insertedProductId = await productRepository.updateProduct(
      productToInsert
    );
  
    if (!insertedProductId) throw new Error("Produto não encontrado");
    return product;
  };

const deleteProduct = async (id: number) => {
  const product = await productRepository.deleteProduct(id);
  if (!product) throw new Error("Produto não encontrado");
};
export default {
  getAllProducts,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
};
