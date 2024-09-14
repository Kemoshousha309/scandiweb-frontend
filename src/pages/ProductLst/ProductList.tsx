import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { getProducts } from "../../api";
import { Product } from "../../types";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.response.products);
      })
      .catch((err) => console.log({ err }));
  }, []);
  return (
    <main>
      <Header title="Product List">
        <button>ADD</button>
        <button>MASS DELETE</button>
      </Header>
      <div className={styles.productList}>
        {products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </main>
  );
};

export default ProductList;
