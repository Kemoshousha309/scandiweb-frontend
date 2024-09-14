import { Product, ProductTypes } from "../../types";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className={styles.productCard}>
      <input type="checkbox" />
      <span>{product.sku}</span>
      <span>{product.name}</span>
      <span>{product.price} $</span>
      {product.type == ProductTypes.Book && (
        <span>Weight {product.weight} KG</span>
      )}
      {product.type == ProductTypes.DVD && <span>Size {product.size} MB</span>}
      {product.type == ProductTypes.Furniture && (
        <span>
          Dimensions
          {product.height}x{product.width}x{product.length}
        </span>
      )}
    </div>
  );
};

export default ProductCard;
