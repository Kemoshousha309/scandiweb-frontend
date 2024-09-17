import { FormChangeHandler } from "../../hooks/useAddProductForm";
import InputField from "./InputField";

interface Props {
  size?: number;
  handleChange: FormChangeHandler;
}

const DvdAttr = ({ handleChange, size }: Props) => {
  return (
    <>
      <InputField
        id="size"
        type="number"
        value={size ?? ""}
        placeholder="Write the Product size"
        label="Size"
        handleChange={(value) =>
          handleChange({ field: "size", value: +value })
        }
      />
      <p>Please provide the size of the DVD in (MB)</p>
    </>
  );
};

export default DvdAttr;
