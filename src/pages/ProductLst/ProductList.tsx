import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductList.module.scss";
import { useListProducts } from "../../hooks/useListProducts";

const ProductList = () => {
  const { handleCheck, products } = useListProducts();
  return (
    <main>
      <Header title="Product List">
        <button>ADD</button>
        <button>MASS DELETE</button>
      </Header>
      <div className={styles.productList}>
        {products.map((p) => (
          <ProductCard
            product={p}
            key={p.id}
            checked={p.checked}
            checkHandler={handleCheck}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductList;
