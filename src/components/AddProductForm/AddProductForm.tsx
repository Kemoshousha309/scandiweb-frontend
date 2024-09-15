import { ProductTypes } from "../../types";
import styles from "./AddProductForm.module.scss";

const AddProductForm = () => {
  return (
    <form>
      <div className={styles.control}>
        <label htmlFor="sku">SKU: </label>
        <input type="text" id="sku" placeholder="Write the Product SKU" />
      </div>
      <div className={styles.control}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="sku" placeholder="Write the Product Name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="price">Price: </label>
        <input type="number" id="price" placeholder="Write the Product Price" />
      </div>
      <div className={styles.control}>
        <label htmlFor="productType">Type Switcher: </label>
        <select>
          <option value={""}>Type Switcher</option>
          {Object.values(ProductTypes).map((type) => {
            return (
              <option key={type} value={type}>
                {type}
              </option>
            );
          })}
        </select>
      </div>
      
    </form>
  );
};

export default AddProductForm;
