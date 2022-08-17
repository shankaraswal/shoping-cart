export interface ProductList {
  products: Products[];
  total: number;
  skip: number;
  limit: number;
}
export interface Products {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
