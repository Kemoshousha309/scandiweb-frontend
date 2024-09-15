import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { CheckableProducts } from "../types";

export function useListProducts() {
  const [products, setProducts] = useState<CheckableProducts[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // handlers
  const fetchProducts = () => {
    getProducts()
      .then((res) => {
        const checkableProducts = res.response.products.map((p) => {
          return { ...p, checked: false };
        });
        setProducts(checkableProducts);
      })
      .catch((err) => console.log({ err }));
  };
  const handleCheck = (id: string) => {
    const updatedProducts = products.map((p) => {
      if (p.id === id) {
        p.checked = !p.checked;
      }
      return p;
    });
    setProducts(updatedProducts);
  };
  return { products, handleCheck, fetchProducts };
}
