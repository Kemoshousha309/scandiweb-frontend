import { useAddProductForm } from "../../hooks/useAddProductForm";
import { ProductTypes } from "../../types";
import BookAttr from "./BookAttr";
import DvdAttr from "./DvdAttr";
import FurnitureAttr from "./FurnitureAttr";
import InputField from "./InputField";
import SelectField from "./SelectField";
import styles from "./AddProductForm.module.scss";

const AddProductForm = () => {
  const {
    formFields: {
      name,
      price,
      SKU,
      height,
      length,
      type,
      size,
      weight,
      width,
    },
    handleFormChange,
    submitHandler,
    error
  } = useAddProductForm();

  // Render UI
  const renderedAttr = () => {
    switch (type) {
      case ProductTypes.Book:
        return <BookAttr handleChange={handleFormChange} weight={weight} />;
      case ProductTypes.DVD:
        return <DvdAttr handleChange={handleFormChange} size={size} />;
      case ProductTypes.Furniture:
        return (
          <FurnitureAttr
            handleChange={handleFormChange}
            height={height}
            length={length}
            width={width}
          />
        );
      default:
        return null;
    }
  };
  return (
    <form id="product_form" onSubmit={submitHandler}>
      <p className={styles.error}>{error}</p>
      <InputField
        id="sku"
        type="text"
        value={SKU ?? ""}
        placeholder="Write the Product SKU"
        label="SKU"
        handleChange={(value) =>
          handleFormChange({ field: "SKU", value: value })
        }
      />
      <InputField
        id="name"
        type="text"
        value={name ?? ""}
        placeholder="Write the Product NAME"
        label="NAME"
        handleChange={(value) =>
          handleFormChange({ field: "name", value: value })
        }
      />
      <InputField
        id="price"
        type="number"
        value={price ?? ""}
        placeholder="Write the Product Price"
        label="Price"
        handleChange={(value) =>
          handleFormChange({ field: "price", value: +value })
        }
      />
      <SelectField
        id="productType"
        value={type ?? ""}
        label="Type Switcher"
        handleChange={(value) =>
          handleFormChange({ field: "type", value: value })
        }
      >
        <option value={undefined}>Type Switcher</option>
        {Object.values(ProductTypes).map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </SelectField>
      {renderedAttr()}
    </form>
  );
};

export default AddProductForm;
