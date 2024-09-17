import { FormChangeHandler } from "../../hooks/useAddProductForm";
import InputField from "./InputField";

interface Props {
  height?: number;
  width?: number;
  length?: number;
  handleChange: FormChangeHandler;
}
const FurnitureAttr = ({ handleChange, height, length, width }: Props) => {
  return (
    <>
      <InputField
        id="height"
        type="number"
        value={height ?? ""}
        placeholder="Write the Product height"
        label="Height"
        handleChange={(value) =>
          handleChange({ field: "height", value: +value })
        }
      />
      <InputField
        id="width"
        type="number"
        value={width ?? ""}
        placeholder="Write the Product width"
        label="Width"
        handleChange={(value) =>
          handleChange({ field: "width", value: +value })
        }
      />
      <InputField
        id="length"
        type="number"
        value={length ?? ""}
        placeholder="Write the Product length"
        label="Length"
        handleChange={(value) =>
          handleChange({ field: "length", value: +value })
        }
      />
      <p>Please provide the dimensions in (HxWxL) format</p>
    </>
  );
};

export default FurnitureAttr;
