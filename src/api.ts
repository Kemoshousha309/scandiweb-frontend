import { ApiResponse, ProductsResponse } from "./types";

const baseUrl = "http://scandiwebapi.mooo.com/api"

export async function getProducts() {
    const res = await fetch(baseUrl + "/products")
    return await res.json() as ApiResponse<ProductsResponse>;
}


export async function deleteProducts(ids: string[]) {
    const res = await fetch(baseUrl + "/products", {
        method: "DELETE",
        body: JSON.stringify(ids)
    })
    return await res.json() as ApiResponse<ProductsResponse>;
}

