export interface Product {
  id: number;
  name: string;
  picture: string;
  price: number;
  stock: number;
  qty: number;
}
export interface ProductState {
  products: Product[];
  error: boolean;
  errorMessage: string;
}
