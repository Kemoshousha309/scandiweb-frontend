import { FormEvent, useState } from "react";
import { ProductFormFields, ProductTypes } from "../types";
import { addProduct } from "../api";
import { useNavigate } from "react-router-dom";

export function useAddProductForm() {
  const [formFields, setFormFields] = useState<ProductFormFields>({});
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handlers
  const handleFormChange: FormChangeHandler = ({ field, value }) => {
    const updatedFields = { ...formFields, [field]: value };
    setFormFields(updatedFields);
    if(error) setError("");
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid(formFields)) {
      setError("Please, submit required data");
      return;
    }

    const response = await addProduct(formFields);
    if (!response.ok) {
      const errorData = await response.json();
      const err = errorData.response["Validation Error"];
      if(Array.isArray(err)) {
        setError(err[0]);
      }else { // it's an object
        for (const key in err) {
          setError(`${key}: ${err[key]}`);
        }
      }
    }

    navigate("/");
  };

  return { handleFormChange, formFields, submitHandler, error };
}

// utils
function isValid(fields: ProductFormFields) {
  const { height, length, name, price, type, size, SKU, weight, width } =
    fields;
  if (!SKU || !name || !price || !type) return false;
  switch (type) {
    case ProductTypes.Book:
      if (!weight || weight <= 0) return false;
      break;
    case ProductTypes.DVD:
      if (!size || size <= 0) return false;
      break;
    case ProductTypes.Furniture:
      if (!height || height <= 0) return false;
      if (!width || width <= 0) return false;
      if (!length || length <= 0) return false;
      break;
    default:
      break;
  }
  return true;
}

export type FormChangeHandler = ({
  field,
  value,
}: {
  field: keyof ProductFormFields;
  value: string | number;
}) => void;
