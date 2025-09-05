
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: 'Clothes' | 'Shoes' | 'Accessories';
  images: string[];
  sizes: string[];
  colors: string[];
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}
