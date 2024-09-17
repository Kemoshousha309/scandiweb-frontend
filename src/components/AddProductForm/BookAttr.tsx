import { FormChangeHandler } from "../../hooks/useAddProductForm";
import InputField from "./InputField";

interface Props {
  weight?: number;
  handleChange: FormChangeHandler;
}

const BookAttr = ({ handleChange, weight }: Props) => {
  return (
    <>
      <InputField
        id="weight"
        type="number"
        value={weight ?? ""}
        placeholder="Write the Product weight"
        label="Weight"
        handleChange={(value) =>
          handleChange({ field: "weight", value: +value })
        }
      />
      <p>Please provide the weight of the book in (KG)</p>
    </>
  );
};

export default BookAttr;
