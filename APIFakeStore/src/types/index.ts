type Category = {
  id?: number;
  name: string;
};

type Name = {
  name: string;
};

interface ProductsDefault {
  id?: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  category_id?: number;
}
interface Products extends ProductsDefault {
  rate: number;
  count: number;
}

type ProductFromDB = {
  id?: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  category_id?: number;
  rating: { rate: number; count: number };
};

export { Category, Name, Products, ProductFromDB };
