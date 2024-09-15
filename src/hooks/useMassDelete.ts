import { deleteProducts } from "../api";
import { CheckableProducts } from "../types";

export function useMassDelete() {
  const deleteHandler = async (products: CheckableProducts[]) => {
    const ids: string[] = [];
    products.forEach((p) => {
      if (p.checked) ids.push(p.id);
    });
    if(ids.length === 0) throw new Error("Empty ids list");
    const res = await deleteProducts(ids);
    return res;
  };

  return { deleteHandler };
}
