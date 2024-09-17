import { ApiResponse, ProductFormFields, ProductsResponse } from "./types";

const baseUrl = "http://scandiwebapi.mooo.com/api";

export async function getProducts() {
  const res = await fetch(baseUrl + "/products");
  return (await res.json()) as ApiResponse<ProductsResponse>;
}

export async function deleteProducts(ids: string[]) {
  const res = await fetch(baseUrl + "/products", {
    method: "DELETE",
    body: JSON.stringify(ids),
  });
  return (await res.json()) as ApiResponse<ProductsResponse>;
}

export async function addProduct(product: ProductFormFields) {
  const body = {
    dimensions: [product.height, product.width, product.length],
    ...product,
  };
  console.log({body})
  const response = await fetch(baseUrl + "/products", {
    method: "POST",
    body: JSON.stringify(body),
  });

  return response;
}
