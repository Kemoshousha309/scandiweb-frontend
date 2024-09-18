export enum ProductTypes {
  Book = "Book",
  DVD = "DVD",
  Furniture = "Furniture",
}

interface BookProduct {
  type: ProductTypes.Book;  // "book"
  id: string;
  sku: string;
  name: string;
  price: number;
  weight: number;  // Book has a mandatory weight
  size?: never;    // DVD size must not exist
  height?: never;
  width?: never;
  length?: never;
}

interface DVDProduct {
  type: ProductTypes.DVD;   // "dvd"
  id: string;
  sku: string;
  name: string;
  price: number;
  size: number;    // DVD has a mandatory size
  weight?: never;  // Book weight must not exist
  height?: never;
  width?: never;
  length?: never;
}

interface FurnitureProduct {
  type: ProductTypes.Furniture;  // "furniture"
  id: string;
  sku: string;
  name: string;
  price: number;
  size?: never;     // Furniture doesn't have size
  weight?: never;   // Furniture doesn't have weight
  height: number;
  width: number;
  length: number;
}

export type Product = BookProduct | DVDProduct | FurnitureProduct;
export type CheckableProducts = Product & { checked: boolean };

export interface ProductsResponse {
  products: Product[];
}

export interface ApiResponse<T> {
  response: T;
}

// types
export interface ProductFormFields {
  SKU?: string;
  name?: string;
  price?: number;
  type?: ProductTypes;
  size?: number;
  weight?: number;
  height?: number;
  width?: number;
  length?: number;
}