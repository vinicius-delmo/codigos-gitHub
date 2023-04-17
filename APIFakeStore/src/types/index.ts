export type Category = {
    id?: number;
    name: string;
  };

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category_id: number;
    image: string;
    rating: string;
  };