export interface Product {
  id: String;
  name: String;
  description: String;
  price: String;
  quality: String;
  ingredients: String;
}

export interface ProductsResponseApi {
  products: Product[];
}