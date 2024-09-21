import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useListProducts } from "../../hooks/useListProducts";
import { useMassDelete } from "../../hooks/useMassDelete";
import styles from "./ProductList.module.scss";

const ProductList = () => {
  const { handleCheck, products, fetchProducts } = useListProducts();
  const { deleteHandler } = useMassDelete();

  // handlers
  const onDelete = async () => {
    try {
      if (products === undefined) return;
      await deleteHandler(products);
      fetchProducts();
    } catch (err) {
      console.log({ err });
    }
  };
  const navigate = useNavigate();
  if (products === undefined) return null;
  return (
    <main>
      <Header title="Product List">
        <button onClick={() => navigate("add-product")}>ADD</button>
        <button
          onClick={onDelete}
          disabled={!(products.filter((p) => p.checked).length > 0)}
        >
          MASS DELETE
        </button>
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
