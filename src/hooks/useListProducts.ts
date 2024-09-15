import { useEffect, useState } from "react";
import { Product } from "../types";
import { getProducts } from "../api";

type CheckableProducts = Product & { checked: boolean };

export function useListProducts() {
  const [products, setProducts] = useState<CheckableProducts[]>([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        const checkableProducts = res.response.products.map((p) => {
          return { ...p, checked: false };
        });
        setProducts(checkableProducts);
      })
      .catch((err) => console.log({ err }));
  }, []);

  // handlers
  const handleCheck = (id: string) => {
    const updatedProducts = products.map((p) => {
      if (p.id === id) {
        p.checked = !p.checked;
      }
      return p;
    });
    setProducts(updatedProducts);
  };
  return { products, handleCheck };
}
