import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductList.module.scss";
import { useListProducts } from "../../hooks/useListProducts";
import { useMassDelete } from "../../hooks/useMassDelete";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { handleCheck, products,  fetchProducts} = useListProducts();
  const {deleteHandler} = useMassDelete();

  // handlers 
  const onDelete = async () => {
    try {
      await deleteHandler(products);
      fetchProducts();
    }catch (err) {
      console.log({err})
    }
  }
  return (
    <main>
      <Header title="Product List">
        <Link to="add-product">ADD</Link>
        <button onClick={onDelete}>MASS DELETE</button>
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
