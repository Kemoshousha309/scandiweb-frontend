import { PropsWithChildren, SelectHTMLAttributes } from "react";
import styles from "./AddProductForm.module.scss";
interface Props {
  id: string;
  label: string;
  value: string | number;
  handleChange: (value: string) => void;
}
const SelectField = ({
  id,
  label,
  handleChange,
  value,
  children,
  ...rest
}: Props & PropsWithChildren & SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <div className={styles.control}>
      <label htmlFor={id}>{label}: </label>
      <select
        id={id}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
};

export default SelectField;
