import { InputHTMLAttributes } from "react";
import styles from "./AddProductForm.module.scss";

interface Props {
  id: string;
  label: string;
  value: string | number;
  placeholder?: string;
  handleChange: (value: string) => void;
}

const InputField = ({
  handleChange,
  id,
  label,
  value,
  placeholder,
  ...rest
}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.control}>
      <label htmlFor={id}>{label}: </label>
      <input
        {...rest}
        id={id}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
