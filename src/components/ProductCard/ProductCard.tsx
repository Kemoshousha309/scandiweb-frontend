import { Product, ProductTypes } from "../../types";
import styles from "./ProductCard.module.scss";

interface Props {
  product: Product;
  checked: boolean;
  checkHandler: (id: string) => void;
}

const ProductCard = ({ product, checked, checkHandler }: Props) => {
  return (
    <div className={styles.productCard}>
      <input
        className="delete-checkbox"
        type="checkbox"
        value={checked +""}
        onClick={() => checkHandler(product.id)}
      />
      <span>{product.sku}</span>
      <span>{product.name}</span>
      <span>{product.price} $</span>
      {product.type == ProductTypes.Book.toLowerCase() && (
        <span>Weight: {product.weight} KG</span>
      )}
      {product.type == ProductTypes.DVD.toLowerCase() && <span>Size: {product.size} MB</span>}
      {product.type == ProductTypes.Furniture.toLowerCase() && (
        <span>
          Dimensions: {product.height}x{product.width}x{product.length}
        </span>
      )}
    </div>
  );
};

export default ProductCard;
